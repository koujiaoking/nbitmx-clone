<!-- 资产概览组件 -->
<template>
  <div class="asset-overview py-6">
    <!-- 总资产卡片 -->
    <div class="bg-[#12141E] rounded-2xl p-8 mb-6">
      <div class="flex justify-between items-start mb-6">
        <div>
          <div class="text-sm text-gray-500 mb-2">总资产估值 (USDT)</div>
          <div class="text-4xl font-bold">{{ hideBalance ? '****' : '12,345.67' }}</div>
        </div>
        <button @click="hideBalance = !hideBalance" class="text-gray-400 hover:text-white">
          <div :class="hideBalance ? 'i-carbon-view-off' : 'i-carbon-view'" class="text-xl"></div>
        </button>
      </div>

      <!-- 功能按钮 -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button 
          v-for="action in actions" 
          :key="action.label"
          class="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-nbit-cyan/50 transition-all"
        >
          <div :class="action.icon" class="text-2xl mb-2 text-nbit-cyan"></div>
          <div class="text-sm font-medium">{{ action.label }}</div>
        </button>
      </div>
    </div>

    <!-- 资产分布表格 -->
    <div class="bg-[#12141E] rounded-2xl p-6">
      <h3 class="text-lg font-bold mb-6">资产分布</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead>
            <tr class="text-gray-500 text-xs border-b border-white/5">
              <th class="py-4">币种</th>
              <th class="py-4">总额</th>
              <th class="py-4">可用</th>
              <th class="py-4">冻结</th>
              <th class="py-4 text-right">估值 (USDT)</th>
            </tr>
          </thead>
          <tbody class="text-sm">
            <tr v-for="asset in assets" :key="asset.symbol" class="border-b border-white/5 hover:bg-white/5 transition-all">
              <td class="py-4">
                <div class="flex items-center gap-2">
                  <img :src="asset.icon" :alt="asset.symbol" class="w-6 h-6 rounded-full" />
                  <span class="font-bold">{{ asset.symbol }}</span>
                </div>
              </td>
              <td class="py-4">{{ asset.total }}</td>
              <td class="py-4">{{ asset.available }}</td>
              <td class="py-4">{{ asset.frozen }}</td>
              <td class="py-4 text-right font-medium">{{ asset.usdt }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hideBalance = ref(false)

const actions = [
  { icon: 'i-carbon-upload', label: '充值' },
  { icon: 'i-carbon-download', label: '提现' },
  { icon: 'i-carbon-arrow-right', label: '划转' },
  { icon: 'i-carbon-two-person-lift', label: '兑换' }
]

const assets = [
  { symbol: 'USDT', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png', total: '10,000.00', available: '9,500.00', frozen: '500.00', usdt: '10,000.00' },
  { symbol: 'BTC', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', total: '0.0356', available: '0.0356', frozen: '0.0000', usdt: '2,286.45' },
  { symbol: 'ETH', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', total: '0.1234', available: '0.1234', frozen: '0.0000', usdt: '425.78' }
]
</script>
