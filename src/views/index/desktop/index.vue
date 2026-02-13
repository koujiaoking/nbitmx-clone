<template>
  <div class="home-pc">
    <!-- PC - Full Desktop Layout -->
    
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
        <HomeTitleHeader imp="AI" :title="$t('home.quantitativeStrategy')">
          <template #image>
            <img class="size-[100px] mr-[26px]" src="@/assets/images/ai-logo.png" />
          </template>
        </HomeTitleHeader>
        <HomeAi />
        <GAnimateButton :text="$t('home.learnAi')" />
         <!-- <AiStrategy /> -->
      </div>

      <div class="home-currency-list">
        <HomeTitleHeader imp="Web3" :title="$t('home.web3Journey')"/>
        <HomeWeb3 />
        <div class="mt-[20px]">
          <GAnimateButton :text="$t('home.viewMore')" />
        </div>
      </div>

      <div class="home-trend pb-[60px]">
        <HomeTrendAnalysis />
      </div>

      <div class="home-portfolio">
        <HomeTitleHeader imp="Investment" :title="$t('home.investmentPortfolio')" :desc="$t('home.investmentDesc')" />
        <HomePortfolio />
        <div class="pt-[30px] pb-[60px]">
          <GAnimateButton :text="$t('home.goToInvest')" />
        </div>
      </div>

      <div class="home-trend">
        <HomeTitleHeader imp="Breaking" :title="$t('home.breakingNews')">
          <template #action>
            <div class="text-white flex items-center text-[14px] hover:text-[#00f0ff] cursor-pointer">{{ $t('home.viewMore') }}
              <span class="iconfont">&#xe631;</span>
            </div>
          </template>
        </HomeTitleHeader>
        <HomeBreakingNews />
      </div>

     <HomeNft />

      <div class="home-charity">
         <HomeTitleHeader imp="Charity" :title="$t('home.charityCommitted')" right :desc="$t('home.charityDesc')" />
          <HomeCharity />
          <img class="w-1260px h-53px mx-auto mb-120px" src="@/assets/images/partners.png" alt="">
          <HomeTitleHeader imp="partner" :title="$t('home.partnerTitle')" right :desc="$t('home.partnerDesc')" />
            <HomeSafeList />
      </div>

      <div class="home-problem">

        <HomeTitleHeader imp="Problem" :title="$t('home.commonProblem')" right />
        <div class="pb-[60px]">
          <HomeCommonProblem />
        </div>
      </div>
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
  width: 1260px;}
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
