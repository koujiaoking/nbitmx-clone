<template>
  <section class="w-full h-[60px] bg-black border-y border-white/5 overflow-hidden flex items-center relative z-20">
    <div class="ticker-wrap flex items-center w-full">
      <div class="ticker-content flex items-center gap-12 animate-ticker hover:pause-animation">
        <div v-for="(coin, index) in tickerList" :key="coin.symbol + index" class="flex items-center gap-2 flex-shrink-0 cursor-pointer group">
          <span class="text-sm font-bold text-white group-hover:text-nbit-cyan transition-colors">{{ coin.symbol }}</span>
          <span class="text-sm font-medium" :class="coin.change >= 0 ? 'text-nbit-green' : 'text-nbit-red'">
            {{ coin.price }}
          </span>
          <span class="text-xs" :class="coin.change >= 0 ? 'text-nbit-green' : 'text-nbit-red'">
            {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
          </span>
        </div>
        <!-- Duplicate items for seamless loop -->
        <div v-for="(coin, index) in tickerList" :key="'dup-' + coin.symbol + index" class="flex items-center gap-2 flex-shrink-0 cursor-pointer group">
          <span class="text-sm font-bold text-white group-hover:text-nbit-cyan transition-colors">{{ coin.symbol }}</span>
          <span class="text-sm font-medium" :class="coin.change >= 0 ? 'text-nbit-green' : 'text-nbit-red'">
            {{ coin.price }}
          </span>
          <span class="text-xs" :class="coin.change >= 0 ? 'text-nbit-green' : 'text-nbit-red'">
            {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const tickerList = [
  { symbol: 'BTC/USDT', price: '96,732.15', change: 2.5 },
  { symbol: 'ETH/USDT', price: '3,892.42', change: 1.8 },
  { symbol: 'SOL/USDT', price: '198.12', change: 5.4 },
  { symbol: 'BNB/USDT', price: '612.90', change: -0.5 },
  { symbol: 'XRP/USDT', price: '1.12', change: 1.2 },
  { symbol: 'DOGE/USDT', price: '0.18', change: -2.1 },
  { symbol: 'ADA/USDT', price: '0.85', change: 0.9 },
  { symbol: 'AVAX/USDT', price: '45.20', change: 3.2 },
  { symbol: 'DOT/USDT', price: '8.45', change: -1.5 },
  { symbol: 'LINK/USDT', price: '18.90', change: 4.5 },
]
</script>

<style scoped lang="less">
@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-ticker {
  animation: ticker 40s linear infinite;
}

.pause-animation:hover {
  animation-play-state: paused;
}
</style>
