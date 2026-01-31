<!-- Web3页面 -->
<template>
  <div class="web3-page bg-black min-h-screen text-white">
    
    <main class="pt-[56px]">
      <!-- Hero区域 -->
      <section class="relative h-[500px] flex items-center overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 to-black"></div>
        
        <div class="max-w-[1240px] mx-auto px-4 lg:px-6 relative z-10">
          <div class="max-w-[700px]">
            <h1 class="text-5xl lg:text-6xl font-bold mb-6">
              Welcome to <span class="text-nbit-cyan">Web3</span>
            </h1>
            <p class="text-xl text-gray-300 mb-10">
              Explore the decentralized future with NBITMX Web3 services
            </p>
            <div class="flex gap-4">
              <button class="px-8 py-4 bg-nbit-cyan text-black font-bold rounded-lg hover:brightness-110 transition-all">
                Connect Wallet
              </button>
              <button class="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/5 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 功能卡片 -->
      <section class="py-20">
        <div class="max-w-[1240px] mx-auto px-4 lg:px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="feature in features" :key="feature.title" class="bg-[#12141E] rounded-2xl p-8 border border-white/5 hover:border-nbit-cyan/30 transition-all">
              <div class="w-12 h-12 bg-nbit-cyan/10 rounded-lg flex items-center justify-center mb-6">
                <div :class="feature.icon" class="text-2xl text-nbit-cyan"></div>
              </div>
              <h3 class="text-xl font-bold mb-4">{{ feature.title }}</h3>
              <p class="text-gray-400">{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script setup lang="ts">

const features = [
  { icon: 'i-carbon-wallet', title: 'Web3 Wallet', desc: 'Connect your wallet and manage digital assets securely' },
  { icon: 'i-carbon-application-web', title: 'DApp Browser', desc: 'Access decentralized applications directly' },
  { icon: 'i-carbon-shield', title: 'Security First', desc: 'Advanced security features to protect your assets' }
]
</script>
