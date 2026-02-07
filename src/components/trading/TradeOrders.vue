<template>
  <div class="trade-orders bg-[#12141E] h-full flex flex-col">
    <!-- Tabs -->
    <div class="flex border-b border-white/5 px-4">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        @click="activeTab = tab.id"
        class="py-3 mr-8 text-sm font-medium transition-all relative"
        :class="activeTab === tab.id ? 'text-nbit-cyan' : 'text-gray-500 hover:text-white'"
      >
        {{ tab.label }}
        <div v-if="activeTab === tab.id" class="absolute bottom-0 left-0 right-0 h-0.5 bg-nbit-cyan"></div>
      </button>
    </div>

    <!-- Table Header -->
    <div class="grid grid-cols-7 px-4 py-2 text-xs text-gray-500 mt-2">
       <div>Time</div>
       <div>Pair</div>
       <div>Type</div>
       <div>Price</div>
       <div>Amount</div>
       <div>Total</div>
       <div class="text-right">Action</div>
    </div>

    <!-- Table Body -->
    <div class="flex-1 overflow-y-auto custom-scrollbar px-4">
       <!-- Empty State (if needed, but using mock) -->
       <div v-if="orders.length === 0" class="flex flex-col items-center justify-center h-32 text-gray-500 text-xs">
          <div class="i-carbon-data-base text-2xl mb-2"></div>
          No Data
       </div>

       <!-- Rows -->
       <div 
         v-for="(order, i) in filteredOrders" 
         :key="i"
         class="grid grid-cols-7 py-3 text-xs border-b border-white/5 hover:bg-white/5 transition-all items-center"
       >
          <div class="text-gray-400">{{ order.time }}</div>
          <div class="text-white font-medium">{{ order.pair }}</div>
          <div :class="order.type === 'buy' ? 'text-[#0ECB81]' : 'text-[#F6465D]'">{{ order.type.toUpperCase() }}</div>
          <div class="text-white">{{ order.price }}</div>
          <div class="text-white">{{ order.amount }}</div>
          <div class="text-white">{{ order.total }}</div>
          <div class="text-right">
             <button v-if="activeTab === 'open'" class="text-nbit-cyan hover:underline">Cancel</button>
             <span v-else class="text-gray-500">-</span>
          </div>
       </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps<{
  symbol?: string
}>()

const activeTab = ref('open')

const tabs = [
    { id: 'open', label: 'Unfilled Orders' },
    { id: 'history', label: 'Filled Orders' },
    { id: 'cancelled', label: 'Cancelled Orders' }
]

const orders = ref<any[]>([])

const generateOrders = () => {
    const s = props.symbol || 'BTC/USDT'
    const basePrice = s.includes('BTC') ? 65000 : s.includes('ETH') ? 3500 : 100
    
    orders.value = [
        { time: '2023-10-27 10:30:00', pair: s, type: 'buy', price: (basePrice - 10).toFixed(2), amount: '0.1000', total: (basePrice/10).toFixed(2), status: 'open' },
        { time: '2023-10-27 10:25:00', pair: s.replace('USDT', 'USD'), type: 'sell', price: (basePrice + 20).toFixed(2), amount: '1.5000', total: (basePrice * 1.5).toFixed(2), status: 'open' },
        { time: '2023-10-26 14:20:00', pair: 'SOL/USDT', type: 'buy', price: '145.00', amount: '10.000', total: '1,450.00', status: 'history' },
        { time: '2023-10-25 09:10:00', pair: s, type: 'sell', price: basePrice.toFixed(2), amount: '0.0500', total: (basePrice * 0.05).toFixed(2), status: 'cancelled' }
    ]
}

watch(() => props.symbol, () => {
    generateOrders()
})

generateOrders()

const filteredOrders = computed(() => {
    return orders.value.filter(o => o.status === activeTab.value)
})

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
