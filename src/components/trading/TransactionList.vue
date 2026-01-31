<!-- 最新成交列表组件 -->
<template>
  <div class="transaction-list bg-[#12141E] h-full overflow-hidden flex flex-col">
    <!-- 头部 -->
    <div class="px-3 py-2 border-b border-white/5">
      <h3 class="text-sm font-bold text-white">Latest Transactions</h3>
    </div>

    <!-- 表头 -->
    <div class="grid grid-cols-3 gap-2 px-3 py-2 text-xs text-gray-500">
      <div>Price</div>
      <div class="text-right">Amount</div>
      <div class="text-right">Time</div>
    </div>

    <!-- 成交列表 -->
    <div class="flex-1 overflow-y-auto">
      <div 
        v-for="(tx, i) in transactions" 
        :key="i"
        class="grid grid-cols-3 gap-2 px-3 py-1.5 text-xs hover:bg-white/5 transition-all"
      >
        <div 
          class="font-medium"
          :class="tx.type === 'buy' ? 'text-nbit-green' : 'text-red-500'"
        >
          {{ tx.price }}
        </div>
        <div class="text-right text-gray-300">{{ tx.amount }}</div>
        <div class="text-right text-gray-500">{{ tx.time }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Transaction {
  price: string
  amount: string
  time: string
  type: 'buy' | 'sell'
}

// 模拟最新成交数据
const transactions = ref<Transaction[]>([
  { price: '64,245.10', amount: '0.125', time: '18:21:45', type: 'buy' },
  { price: '64,244.80', amount: '0.856', time: '18:21:43', type: 'sell' },
  { price: '64,245.20', amount: '1.234', time: '18:21:41', type: 'buy' },
  { price: '64,244.50', amount: '0.542', time: '18:21:39', type: 'sell' },
  { price: '64,245.00', amount: '2.156', time: '18:21:37', type: 'buy' },
  { price: '64,244.30', amount: '0.891', time: '18:21:35', type: 'sell' },
  { price: '64,245.50', amount: '1.567', time: '18:21:33', type: 'buy' },
  { price: '64,244.00', amount: '0.678', time: '18:21:31', type: 'sell' },
  { price: '64,245.80', amount: '2.345', time: '18:21:29', type: 'buy' },
  { price: '64,243.80', amount: '0.912', time: '18:21:27', type: 'sell' }
])
</script>
