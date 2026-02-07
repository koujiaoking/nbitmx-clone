<template>
  <div class="price-ticker">
    <div class="ticker-wrapper">
      <div class="ticker-content">
        <div v-for="(coin, index) in displayCoins" :key="`${coin.symbol}-${index}`" class="ticker-item">
          <span class="coin-name">{{ coin.symbol }}</span>
          <span class="coin-price">${{ coin.price }}</span>
          <span :class="['coin-change', coin.change >= 0 ? 'positive' : 'negative']">
            {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const coins = ref([
  { symbol: 'BTC/USDT', price: '43,256.80', change: 2.34 },
  { symbol: 'ETH/USDT', price: '2,265.42', change: -1.23 },
  { symbol: 'BNB/USDT', price: '312.45', change: 0.87 },
  { symbol: 'SOL/USDT', price: '98.76', change: 5.34 },
  { symbol: 'XRP/USDT', price: '0.5234', change: -0.45 },
  { symbol: 'ADA/USDT', price: '0.3456', change: 1.23 },
  { symbol: 'DOGE/USDT', price: '0.0823', change: -2.10 },
  { symbol: 'MATIC/USDT', price: '0.7654', change: 3.45 }
])

// Duplicate coins for seamless scrolling
const displayCoins = computed(() => [...coins.value, ...coins.value])

onMounted(() => {
  // 可以在这里添加实时价格更新的逻辑
})
</script>

<style scoped lang="less">
.price-ticker {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  padding: 10px 0;
  overflow: hidden;
  position: relative;
}

.ticker-wrapper {
  overflow: hidden;
  position: relative;
}

.ticker-content {
  display: flex;
  gap: 40px;
  animation: scroll 30s linear infinite;
  width: fit-content;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.ticker-item {
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
}

.coin-name {
  color: #fff;
  font-weight: 600;
  font-size: 14px;
}

.coin-price {
  color: #00e6e6;
  font-weight: 500;
  font-size: 14px;
}

.coin-change {
  font-size: 12px;
  font-weight: 500;
}

.coin-change.positive {
  color: #26a69a;
}

.coin-change.negative {
  color: #ef5350;
}

.ticker-content:hover {
  animation-play-state: paused;
}
</style>
