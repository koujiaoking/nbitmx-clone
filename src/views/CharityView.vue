<template>
  <div class="charity-page bg-[#0A0A0F] min-h-screen text-white font-sans">
    
    <main class="pt-[56px]">
      <!-- 慈善Hero区域 -->
      <section class="relative h-[600px] flex items-center overflow-hidden">
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-r from-[#0A0A0F] via-[#0A0A0F]/50 to-transparent z-10"></div>
          <!-- 心形灯效背景 -->
          <img src="https://nbitmx.com/assets/charity-hero-heart.png" alt="Charity BG" class="w-full h-full object-cover opacity-60" />
          <div class="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
        </div>

        <div class="max-w-[1240px] mx-auto px-4 lg:px-6 relative z-20">
          <div class="max-w-[700px] animate-slide-up">
            <h1 class="text-[52px] lg:text-[72px] font-bold leading-tight mb-6">
              Empowering <span class="text-nbit-cyan">Global Change</span> Through Blockchain
            </h1>
            <p class="text-[20px] text-nbit-gray mb-10 leading-relaxed font-medium">
              NBITMX Charity is a non-profit platform dedicated to achieving global sustainable development by leveraging the power of blockchain.
            </p>
            <div class="flex flex-wrap gap-6">
               <button class="px-10 py-4 bg-nbit-cyan text-black font-bold rounded-2xl shadow-[0_8px_20px_rgba(0,240,255,0.2)] hover:brightness-110 transition-all">
                 Donate Now
               </button>
               <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-2xl hover:bg-white/5 transition-colors cursor-pointer">
                    <div class="i-carbon-play-filled-alt"></div>
                  </div>
                  <span class="font-bold">Our Mission</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 影响统计 -->
      <section class="py-16 bg-[#12141E] border-y border-white/5">
        <div class="max-w-[1240px] mx-auto px-4 lg:px-6">
           <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div v-for="stat in impactStats" :key="stat.label" class="flex flex-col items-center md:items-start">
                 <div class="text-[48px] font-extrabold text-nbit-cyan mb-2">{{ stat.value }}</div>
                 <div class="text-lg font-bold text-white mb-2">{{ stat.title }}</div>
                 <div class="text-nbit-gray text-center md:text-left">{{ stat.desc }}</div>
              </div>
           </div>
        </div>
      </section>

      <!-- 活跃项目 -->
      <section class="py-24">
        <div class="max-w-[1240px] mx-auto px-4 lg:px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">Driving Collective Impact</h2>
            <p class="text-nbit-gray max-w-[600px] mx-auto">Explore our ongoing initiatives across 15+ countries and regions.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="project in projects" :key="project.title" class="group bg-[#12141E] rounded-[32px] overflow-hidden border border-white/5 hover:border-nbit-cyan/30 transition-all flex flex-col sm:flex-row">
              <div class="sm:w-[45%] h-[300px] sm:h-auto overflow-hidden">
                <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div class="p-8 flex-1 flex flex-col justify-between">
                <div>
                   <div class="text-nbit-cyan text-xs font-bold uppercase tracking-widest mb-4">{{ project.location }}</div>
                   <h3 class="text-2xl font-bold mb-4">{{ project.title }}</h3>
                   <p class="text-nbit-gray text-sm mb-6">{{ project.desc }}</p>
                </div>
                <div class="space-y-4">
                   <div class="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div class="bg-nbit-cyan h-full transition-all duration-1000" :style="{ width: project.progress + '%' }"></div>
                   </div>
                   <div class="flex justify-between text-xs font-medium">
                      <span class="text-nbit-gray">Raised: <span class="text-white">${{ project.raised }}</span></span>
                      <span class="text-nbit-cyan">{{ project.progress }}%</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script setup lang="ts">

const impactStats = [
  { value: '25M+', title: 'Lives Impacted', desc: 'Direct assistance provided through our partner networks.', label: 'Impact' },
  { value: '180K', title: 'Total Donors', desc: 'Individual and corporate contributors from 80+ countries.', label: 'Donors' },
  { value: '$45M', title: 'Funds Distributed', desc: '100% of crypto donations reach the field projects.', label: 'Funds' }
]

const projects = [
  { 
    title: 'Blockchain for Water', 
    location: 'Southeast Asia', 
    desc: 'Deploying smart contract sensors to ensure clean water accessibility and maintenance tracking.', 
    raised: '1.2M', 
    progress: 82, 
    image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'Unicef CryptoFund', 
    location: 'Global', 
    desc: 'Supporting open-source blockchain technology projects that benefit children and youth.', 
    raised: '5.6M', 
    progress: 95, 
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'Digital Identity for Refugees', 
    location: 'Middle East', 
    desc: 'Creating immutable digital identities to help displaced persons access essential services.', 
    raised: '850K', 
    progress: 45, 
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'Carbon Sink Tokenization', 
    location: 'Amazon Rainforest', 
    desc: 'Rewarding local communities for preserving biodiversity through direct token incentives.', 
    raised: '3.1M', 
    progress: 68, 
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80' 
  }
]
</script>
