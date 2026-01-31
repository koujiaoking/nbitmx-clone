<!-- Follow页面 - 已国际化 -->
<template>
  <div class="follow-page bg-black min-h-screen text-white">
    
    <main class="pt-[56px]">
      <!-- 页面Hero区域 -->
      <section class="bg-[#12141E] py-12 border-b border-white/5">
        <div class="max-w-[1240px] mx-auto px-4 lg:px-6">
          <!-- 主tab切换 + 标题 -->
          <div class="flex items-center justify-between mb-8">
            <h1 class="text-3xl font-bold">{{ $t('follow.title') }}</h1>
            <div class="flex gap-1 bg-[#1A1B24] p-1 rounded-lg">
              <button 
                @click="activeMainTab = 'plaza'"
                class="px-6 py-2 rounded-md text-sm font-bold transition-all"
                :class="activeMainTab === 'plaza' ? 'bg-nbit-cyan text-black' : 'text-gray-400 hover:text-white'"
              >
                {{ $t('follow.tabs.tradingPlaza') }}
              </button>
              <button 
                @click="activeMainTab = 'following'"
                class="px-6 py-2 rounded-md text-sm font-bold transition-all"
                :class="activeMainTab === 'following' ? 'bg-nbit-cyan text-black' : 'text-gray-400 hover:text-white'"
              >
                {{ $t('follow.tabs.myCopyTrading') }}
              </button>
            </div>
          </div>

          <!-- 分类tab -->
          <div class="flex gap-3 mb-6 border-b border-white/5">
            <button 
              v-for="cat in categories" 
              :key="cat.id"
              @click="activeCategory = cat.id"
              class="pb-3 px-2 text-sm font-medium border-b-2 transition-all"
              :class="activeCategory === cat.id 
                ? 'border-nbit-cyan text-nbit-cyan' 
                : 'border-transparent text-gray-400 hover:text-white'"
            >
              {{ $t(cat.label) }}
            </button>
          </div>
          
          <!-- 筛选按钮 -->
          <div class="flex flex-wrap gap-3">
            <button 
              v-for="filter in filters" 
              :key="filter.id"
              @click="activeFilter = filter.id"
              class="px-4 py-2 rounded-full border text-sm font-medium transition-all"
              :class="activeFilter === filter.id 
                ? 'border-nbit-cyan bg-nbit-cyan/10 text-nbit-cyan' 
                : 'border-white/10 text-gray-400 hover:border-nbit-cyan/50 hover:text-nbit-cyan'"
            >
              {{ $t(filter.label) }}
            </button>
          </div>
        </div>
      </section>

      <!-- 交易员网格 -->
      <section class="py-12">
        <div class="max-w-[1240px] mx-auto px-4 lg:px-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div v-for="trader in filteredTraders" :key="trader.id" class="group bg-[#12141E] rounded-2xl border border-white/5 p-6 hover:border-nbit-cyan/30 transition-all hover:bg-[#161720]">
              <!-- 头像和基本信息 -->
              <div class="flex items-start justify-between mb-6">
                <div class="flex items-center gap-3">
                  <div class="relative">
                    <img :src="trader.avatar" :alt="trader.name" class="w-14 h-14 rounded-full object-cover border-2 border-nbit-cyan/20" />
                    <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-nbit-cyan rounded-full flex items-center justify-center border-2 border-[#12141E]">
                      <div class="i-carbon-checkmark text-[10px] text-black font-bold"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex items-center gap-2">
                      <h3 class="font-bold text-base leading-tight">{{ trader.name }}</h3>
                      <span class="text-[10px] px-1.5 py-0.5 bg-amber-500/20 text-amber-500 rounded">{{ trader.level }}</span>
                    </div>
                    <div class="text-xs text-nbit-green font-medium mt-0.5">{{ $t('follow.trader.verified') }}</div>
                  </div>
                </div>
              </div>

              <!-- 跟随者进度 -->
              <div class="mb-6">
                <div class="flex justify-between text-xs text-nbit-gray mb-2">
                  <span>{{ $t('follow.trader.followers') }}</span>
                  <span class="text-white font-medium">{{ trader.followers }}/{{ trader.maxFollowers }}</span>
                </div>
                <div class="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div 
                    class="bg-gradient-to-r from-nbit-cyan to-blue-400 h-full transition-all duration-500" 
                    :style="{ width: (trader.followers / trader.maxFollowers * 100) + '%' }"
                  ></div>
                </div>
              </div>

              <!-- 大号收益率显示 -->
              <div class="text-center py-4 mb-6 bg-gradient-to-br from-nbit-green/10 to-transparent rounded-xl border border-nbit-green/20 relative overflow-hidden">
                <!-- 背景趋势线 -->
                <div class="absolute inset-0 opacity-10">
                  <svg class="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                    <polyline 
                      :points="trader.chart.map((h, i) => `${i * (100/6)},${50 - h/2}`).join(' ')"
                      fill="none" 
                      stroke="currentColor" 
                      stroke-width="1.5" 
                      class="text-nbit-green"
                    />
                  </svg>
                </div>
                <div class="text-4xl font-extrabold text-nbit-green relative z-10">+{{ trader.pnl }}%</div>
                <div class="text-xs text-nbit-gray mt-1">{{ $t('follow.trader.totalROI') }}</div>
              </div>

              <!-- 业绩统计网格 -->
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div class="text-xs text-nbit-gray mb-1">{{ $t('follow.trader.period') }}</div>
                  <div class="text-sm font-bold text-white">{{ trader.period }}</div>
                </div>
                <div>
                  <div class="text-xs text-nbit-gray mb-1">{{ $t('follow.trader.apy') }}</div>
                  <div class="text-sm font-bold text-nbit-green">{{ trader.apy }}%</div>
                </div>
                <div>
                   <div class="text-xs text-nbit-gray mb-1">{{ $t('follow.trader.winRate') }}</div>
                   <div class="text-sm font-bold text-white">{{ trader.winRate }}%</div>
                </div>
                <div>
                   <div class="text-xs text-nbit-gray mb-1">{{ $t('follow.trader.aum') }}</div>
                   <div class="text-sm font-bold text-white">${{ trader.aum }}</div>
                </div>
              </div>

              <!-- Copy按钮 -->
              <button class="w-full py-3 bg-nbit-cyan/10 border border-nbit-cyan/30 text-nbit-cyan rounded-xl font-bold hover:bg-nbit-cyan hover:text-black transition-all">
                 {{ $t('follow.trader.copyTrade') }}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 主tab状态
const activeMainTab = ref<'plaza' | 'following'>('plaza')

// 分类tab
const categories = [
  { id: 'all', label: 'follow.categories.all' },
  { id: 'options', label: 'follow.categories.options' },
  { id: 'futures', label: 'follow.categories.futures' },
  { id: 'spot', label: 'follow.categories.spot' }
]
const activeCategory = ref('all')

// 筛选按钮
const filters = [
  { id: 'all', label: 'follow.filters.all' },
  { id: 'high_yield', label: 'follow.filters.highYield' },
  { id: 'stable', label: 'follow.filters.stable' },
  { id: 'low_risk', label: 'follow.filters.lowRisk' },
  { id: 'new_stars', label: 'follow.filters.newStars' }
]
const activeFilter = ref('all')

// 交易员数据
const traders = [
  { 
    id: 1, 
    name: 'Alpha Whale', 
    level: 'LV.8',
    pnl: '687', 
    apy: '245.8',
    winRate: '88.5', 
    period: '180天',
    followers: 694,
    maxFollowers: 1000,
    aum: '2.5M', 
    avatar: 'https://i.pravatar.cc/150?u=1', 
    chart: [40, 60, 45, 70, 85, 65, 90],
    type: 'high_yield'
  },
  { 
    id: 2, 
    name: 'Crypto Sage', 
    level: 'LV.6',
    pnl: '182', 
    apy: '82.1',
    winRate: '92.4', 
    period: '120天',
    followers: 421,
    maxFollowers: 800,
    aum: '1.1M', 
    avatar: 'https://i.pravatar.cc/150?u=2', 
    chart: [30, 40, 55, 45, 60, 75, 80],
    type: 'stable'
  },
  { 
    id: 3, 
    name: 'Moon Master', 
    level: 'LV.9',
    pnl: '843', 
    apy: '310.5',
    winRate: '65.2', 
    period: '240天',
    followers: 892,
    maxFollowers: 1000,
    aum: '4.8M', 
    avatar: 'https://i.pravatar.cc/150?u=3', 
    chart: [50, 45, 70, 85, 60, 95, 100],
    type: 'high_yield'
  },
  { 
    id: 4, 
    name: 'Steady Hands', 
    level: 'LV.7',
    pnl: '92', 
    apy: '65.4',
    winRate: '94.1', 
    period: '365天',
    followers: 560,
    maxFollowers: 800,
    aum: '850K', 
    avatar: 'https://i.pravatar.cc/150?u=4', 
    chart: [60, 65, 62, 68, 70, 72, 75],
    type: 'low_risk'
  },
  { 
    id: 5, 
    name: 'DeFi Degen', 
    level: 'LV.10',
    pnl: '1205', 
    apy: '542.0',
    winRate: '48.5', 
    period: '90天',
    followers: 967,
    maxFollowers: 1000,
    aum: '9.2M', 
    avatar: 'https://i.pravatar.cc/150?u=5', 
    chart: [20, 80, 40, 90, 50, 100, 70],
    type: 'high_yield'
  },
  { 
    id: 6, 
    name: 'Bull Rider', 
    level: 'LV.5',
    pnl: '156', 
    apy: '98.7',
    winRate: '78.9', 
    period: '150天',
    followers: 312,
    maxFollowers: 600,
    aum: '1.4M', 
    avatar: 'https://i.pravatar.cc/150?u=6', 
    chart: [40, 50, 48, 55, 60, 58, 65],
    type: 'stable'
},
  { 
    id: 7, 
    name: 'Golden Ratio', 
    level: 'LV.8',
    pnl: '432', 
    apy: '210.3',
    winRate: '84.2', 
    period: '200天',
    followers: 587,
    maxFollowers: 800,
    aum: '2.1M', 
    avatar: 'https://i.pravatar.cc/150?u=7', 
    chart: [45, 55, 65, 75, 85, 80, 90],
    type: 'high_yield'
  },
  { 
    id: 8, 
    name: 'Trend Seeker', 
    level: 'LV.4',
    pnl: '78', 
    apy: '128.5',
    winRate: '70.6', 
    period: '60天',
    followers: 145,
    maxFollowers: 500,
    aum: '620K', 
    avatar: 'https://i.pravatar.cc/150?u=8', 
    chart: [35, 45, 40, 50, 55, 60, 58],
    type: 'new_stars'
  }
]

// 筛选后的交易员列表
const filteredTraders = computed(() => {
  if (activeFilter.value === 'all') {
    return traders
  }
  return traders.filter(t => t.type === activeFilter.value)
})
</script>
