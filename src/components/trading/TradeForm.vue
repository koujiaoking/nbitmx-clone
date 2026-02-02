<template>
  <div class="trade-form bg-[#12141E] h-full flex flex-col">
    <!-- Header/Tabs -->
    <div class="flex items-center px-4 py-3 border-b border-white/5 gap-4">
       <div class="flex bg-black/20 rounded p-1">
          <button 
            v-for="type in types" 
            :key="type.id"
            @click="activeType = type.id"
            class="px-4 py-1.5 text-sm rounded transition-all"
            :class="activeType === type.id ? 'bg-[#2B3139] text-white font-medium' : 'text-gray-500 hover:text-gray-300'"
          >
            {{ type.label }}
          </button>
       </div>
    </div>

    <!-- Forms -->
    <div class="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
       <!-- Buy Form -->
       <div class="flex flex-col gap-4">
          <div class="flex justify-between text-xs text-gray-500">
             <span>Available</span>
             <span class="text-white font-medium">10,432.50 USDT</span>
          </div>

          <!-- Price Input -->
          <div class="bg-[#1E2026] rounded px-3 py-2 flex items-center justify-between border border-transparent focus-within:border-nbit-cyan transition-all">
             <span class="text-gray-500 text-sm">Price</span>
             <input 
               type="text" 
               :value="activeType === 'market' ? 'Market Price' : buyPrice"
               @input="e => buyPrice = (e.target as HTMLInputElement).value"
               :disabled="activeType === 'market'"
               class="bg-transparent text-right text-white text-sm outline-none w-full pl-4" 
             />
             <span class="text-gray-500 text-xs ml-2" v-if="activeType !== 'market'">USDT</span>
          </div>

          <!-- Quantity Input -->
          <div class="bg-[#1E2026] rounded px-3 py-2 flex items-center justify-between border border-transparent focus-within:border-nbit-cyan transition-all">
             <span class="text-gray-500 text-sm">Amount</span>
             <input 
               type="text" 
               v-model="buyAmount"
               :disabled="activeType === 'market'"
               :placeholder="activeType === 'market' ? 'Amount suppressed' : '0.00'"
               class="bg-transparent text-right text-white text-sm outline-none w-full pl-4" 
             />
             <span class="text-gray-500 text-xs ml-2">BTC</span>
          </div>

          <!-- Slider/Percentages -->
          <div class="flex gap-2">
             <button v-for="p in percentages" :key="p" class="flex-1 bg-[#1E2026] hover:bg-[#2B3139] text-xs text-gray-400 py-1 rounded transition-all">
                {{ p }}%
             </button>
          </div>

           <!-- Total (Read only or input) -->
           <div class="bg-[#1E2026] rounded px-3 py-2 flex items-center justify-between" v-if="activeType !== 'market'">
             <span class="text-gray-500 text-sm">Total</span>
             <input type="text" disabled placeholder="0.00" class="bg-transparent text-right text-white text-sm outline-none w-full pl-4" />
             <span class="text-gray-500 text-xs ml-2">USDT</span>
           </div>

           <!-- Action Button -->
           <button class="w-full bg-[#0ECB81] hover:bg-[#0ECB81]/90 text-white font-bold py-3 rounded text-[15px] transition-all mt-2">
              Buy BTC
           </button>
       </div>

       <!-- Sell Form -->
       <div class="flex flex-col gap-4">
          <div class="flex justify-between text-xs text-gray-500">
             <span>Available</span>
             <span class="text-white font-medium">0.4523 BTC</span>
          </div>

          <!-- Price Input -->
          <div class="bg-[#1E2026] rounded px-3 py-2 flex items-center justify-between border border-transparent focus-within:border-nbit-cyan transition-all">
             <span class="text-gray-500 text-sm">Price</span>
             <input 
               type="text" 
               :value="activeType === 'market' ? 'Market Price' : sellPrice"
               @input="e => sellPrice = (e.target as HTMLInputElement).value"
               :disabled="activeType === 'market'"
               class="bg-transparent text-right text-white text-sm outline-none w-full pl-4" 
             />
             <span class="text-gray-500 text-xs ml-2" v-if="activeType !== 'market'">USDT</span>
          </div>

          <!-- Quantity Input -->
          <div class="bg-[#1E2026] rounded px-3 py-2 flex items-center justify-between border border-transparent focus-within:border-nbit-cyan transition-all">
             <span class="text-gray-500 text-sm">Amount</span>
             <input 
               type="text" 
               v-model="sellAmount"
               :disabled="activeType === 'market'"
               :placeholder="activeType === 'market' ? 'Amount suppressed' : '0.00'"
               class="bg-transparent text-right text-white text-sm outline-none w-full pl-4" 
             />
             <span class="text-gray-500 text-xs ml-2">BTC</span>
          </div>

          <!-- Slider/Percentages -->
          <div class="flex gap-2">
             <button v-for="p in percentages" :key="p" class="flex-1 bg-[#1E2026] hover:bg-[#2B3139] text-xs text-gray-400 py-1 rounded transition-all">
                {{ p }}%
             </button>
          </div>

           <!-- Total -->
           <div class="bg-[#1E2026] rounded px-3 py-2 flex items-center justify-between" v-if="activeType !== 'market'">
             <span class="text-gray-500 text-sm">Total</span>
             <input type="text" disabled placeholder="0.00" class="bg-transparent text-right text-white text-sm outline-none w-full pl-4" />
             <span class="text-gray-500 text-xs ml-2">USDT</span>
           </div>

           <!-- Action Button -->
           <button class="w-full bg-[#F6465D] hover:bg-[#F6465D]/90 text-white font-bold py-3 rounded text-[15px] transition-all mt-2">
              Sell BTC
           </button>
       </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  symbol?: string
}>()

const activeType = ref('limit')
const types = [
    { id: 'limit', label: 'Limit' },
    { id: 'market', label: 'Market' }
]

const percentages = [25, 50, 75, 100]

const buyPrice = ref('77864.13')
const buyAmount = ref('')
const sellPrice = ref('77864.13')
const sellAmount = ref('')

const updatePrices = () => {
    const basePrice = props.symbol?.includes('BTC') ? '77864.13' : props.symbol?.includes('ETH') ? '3450.45' : '105.20'
    buyPrice.value = basePrice
    sellPrice.value = basePrice
    buyAmount.value = ''
    sellAmount.value = ''
}

watch(() => props.symbol, () => {
    updatePrices()
})

// Initial set
updatePrices()

</script>
