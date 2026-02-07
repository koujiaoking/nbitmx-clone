<template>
  <div class="mobile-home pb-20 bg-[#0a0a0f] min-h-screen text-white font-pingfang">
    <!-- Transparent Header (Overlay) -->
    <!-- Header removed, using global MobileAppHeader -->

    <!-- Hero Section -->
    <div class="relative w-full h-[120vw] overflow-hidden">
      <!-- Background Video -->
      <div class="absolute inset-0 z-0">
         <video class="w-full h-full object-cover" loop autoplay muted playsinline poster="@/assets/images/bg1.png">
           <source src="@/assets/images/b.mp4" type="video/mp4">
         </video>
         <!-- Overlay Gradient -->
         <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0a0a0f]"></div>
      </div>

      <!-- Hero Content -->
      <div class="absolute inset-0 z-10 flex flex-col justify-center px-6 pt-24">
         <h1 class="text-[8vw] font-bold leading-[1.2] mb-2 tracking-wide">
            <span class="block">由MicroStrategy的</span>
            <span class="block text-cyan-400">成熟科技打造</span>
         </h1>
         <h2 class="text-[4.5vw] font-normal text-gray-300 mb-8 tracking-wide">
            更智慧、更數據驅動的策略
         </h2>
         
         <div class="w-16 h-1 bg-cyan-400 mb-10"></div>

         <div class="flex flex-col gap-5">
             <button class="w-full h-[13vw] rounded-full bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-black font-bold text-[4.5vw] active:opacity-90 transition-opacity" @click="router.push('/login')">
                加入交易所
             </button>
             <button class="w-[35vw] h-[10vw] flex items-center justify-center rounded-full text-cyan-400 font-bold border border-cyan-400 text-[3.5vw] active:bg-cyan-400/10 transition-colors" @click="router.push('/web3/index')">
                WEB3.0 <van-icon name="arrow" class="ml-1" />
             </button>
         </div>
      </div>
    </div>

    <!-- Ticker (Marquee) -->
    <div class="bg-[#12141e] h-[10vw] flex items-center overflow-hidden border-y border-white/5 relative z-20 -mt-6 mx-4 rounded-lg shadow-lg">
       <van-icon name="volume-o" class="ml-3 text-gray-400 text-lg" />
       
       <!-- Custom Rolling Marquee -->
       <div class="flex-1 overflow-hidden relative h-full flex items-center">
           <div class="marquee-content flex items-center whitespace-nowrap animate-marquee">
               <div v-for="(coin, i) in [...tickerList, ...tickerList]" :key="i" class="flex items-center mr-6 text-xs transform translate-z-0">
                   <span class="text-gray-300 font-bold mr-1.5">{{ coin.symbol }}</span>
                   <span :class="coin.change >= 0 ? 'text-[#00ff9d]' : 'text-[#ff3b30]'" class="font-mono">
                       {{ coin.price }} ({{ coin.change }}%)
                   </span>
               </div>
           </div>
       </div>
    </div>

    <!-- Main Content Container -->
    <div class="relative z-20 px-4 mt-8 space-y-10">
        
        <!-- Banners -->
        <van-swipe class="rounded-xl overflow-hidden shadow-2xl h-[40vw]" :autoplay="4000" indicator-color="white">
            <van-swipe-item>
                <img src="@/assets/images/mobile-Strategy-1.png" class="w-full h-full object-cover" />
            </van-swipe-item>
             <van-swipe-item>
                <img src="@/assets/images/mobile-Strategy-2.png" class="w-full h-full object-cover" />
            </van-swipe-item>
        </van-swipe>

    <!-- AI Strategy -->
        <section>
            <HomeTitleHeader mobile title="AI 策略交易">
                <template #image>
                    <SvgIcon name="icon-menu-icon10" class="text-[5vw] text-cyan-400 mr-2" />
                </template>
                <template #action>
                    <span class="text-xs text-gray-500 font-mono">1/3</span>
                </template>
            </HomeTitleHeader>
            
            <van-swipe :loop="false" :show-indicators="false" class="overflow-visible" :width="300">
                <van-swipe-item v-for="(item, idx) in aiStrategies" :key="idx" class="pr-3">
                    <div class="bg-gradient-to-br from-[#1e2029] to-[#12141e] rounded-2xl p-5 h-36 flex flex-col justify-between relative overflow-hidden border border-white/5 shadow-lg">
                        <!-- Background decoration -->
                         <img src="@/assets/images/ai-bg3.png" class="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none" />
                        
                        <div class="flex justify-between items-start z-10">
                            <div class="flex items-center gap-3">
                                <img :src="getImageUrl('index-bitcoin.png')" class="w-10 h-10 rounded-full border border-white/10" @error="handleImageError" />
                                <span class="font-bold text-xl">{{ item.name }}</span>
                            </div>
                            <button class="bg-white text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-sm active:scale-95 transition-transform">使用</button>
                        </div>
                        
                        <div class="flex items-end justify-between z-10">
                             <div>
                                 <p class="text-[10px] text-gray-400 mb-1">預期年化收益</p>
                                 <p class="text-2xl font-bold text-cyan-400 font-mono tracking-tight">{{ item.apr }}</p>
                             </div>
                             <p class="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded-lg">{{ item.count }} 人參與</p>
                         </div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </section>

        <!-- Copy Trading -->
         <section>
            <HomeTitleHeader mobile title="跟單交易">
                <template #image>
                    <SvgIcon name="icon-menu-icon11" class="text-[5vw] text-cyan-400 mr-2" />
                </template>
                <template #action>
                    <div class="flex bg-[#1A1B23] rounded-full p-1 border border-white/5">
                       <span class="text-[10px] px-3 py-1 rounded-full bg-cyan-500 text-black font-bold shadow-md">大師</span>
                       <span class="text-[10px] px-3 py-1 rounded-full text-gray-400">高頻</span>
                       <span class="text-[10px] px-3 py-1 rounded-full text-gray-400">穩健</span>
                    </div>
                </template>
            </HomeTitleHeader>

            <!-- Card Swiper -->
            <van-swipe :loop="false" :show-indicators="false" :width="280">
                 <van-swipe-item v-for="i in 3" :key="i" class="pr-3">
                     <div class="bg-[#1e2029] border border-white/5 rounded-2xl p-4 shadow-lg active:scale-[0.98] transition-transform duration-200">
                         <div class="flex items-center justify-between mb-4">
                             <div class="flex items-center gap-3">
                                 <img src="@/assets/images/avatar.png" class="w-9 h-9 rounded-full bg-gray-700 border border-white/10" />
                                 <div class="flex flex-col">
                                     <span class="font-bold text-sm text-gray-100">CryptoKing</span>
                                     <span class="text-[9px] bg-[#EBA800]/20 text-[#EBA800] px-1.5 py-0.5 rounded w-fit mt-0.5 font-bold">LV.8</span>
                                 </div>
                             </div>
                             <button class="bg-cyan-500 text-black text-xs font-bold px-5 py-1.5 rounded-full shadow-md">跟單</button>
                         </div>
                         
                         <div class="grid grid-cols-2 gap-4 mb-3">
                             <div>
                                 <p class="text-[10px] text-gray-500 mb-0.5">ROI</p>
                                 <p class="text-xl font-bold text-[#00ff9d] font-mono">+128.5%</p>
                             </div>
                             <div class="text-right">
                                 <p class="text-[10px] text-gray-500 mb-0.5">Win Rate</p>
                                 <p class="text-xl font-bold text-white font-mono">68%</p>
                             </div>
                         </div>
                         <!-- Fake Bar Chart -->
                         <div class="flex items-end gap-[2px] h-10 mt-3 opacity-80 mask-gradient-to-t">
                             <div v-for="j in 25" :key="j" class="flex-1 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-[1px]" :style="{ height: Math.random() * 80 + 20 + '%' }"></div>
                         </div>
                     </div>
                 </van-swipe-item>
            </van-swipe>
         </section>
        
        <!-- Market Trends -->
        <section>
            <HomeTitleHeader mobile title="市場行情">
                <template #image>
                     <SvgIcon name="icon-menu-icon2" class="text-[5vw] text-cyan-400 mr-2" />
                </template>
            </HomeTitleHeader>
            
            <van-tabs v-model:active="activeTab" background="transparent" title-active-color="#00f0ff" title-inactive-color="#888" line-width="20px" line-height="3px" color="#00f0ff" title-class="font-bold">
                <van-tab title="Web3"></van-tab>
                <van-tab title="美股"></van-tab>
                <van-tab title="期權"></van-tab>
                <van-tab title="現貨"></van-tab>
            </van-tabs>

            <div class="mt-4 space-y-0">
                 <div v-for="coin in marketList" :key="coin.symbol" class="flex items-center justify-between py-4 border-b border-white/5 active:bg-white/5 transition-colors px-2" @click="router.push(`/quotes/detail?symbol=${coin.symbol}`)">
                     <div class="flex items-center gap-3">
                         <img :src="getImageUrl(`icon-${coin.symbol.toLowerCase()}.png`)" class="w-9 h-9 rounded-full shadow-sm" @error="handleImageError" />
                         <div>
                             <p class="font-bold text-base text-gray-100 flex items-center gap-1">{{ coin.symbol }} <span class="text-[10px] bg-gray-700 text-gray-300 px-1 rounded">PERP</span></p>
                             <p class="text-xs text-gray-500 font-mono mt-0.5">Vol {{ coin.vol }}</p>
                         </div>
                     </div>
                     <div class="flex flex-col items-end">
                         <p class="font-bold text-base text-white font-mono">{{ coin.price }}</p>
                         <p class="text-xs font-bold px-2 py-0.5 rounded mt-1 min-w-[60px] text-center" :class="coin.change >= 0 ? 'bg-[#00ff9d]/10 text-[#00ff9d]' : 'bg-[#ff3b30]/10 text-[#ff3b30]'">
                             {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
                         </p>
                     </div>
                 </div>
            </div>
        </section>

        <!-- NFT Section -->
        <section class="relative rounded-2xl overflow-hidden h-[50vw] bg-[#0d0e12] border border-white/5 shadow-2xl group">
             <img src="@/assets/images/nft-bg1.png" class="absolute inset-0 w-full h-full object-cover opacity-50 group-active:scale-105 transition-transform duration-700" />
             <div class="absolute inset-0 z-10 p-6 flex flex-col justify-center bg-gradient-to-r from-black/80 to-transparent">
                 <div class="w-10 h-10 mb-3 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                    <van-icon name="gem-o" class="text-cyan-400 text-xl" />
                 </div>
                 <h3 class="text-2xl font-bold uppercase mb-2 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">NFT Marketplace</h3>
                 <p class="text-xs text-gray-400 mb-6 w-3/4 leading-relaxed line-clamp-2">瀏覽、訂閱最前沿的NFT作品並產生價值，探索數字藝術的無限可能。</p>
                 <button class="bg-white/10 border border-white/20 text-white w-fit px-6 py-2 rounded-full text-xs font-bold backdrop-blur-sm active:bg-white/20 transition-all flex items-center gap-2">
                    前往NFT大廳 <van-icon name="arrow" />
                 </button>
             </div>
             <!-- Floating Images -->
             <img src="@/assets/images/nft-1.png" class="absolute -bottom-4 -left-4 w-28 h-28 animate-[bounce_3s_infinite] z-20 opacity-80" />
             <img src="@/assets/images/nft-2.png" class="absolute bottom-8 -right-4 w-24 h-auto rotate-12 z-10 opacity-60 blur-[1px]" />
        </section>

        <!-- Charity Section -->
         <section class="relative rounded-2xl overflow-hidden h-60 bg-gradient-to-br from-[#0c1633] to-[#2a0e36] border border-white/5 mb-8 shadow-xl">
             <img src="@/assets/images/charity-bg1.png" class="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-60" />
             <div class="absolute inset-0 z-10 p-6 flex flex-col items-center justify-center text-center">
                 <h3 class="text-xl font-bold mb-6 tracking-widest uppercase text-white/90">For Charity</h3>
                 <div class="flex gap-10 my-4 w-full justify-center">
                     <div class="text-center">
                         <p class="text-3xl font-bold text-cyan-400 font-mono mb-1">1.84<span class="text-lg text-cyan-400/70">m</span></p>
                         <p class="text-[10px] text-gray-400 uppercase tracking-widest">USDT Donated</p>
                     </div>
                     <div class="w-[1px] h-10 bg-white/10"></div>
                     <div class="text-center">
                         <p class="text-3xl font-bold text-purple-400 font-mono mb-1">2,234</p>
                         <p class="text-[10px] text-gray-400 uppercase tracking-widest">Lives Impacted</p>
                     </div>
                 </div>
                 <button class="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-10 py-2.5 rounded-full text-sm shadow-lg shadow-cyan-500/20 active:shadow-none transition-shadow">前往慈善中心</button>
             </div>
        </section>

        <!-- Footer Text -->
        <div class="text-center text-gray-500 text-xs pb-10">
            <p class="mb-3 text-gray-200 text-lg font-serif italic tracking-wide">"A partner worthy of your trust"</p>
            <p class="flex items-center justify-center gap-1 text-gray-600">Read more about our security <van-icon name="arrow" /></p>
        </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HomeTitleHeader from '@/components/base/HomeTitleHeader.vue'
import SvgIcon from '@/components/base/SvgIcon.vue'

const router = useRouter()
const activeTab = ref(0) // Default active tab index

// Add image error handler method
const handleImageError = (e: Event) => {
    const target = e.target as HTMLImageElement
    target.style.display = 'none'
}

const tickerList = ref([
    { symbol: 'BTC', price: '64,230', change: -2.4 },
    { symbol: 'ETH', price: '3,450', change: 1.2 },
    { symbol: 'SOL', price: '145.8', change: 5.1 },
    { symbol: 'BNB', price: '590.1', change: 0.8 },
    { symbol: 'DOGE', price: '0.124', change: -3.4 },
    // Add duplicates for marquee effect if needed
])

const aiStrategies = ref([
    { name: 'BTC', apr: '12.5%', count: '2,341' },
    { name: 'ETH', apr: '18.2%', count: '1,892' },
    { name: 'USDT', apr: '5.6%', count: '5,120' }
])

const marketList = ref([
    { symbol: 'BTC', price: '64,230.50', change: 2.45, vol: '24M' },
    { symbol: 'ETH', price: '3,450.20', change: -1.20, vol: '12M' },
    { symbol: 'SOL', price: '145.80', change: 5.12, vol: '5M' },
    { symbol: 'BNB', price: '590.10', change: 0.85, vol: '8M' },
    { symbol: 'DOGE', price: '0.1240', change: -3.45, vol: '100M' },
])

const getImageUrl = (name: string) => {
  return new URL(`../../../../assets/images/${name}`, import.meta.url).href
}
</script>

<style scoped>
/* No scrollbar utility */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Marquee Animation */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}
</style>
