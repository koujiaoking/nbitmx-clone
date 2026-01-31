<!-- 币种选择器组件 -->
<template>
  <div class="coin-selector bg-[#12141E] h-full overflow-hidden flex flex-col">
    <!-- 搜索框 -->
    <div class="p-3 border-b border-white/5">
      <div class="relative">
        <div class="absolute left-3 top-1/2 -translate-y-1/2 i-carbon-search text-gray-500 text-sm"></div>
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="搜索币种..."
          class="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:border-nbit-cyan outline-none transition-all"
        />
      </div>
    </div>

    <!-- 分类tab -->
    <div class="flex border-b border-white/5">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        @click="activeTab = tab.id"
        class="flex-1 py-3 text-xs font-medium transition-all border-b-2"
        :class="activeTab === tab.id 
          ? 'border-nbit-cyan text-nbit-cyan' 
          : 'border-transparent text-gray-400 hover:text-white'"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- 币种列表 -->
    <div class="flex-1 overflow-y-auto">
      <button 
        v-for="coin in filteredCoins" 
        :key="coin.symbol"
        @click="$emit('select', coin)"
        class="w-full px-3 py-2.5 hover:bg-white/5 transition-all flex items-center justify-between text-left"
        :class="selectedSymbol === coin.symbol ? 'bg-white/10' : ''"
      >
        <div class="flex items-center gap-2">
          <img :src="coin.icon" :alt="coin.symbol" class="w-5 h-5 rounded-full" />
          <div>
            <div class="text-sm font-bold text-white">{{ coin.symbol }}</div>
            <div class="text-xs text-gray-500">Vol {{ coin.volume }}</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-sm font-medium">{{ coin.price }}</div>
          <div 
            class="text-xs font-medium"
            :class="parseFloat(coin.change) > 0 ? 'text-nbit-green' : 'text-red-500'"
          >
            {{ parseFloat(coin.change) > 0 ? '+' : '' }}{{ coin.change }}%
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Coin {
  symbol: string
  icon: string
  price: string
  change: string
  volume: string
}

defineProps<{
  selectedSymbol?: string
}>()

defineEmits<{
  select: [coin: Coin]
}>()

const searchQuery = ref('')
const activeTab = ref('all')

const tabs = [
  { id: 'all', label: '全部' },
  { id: 'favorites', label: '自选' },
  { id: 'spot', label: '现货' },
  { id: 'futures', label: '合约' }
]

const coins: Coin[] = [
  { symbol: 'BTC/USDT', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', price: '64,245.10', change: '1.25', volume: '2.4B' },
  { symbol: 'ETH/USDT', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', price: '3,450.60', change: '-0.85', volume: '1.2B' },
  { symbol: 'BNB/USDT', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png', price: '580.20', change: '2.10', volume: '450M' },
  { symbol: 'SOL/USDT', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png', price: '145.75', change: '4.56', volume: '680M' },
  { symbol: 'XRP/USDT', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png', price: '0.6245', change: '-1.25', volume: '320M' },
  { symbol: 'ADA/USDT', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png', price: '0.4512', change: '0.12', volume: '180M' },
  { symbol: 'DOGE/USDT', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png', price: '0.1645', change: '8.45', volume: '540M' }
]

const filteredCoins = computed(() => {
  let result = coins
  
  if (searchQuery.value) {
    result = result.filter(coin => 
      coin.symbol.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }
  
  return result
})
</script>
