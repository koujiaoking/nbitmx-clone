<template>
  <div class="news-page bg-[#0A0A0F] min-h-screen text-white font-sans">
    
    <main class="pt-[56px]">
      <!-- 新闻Hero区 -->
      <section class="bg-gradient-to-b from-[#12141E] to-[#0A0A0F] py-20 overflow-hidden">
        <div class="max-w-[1240px] mx-auto px-4 lg:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div class="flex-1">
             <div class="inline-block px-4 py-1.5 bg-nbit-cyan/10 border border-nbit-cyan/20 text-nbit-cyan rounded-full text-xs font-bold uppercase tracking-wider mb-6">
               Hot Off The Press
             </div>
             <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
               Stay Ahead of the <br />
               <span class="text-nbit-cyan">Crypto Curve</span>
             </h1>
             <p class="text-xl text-nbit-gray mb-10 leading-relaxed">
               Expert analysis, breaking news, and in-depth reports from the heart of the digital asset revolution.
             </p>
          </div>
          <div class="flex-1 flex justify-center">
             <div class="relative w-full max-w-[400px]">
                <div class="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full"></div>
                 <!-- 应该是机器人手图片 -->
                <img src="https://nbitmx.com/assets/news-hero-robot.png" alt="News Hero" class="w-full h-auto relative z-10 animate-float" />
             </div>
          </div>
        </div>
      </section>

      <!-- 搜索和筛选 -->
      <section class="py-12 border-y border-white/5">
        <div class="max-w-[1240px] mx-auto px-4 lg:px-6">
           <div class="flex flex-col md:flex-row justify-between items-center gap-8">
              <div class="flex flex-wrap gap-4">
                <button v-for="cat in ['All', 'Crypto', 'NFT', 'Finance', 'Regulation', 'Metaverse']" :key="cat"
                        class="px-6 py-2 rounded-xl text-sm transition-all"
                        :class="cat === 'All' ? 'bg-white/10 text-white font-bold' : 'text-gray-400 hover:text-white'">
                  {{ cat }}
                </button>
              </div>
              <div class="relative w-full md:w-[320px]">
                <div class="absolute left-4 top-1/2 -translate-y-1/2 i-carbon-search text-gray-400"></div>
                <input type="text" placeholder="Search news..." class="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-nbit-cyan outline-none transition-all" />
              </div>
           </div>
        </div>
      </section>

      <!-- 新闻内容 -->
      <section class="py-20">
        <div class="max-w-[1240px] mx-auto px-4 lg:px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="news in newsList" :key="news.id" class="group bg-[#12141E] rounded-3xl overflow-hidden border border-white/5 hover:border-nbit-cyan/30 transition-all">
              <div class="aspect-video overflow-hidden">
                <img :src="news.image" :alt="news.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-8">
                <div class="flex items-center gap-3 text-xs text-nbit-gray mb-4">
                  <span class="px-2 py-0.5 bg-nbit-cyan/10 text-nbit-cyan rounded font-bold uppercase">{{ news.category }}</span>
                  <span>•</span>
                  <span>{{ news.date }}</span>
                </div>
                <h3 class="text-xl font-bold mb-4 line-clamp-2 group-hover:text-nbit-cyan transition-colors leading-snug">{{ news.title }}</h3>
                <p class="text-nbit-gray text-sm line-clamp-3 mb-6">{{ news.desc }}</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2 text-xs text-nbit-gray">
                    <div class="i-carbon-view text-sm"></div> {{ news.views }} Views
                  </div>
                  <router-link to="/news/detail" class="text-nbit-cyan font-bold text-sm flex items-center gap-1 group/more">
                    Read More <div class="i-carbon-arrow-right group-hover/more:translate-x-1 transition-transform"></div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-16 text-center">
            <button class="px-10 py-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-all font-bold">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script setup lang="ts">

const newsList = [
  { id: 1, title: 'NBITMX Announces Landmark Partnership with UNICEF for Charity Web3 Initiatives', category: 'Announcement', date: '2 hours ago', views: '12K', desc: 'The collaboration aims to leverage blockchain technology to provide transparent donation tracking...', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'Bitcoin Hits Yearly High as Institutional Adoption Accelerates Globally', category: 'Crypto', date: '5 hours ago', views: '45K', desc: 'Major financial institutions have started increasing their holdings as market sentiment shifts bullish...', image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: 'Top 5 Metaverses to Watch in 2026: The Digital Frontier Expands', category: 'Metaverse', date: '1 day ago', views: '28K', desc: 'From virtual real estate to immersive social experiences, these projects are leading the charge...', image: 'https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&w=600&q=80' },
  { id: 4, title: 'Regulation Update: SEC Provides Clearer Framework for Token Issuance', category: 'Regulation', date: '2 days ago', views: '15K', desc: 'The new guidelines offer much-needed clarity for innovative projects look to launch in the US...', image: 'https://images.unsplash.com/photo-1589210331056-eb50920469b1?auto=format&fit=crop&w=600&q=80' },
  { id: 5, title: 'Layer 2 Scaling Solutions: Comparing Optimism and Arbitrum Efficiency', category: 'Technical', date: '3 days ago', views: '18K', desc: 'Which rollup offers the best security-to-speed ratio for end users? We break down the data...', image: 'https://images.unsplash.com/photo-1639322537231-2f206e06af84?auto=format&fit=crop&w=600&q=80' },
  { id: 6, title: 'Future of DeFi Art: Generative NFTs Meet Smart Contract Logic', category: 'NFT', date: '4 days ago', views: '22K', desc: 'Artists are now embedding financial utility directly into their digital masterpieces...', image: 'https://images.unsplash.com/photo-1642104704074-907c0698bcd9?auto=format&fit=crop&w=600&q=80' }
]
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}
.animate-float {
  animation: float 5s ease-in-out infinite;
}
</style>
