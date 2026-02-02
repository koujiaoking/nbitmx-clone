<template>
  <div class="order-book bg-[#12141E] h-full overflow-hidden flex flex-col">
    <!-- Top Tabs -->
    <div class="flex border-b border-white/5">
       <button 
         v-for="tab in tabs" 
         :key="tab.id" 
         @click="activeTab = tab.id"
         class="flex-1 py-3 text-sm font-bold transition-all relative"
         :class="activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'"
       >
         {{ tab.label }}
         <div v-if="activeTab === tab.id" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-sm"></div>
       </button>
    </div>

    <!-- Content Area -->
    <div class="flex-1 flex flex-col overflow-hidden relative">
        
        <!-- Order Book View -->
        <template v-if="activeTab === 'book'">
            <!-- Tools/Header -->
            <div class="flex items-center justify-between px-3 py-2">
                    <!-- Display Mode Toggles -->
                    <div class="flex gap-2">
                        <!-- All (Sell + Buy) -->
                        <button 
                            @click="displayMode = 'all'" 
                            class="p-[1px] border rounded transition-all group"
                            :class="displayMode === 'all' ? 'border-gray-500 bg-white/5' : 'border-gray-700 hover:border-gray-500'"
                        >
                             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <!-- Top Red Lines -->
                                <rect x="3" y="3" width="10" height="2" rx="1" :fill="displayMode === 'all' ? '#F6465D' : '#5E6673'" class="transition-colors"/>
                                <rect x="3" y="6" width="7" height="2" rx="1" :fill="displayMode === 'all' ? '#F6465D' : '#5E6673'" class="transition-colors"/>
                                <!-- Bottom Green Lines -->
                                <rect x="3" y="9" width="7" height="2" rx="1" :fill="displayMode === 'all' ? '#0ECB81' : '#5E6673'" class="transition-colors"/>
                                <rect x="3" y="12" width="10" height="2" rx="1" :fill="displayMode === 'all' ? '#0ECB81' : '#5E6673'" class="transition-colors"/>
                             </svg>
                        </button>

                        <!-- Buy Only -->
                        <button 
                            @click="displayMode = 'buy'" 
                            class="p-[1px] border rounded transition-all group"
                            :class="displayMode === 'buy' ? 'border-gray-500 bg-white/5' : 'border-gray-700 hover:border-gray-500'"
                        >
                             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="10" height="2" rx="1" :fill="displayMode === 'buy' ? '#0ECB81' : '#5E6673'" class="transition-colors"/>
                                <rect x="3" y="6" width="7" height="2" rx="1" :fill="displayMode === 'buy' ? '#0ECB81' : '#5E6673'" class="transition-colors"/>
                                <rect x="3" y="9" width="10" height="2" rx="1" :fill="displayMode === 'buy' ? '#0ECB81' : '#5E6673'" class="transition-colors"/>
                                <rect x="3" y="12" width="7" height="2" rx="1" :fill="displayMode === 'buy' ? '#0ECB81' : '#5E6673'" class="transition-colors"/>
                             </svg>
                        </button>

                         <!-- Sell Only -->
                        <button 
                            @click="displayMode = 'sell'" 
                            class="p-[1px] border rounded transition-all group"
                            :class="displayMode === 'sell' ? 'border-gray-500 bg-white/5' : 'border-gray-700 hover:border-gray-500'"
                        >
                             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="10" height="2" rx="1" :fill="displayMode === 'sell' ? '#F6465D' : '#5E6673'" class="transition-colors"/>
                                <rect x="3" y="6" width="7" height="2" rx="1" :fill="displayMode === 'sell' ? '#F6465D' : '#5E6673'" class="transition-colors"/>
                                <rect x="3" y="9" width="10" height="2" rx="1" :fill="displayMode === 'sell' ? '#F6465D' : '#5E6673'" class="transition-colors"/>
                                <rect x="3" y="12" width="7" height="2" rx="1" :fill="displayMode === 'sell' ? '#F6465D' : '#5E6673'" class="transition-colors"/>
                             </svg>
                        </button>
                    </div>
                <div class="text-xs text-gray-500">0.0001</div> <!-- Precision selector placeholder -->
            </div>

            <!-- Table Header -->
            <div class="grid grid-cols-2 px-3 py-1 text-xs text-gray-500 mb-1">
                <div>Price(USDT)</div>
                <div class="text-right">Amount(BTC)</div>
            </div>

            <!-- Sells -->
            <div class="flex-1 overflow-y-auto flex flex-col-reverse custom-scrollbar" v-if="['all', 'sell'].includes(displayMode)">
                <div 
                    v-for="(order, i) in sellOrders" 
                    :key="'sell-' + i"
                    class="relative group cursor-pointer hover:bg-[#1A1C25] flex items-center justify-between px-3 py-0.5 text-xs"
                >
                    <div class="text-[#F6465D] z-10 font-mono">{{ order.price }}</div>
                    <div class="text-gray-300 z-10 font-mono">{{ order.amount }}</div>
                    <div class="absolute right-0 top-0 bottom-0 bg-[#F6465D]/10 transition-all duration-300" :style="{ width: (order.total / maxTotal * 100) + '%' }"></div>
                </div>
            </div>

            <!-- Current Price -->
            <div class="px-3 py-2 border-y border-white/5 flex items-center gap-2">
                <span class="text-lg font-bold text-[#F6465D]">{{ currentPrice }}</span>
                <span class="text-xs text-gray-400">≈ ${{ currentPrice }}</span>
            </div>

            <!-- Buys -->
            <div class="flex-1 overflow-y-auto custom-scrollbar" v-if="['all', 'buy'].includes(displayMode)">
                <div 
                    v-for="(order, i) in buyOrders" 
                    :key="'buy-' + i"
                    class="relative group cursor-pointer hover:bg-[#1A1C25] flex items-center justify-between px-3 py-0.5 text-xs"
                >
                    <div class="text-[#0ECB81] z-10 font-mono">{{ order.price }}</div>
                    <div class="text-gray-300 z-10 font-mono">{{ order.amount }}</div>
                    <div class="absolute right-0 top-0 bottom-0 bg-[#0ECB81]/10 transition-all duration-300" :style="{ width: (order.total / maxTotal * 100) + '%' }"></div>
                </div>
            </div>
        </template>
        
        <!-- Latest Deals View -->
        <template v-else>
            <div class="grid grid-cols-3 px-3 py-2 text-xs text-gray-500">
                <div>Time</div>
                <div class="text-center">Price</div>
                <div class="text-right">Amount</div>
            </div>
            <div class="flex-1 overflow-y-auto custom-scrollbar">
                <div 
                    v-for="(deal, i) in latestDeals" 
                    :key="i"
                    class="grid grid-cols-3 px-3 py-1 text-xs hover:bg-white/5"
                >
                    <div class="text-gray-400 font-mono">{{ deal.time }}</div>
                    <div class="text-center font-mono" :class="deal.type === 'buy' ? 'text-[#0ECB81]' : 'text-[#F6465D]'">{{ deal.price }}</div>
                    <div class="text-right text-gray-300 font-mono">{{ deal.amount }}</div>
                </div>
            </div>
        </template>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  symbol?: string
}>()

