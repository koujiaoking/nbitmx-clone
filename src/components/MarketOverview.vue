<template>
  <section class="max-w-[1240px] mx-auto px-4 lg:px-8 py-12 lg:py-16">
    <!-- Section Header -->
    <div class="mb-8">
      <h2 class="text-[32px] lg:text-[40px] font-bold text-white mb-3">市场行情</h2>
      <p class="text-nbit-gray text-[16px]">实时跟踪热门加密货币价格</p>
    </div>
    
    <!-- Tabs -->
    <div class="flex items-center gap-6 lg:gap-8 mb-6 border-b border-white/10">
      <button 
        v-for="tab in tabs" 
        :key="tab"
        class="text-[15px] lg:text-[16px] font-medium transition-all duration-300 relative pb-4"
        :class="activeTab === tab ? 'text-white' : 'text-nbit-gray hover:text-white/80'"
        @click="activeTab = tab"
      >
        {{ tab }}
        <div v-if="activeTab === tab" class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#00afff] shadow-[0_0_8px_rgba(0,242,255,0.6)]"></div>
      </button>
    </div>

    <!-- Crypto List -->
    <div class="space-y-3">
      <div v-for="coin in marketData" :key="coin.symbol" 
           class="flex items-center justify-between py-5 px-6 bg-[#14151A] hover:bg-[#1C1D22] rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.01] group border border-transparent hover:border-white/5">
        
        <!-- Coin Info -->
        <div class="flex items-center gap-4 w-[28%] min-w-[200px]">
          <div class="relative">
            <div class="w-12 h-12 rounded-full bg-black flex items-center justify-center overflow-hidden border border-white/10">
              <img :src="coin.icon" :alt="coin.symbol" class="w-full h-full object-contain" />
            </div>
            <!-- Pulse indicator for top movers -->
            <div v-if="Math.abs(coin.change) > 3" class="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full" :class="coin.change > 0 ? 'bg-nbit-green' : 'bg-nbit-red'" style="box-shadow: 0 0 8px currentColor"></div>
          </div>
          <div>
            <div class="text-[17px] font-bold text-white flex items-baseline gap-2">
              {{ coin.symbol }} 
              <span class="text-[12px] font-normal text-nbit-gray">/ USDT</span>
            </div>
            <div class="text-[13px] text-nbit-gray mt-0.5">{{ coin.name }}</div>
          </div>
        </div>

        <!-- Price -->
        <div class="w-[22%] text-left lg:text-right font-mono font-semibold text-white text-[17px]">
          ${{ coin.price }}
        </div>

        <!-- Change -->
        <div class="w-[18%] text-right">
          <div class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-mono text-[15px] font-medium" :class="coin.change >= 0 ? 'bg-nbit-green/10 text-nbit-green' : 'bg-nbit-red/10 text-nbit-red'">
            <svg v-if="coin.change >= 0" class="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 2l4 4H2l4-4z"/>
            </svg>
            <svg v-else class="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 10L2 6h8l-4 4z"/>
            </svg>
            {{ Math.abs(coin.change) }}%
          </div>
        </div>

        <!-- Volume (24h) -->
        <div class="w-[18%] text-right text-[14px] text-nbit-gray hidden md:block">
          <div class="text-[12px] text-nbit-gray/60 mb-0.5">24h Vol</div>
          {{ coin.volume }}
        </div>

        <!-- Chart -->
        <div class="w-[14%] h-[45px] hidden lg:flex items-center justify-end">
          <svg class="w-[110px] h-full opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 40" preserveAspectRatio="none">
             <path 
                :d="generatePath(coin.change)" 
                fill="none" 
                :stroke="coin.change >= 0 ? '#0ECB81' : '#F6465D'" 
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                vector-effect="non-scaling-stroke"
              />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('热门')
const tabs = ['热门', '新币', 'DeFi', 'NFT', '元宇宙']

const marketData = [
  { symbol: 'BTC', name: 'Bitcoin', price: '96,732.15', change: 2.45, volume: '4.2B', icon: '/src/assets/icons/btc.png' },
  { symbol: 'ETH', name: 'Ethereum', price: '3,892.14', change: -1.87, volume: '2.1B', icon: '/src/assets/icons/eth.png' },
  { symbol: 'SOL', name: 'Solana', price: '198.60', change: 5.23, volume: '890M', icon: '/src/assets/icons/sol.png' },
  { symbol: 'BNB', name: 'BNB', price: '612.30', change: -0.45, volume: '120M', icon: '/src/assets/icons/bnb.png' },
  { symbol: 'XRP', name: 'Ripple', price: '1.12', change: 1.12, volume: '450M', icon: '/src/assets/icons/xrp.png' },
  { symbol: 'DOGE', name: 'Dogecoin', price: '0.18', change: -4.20, volume: '320M', icon: '/src/assets/icons/doge.png' },
  { symbol: 'ADA', name: 'Cardano', price: '0.85', change: 0.90, volume: '150M', icon: '/src/assets/icons/ada.png' }
]

function generatePath(change: number) {
  // Simple random path generator for visual effect
  const points = []
  let y = 20
  for(let x=0; x<=100; x+=10) {
    y += (Math.random() - 0.5) * 15
    y = Math.max(5, Math.min(35, y))
    points.push(`${x},${y}`)
  }
  return `M0,20 L${points.join(' L')}`
}
</script>
