<template>
  <div>
    <div class="h-56px"></div>
    <header class="fixed top-0 left-0 right-0 h-56px bg-black/30 backdrop-blur-sm w-full z-50">
    <div class="flex items-center mx-18px h-full relative min-w-1280px">
      <!-- Logo -->
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="logo" class="h-28px rotate-in-left-top mr-16px cursor-pointer" />
      </router-link>

      <!-- Trading/NFT Tabs -->
      <div class="header-tabs">
        <span
            @click="router.push('/play/currency/trade')"
            class="tab-item"
            :class="{ active: !isNFT }"
            >
          {{ $t('header.tradingTab') }}
        </span>

        <span
            @click="router.push('/nft/index')"
            class="tab-item"
            :class="{ active: isNFT }"
          >
            {{ $t('header.nftTab') }}
    </span>
      </div>

      <span class="line"></span>

      <!-- Main Navigation -->
      <ul class="tab-list">
        <!-- Quick Buy Coins -->
        <li class="tab">
          {{ $t('header.recharge') }}
          <van-icon name="play" class="down-triangle" />
          <div class="sub-list">
            <a href="https://buy.simplex.com/" target="_blank" class="sub-title">
              <span class="top">
                <img src="@/assets/images/logo-simplex.jpeg" class="svg-img h-full" alt="">Simplex</span>
            </a>
            <a href="https://www.coinbase.com/" target="_blank" class="sub-title">
              <span class="top"><img src="@/assets/images/logo-coinbase.jpeg" class="svg-img h-full"  alt="">Coinbase</span>
            </a>
            <a href="https://www.kraken.com/" target="_blank" class="sub-title">
              <span class="top"><img src="@/assets/images/logo-mkraken.jpeg" class="svg-img h-full" alt="">Kraken</span>
            </a>
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
        <router-link to="/follow/index" custom v-slot="{ navigate }">
          <li class="tab" @click="navigate">{{ $t('header.copyTrading') }}</li>
        </router-link>

        <!-- Wealth Management -->
        <li class="tab">
          {{ $t('header.strategy') }}
          <van-icon name="play" class="down-triangle" />
          <div class="sub-list">
            <router-link to="/web3/index" class="sub-title">
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

      <!-- Wallet Menu -->
      <div class="icon-menu-item group relative mr-4">
        <div class="iconfont text-[18px] cursor-pointer hover:text-[#00f0ff]">&#xe829;</div>
        <!-- Dropdown -->
        <div class="sub-list w-[200px]! p-[6px]!">
             <router-link to="/assets/index?tab=asset_overview" class="sub-title">
                <span class="top"><div class="iconfont">&#xe922;</div>{{ $t('header.assetCenter') }}</span>
             </router-link>
             
             <router-link to="/assets/recharge" class="sub-title">
               <span class="top"><div class="iconfont">&#xe920;</div>{{ $t('header.recharge') }}</span>
             </router-link>
             <router-link to="/assets/withdraw" class="sub-title">
               <span class="top"><div class="iconfont">&#xe921;</div>{{ $t('header.withdraw') }}</span>
             </router-link>
             <router-link to="/assets/index?tab=transfer" class="sub-title">
               <span class="top"><div class="iconfont">&#xe923;</div>{{ $t('header.transfer') }}</span>
             </router-link>
             <router-link to="/assets/index?tab=order_center" class="sub-title">
               <span class="top"><div class="iconfont">&#xe926;</div>{{ $t('header.orderCenter') }}</span>
             </router-link>
             <router-link to="/assets/address" class="sub-title">
               <span class="top"><div class="iconfont">&#xe928;</div>{{ $t('header.addressBook') }}</span>
             </router-link>
        </div>
      </div>

      <!-- User Menu -->
      <div class="icon-menu-item group relative mr-4">
        <div class="iconfont text-[16px] cursor-pointer hover:text-[#00f0ff]">&#xe660;</div>
         <!-- Dropdown -->
        <div class="sub-list w-[280px]! p-[12px]!">
             <!-- User Info -->
             <div class="flex items-start mb-4 px-2">
               <img src="@/assets/images/ai-logo2.png" class="w-10 h-10 rounded-full mr-3 border border-[#333]" onerror="this.src='/favicon.ico'">
               <div class="flex-1">
                 <div class="flex items-center mb-1">
                   <span class="text-white text-sm mr-2">0x67*****88c2</span>
                   <span class="bg-gradient-to-r from-[#FAD961] to-[#F76B1C] text-[10px] text-black px-1 rounded font-bold italic">VIP0</span>
                 </div>
                 <div class="text-[#848E9C] text-xs mb-2">UID:775889</div>
                 
                 <!-- Credit Score -->
                 <div class="bg-[#2B2F36] rounded p-2 flex items-center justify-between border border-[#373b45]">
                    <span class="text-[#848E9C] text-xs">{{ $t('header.creditScore') }} 100</span>
                 </div>
               </div>
             </div>
             
             <div class="h-[1px] bg-[#2B2F36] my-2"></div>
             
             <!-- List -->
             <div>
                <div class="sub-title" @click="showModal = true">
                   <span class="top"><div class="iconfont">&#xe927;</div>{{ $t('header.setFundPassword') }}</span>
                </div>
                <router-link to="/customer/index" class="sub-title">
                   <span class="top"><div class="iconfont">&#xe925;</div>{{ $t('header.shareFriends') }}</span>
                </router-link>
                <div class="sub-title" @click="handleLogout">
                   <span class="top"><div class="iconfont">&#xe924;</div>{{ $t('header.logout') }}</span>
                </div>
             </div>
        </div>
      </div>


      <div class="line mx-[10px] mr-[30px]"></div>

      <div class="iconfont text-[18px] mr-[16px]">&#xe694;</div>

      <div class="iconfont text-[18px] mr-[16px]" @click="router.push('/notices')">&#xe605;</div>

      <!-- Language Selector -->
      <LanguageSelector>
        <template #default>
          <div class="iconfont text-[20px]">&#xe640;</div>
        </template>
      </LanguageSelector>
    </div>
  </header>
  
  <FundPasswordModal v-model:show="showModal" @confirm="handleSetPassword" />
  
  </div>
