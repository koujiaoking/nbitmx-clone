<template>
  <div class="follow-page bg-black min-h-screen text-white w-full overflow-x-hidden">
    <div class="max-w-[1351px] mx-auto pt-[10px] px-4">
      
      <!-- Top Title Area - Desktop -->
      <div v-if="isDesktop" class="title_wrap" mymode="true">
        <div class="top_title">
          <span class="main-title theme-color">{{ $t('follow.tabs.myCopyTrading') }}</span>
          <div class="title_sec">
            <span class="name">
              {{ $t('follow.myTotalIncome') }} 
              <van-icon name="eye-o" color="rgb(0, 240, 255)" size="25px" />
            </span>
            <div class="title_num">
              <div class="row1"><span>0</span><span> USDT</span></div>
              <div class="row2"><span>{{ $t('follow.today') }}</span><span>0</span></div>
            </div>
          </div>
        </div>
        <div class="right-con-1 cursor-pointer" @click="router.push('/follow')">
          <img src="@/assets/images/icon-order.svg" class="w-5 h-5 mr-1" alt="" />
          <span>{{ $t('common.back') }}</span>
        </div>
      </div>

      <!-- Top Title Area - Mobile -->
      <div v-if="isMobile" class="total-box">
        <div class="top items-center">
          <div class="left">
            <div class="name">
              {{ $t('follow.myTotalIncome') }} 
              <van-icon name="eye-o" color="rgb(0, 240, 255)" size="25px" />
            </div>
            <span class="num font20">0</span>
            <span class="gray font16">USDT</span>
            <p class="green font14">
              <span class="gray">{{ $t('follow.today') }}</span>
              0
            </p>
          </div>
          <div class="right">
            <img src="@/assets/images/icon-order-big.svg" alt="" />
          </div>
        </div>
        <div class="button" @click="router.push('/follow')">
          <img src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.16667%205.83317H10.8333V14.1665H9.16667V5.83317ZM12.5%209.1665H14.1667V14.1665H12.5V9.1665ZM5.83333%2010.8332H7.5V14.1665H5.83333V10.8332ZM12.5%203.33317H4.16667V16.6665H15.8333V6.6665H12.5V3.33317ZM2.5%202.493C2.5%202.03655%202.87291%201.6665%203.33208%201.6665H13.3333L17.4998%205.83317L17.5%2017.4936C17.5%2017.9573%2017.1292%2018.3332%2016.6722%2018.3332H3.32783C2.87063%2018.3332%202.5%2017.9538%202.5%2017.5067V2.493Z'%20fill='white'/%3e%3c/svg%3e" alt="" />
          {{ $t('common.back') }}
        </div>
      </div>

      <!-- Tabs -->
      <div class="mt-[15px]">
        <van-tabs 
          v-model:active="activeCategory" 
          shrink 
          background="transparent" 
          line-width="40px" 
          line-height="2px"
          color="#ffffff"
          title-active-color="#ffffff"
          title-inactive-color="#888888"
          :border="false"
          class="custom-tabs"
        >
          <van-tab 
            v-for="cat in categories" 
            :key="cat.id" 
            :name="cat.id" 
            :title="$t(cat.label)" 
          />
        </van-tabs>
        <div class="tabs-btootm-border"></div>
      </div>

      <!-- Trader List -->
      <ul class="flex flex-wrap py-[30px] min-h-[480px] gap-[30px] w-full justify-center lg:justify-start">
        <li v-for="trader in filteredTraders" :key="trader.id">
          <div class="item follow-box-base">
            
            <!-- Header -->
            <div class="item_top">
              <div class="item_top_left">
                <img class="avatar" :src="trader.avatar" />
                <div class="item_name">
                  <div class="item_name_level">
                    <span>{{ trader.name }}</span>
                    <span class="user_level">{{ trader.level }}</span>
                  </div>
                  <div class="item_name_total">
                    <!-- Icon User -->
                    <img src="@/assets/images/icon-user.svg" class="icon-group" alt="">
                    <span>{{ trader.followers }} <span class="total_all">/{{ trader.maxFollowers }}</span></span>
                  </div>
                </div>
              </div>
              <button class="follow_btn" @click="$router.push(`/follow/detail/${trader.id}`)">{{ $t('follow.trader.copyTrade') }}</button>
            </div>

            <!-- Stats Middle -->
            <div class="flex items-start justify-between mt-[10px]">
              <div class="flex-1">
                <p class="text-[#888] fw-400 text-left">{{ $t('follow.trader.roi') }}</p>
                <p class="text-[#00F0FF] fw-400 text-[22px] text-left"> +{{ trader.pnl }}% </p>
              </div>
              <div class="flex-1">
                <p class="text-[#888] fw-400 text-center">{{ $t('follow.trader.days') }}</p>
                <p class="text-[#00F0FF] fw-400 text-[22px] text-center">{{ trader.days }}</p>
              </div>
              <div class="flex-1">
                <p class="text-[#888] fw-400 text-right">{{ $t('follow.trader.apy') }}</p>
                <p class="color-white fw-400 text-[22px] text-right">{{ trader.apy }}% </p>
              </div>
            </div>

            <!-- Chart -->
            <div class="my-[15px] overflow-hidden">
              <div class="mx-auto" style="width: 370px; height: 60px;">
                <svg width="370" height="60" viewBox="0 0 370 60" class="block">
                  <defs>
                     <linearGradient :id="'dark-gradient-' + trader.id" x1="0.5" y1="0" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop stop-color="#2E3866"></stop>
                        <stop offset="1" stop-color="#040610"></stop>
                     </linearGradient>
                     <linearGradient :id="'light-gradient-' + trader.id" x1="0.5" y1="0" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop stop-color="#00F0FF"></stop>
                        <stop offset="1" stop-color="#6F78C9"></stop>
                     </linearGradient>
                  </defs>
                  <!-- Background Bars -->
                  <rect 
                     v-for="(item, i) in trader.chart" 
                     :key="'bg-' + i"
                     :x="i * (370 / trader.chart.length)"
                     :y="60 - (item.bg / 100 * 60)" 
                     :width="(370 / trader.chart.length) - 2"
                     :height="(item.bg / 100 * 60)"
                     :fill="'url(#dark-gradient-' + trader.id + ')'"
                     class="spectrum-bar"
                  />
                  <!-- Foreground Bars -->
                  <rect 
                     v-for="(item, i) in trader.chart" 
                     :key="'fg-' + i"
                     :x="i * (370 / trader.chart.length)"
                     :y="60 - (item.val / 100 * 60)" 
                     :width="(370 / trader.chart.length) - 2"
                     :height="(item.val / 100 * 60)"
                     :fill="'url(#light-gradient-' + trader.id + ')'"
                     style="transition: height 0.3s, y 0.3s;"
                  />
                </svg>
              </div>
            </div>

            <!-- Bottom Stats -->
            <div class="item_bottom">
              <div class="text-[#888]">
                <span>{{ $t('follow.trader.winRate') }}</span>
                <span class="text-white">{{ trader.winRate }}% </span>
                <span class="ml-2">{{ $t('follow.trader.scale') }}</span>
                <span class="text-white">{{ trader.scale }}</span>
              </div>
            </div>

          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useDevice } from '@/composables/useDevice'

