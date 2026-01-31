<template>
  <div class="notices-page bg-[#0A0A0F] min-h-screen text-white font-sans">
    
    <main class="pt-[56px] min-h-[calc(100vh-100px)]">
      <div class="max-w-[1240px] mx-auto px-4 lg:px-6 py-12 flex flex-col md:flex-row gap-8">
        <!-- 侧边栏 -->
        <aside class="w-full md:w-[280px] shrink-0">
          <div class="sticky top-24 space-y-2">
            <h2 class="text-2xl font-bold mb-8 px-4">Support</h2>
            <div v-for="cat in categories" :key="cat.id" 
                 class="px-4 py-3 rounded-xl cursor-pointer transition-all flex items-center justify-between group"
                 :class="activeCat === cat.id ? 'bg-nbit-cyan text-black font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white'">
               <div class="flex items-center gap-3">
                 <div :class="cat.icon"></div>
                 <span>{{ cat.label }}</span>
               </div>
               <div v-if="activeCat !== cat.id" class="i-carbon-chevron-right text-xs opacity-0 group-hover:opacity-100 transition-all"></div>
            </div>
          </div>
        </aside>

        <!-- 主要内容 -->
        <div class="flex-1 bg-[#12141E] rounded-3xl border border-white/5 overflow-hidden">
          <div class="p-8 border-b border-white/5 flex justify-between items-center">
             <h3 class="text-xl font-bold">{{ currentCategoryLabel }}</h3>
             <div class="relative w-full md:w-[240px]">
                <div class="absolute left-3 top-1/2 -translate-y-1/2 i-carbon-search text-gray-500 text-sm"></div>
                <input type="text" placeholder="Search notices..." class="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm outline-none focus:border-nbit-cyan transition-all" />
             </div>
          </div>
          
          <div class="divide-y divide-white/5">
            <router-link v-for="notice in notices" :key="notice.id" :to="`/notices/${notice.id}`" class="block p-8 hover:bg-white/5 transition-colors group">
              <div class="flex justify-between items-start gap-4 mb-2">
                <h4 class="text-lg font-bold group-hover:text-nbit-cyan transition-colors">{{ notice.title }}</h4>
                <span class="text-xs text-nbit-gray shrink-0 pt-1">{{ notice.date }}</span>
              </div>
              <p class="text-nbit-gray text-sm line-clamp-2 leading-relaxed">{{ notice.desc }}</p>
            </router-link>
          </div>

          <div class="p-8 border-t border-white/5 flex justify-center">
            <div class="flex gap-2">
              <button class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-nbit-cyan hover:text-black transition-all">1</button>
              <button class="w-10 h-10 rounded-lg text-gray-400 flex items-center justify-center hover:text-white transition-all">2</button>
              <button class="w-10 h-10 rounded-lg text-gray-400 flex items-center justify-center hover:text-white transition-all">3</button>
              <span class="flex items-center px-2">...</span>
              <button class="w-10 h-10 rounded-lg text-gray-400 flex items-center justify-center hover:text-white transition-all">12</button>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeCat = ref('ann')

const categories = [
  { id: 'ann', label: 'Announcements', icon: 'i-carbon-bullhorn' },
  { id: 'listing', label: 'New Listing', icon: 'i-carbon-rocket' },
  { id: 'activity', label: 'Latest Activity', icon: 'i-carbon-star' },
  { id: 'api', label: 'API Updates', icon: 'i-carbon-settings' },
  { id: 'maintenance', label: 'Maintenance', icon: 'i-carbon-tools' }
]

const currentCategoryLabel = computed(() => {
  return categories.find(c => c.id === activeCat.value)?.label || 'Notice'
})

const notices = [
  { id: 1, title: 'NBITMX Will List Starknet (STRK) in the Innovation Zone', date: '2026-01-28', desc: 'Trading will open for STRK/USDT spot trading pair at 2026-01-28 12:00 (UTC). Deposits are now open...' },
  { id: 2, title: 'Update on System Upgrade for Enhanced Security Protocol', date: '2026-01-27', desc: 'To provide a more secure trading environment, we will perform a system upgrade on 2026-01-30 from 02:00 to 04:00 (UTC)...' },
  { id: 3, title: 'New "Futures Copy Trading" Features Now Available', date: '2026-01-26', desc: 'We are excited to announce new features for our Copy Trading platform, including advanced risk management tools...' },
  { id: 4, title: 'Notice of Removal of Selected Marginal Trading Pairs', date: '2026-01-25', desc: 'Based on recent reviews, NBITMX will delist and cease trading on the following margin trading pairs...' },
  { id: 5, title: 'Celebrating NBITMX Anniversary: $1M Prize Pool Awaits', date: '2026-01-24', desc: 'Join our special anniversary event and win amazing prizes by participating in trading challenges and social media tasks...' },
  { id: 6, title: 'Staking Rewards for Ethereum 2.0 Distributed for Dec 2025', date: '2026-01-23', desc: 'All eligible users who staked their ETH have received their rewards for the month of December...' },
  { id: 7, title: 'API Documentation Update: Version 3.4 Live', date: '2026-01-22', desc: 'Check out the new endpoints for faster order execution and WebSocket data streams in our latest API version...' }
]
</script>
