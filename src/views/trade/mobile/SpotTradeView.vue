<template>
  <MobileSpotContractLayout
    :symbol="symbol"
    :current-price="currentPrice"
    :price-change="priceChange"
    :stats="stats"
    @layout-change="handleLayoutChange"
    @trade="handleTrade"
  >
    <template #chart>
      <!-- TradingView Chart will be integrated here -->
      <div class="chart-wrapper">
        <!-- TODO: 集成 TradingView 图表组件 -->
      </div>
    </template>
    
    <template #sellOrders>
      <!-- 卖单列表 -->
      <div class="sell-orders">
        <!-- TODO: 实际卖单数据 -->
      </div>
    </template>
    
    <template #orders>
      <!-- 订单列表 -->
      <div class="orders-list">
        <!-- TODO: 实际订单数据 -->
      </div>
    </template>
    
    <template #orderbookTable>
      <!-- 盘口表格 -->
      <div class="orderbook-table-content">
        <!-- TODO: 实际盘口数据 -->
      </div>
    </template>
  </MobileSpotContractLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MobileSpotContractLayout from '@/components/mobile/trade/MobileSpotContractLayout.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Mock 数据
const symbol = ref('BTC/USDT')
const currentPrice = ref('69,168.00')
const priceChange = ref('0.5298%')
const stats = ref({
  high24h: '71751.33',
  low24h: '67300.00',
  volume24h: '5.96M',
  turnover24h: '411777.64M'
})

const handleLayoutChange = (layout: 'chart' | 'orderbook') => {
  console.log('Layout changed to:', layout)
  // TODO: 处理布局切换
}

const handleTrade = () => {
  console.log('Trade button clicked')
  // TODO: 实现交易逻辑
}
</script>

<style scoped lang="less">
.chart-wrapper,
.sell-orders,
.orders-list,
.orderbook-table-content {
  width: 100%;
  height: 100%;
}
</style>
