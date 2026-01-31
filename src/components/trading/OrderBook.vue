<!-- 订单簿组件 -->
<template>
  <div class="order-book bg-[#12141E] h-full overflow-hidden flex flex-col">
    <!-- 头部 -->
    <div class="px-3 py-2 border-b border-white/5">
      <h3 class="text-sm font-bold text-white">Order Book</h3>
    </div>

    <!-- 表头 -->
    <div class="grid grid-cols-3 gap-2 px-3 py-2 text-xs text-gray-500">
      <div>Price (USDT)</div>
      <div class="text-right">Amount (BTC)</div>
      <div class="text-right">Total</div>
    </div>

    <!-- 卖单（红色） -->
    <div class="flex-1 overflow-y-auto flex flex-col-reverse">
      <div 
        v-for="(order, i) in sellOrders" 
        :key="'sell-' + i"
        class="relative group cursor-pointer hover:bg-white/5"
      >
        <!-- 深度条 -->
        <div 
          class="absolute right-0 top-0 bottom-0 bg-red-500/10 transition-all"
          :style="{ width: (order.total / maxTotal * 100) + '%' }"
        ></div>
        <!-- 订单数据 -->
        <div class="relative grid grid-cols-3 gap-2 px-3 py-1 text-xs">
          <div class="text-red-500 font-medium">{{ order.price }}</div>
          <div class="text-right text-gray-300">{{ order.amount }}</div>
          <div class="text-right text-gray-400">{{ order.total }}</div>
        </div>
      </div>
    </div>

    <!-- 当前价格 -->
    <div class="px-3 py-3 border-y border-white/5 bg-black/20">
      <div class="flex items-center justify-between">
        <div 
          class="text-lg font-bold"
          :class="priceDirection === 'up' ? 'text-nbit-green' : 'text-red-500'"
        >
          {{ currentPrice }}
        </div>
        <div class="text-xs text-gray-500">≈ ${{ currentPrice }}</div>
      </div>
    </div>

    <!-- 买单（绿色） -->
    <div class="flex-1 overflow-y-auto">
      <div 
        v-for="(order, i) in buyOrders" 
        :key="'buy-' + i"
        class="relative group cursor-pointer hover:bg-white/5"
      >
        <!-- 深度条 -->
        <div 
          class="absolute right-0 top-0 bottom-0 bg-nbit-green/10 transition-all"
          :style="{ width: (order.total / maxTotal * 100) + '%' }"
        ></div>
        <!-- 订单数据 -->
        <div class="relative grid grid-cols-3 gap-2 px-3 py-1 text-xs">
          <div class="text-nbit-green font-medium">{{ order.price }}</div>
          <div class="text-right text-gray-300">{{ order.amount }}</div>
          <div class="text-right text-gray-400">{{ order.total }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Order {
  price: string
  amount: string
  total: number
}

// 模拟订单数据
const currentPrice = ref('64,245.10')
const priceDirection = ref<'up' | 'down'>('up')

const sellOrders: Order[] = [
  { price: '64,250.50', amount: '0.125', total: 8031.31 },
  { price: '64,248.20', amount: '0.856', total: 54996.37 },
  { price: '64,247.00', amount: '1.234', total: 79280.80 },
  { price: '64,246.50', amount: '0.542', total: 34821.60 },
  { price: '64,245.80', amount: '2.156', total: 138513.80 },
  { price: '64,245.50', amount: '0.891', total: 57222.60 },
  { price: '64,245.20', amount: '1.567', total: 100696.30 }
]

const buyOrders: Order[] = [
  { price: '64,244.80', amount: '1.234', total: 79270.00 },
  { price: '64,244.50', amount: '0.678', total: 43549.80 },
  { price: '64,244.00', amount: '2.345', total: 150632.40 },
  { price: '64,243.50', amount: '0.912', total: 58590.10 },
  { price: '64,243.00', amount: '1.567', total: 100692.80 },
  { price: '64,242.50', amount: '0.445', total: 28437.90 },
  { price: '64,242.00', amount: '3.123', total: 200598.70 }
]

const maxTotal = computed(() => {
  const allOrders = [...sellOrders, ...buyOrders]
  return Math.max(...allOrders.map(o => o.total))
})
</script>
