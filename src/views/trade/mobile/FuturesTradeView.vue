<template>
  <MobileFuturesLayout
    :symbol="symbol"
    :current-price="currentPrice"
    :price-change="priceChange"
    :stats="stats"
    @buy-long="handleBuyLong"
    @buy-short="handleBuyShort"
  >
    <template #chart>
      <!-- TradingView Chart will be integrated here -->
      <div class="chart-wrapper">
        <!-- TODO: 集成 TradingView 图表组件 -->
      </div>
    </template>
    
    <template #orders>
      <!-- 委托订单列表 -->
      <div class="orders-list">
        <!-- TODO: 实际订单数据 -->
      </div>
    </template>
    
    <template #trades>
      <!-- 最新交易列表 -->
      <div class="trades-list">
        <!-- TODO: 实际交易数据 -->
      </div>
    </template>
  </MobileFuturesLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MobileFuturesLayout from '@/components/mobile/trade/MobileFuturesLayout.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Mock 数据
const symbol = ref('BTC/USDT')
const currentPrice = ref('69,156.0100')
const priceChange = ref('0.5614%')
const stats = ref({
  high24h: '71751.33',
  low24h: '67300.00',
  volume24h: '5.97M',
  turnover24h: '412835.48M'
})

const handleBuyLong = () => {
  console.log('Buy Long clicked')
  // TODO: 实现买涨逻辑
}

const handleBuyShort = () => {
  console.log('Buy Short clicked')
  // TODO: 实现买跌逻辑
}
</script>

<style scoped lang="less">
.chart-wrapper,
.orders-list,
.trades-list {
  width: 100%;
  height: 100%;
}
</style>
