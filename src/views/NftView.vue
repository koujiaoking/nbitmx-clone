<template>
  <div class="nft-page bg-[#0A0A0F] min-h-screen text-white font-sans">
    
    <main class="pt-[56px]">
      <!-- Hero区域 -->
      <section class="relative h-[480px] flex items-center overflow-hidden">
        <!-- 背景图案 -->
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-[#0A0A0F]"></div>
          <div class="absolute inset-0 opacity-20 bg-[url('https://nbitmx.com/assets/nft-bg-D0S_mX-n.png')] bg-cover bg-center"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent"></div>
        </div>

        <div class="max-w-[1240px] mx-auto px-4 lg:px-6 w-full relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div class="flex-1 animate-slide-up">
            <h1 class="text-[56px] lg:text-[72px] font-extrabold leading-none mb-4 tracking-tighter">
              NBITMX <span class="text-nbit-cyan">NFT</span>
            </h1>
            <p class="text-[20px] text-nbit-gray font-medium mb-8 max-w-[600px]">
              Discover, collect, and trade extraordinary NFTs on the world's most secure digital asset platform.
            </p>
            <div class="flex gap-4">
              <button class="px-8 py-3 bg-nbit-cyan text-black font-bold rounded-full hover:brightness-110 transition-all">
                Explore Market
              </button>
              <button class="px-8 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all">
                Create NFT
              </button>
            </div>
          </div>
          
          <!-- Hero图形 -->
          <div class="flex-1 hidden md:flex justify-center animate-float">
             <div class="w-[320px] h-[320px] relative">
               <div class="absolute inset-0 bg-nbit-cyan/20 blur-[100px] rounded-full"></div>
               <img src="https://nbitmx.com/assets/nft-hero-graphic.png" alt="NFT Hero" class="w-full h-full object-contain relative z-10" />
             </div>
          </div>
        </div>
      </section>

      <!-- 统计数据条 -->
      <section class="border-y border-white/5 bg-[#12141E] py-8">
        <div class="max-w-[1240px] mx-auto px-4 lg:px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="stat in stats" :key="stat.label" class="text-center md:text-left">
              <div class="text-sm text-nbit-gray mb-1">{{ stat.label }}</div>
              <div class="text-2xl font-bold">{{ stat.value }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- NFT合集网格 -->
      <section class="py-20">
        <div class="max-w-[1240px] mx-auto px-4 lg:px-6">
          <div class="flex justify-between items-end mb-12">
            <div>
              <h2 class="text-3xl font-bold mb-2">Featured Collections</h2>
              <p class="text-nbit-gray">Hand-picked digital art treasures for you.</p>
            </div>
            <button class="text-nbit-cyan font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View All <div class="i-carbon-arrow-right"></div>
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="nft in nfts" :key="nft.id" class="group bg-[#12141E] rounded-2xl overflow-hidden border border-white/5 hover:border-nbit-cyan/50 transition-all hover:-translate-y-2">
              <div class="aspect-square overflow-hidden relative">
                <img :src="nft.image" :alt="nft.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-md rounded-lg text-xs font-bold border border-white/10 uppercase">
                  {{ nft.category }}
                </div>
              </div>
              <div class="p-5">
                <h3 class="font-bold text-lg mb-4 group-hover:text-nbit-cyan transition-colors">{{ nft.name }}</h3>
                <div class="flex justify-between items-center text-sm">
                  <div>
                    <div class="text-nbit-gray text-xs mb-1">Floor Price</div>
                    <div class="font-bold text-white">{{ nft.price }} ETH</div>
                  </div>
                  <div class="text-right">
                    <div class="text-nbit-gray text-xs mb-1">Volume</div>
                    <div class="font-bold text-white">{{ nft.volume }} ETH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 合作伙伴区域（UNICEF等） -->
      <section class="py-20 bg-[#0A0A0F] border-t border-white/5">
        <div class="max-w-[1240px] mx-auto px-4 lg:px-6 text-center">
            <h3 class="text-sm font-bold text-nbit-gray uppercase tracking-widest mb-12">Trusted Partners</h3>
            <div class="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
                <img v-for="p in 5" :key="p" :src="`https://nbitmx.com/assets/partner-${p}.png`" class="h-8 lg:h-12 w-auto" />
            </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script setup lang="ts">

const stats = [
  { label: 'Total Volume', value: '1.2M ETH' },
  { label: 'Owners', value: '45.2K' },
  { label: 'Collections', value: '12.8K' },
  { label: 'Floor Cap', value: '$2.4B' }
]

const nfts = [
  { id: 1, name: 'Cyber Samurai #42', category: 'Art', price: '2.4', volume: '120', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Metaverse Land #1024', category: 'Virtual World', price: '0.8', volume: '450', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Pixel Punk Ape', category: 'Collectibles', price: '15.2', volume: '2.1K', image: 'https://images.unsplash.com/photo-1644335496152-411fab065538?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Digital Oasis', category: 'Photography', price: '1.1', volume: '88', image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=400&q=80' }
]
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