</template>

<script setup lang="ts">
import LanguageSelector from '@/components/LanguageSelector.vue'
import FundPasswordModal from '@/components/FundPasswordModal.vue'
import { useRouter, useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const router = useRouter()
const route = useRoute()

const isNFT = computed(() => route.path === '/nft/index')

const showModal = ref(false)

const handleSetPassword = (pwd: string) => {
  console.log('Set password:', pwd)
  // Implement API call here
  showModal.value = false
}

const handleLogout = () => {
    // Implement Logout logic
    console.log('Logout')
}
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
  .tab-item {
    height: 32px;
    min-width: 50px;
    padding-left: 1vw;
    padding-right: 1vw;
    text-align: center;
    line-height: 32px;
    &.active  {
      background-color: rgb(26, 27, 36);
      color: rgb(255, 255, 255);
    }
  }
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
  .tab {
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
    &:hover .sub-list {
      visibility: visible;
      top: 50px;
      opacity: 1;
    }
    &:hover .down-triangle {
      transform: rotate(270deg);
    }
  }
  .down-triangle {
    margin-left: 4px;
    display: inline-flex;
    transform: rotate(90deg);
    transition: all 0.3s;
    color: rgb(255, 255, 255);
    font-size: 10px;
  }
}

/* Shared Sub-list Styles */
.sub-list {
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
  
  .sub-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    white-space: pre-wrap;
    padding: 10px 20px;
    line-height: 15px;
    cursor: pointer;
    &:hover {
      background: linear-gradient(90deg, #00e3ff, #089);
      border-radius: 0.375rem;
      .top, .bottom, .iconfont {
        color: rgb(0, 0, 0) !important;
        fill: rgb(0, 0, 0) !important;
      } 
    }
    .top {
      margin-bottom: 5px;
      height: 24px;
      display: flex;
      align-items: center;
      text-align: left;
      font-size: 16px;
      color: rgb(255, 255, 255);
      font-weight: 500;
      .svg-img {
        margin-right: 10px;
        fill: rgb(255, 255, 255);
      }
      .iconfont {
        font-size: 22px;
        margin-right: 10px;
        color: #fff;
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      padding-left: 34px;
      text-align: left;
      font-size: 12px;
      color: rgb(136, 136, 136);
      line-height: 14px;
    }
  }
}

.icon-menu-item {
  &:hover .sub-list {
    visibility: visible;
    top: 56px; /* Adjust based on header height 56px */
    opacity: 1;
  }
  .sub-list {
    left: auto;
    right: 0; /* Align right for icon menus */
    top: 66px; /* Start slightly lower for transition effect */
  }
}

</style>