const router = useRouter()
const { isMobile, isDesktop } = useDevice()

const activeMainTab = ref<'plaza' | 'following'>('plaza')

const categories = [
  { id: 'all', label: 'follow.categories.all' },
  { id: 'options', label: 'follow.categories.options' },
  { id: 'futures', label: 'follow.categories.futures' },
  { id: 'spot', label: 'follow.categories.spot' }
]
const activeCategory = ref('all')

const filters = [
  { id: 'all', label: 'follow.filters.all' },
  { id: 'high_yield', label: 'follow.filters.highYield' },
  { id: 'stable', label: 'follow.filters.stable' },
  { id: 'low_risk', label: 'follow.filters.lowRisk' },
  { id: 'new_stars', label: 'follow.filters.newStars' }
]
const activeFilter = ref('all')

const generateChart = (count: number) => {
    return Array.from({ length: count }, () => {
        const val = Math.floor(Math.random() * 60) + 20 
        const bg = Math.min(100, val + Math.floor(Math.random() * 20))
        return { val, bg }
    })
}

const traders = [
  { 
    id: 1, 
    name: 'CryptoMarshal', 
    level: 'LV.8',
    pnl: '12', 
    days: '2',
    apy: '68',
    winRate: '92.17', 
    scale: '2,962,963',
    followers: 669,
    maxFollowers: 1000,
    avatar: 'https://i.pravatar.cc/150?u=1', 
    chart: generateChart(46),
    type: 'high_yield'
  },
  { 
    id: 2, 
    name: 'EtherPulse', 
    level: 'LV.7',
    pnl: '35', 
    days: '2',
    apy: '28',
    winRate: '95.25', 
    scale: '236,897',
    followers: 848,
    maxFollowers: 1000,
    avatar: 'https://i.pravatar.cc/150?u=2', 
    chart: generateChart(46),
    type: 'stable'
  },
  { 
    id: 3, 
    name: 'SolNav', 
    level: 'LV.9',
    pnl: '687', 
    days: '7',
    apy: '177',
    winRate: '93.75', 
    scale: '296,297',
    followers: 670,
    maxFollowers: 1000,
    avatar: 'https://i.pravatar.cc/150?u=3', 
    chart: generateChart(46),
    type: 'high_yield'
  },
  { 
    id: 4, 
    name: 'SuiBuilder', 
    level: 'LV.9',
    pnl: '35', 
    days: '7',
    apy: '68',
    winRate: '83.58', 
    scale: '30,000',
    followers: 553,
    maxFollowers: 1000,
    avatar: 'https://i.pravatar.cc/150?u=4', 
    chart: generateChart(46),
    type: 'low_risk'
  },
  { 
    id: 5, 
    name: 'BNBGrid', 
    level: 'LV.9',
    pnl: '67', 
    days: '7',
    apy: '88',
    winRate: '95.33', 
    scale: '2,293,315',
    followers: 1161,
    maxFollowers: 5000,
    avatar: 'https://i.pravatar.cc/150?u=5', 
    chart: generateChart(46),
    type: 'stable'
  }
]

