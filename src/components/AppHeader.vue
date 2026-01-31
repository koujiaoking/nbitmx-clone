<template>
  <div class="h-56px"></div>
  <header class="fixed top-0 left-0 right-0 h-56px bg-black/30 backdrop-blur-sm w-full z-10">
    <div class="flex items-center mx-18px h-full relative min-w-1280px">
      <!-- Logo -->
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="logo" class="h-28px rotate-in-left-top mr-16px cursor-pointer" />
      </router-link>

      <!-- Trading/NFT Tabs -->
      <div class="header-tabs">
        <router-link
      to="/play/currency/trade"
      class="tab-item"
      :class="{ active: !isNFT }"
    >
      {{ $t('header.tradingTab') }}
    </router-link>

    <router-link
      to="/nft/index"
      class="tab-item"
      :class="{ active: isNFT }"
    >
      {{ $t('header.nftTab') }}
    </router-link>
      </div>

      <span class="line"></span>

      <!-- Main Navigation -->
      <ul class="tab-list">
        <!-- Quick Buy Coins -->
        <li class="tab">
          {{ $t('header.recharge') }}
          <van-icon name="play" class="down-triangle" />
          <div class="sub-list">
            <router-link to="/recharge" class="sub-title">
              
              <span class="top">
                <img src="@/assets/images/logo-simplex.jpeg" class="svg-img h-full" alt="">Simplex</span>
            </router-link>
            <router-link to="/recharge" class="sub-title">
              
              <span class="top"><img src="@/assets/images/logo-coinbase.jpeg" class="svg-img h-full"  alt="">Coinbase</span>
            </router-link>
            <router-link to="/recharge" class="sub-title">
              
              <span class="top"><img src="@/assets/images/logo-mkraken.jpeg" class="svg-img h-full" alt="">Kraken</span>
            </router-link>
          </div>
        </li>

        <!-- Trading Center -->
        <li class="tab">
          {{ $t('header.trade') }}
          <van-icon name="play" class="down-triangle" />
          <div class="sub-list">
            <router-link to="/play/futures/trade" class="sub-title">
              <span class="top"><div class="svg-img iconfont text-[22px]">&#xe91a;</div>{{ $t('header.options') }}</span>
              <span class="bottom">{{ $t('header.optionsDesc') }}</span>
            </router-link>
            <router-link to="/play/spot/trade" class="sub-title">
              <span class="top"><div class="svg-img iconfont text-[22px]">&#xe91d;</div>{{ $t('header.spot') }}</span>
              <span class="bottom">{{ $t('header.spotDesc') }}</span>
            </router-link>
            <router-link to="/play/ucontract/index" class="sub-title">
              <span class="top"><div class="svg-img iconfont text-[22px]">&#xe919;</div>{{ $t('header.perpetualContract') }}</span>
              <span class="bottom">{{ $t('header.perpetualContractDesc') }}</span>
            </router-link>
          </div>
        </li>

        <!-- Copy Trading -->
        <router-link to="/copy-trading" custom v-slot="{ navigate }">
          <li class="tab" @click="navigate">{{ $t('header.copyTrading') }}</li>
        </router-link>

        <!-- Wealth Management -->
        <li class="tab">
          {{ $t('header.strategy') }}
          <van-icon name="play" class="down-triangle" />
          <div class="sub-list">
            <router-link to="/" class="sub-title">
              <span class="top"><div class="svg-img iconfont text-[22px]">&#xe91e;</div>{{ $t('header.aiComputing') }}</span>
              <span class="bottom">{{ $t('header.aiComputingDesc') }}</span>
            </router-link>
          </div>
        </li>

        <!-- Discover -->
        <li class="tab">
          {{ $t('header.more') }}
          <van-icon name="play" class="down-triangle" />
          <div class="sub-list">
            <div class="sub-title">
              <router-link to="/quotes" class="top"><div class="svg-img iconfont text-[22px]">&#xe91b;</div>{{ $t('header.marketTrends') }}</router-link>
              <span class="bottom">{{ $t('header.marketTrendsDesc') }}</span>
            </div>
            <div class="sub-title">
              <router-link to="/news" class="top"><div class="svg-img iconfont text-[22px]">&#xe91f;</div>{{ $t('header.moreNews') }}</router-link>
              <span class="bottom">{{ $t('header.moreNewsDesc') }}</span>
            </div>
            <div class="sub-title">
              <router-link to="/charity" class="top"><div class="svg-img iconfont text-[22px]">&#xe91c;</div>{{ $t('header.charity') }}</router-link>
              <span class="bottom">{{ $t('header.charityDesc') }}</span>
            </div>
          </div>
        </li>

      </ul>

      <div class="iconfont text-[18px] mr-[20px]">&#xe829;</div>

      <div class="iconfont text-[16px]">&#xe660;</div>


      <div class="line mx-[30px]"></div>

      <div class="iconfont text-[18px] mr-[16px]">&#xe694;</div>

      <div class="iconfont text-[18px] mr-[16px]">&#xe605;</div>

      <!-- Language Selector -->
      <LanguageSelector>
        <template #default>
          <div class="iconfont text-[20px]">&#xe640;</div>
        </template>
      </LanguageSelector>
    </div>
  </header>
