<template>
  <div class="home-pc">
    <!-- PC端首页 - 完整桌面布局 -->
    
    <!-- Home Top - Video Background Section -->
    <HomeBanner />

    <!-- Home Quotes - Scrolling Crypto Prices -->

    <HomeQuotes />
    <div class="flex flex-col mx-auto w-1360px">
      <!-- Banner Swiper -->
      <HomeBannerAd />

      <!-- Vertical Notice Bar -->  
      <HomeNotice />

      <!-- Platform Statistics -->
      <HomeIntroduce />
      <div class="home-ai">
        <HomeTitleHeader imp="AI" title="Quantitative Strategy">
          <template #image>
            <img class="size-[100px] mr-[26px]" src="@/assets/images/ai-logo.png" />
          </template>
        </HomeTitleHeader>
        <HomeAi />
        <GAnimateButton text="瞭解AI量化投資" />
         <!-- <AiStrategy /> -->
      </div>

      <div class="home-currency-list">
        <HomeTitleHeader imp="Web3" title="journey starts from here! "/>
        <HomeWeb3 />
        <GAnimateButton text="查看更多" />
      </div>

      <div class="home-trend pb-[60px]">
        <HomeTrendAnalysis />
      </div>

      <div class="home-portfolio">
        <HomeTitleHeader imp="Investment" title="portfolio" desc="簡單，安全。 搜索熱門投資，立即賺取收益" />
        <HomePortfolio />
        <div class="pt-[30px] pb-[60px]">
          <GAnimateButton text="去投資" />
        </div>
      </div>

      <div class="home-trend">
        <HomeTitleHeader imp="Breaking" title="news">
          <template #action>
            <div class="text-white flex items-center text-[14px] hover:text-[#00f0ff] cursor-pointer">查看更多
              <span class="iconfont">&#xe631;</span>
            </div>
          </template>
        </HomeTitleHeader>
        <HomeBreakingNews />
      </div>

      <div class="home-nft">
        <!-- <HomeTitleHeader imp="AI" title="Quantitative Strategy"/> -->
      </div>

      <div class="home-charity">
         <HomeTitleHeader imp="Charity" title="Committed to" right :desc="`<p>Make the world a better place through blockchain!</p><p> This platform builds a complete industry ecological layout around digital asset issuance, circulation, application, valuation discovery and blockchain bottom layer. Our vision is to become the infrastructure of the blockchain world and contribute to charity </p>`" />


          <HomeTitleHeader imp="partner" title="Your reliable partner" right :desc="`<p>Safety first. To protect your assets and information security, we will continue to improve. </p>`" />
      </div>

      <div class="home-problem">

        <HomeTitleHeader imp="Problem" title="Common" right />
      </div>
    </div>

    <!-- Main Content Wrapper -->
    <div class="content-wrapper">
      
      <!-- Home Announce (Original - kept for reference or removal if redundant, though user asked to add notice bar, not replace) -->
      <!-- Consider if the new Notice Bar replaces this. For now keeping it below as user asked to add 'below' banner -->
      
      

      

      <!-- AI Strategy Section -->
      <div v-animate-on-scroll="'animate__fadeInUp'">
        <!-- <AiStrategy /> -->
      </div>

      <!-- Market Overview -->
      <div v-animate-on-scroll="'animate__fadeInUp'">
        <!-- <MarketOverview /> -->
      </div>

      <!-- NFT Showcase -->
      <!-- <div class="home-nft" v-animate-on-scroll="'animate__zoomIn'">
        <header class="nft-header">Explore Our NFT Marketplace</header>
        <div class="nft-btn">Explore NFTs</div>
        <img src="/assets/images/nft-1-_K3Dez7N.png" alt="NFT 1" class="nft-1" />
        <img src="/assets/images/nft-2-Bidcm4Hl.png" alt="NFT 2" class="nft-2" />
        <img src="/assets/images/nft-3-DTTE9tVe.png" alt="NFT 3" class="nft-3" />
        <img src="/assets/images/nft-4-BtmWgRar.png" alt="NFT 4" class="nft-4" />
      </div> -->

    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AiStrategy from '@/components/AiStrategy.vue'
import MarketOverview from '@/components/MarketOverview.vue'

onMounted(() => {
  console.log('PC Homepage loaded')
})
</script>

<style scoped lang="less">
.home-pc {
  --uno: 'min-h-screen bg-black text-white';
}

.content-wrapper {
  --uno: 'flex flex-col mx-auto';
}
.home-ai {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 140px;
  width: 1260px
}
.home-trend {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 120px;
    max-width: 1260px;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
}
</style>
