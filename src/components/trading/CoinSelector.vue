<template>
  <div class="coin-selector bg-[#12141E] h-full overflow-hidden flex flex-col">
    <!-- Search -->
    <div class="p-3 border-b border-white/5">
      <div class="relative">
        <div class="absolute left-3 top-1/2 -translate-y-1/2 i-carbon-search text-gray-500 text-sm"></div>
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Search Coin..."
          class="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:border-nbit-cyan outline-none transition-all text-white placeholder-gray-600"
        />
      </div>
    </div>

    <!-- Main Tabs -->
    <div class="flex border-b border-white/5 bg-[#0e1017]">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        @click="switchTab(tab.id)"
        class="flex-1 py-3 text-xs font-medium transition-all relative"
        :class="activeTab === tab.id 
          ? 'text-nbit-cyan' 
          : 'text-gray-400 hover:text-white'"
      >
        {{ tab.label }}
        <div v-if="activeTab === tab.id" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-nbit-cyan"></div>
      </button>
    </div>

    <!-- Sub Tabs -->
    <div v-if="currentSubTabs.length > 0" class="flex border-b border-white/5 px-2 gap-4 bg-[#12141E]">
        <button 
           v-for="sub in currentSubTabs" 
           :key="sub.id"
           @click="activeSubTab = sub.id"
           class="py-2 text-xs font-medium transition-all"
           :class="activeSubTab === sub.id ? 'text-white font-bold' : 'text-gray-500 hover:text-gray-300'"
        >
           {{ sub.label }}
        </button>
    </div>

    <!-- Header -->
    <div class="flex items-center justify-between px-3 py-2 text-xs text-gray-500 border-b border-white/5">
       <div>Coin</div>
       <div class="flex gap-4">
          <span>Price</span>
          <span>Change</span>
       </div>
    </div>

    <!-- Coin List -->
    <div class="flex-1 overflow-y-auto custom-scrollbar">
      <button 
        v-for="coin in filteredCoins" 
        :key="coin.symbol"
        @click="handleSelect(coin)"
        class="w-full px-3 py-2.5 hover:bg-[#1A1C25] transition-all flex items-center justify-between text-left group"
        :class="selectedSymbol === coin.symbol ? 'bg-white/5' : ''"
      >
        <div class="flex items-center gap-2">
           <div class="relative">
              <span class="iconfont text-gray-500 group-hover:text-nbit-cyan text-xs" v-if="activeTab === 'favorites'">&#xe600;</span>
              <span class="iconfont text-gray-500 group-hover:text-nbit-cyan text-xs cursor-pointer" v-else>&#xe60c;</span>
           </div>
           <div>
             <div class="text-sm font-bold text-white flex items-center gap-1">
                {{ coin.base }} <span class="text-xs text-gray-500 font-normal">/ {{ coin.quote }}</span>
             </div>
           </div>
        </div>
        <div class="text-right">
          <div class="text-sm font-medium text-white mb-0.5">{{ coin.price }}</div>
          <div 
            class="text-xs font-medium"
            :class="parseFloat(coin.change) >= 0 ? 'text-[#0ECB81]' : 'text-[#F6465D]'"
          >
            {{ parseFloat(coin.change) >= 0 ? '+' : '' }}{{ coin.change }}%
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

interface Coin {
  symbol: string
  base: string
  quote: string
  price: string
  change: string
}

const props = defineProps<{
  selectedSymbol?: string
}>()

const emit = defineEmits<{
  select: [coin: Coin]
}>()

const router = useRouter()
const route = useRoute()
const searchQuery = ref('')
const activeSubTab = ref('contract')

const tabs = [
  { id: 'favorites', label: '自选' },
  { id: 'futures', label: '期权' }, 
  { id: 'spot', label: '现货' },
  { id: 'ucontract', label: '合约' } 
]

const subTabsMap: Record<string, { id: string, label: string }[]> = {
    futures: [
        { id: 'contract', label: '合约' },
        { id: 'metal', label: '重金属' }
    ],
    spot: [
        { id: 'main', label: '主区' },
        { id: 'innovation', label: '创新' },
        { id: 'layer2', label: 'Layer2' },
        { id: 'defi', label: 'DeFi' }
    ],
    ucontract: [
        { id: 'u_contract', label: 'U本位' },
        { id: 'coin_contract', label: '币本位' }
    ]
}

const routeMap: Record<string, string> = {
    futures: '/play/futures/trade',
    spot: '/play/spot/trade',
    ucontract: '/play/ucontract/index'
}

const activeTab = computed({
    get: () => {
        const path = route.path
        if (path.includes('/play/futures/trade')) return 'futures'
        if (path.includes('/play/ucontract/index')) return 'ucontract'
        if (path.includes('/play/spot/trade') || path.includes('/play/currency/trade')) return 'spot'
        if (route.query.tab === 'favorites') return 'favorites'
        return 'spot'
    },
    set: (val) => {}
})

const currentSubTabs = computed(() => {
    return subTabsMap[activeTab.value] || []
})

// Mock Data Generation
const generateCoins = (type: string): Coin[] => {
    const bases = ['BTC', 'ETH', 'SOL', 'XRP', 'DOGE', 'ADA', 'AVAX', 'DOT', 'LINK', 'LTC']
    return bases.map(base => ({
        symbol: `${base}/USDT`,
        base,
        quote: 'USDT',
        price: (Math.random() * 50000 + 10).toFixed(2),
        change: (Math.random() * 10 - 5).toFixed(2)
    }))
}

const coinsMap = {
    favorites: generateCoins('favorites'),
    futures: generateCoins('futures'),
    spot: generateCoins('spot'),
    ucontract: generateCoins('ucontract')
}

const filteredCoins = computed(() => {
  // Fix type indexing
  const tab = activeTab.value
  let list = (tab in coinsMap) ? coinsMap[tab as keyof typeof coinsMap] : coinsMap.spot
  
  if (tab === 'futures' && activeSubTab.value === 'metal') {
       list = [
          { symbol: 'XAU/USDT', base: 'XAU', quote: 'USDT', price: '2350.50', change: '0.45' },
          { symbol: 'XAG/USDT', base: 'XAG', quote: 'USDT', price: '30.20', change: '-1.20' }
      ]
  }

  if (searchQuery.value) {
    list = list.filter(c => c.symbol.toLowerCase().includes(searchQuery.value.toLowerCase()))
  }
  return list
})

const switchTab = (id: string) => {
    if (id === 'favorites') {
        router.push({ path: '/play/spot/trade', query: { tab: 'favorites' } })
        return
    }

    const path = routeMap[id]
    if (path) {
        const subs = subTabsMap[id]
        if (subs && subs.length > 0) {
            activeSubTab.value = subs[0]!.id
        } else {
            activeSubTab.value = ''
        }
        
        const currentSymbol = props.selectedSymbol ? props.selectedSymbol.split('/')[0]?.toLowerCase() : 'btc'
        router.push(`${path}/${currentSymbol}`)
    }
}

const handleSelect = (coin: Coin) => {
    emit('select', coin) 
    
    const symbolParam = coin.base.toLowerCase() 
    let basePath = ''
    
    switch (activeTab.value) {
        case 'futures': 
            basePath = '/play/futures/trade'
            break
        case 'ucontract':
            basePath = '/play/ucontract/index'
            break
        default: 
            basePath = '/play/spot/trade' 
    }
    
    router.push({
        path: `${basePath}/${symbolParam}`,
        query: { coinType: '2' }
    })
}
</script>

<style scoped lang="less">
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 2px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
</style>
