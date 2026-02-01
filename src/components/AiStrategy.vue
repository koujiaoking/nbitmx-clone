<template>
  <section class="py-16 lg:py-24 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F14] to-[#0A0A0F] relative overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/5 to-transparent blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/5 to-transparent blur-3xl"></div>
    
    <div class="max-w-[1240px] mx-auto px-4 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <!-- Content -->
        <div class="flex-1">
          <div class="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span class="text-blue-400 font-semibold text-[13px] tracking-wider uppercase">AI 量化策略</span>
          </div>
          
          <h2 class="text-[36px] lg:text-[44px] font-bold mb-6 text-white leading-tight">
            智能交易<br /><span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">化繁为简</span>
          </h2>
          
          <p class="text-[#b0b8c4] mb-8 text-[17px] lg:text-[18px] leading-relaxed max-w-[520px]">
            我们的先进 AI 算法实时分析市场数据，自动执行盈利交易。加入数千名通过 NBITMX AI 最大化收益的用户行列。
          </p>
          
          <ul class="space-y-4 mb-10">
            <li v-for="feature in features" :key="feature" class="flex items-center gap-3">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30">
                <svg class="w-4 h-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </span>
              <span class="text-[16px] text-[#d1d5db]">{{ feature }}</span>
            </li>
          </ul>
          
          <button class="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[24px] font-bold text-[16px] text-white hover:shadow-[0_16px_32px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300">
            探索策略
          </button>
        </div>
        
        <!-- Strategy Cards -->
        <div class="flex-1 relative">
          <div class="relative z-10 grid grid-cols-2 gap-4">
            <div v-for="strategy in aiStrategies" :key="strategy.name" class="p-6 bg-[#14151A]/80 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)]">
              <div class="text-[#848E9C] text-[13px] mb-2 font-medium uppercase tracking-wide">{{ strategy.name }}</div>
              <div class="text-[28px] font-bold mb-1" :class="+strategy.apy > 100 ? 'text-green-400' : 'text-cyan-400'">+{{ strategy.apy }}%</div>
              <div class="text-[12px] text-[#6B7280]">年化收益率</div>
            </div>
          </div>
          <!-- Decorative Glow -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-[100px] -z-0"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  '自动化投资组合再平衡',
  '风险管理协议',
  '7×24 市场监控'
]

const aiStrategies = [
  { name: 'BTC/USDT 网格', apy: '124.5' },
  { name: 'ETH 智能趋势', apy: '86.2' },
  { name: 'DeFi 指数', apy: '215.8' },
  { name: '稳定币收益', apy: '12.4' }
]
</script>