const filteredTraders = computed(() => {
  if (activeFilter.value === 'all') {
    return traders
  }
  return traders.filter(t => t.type === activeFilter.value)
})
</script>

<style scoped lang="less">
/* Copied from fllowView.css */

.desktop-only {
  display: flex;
}

.mobile-only {
  display: none;
}

.title_wrap {
    border: 1px solid #3c3e53;
    padding: 0 16px 0 20px;
    margin-left: auto;
    margin-right: auto;
    width: 1315px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 9999px;
    --un-text-opacity: 1;
    color: rgb(236 236 255 / var(--un-text-opacity));
}

.top_title {
    display: flex;
    align-items: center;
}

.main-title {
    font-size: 24px;
    font-weight: bold;
}

.title_sec {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: 60px;
    &:before {
      content: "";
      position: absolute;
      left: -30px;
      height: 14px;
      width: 2px;
      background-color: #363751;
    }
}

.name {
    display: flex;
    flex-wrap: initial;
    flex-direction: initial;
    align-items: center;
    justify-content: initial;
    gap: 8px;
}

.title_num {
    margin-left: 20px;
}

.row1 {
  &:nth-child(1) {
    color: #fff;
      line-height: 24px;
      font-size: 20px
  }
  &:nth-child(2) {
    color: #848e9c;
    line-height: 24px;
    font-size: 16px
}
}

.row2 {
    &:nth-child(1) {
    color: #848e9c;
    line-height: 14px;
    font-size: 14px
}
&:nth-child(2) {
    color: #00f0ff;
    line-height: 14px;
    font-size: 14px
}
}

.right-con-1 {
  display: flex;
  align-items: center;
  border-radius: 9999px;
  background-color: transparent;
  padding: 10px 26px;
  font-size: 14px;
  --un-text-opacity: 1;
  color: rgb(255 255 255 / var(--un-text-opacity));
}

.item {
    position: relative;
    flex: none
}

.item .item_top {
    display: flex;
    align-items: center;
    justify-content: space-between
}

.item .item_top_left {
    display: flex;
    align-items: center;
    justify-content: center
}

.item .item_top_left .item_name .item_name_level span:nth-child(1) {
    --un-text-opacity: 1;
    color: rgb(0 240 240 / var(--un-text-opacity));
    line-height: 1
}

.item .item_top_left .item_name .item_name_level .user_level {
    background: linear-gradient(270deg,#fcdf7b,#f9cd4e);
    font-weight: 600
}

.item .item_top_left .item_name .item_name_total {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    line-height: 1
}

.item .item_top_left .item_name .item_name_total .total_all {
    color: #888
}

.item .follow_btn {
    cursor: pointer;
    border-style: none;
    --un-bg-opacity: 1;
    background-color: rgb(0 240 255 / var(--un-bg-opacity));
    --un-text-opacity: 1;
    color: rgb(0 0 0 / var(--un-text-opacity));
    line-height: 1
}

.item .item_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    --un-bg-opacity: 1;
    background-color: rgb(29 29 36 / var(--un-bg-opacity))
}

.item .disabled {
    background: #979797
}

.item .watch {
    background: #1778f1
}

.item .follow {
    background: #00f0ff
}

.item .following {
    border: 1px solid #00f0ff;
    background: #00a60966;
    --un-text-opacity: 1;
    color: rgb(0 221 12 / var(--un-text-opacity))
}

