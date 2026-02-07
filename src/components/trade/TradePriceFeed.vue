<template>
  <div class="trade-price-feed flex flex-col h-full bg-[#0B0E11] border-l border-[#2B2F36]">
    <!-- Header/Tabs -->
    <div class="feed-header flex items-center justify-between px-3 py-2 border-b border-[#2B2F36]">
      <div class="feed-tabs flex space-x-4">
        <span class="text-xs text-[#EAECEF] font-medium cursor-pointer">最新成交</span>
      </div>
    </div>

    <!-- Columns Header -->
    <div class="feed-columns grid grid-cols-3 px-3 py-2 text-[10px] text-[#848E9C]">
      <span class="text-left">價格(USDT)</span>
      <span class="text-right">數量(BTC)</span>
      <span class="text-right">時間</span>
    </div>

    <!-- List -->
    <div class="feed-list flex-1 overflow-y-auto custom-scrollbar">
      <div v-for="(trade, index) in tradeList" :key="index" class="feed-row grid grid-cols-3 px-3 py-1 cursor-pointer hover:bg-[#1E2329]">
        <span class="price text-xs font-medium text-left" :class="trade.type === 'buy' ? 'text-[#0ECB81]' : 'text-[#F6465D]'">{{ trade.price }}</span>
        <span class="amount text-xs text-right text-[#EAECEF]">{{ trade.amount }}</span>
        <span class="time text-xs text-right text-[#848E9C]">{{ trade.time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tradeList = ref([
  { price: '79072.00', amount: '0.00245', time: '12:33:41', type: 'buy' },
  { price: '79071.85', amount: '0.01520', time: '12:33:40', type: 'sell' },
  { price: '79072.10', amount: '0.00500', time: '12:33:39', type: 'buy' },
  { price: '79071.50', amount: '0.12500', time: '12:33:38', type: 'sell' },
  { price: '79072.05', amount: '0.00120', time: '12:33:37', type: 'buy' },
  { price: '79071.90', amount: '0.03400', time: '12:33:36', type: 'sell' },
  { price: '79072.20', amount: '0.00890', time: '12:33:35', type: 'buy' },
  { price: '79071.80', amount: '0.00650', time: '12:33:34', type: 'sell' },
  { price: '79072.15', amount: '0.04500', time: '12:33:33', type: 'buy' },
  { price: '79071.75', amount: '0.01200', time: '12:33:32', type: 'sell' },
  { price: '79072.00', amount: '0.00245', time: '12:33:41', type: 'buy' },
  { price: '79071.85', amount: '0.01520', time: '12:33:40', type: 'sell' },
  { price: '79072.10', amount: '0.00500', time: '12:33:39', type: 'buy' },
  { price: '79071.50', amount: '0.12500', time: '12:33:38', type: 'sell' },
  { price: '79072.05', amount: '0.00120', time: '12:33:37', type: 'buy' },
  { price: '79071.90', amount: '0.03400', time: '12:33:36', type: 'sell' },
  { price: '79072.20', amount: '0.00890', time: '12:33:35', type: 'buy' },
  { price: '79071.80', amount: '0.00650', time: '12:33:34', type: 'sell' },
  { price: '79072.15', amount: '0.04500', time: '12:33:33', type: 'buy' },
  { price: '79071.75', amount: '0.01200', time: '12:33:32', type: 'sell' },
])
</script>

<style scoped lang="less">
@import '@/styles/trade.less';
</style>