interface Order {
  price: string
  amount: string
  total: number
}

const activeTab = ref('book')
const displayMode = ref('all') // all, buy, sell

const tabs = [
    { id: 'book', label: '委托订单' },
    { id: 'deals', label: '最新成交' }
]

// Mock Data
const currentPrice = ref('77864.13')
const maxTotal = ref(200000)

const generateOrders = (count: number, startPrice: number, isBuy: boolean): Order[] => {
    return Array.from({ length: count }).map((_, i) => ({
        price: (startPrice + (isBuy ? -i : i) * 0.5 + Math.random()).toFixed(2),
        amount: (Math.random() * 0.5).toFixed(4),
        total: Math.random() * 200000
    }))
}

const sellOrders = ref<Order[]>([])
const buyOrders = ref<Order[]>([])
const latestDeals = ref<any[]>([])

const refreshData = () => {
    // Generate base price based on symbol hash or random for demo
    const basePrice = props.symbol?.includes('BTC') ? 77800 : props.symbol?.includes('ETH') ? 3400 : 100
    currentPrice.value = (basePrice + Math.random() * 50).toFixed(2)
    
    sellOrders.value = generateOrders(15, basePrice + 1, false)
    buyOrders.value = generateOrders(15, basePrice - 1, true)
    
    latestDeals.value = Array.from({ length: 20 }).map(() => ({
        time: new Date().toTimeString().split(' ')[0], // HH:MM:SS
        price: (basePrice + Math.random() * 10 - 5).toFixed(2),
        amount: (Math.random() * 0.1).toFixed(5),
        type: Math.random() > 0.5 ? 'buy' : 'sell'
    }))
}

// Initial
refreshData()

// Watch for symbol change
watch(() => props.symbol, () => {
    refreshData()
})

</script>

<style scoped>
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