@media screen and (max-width: 992px) {
    .desktop-only {
      display: none !important;
    }

    .mobile-only {
      display: flex !important;
    }

    .total-box {
      border: 1px solid #3c3e53;
      margin-left: auto;
      margin-right: auto;
      margin-top: 3.2vw;
      margin-bottom: 3.2vw;
      width: 86vw;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      border-radius: 2vw;
      --un-bg-opacity: 1;
      background-color: rgb(11 11 13 / var(--un-bg-opacity));
      padding: 4.2vw;
    }

    .total-box .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .total-box .top .left {
      line-height: 1.5;
    }

    .total-box .top .left .name {
      color: var(--font-color-main, #EAECEF);
      display: flex;
      align-items: center;
      gap: 2.13333vw;
    }

    .total-box .top .left .num {
      font-size: 5.33333vw;
    }

    .total-box .top .right {
      display: flex;
      align-items: center;
      width: 20.26667vw;
      height: 20.26667vw;
    }

    .total-box .top .green {
      color: var(--font-win, #0ECB81);
    }

    .total-box .top .gray {
      color: var(--font-color3-pc, #848E9C) !important;
    }

    .total-box .button {
      margin-top: 5.33333vw;
      height: 10.66667vw;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--border-color1, #3c3e53);
      background-color: var(--content-bg, #0B0E11);
      border-radius: 266.4vw;
      color: var(--font-color-main, #EAECEF);
      gap: 1.06667vw;
      cursor: pointer;
    }

    .font20 {
      font-size: 5.33333vw;
      color: #fff;
    }

    .font16 {
      font-size: 4.26667vw;
      color: #848E9C;
      margin-left: 1vw;
    }

    .font14 {
      font-size: 3.73333vw;
    }

    .item {
        margin-bottom:3vw;
        width: 84vw;
        padding: 4vw 5vw 2vw
    }

    .item .avatar {
        margin-right: 2vw;
        width: 10vw;
        height: 10vw;
        border-radius: 9999px
    }

    .item .item_name {
        height: 11vw
    }

    .item .item_name .item_name_level span:nth-child(1) {
        font-size: 4.2vw
    }

    .item .item_name .item_name_level .user_level {
        margin-left: 1.6vw;
        height: .65rem;
        border-radius: 26vw;
        padding: .5vw 1.3vw;
        font-size: 2.6vw;
        --un-text-opacity: 1;
        color: rgb(0 0 0 / var(--un-bg-opacity))
    }

    .item .item_name .item_name_total {
        margin-top: 2vw;
        font-size: 3.2vw
    }

    .item .item_name .item_name_total .icon-group {
        width: 3.2vw;
        height: 3.2vw
    }

    .item .follow_btn {
        width: 21vw;
        height: 9.6vw;
        border-radius: 26.6vw
    }

    .item .following {
        font-size: 3.2vw
    }

    .item .item_bottom {
        margin-top: 1vw;
        height: 8vw;
        border-radius: 4vw;
        padding: 1vw 3vw
    }

    .item .item_bottom>div {
        font-size: 3.2vw
    }

    .item .item_bottom>div>span:nth-child(2) {
        margin-left: 1.3vw;
        margin-right: 2.6vw
    }

    .item .item_bottom>div>span:nth-child(4) {
        margin-left: 1.3vw
    }

    .follow-box-base {
        border: 1px solid #3c3e53;
        border-radius: 2vw;
        --un-bg-opacity: 1;
        background-color: rgb(11 11 13 / var(--un-bg-opacity))
    }
}

@media screen and (min-width: 992px) {
    .item {
        width:388px;
        // height: 227px;
        border-radius: 18px;
        padding: 20px
    }

    .item .avatar {
        margin-right: 10px;
        width: 40px;
        height: 40px;
        border-radius: 9999px
    }

    .item .item_name .item_name_level span:nth-child(1) {
        font-size: 18px
    }

    .item .item_name .item_name_level .user_level {
        margin-left: 6px;
        width: 33px;
        height: 18px;
        border-radius: 100px;
        padding: 2px 6px;
        font-size: 14px;
        --un-text-opacity: 1;
        color: rgb(160 115 0 / var(--un-text-opacity))
    }

    .item .item_name .item_name_total {
        margin-top: 2px;
        font-size: 14px
    }

    .item .item_name .item_name_total .icon-group {
        width: 14px;
        height: 14px
    }

    .item .follow_btn {
        width: 80px;
        height: 40px;
        border-radius: 100px
    }

    .item .following {
        font-size: 14px
    }

    .item .item_bottom {
        margin-top: 4px;
        height: 30px;
        border-radius: 15px;
        padding: 5px 11px
    }

    .item .item_bottom>div {
        font-size: 12px
    }

    .item .item_bottom>div>span:nth-child(2) {
        margin-left: 5px;
        margin-right: 10px
    }

    .item .item_bottom>div>span:nth-child(4) {
        margin-left: 5px
    }

    .follow-box-base {
        border-radius: 18px;
        --un-bg-opacity: 1;
        background-color: rgb(18 20 30 / var(--un-bg-opacity))
    }
}


</style>
