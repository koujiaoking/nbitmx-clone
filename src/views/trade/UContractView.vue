<template>
  <div class="ucontract-trade-page bg-black min-h-screen text-white text-sm">
    
    <main class="pt-[56px] h-screen flex flex-col overflow-hidden">
      <!-- 交易主界面 -->
      <div class="flex-1 flex overflow-hidden">
        
        <!-- Region 1: Left Coin List -->
        <aside class="w-[280px] border-r border-white/5 hidden lg:flex flex-col bg-[#12141E]">
          <CoinSelector :selected-symbol="selectedCoin.symbol" @select="handleSelectCoin" />
        </aside>

        <!-- Region 2: Middle Main Content -->
        <section class="flex-1 flex flex-col min-w-0 bg-[#0B0B0F] overflow-y-auto custom-scrollbar">
          
          <!-- Ticker Info -->
          <div class="bg-[#12141E] border-b border-white/5 px-4 py-3 shrink-0">
             <div class="flex items-center gap-6 flex-wrap">
              <div class="flex items-center gap-2 mr-4">
                  <img :src="selectedCoin.icon" :alt="selectedCoin.symbol" class="w-8 h-8 rounded-full" />
                  <div>
                    <div class="text-lg font-bold leading-none">{{ selectedCoin.symbol }}</div>
                    <span class="text-xs text-nbit-cyan bg-nbit-cyan/10 px-1 rounded">U-Contract</span>
                  </div>
              </div>
              <div class="flex gap-8 text-xs">
                  <div>
                    <div class="text-gray-500 mb-0.5">Price</div>
                    <div class="text-lg font-medium" :class="parseFloat(selectedCoin.change) >= 0 ? 'text-[#0ECB81]' : 'text-[#F6465D]'">{{ selectedCoin.price }}</div>
                  </div>
                  <div>
                    <div class="text-gray-500 mb-0.5">24h Change</div>
                    <div class="font-medium" :class="parseFloat(selectedCoin.change) >= 0 ? 'text-[#0ECB81]' : 'text-[#F6465D]'">{{ parseFloat(selectedCoin.change) >= 0 ? '+' : '' }}{{ selectedCoin.change }}%</div>
                  </div>
                  <div>
                    <div class="text-gray-500 mb-0.5">24h High</div>
                    <div class="text-white">{{ selectedCoin.high }}</div>
                  </div>
                  <div>
                    <div class="text-gray-500 mb-0.5">24h Low</div>
                    <div class="text-white">{{ selectedCoin.low }}</div>
                  </div>
                  <div>
                    <div class="text-gray-500 mb-0.5">24h Vol(BTC)</div>
                    <div class="text-white">{{ selectedCoin.volume }}</div>
                  </div>
              </div>
             </div>
          </div>

          <!-- Chart Area -->
          <div class="h-[450px] shrink-0 border-b border-white/5">
            <TradingChart :symbol="selectedCoin.symbol" />
          </div>

          <!-- Trade Form Area -->
          <div class="shrink-0 border-b border-white/5">
             <TradeForm :symbol="selectedCoin.symbol" />
          </div>

          <!-- Orders Table Area -->
          <div class="flex-1 min-h-[300px]">
             <TradeOrders :symbol="selectedCoin.symbol" />
          </div>

        </section>

        <!-- Region 3: Right Order Book -->
        <aside class="w-[320px] border-l border-white/5 hidden xl:flex flex-col bg-[#12141E]">
          <OrderBook :symbol="selectedCoin.symbol" />
        </aside>

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CoinSelector from '@/components/trading/CoinSelector.vue'
import OrderBook from '@/components/trading/OrderBook.vue'
import TradingChart from '@/components/trading/TradingChart.vue'
import TradeForm from '@/components/trading/TradeForm.vue'
import TradeOrders from '@/components/trading/TradeOrders.vue'

const route = useRoute()
const router = useRouter()

// Mock Data
const selectedCoin = ref({
  symbol: 'BTC/USDT',
  icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
  price: '77864.13',
  change: '1.25',
  high: '78120.50',
  low: '76890.20',
  volume: '5,456.78'
})

const updateCoinFromRoute = () => {
    let s = route.params.symbol as string
    if (!s) return 
    
    s = s.toUpperCase()
    const symbol = s.includes('USDT') ? s : `${s}/USDT`
    
    selectedCoin.value = {
        ...selectedCoin.value,
        symbol: symbol,
        price: (Math.random() * 50000 + 100).toFixed(2),
        change: (Math.random() * 10 - 5).toFixed(2)
    }
}

watch(() => route.params.symbol, () => {
    updateCoinFromRoute()
})

onMounted(() => {
    updateCoinFromRoute()
})

const handleSelectCoin = (coin: any) => {
  // Logic handled by route watch
}
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