</template>

<script setup lang="ts">
import LanguageSelector from '@/components/LanguageSelector.vue'

const route = useRoute()

const isNFT = computed(() => route.path === '/nft/index')
</script>

<style scoped lang="less">
/* Header Tabs */
.header-tabs {
  border: 1px solid #2c2c3e;
  display: flex;
  align-items: center;
  background-color: rgb(14, 15, 24);
  margin-right: 30px;
  height: 32px;
  cursor: pointer;
  border-radius: 0.375rem;
}

.header-tabs .tab-item {
  height: 32px;
  min-width: 50px;
  padding-left: 1vw;
  padding-right: 1vw;
  text-align: center;
  line-height: 32px;
}

.header-tabs .active  {
  background-color: rgb(26, 27, 36);
  color: rgb(255, 255, 255);
}

.line {
  position: relative;
  width: 2px;
  height: 14px;
  background-color: rgb(54, 55, 81);
}

/* Main Navigation */
.tab-list {
  flex: 1 1 0%;
  list-style-type: none;
  padding: 0;
  position: relative;
  margin: 0 0 0 30px;
  display: flex;
  align-items: center;
}

.tab-list .tab {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  min-width: 40px;
  height: 50px;
  padding-left: 8px;
  padding-right: 8px;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  color: rgb(255, 255, 255);
  line-height: 15px;
  transition: all 0.3s;
}

.tab-list .tab:hover .sub-list {
  visibility: visible;
  top: 50px;
  opacity: 1;
}

.tab-list .tab:hover .down-triangle {
  transform: rotate(270deg);
}

.tab-list .down-triangle {
  margin-left: 4px;
  display: inline-flex;
  transform: rotate(90deg);
  transition: all 0.3s;
  color: rgb(255, 255, 255);
  font-size: 10px;
}

.tab-list .sub-list {
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.49);
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 70px;
  left: 0;
  z-index: 9;
  width: 208px;
  border-radius: 0.375rem;
  background-color: rgb(27, 27, 29);
  padding: 3px;
  color: rgb(144, 144, 173);
  transition: all 0.3s;
}

.tab-list .sub-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: pre-wrap;
  padding: 10px 20px;
  line-height: 15px;
}

.tab-list .sub-title .top {
  margin-bottom: 5px;
  height: 24px;
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 16px;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.tab-list .sub-title .top .svg-img {
  margin-right: 10px;
  fill: rgb(255, 255, 255);
}

.tab-list .sub-title .bottom {
  display: flex;
  align-items: center;
  padding-left: 34px;
  text-align: left;
  font-size: 12px;
  color: rgb(136, 136, 136);
  line-height: 14px;
}

.tab-list .sub-title:hover {
  background: linear-gradient(90deg, #00e3ff, #089);
  border-radius: 0.375rem;
}

.tab-list .sub-title:hover .top,
.tab-list .sub-title:hover .bottom {
  color: rgb(0, 0, 0);
}

</style>

