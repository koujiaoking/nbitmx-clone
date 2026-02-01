<template>
  <section class="max-w-[1240px] mx-auto px-4 lg:px-8 py-0 lg:py-0">
    <!-- Crypto List -->
    <div class="space-y-3 mt-4">
      <div v-for="coin in marketData" :key="coin.symbol" 
           class="flex items-center justify-between px-[30px] h-[80px] bg-[#0d0e0f] hover:bg-[#031d26] rounded-lg cursor-pointer transition-all duration-300 mb-[20px]">
        
        <!-- Coin Info -->
        <div class="flex items-center gap-4 w-[25%] lg:w-[20%]">
          <div class="w-10 h-10 rounded-full bg-transparent flex items-center justify-center overflow-hidden">
             <!-- Use text fallback or generic icon if preferred, using placeholder logic for now -->
             <img :src="getIconUrl(coin.symbol)" class="w-full h-full object-contain" @error="handleImageError" />
          </div>
          <div class="text-[16px] font-medium text-white">
              {{ coin.symbol }}/USDT
          </div>
        </div>

        <!-- Price -->
        <div class="w-[20%] lg:w-[15%] text-left font-mono font-medium text-white text-[16px]">
          ${{ coin.price }}
        </div>

        <!-- Change -->
        <div class="w-[20%] lg:w-[15%] text-left font-mono text-[16px]" :class="coin.change >= 0 ? 'text-[#0ECB81]' : 'text-[#F6465D]'">
          {{ coin.change >= 0 ? '+' : ''}}{{ coin.change }}%
        </div>

        <!-- Volume (24h) -->
        <div class="w-[20%] lg:w-[15%] text-left text-[16px] text-white font-medium hidden md:block">
          {{ coin.volume }}
        </div>

        <!-- Chart -->
        <div class="w-[15%] hidden lg:flex items-center justify-end h-[50px]">
           <svg class="w-[120px] h-[40px]" viewBox="0 0 120 40" preserveAspectRatio="none">
              <!-- Gradient defs -->
              <defs>
                <linearGradient :id="'grad-' + coin.symbol" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" :stop-color="coin.change >= 0 ? '#0ECB81' : '#F6465D'" stop-opacity="0.2"/>
                  <stop offset="100%" :stop-color="coin.change >= 0 ? '#0ECB81' : '#F6465D'" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <!-- Area fill -->
              <path 
                :d="coin.chartPath + ' V 40 H 0 Z'" 
                :fill="`url(#grad-${coin.symbol})`"
                stroke="none"
              />
              <!-- Line -->
              <path 
                :d="coin.chartPath" 
                fill="none" 
                :stroke="coin.change >= 0 ? '#0ECB81' : '#F6465D'" 
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const marketData = ref([
  { symbol: 'ETH', price: '2,304.4400', change: -8.6859, volume: '125.41M', chartPath: '' },
  { symbol: 'XRP', price: '1.5872', change: -2.1153, volume: '31106.22M', chartPath: '' },
  { symbol: 'BNB', price: '751.2200', change: -6.2335, volume: '39.29M', chartPath: '' },
  { symbol: 'SOL', price: '101.6300', change: -5.6448, volume: '717.14M', chartPath: '' },
  { symbol: 'DOGE', price: '0.1034', change: -2.7078, volume: '214901.25M', chartPath: '' },
  { symbol: 'TRX', price: '0.2841', change: -1.2856, volume: '24183.95M', chartPath: '' }
])

function generateRandomPath(isPositive: boolean) {
  let points = []
  let y = isPositive ? 35 : 5
  const stepX = 120 / 10
  
  points.push(`M0,${y}`)
  
  for(let i = 1; i <= 10; i++) {
     const x = i * stepX
     // Generate random movement
     const move = (Math.random() * 15) * (Math.random() > 0.5 ? 1 : -1)
     y = Math.max(5, Math.min(35, y + move))
     
     // Trend bias based on change
     if (isPositive) y -= Math.random() * 5 
     else y += Math.random() * 5
     
     y = Math.max(2, Math.min(38, y))
     
     // Smooth curve command could be better but straight lines work for sparkline
     points.push(`L${x},${y}`)
  }
  return points.join(' ')
}

// Initialize charts
marketData.value.forEach(coin => {
  coin.chartPath = generateRandomPath(coin.change >= 0)
})

const getIconUrl = (symbol: string) => {
  return `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`
}

const handleImageError = (e: Event) => {
  (e.target as HTMLImageElement).src = '/src/assets/logo.png' // Fallback
}
</script>
