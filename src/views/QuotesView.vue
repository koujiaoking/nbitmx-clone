<template>
  <div class="quotes-page bg-[#0a0a0f] min-h-screen text-white font-sans" :class="isMobile ? 'pb-24 pt-4' : 'pt-[60px] pb-[100px]'">
    <div :class="isMobile ? 'w-full px-4' : 'mx-auto w-[1360px] max-w-full px-4 sm:px-6 lg:px-8'">
      
      <!-- ================= MOBILE VIEW ================= -->
      <template v-if="isMobile">
        <!-- Search Bar -->
        <div class="mb-4">
             <div class="flex items-center bg-[#1D1E29] rounded-full h-10 px-3 border border-gray-800">
                <van-icon name="search" class="text-gray-500 mr-2 text-lg" />
                <input type="text" placeholder="搜尋" class="bg-transparent border-none outline-none text-white flex-1 text-sm placeholder-gray-600 font-bold" />
             </div>
        </div>

        <!-- Title -->
        <div class="flex items-center gap-2 mb-4">
             <img src="@/assets/images/title-hq.png" class="w-5 h-5" />
             <h1 class="text-xl font-bold">市場行情</h1>
        </div>

        <!-- Custom Tabs (Pill Style) -->
        <div class="mb-4">
           <van-tabs v-model:active="activeTab" 
                     background="transparent" 
                     title-active-color="#000" 
                     title-inactive-color="#888" 
                     color="#00f0ff"
                     type="card"
                     :border="false"
                     class="custom-mobile-tabs"
           >
             <van-tab title="Web3" name="web3"></van-tab>
             <van-tab title="美股" name="stocks"></van-tab>
             <van-tab title="期權" name="options"></van-tab>
             <van-tab title="現貨" name="spot"></van-tab>
           </van-tabs>
        </div>

        <!-- Column Headers -->
        <div class="flex justify-between text-xs text-gray-500 mb-2 px-1">
            <span>幣種</span>
            <div class="flex gap-14">
               <span>最新價格</span>
               <span>24h波動</span>
            </div>
        </div>
        
        <!-- Mobile List -->
        <div class="space-y-0">
             <div v-for="coin in marketData" :key="coin.symbol" class="flex items-center justify-between py-4 border-b border-white/5 active:bg-white/5 transition-colors" @click="router.push(`/quotes/detail?symbol=${coin.symbol}`)">
                 <!-- Left: Icon + Symbol/Pair -->
                 <div class="flex items-center gap-3">
                     <img :src="coin.icon" class="w-8 h-8 rounded-full" @error="handleImageError" />
                     <div class="flex flex-col">
                         <span class="font-bold text-base text-white leading-tight">{{ coin.symbol }}</span>
                         <span class="text-xs text-gray-400 font-medium scale-90 origin-left mt-0.5">{{ coin.symbol }}<span class="text-gray-600">/USDT</span></span>
                     </div>
                 </div>
                 
                 <!-- Right: Price + Change Button -->
                 <div class="flex items-center gap-4">
                     <div class="text-right">
                         <p class="font-bold text-base text-white tracking-wide">{{ coin.price }}</p>
                         <p class="text-xs text-gray-500 scale-90 origin-right mt-0.5">{{ coin.price }}</p>
                     </div>
                     <div class="w-[75px] h-[32px] flex items-center justify-center rounded-[4px] text-xs font-bold" 
                          :class="coin.change >= 0 ? 'bg-[#e94242]/10 text-[#e94242]' : 'bg-[#2ebd85]/10 text-[#2ebd85]'"
                          style="background-color: transparent">
                          <!-- Note: Live site often uses Red/Green background buttons. Adjusting to match screenshot if needed. 
                               Actually, standard trading apps use Green/Red text or buttons. 
                               Let's match the common style: Green for Up, Red for Down.
                               Wait, Asian style is often Red=Up, Green=Down. Nbitmx seems to be international (Green=Up).
                           -->
                          <span class="block text-center w-full h-full leading-[32px] rounded text-white"
                                :class="coin.change < 0 ? 'bg-[#ff3b30]' : 'bg-[#00b42a]'">
                              {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
                          </span>
                     </div>
                 </div>
             </div>
        </div>
      </template>

      <!-- ================= DESKTOP VIEW ================= -->
      <template v-else>
        <h1 class="h-[45px] font-bold text-[30px] leading-[45px] text-white mb-[20px]">{{ $t('quotes.title') }}</h1>
        
        <!-- Top Cards: Gain Ranking & Popular Currencies -->
        <div class="flex flex-col lg:flex-row items-stretch justify-between mt-[50px] gap-[50px]">
          <!-- Gain Ranking -->
          <div class="w-full lg:w-1/2 px-[20px] py-[26px] box-border rounded-[12px] border border-[#31323f]">
            <div class="font-bold text-[20px]">{{ $t('quotes.gainRanking') }}</div>
            <div class="flex flex-wrap items-start justify-start mt-[20px]">
              <div v-for="coin in gainRankings" :key="coin.symbol" class="w-1/2 my-[9px] flex items-center justify-start font-bold text-[15px] px-[15px] box-border">
                <div class="w-1/3 flex items-center justify-start">
                  <img :src="coin.icon" class="w-[24px] h-[24px] mr-[9px] rounded-full" :alt="coin.symbol">
                  <div>{{ coin.symbol }}</div>
                </div>
                <div class="w-1/3">${{ coin.price }}</div>
                <div class="text-right w-1/3 text-[#00f0ff]">+{{ coin.change }}%</div>
              </div>
            </div>
          </div>

          <!-- Popular Currencies -->
          <div class="w-full lg:w-1/2 px-[20px] py-[26px] box-border rounded-[12px] border border-[#31323f]">
            <div class="font-bold text-[20px]">{{ $t('quotes.popularCurrencies') }}</div>
            <div class="flex flex-wrap items-start justify-start mt-[20px]">
              <div v-for="coin in popularCoins" :key="coin.symbol" class="w-1/2 my-[9px] flex items-center justify-start font-bold text-[15px] px-[15px] box-border">
                <div class="w-1/3 flex items-center justify-start">
                  <img :src="coin.icon" class="w-[24px] h-[24px] mr-[9px] rounded-full" :alt="coin.symbol">
                  <div>{{ coin.symbol }}</div>
                </div>
                <div class="w-1/3">${{ coin.price }}</div>
                <div class="text-right w-1/3" :class="coin.change >= 0 ? 'text-[#00f0ff]' : 'text-[#ff4834]'">
                  {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop Tabs and Search -->
        <div class="tab-base mt-[42px] flex items-center justify-between">
          <div class="cm-tabs-container flex-1">
             <van-tabs v-model:active="activeTab" background="transparent" title-active-color="#fff" title-inactive-color="#888" line-width="50px" line-height="2px" color="#fff" :border="false" shrink>
               <van-tab :title="$t('quotes.tabOptional')" name="optional"></van-tab>
               <van-tab :title="$t('quotes.tabSpot')" name="spot"></van-tab>
               <van-tab :title="$t('quotes.tabContract')" name="contract"></van-tab>
               <van-tab :title="$t('quotes.tabOptions')" name="options"></van-tab>
             </van-tabs>
          </div>
          <div class="search w-[260px] h-[32px] flex items-center rounded-full border border-[#31323f] bg-[#12141E] px-[10px] ml-4">
            <input type="text" :placeholder="$t('quotes.search')" class="bg-transparent border-none text text-[#eaeae7] flex-1 ml-2 focus:outline-none placeholder-[#5e5e7a]">
          </div>
        </div>

        <!-- Desktop Table -->
        <div class="crypto-table mt-[20px] font-sans">
          <!-- Header -->
          <div class="table-header flex border-b border-[#31323f] h-[51px] text-[14px] font-black items-center text-[#eee] uppercase">
            <div class="header-cell name flex-[1.6]">{{ $t('quotes.marketing') }}</div>
            <div class="header-cell flex-1 text-right">{{ $t('quotes.latestPrice') }}</div>
            <div class="header-cell flex-1 text-right">{{ $t('quotes.change24h') }}</div>
            <div class="header-cell flex-1 text-right">{{ $t('quotes.low24h') }}</div>
            <div class="header-cell flex-1 text-right">{{ $t('quotes.high24h') }}</div>
            <div class="header-cell flex-1 text-right">{{ $t('quotes.volume24h') }}</div>
            <div class="header-cell flex-1 text-right">{{ $t('quotes.amount24h') }}</div>
            <div class="header-cell flex-1 text-right">{{ $t('quotes.operation') }}</div>
          </div>

          <!-- Body -->
          <div class="table-body text-[15px] font-normal">
            <div v-for="coin in marketData" :key="coin.symbol" class="table-row flex h-[83px] items-center border-b border-[#31323f] cursor-pointer hover:bg-[#1a1b26] transition-colors">
              <div class="row-cell name flex-[1.6] flex items-center">
                <div class="collection svg-container icon-star w-[16px] mr-[11px] fill-[#888]">
                   <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.6673 6.73362C14.734 6.40028 14.4673 6.00028 14.134 6.00028L10.334 5.46695L8.60065 2.00028C8.53398 1.86695 8.46732 1.80028 8.33398 1.73362C8.00065 1.53362 7.60065 1.66695 7.40065 2.00028L5.73398 5.46695L1.93398 6.00028C1.73398 6.00028 1.60065 6.06695 1.53398 6.20028C1.26732 6.46695 1.26732 6.86695 1.53398 7.13362L4.26732 9.80028L3.60065 13.6003C3.60065 13.7336 3.60065 13.867 3.66732 14.0003C3.86732 14.3336 4.26732 14.467 4.60065 14.267L8.00065 12.467L11.4007 14.267C11.4673 14.3336 11.6007 14.3336 11.734 14.3336C11.8007 14.3336 11.8007 14.3336 11.8673 14.3336C12.2007 14.267 12.4673 13.9336 12.4007 13.5336L11.734 9.73362L14.4673 7.06695C14.6007 7.00028 14.6673 6.86695 14.6673 6.73362Z"></path></svg>
                </div>
                <img :src="coin.icon" class="w-[23px] h-[23px] mr-[9px] rounded-full object-cover">
                <span class="full-name font-bold text-white">{{ coin.symbol }}</span>
              </div>
              <div class="row-cell flex-1 text-right" :class="coin.change >= 0 ? 'text-[#00f0ff]' : 'text-[#ff4834]'">{{ coin.price }}</div>
              <div class="row-cell flex-1 text-right" :class="coin.change >= 0 ? 'text-[#00f0ff]' : 'text-[#ff4834]'">{{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%</div>
              <div class="row-cell flex-1 text-right text-white">{{ coin.low }}</div>
              <div class="row-cell flex-1 text-right text-white">{{ coin.high }}</div>
              <div class="row-cell flex-1 text-right text-white">{{ coin.volume }}</div>
              <div class="row-cell flex-1 text-right text-white">{{ coin.amount }}</div>
              <div class="row-cell flex-1 text-right">
                <span class="trade-btn inline-flex items-center justify-center w-[73px] h-[30px] rounded-full border border-[#84849f] bg-[#12141E] px-[15px] text-[12px] text-white hover:border-0 hover:bg-gradient-to-b from-[#6491e9] to-[#556dea] transition-all cursor-pointer">
                  {{ $t('quotes.trading') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </template>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDevice } from '@/composables/useDevice'

const { isMobile } = useDevice()
const router = useRouter()
const activeTab = ref(0)
/* const searchText = ref('') */ // Removed unused var if not used in template

const handleImageError = (e: Event) => {
    const target = e.target as HTMLImageElement
    target.style.display = 'none' // Hide broken images or set fallback
}

const gainRankings = [
  { symbol: 'POL', price: '0.1119', change: 8.22, icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0f3fdbbc11bfd40b590beeb90251b0f20.png' },
  { symbol: 'RENDER', price: '1.613', change: 6.61, icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0384c09bc0c39493fbd6be91cdfefd67f.png' },
  { symbol: 'TAO', price: '202.40', change: 6.58, icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0aa02eab588ce4116932d37585738c056.png' },
  { symbol: 'HBAR', price: '0.094', change: 5.84, icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0f22860b22a004d0fb821c01e6a564432.png' },
  { symbol: 'ALGO', price: '0.1072', change: 5.72, icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.090101ccbffbd41cbb966c69b134671c8.png' },
  { symbol: 'NEAR', price: '1.234', change: 5.38, icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.047ed67eb6c284c9e97a0a6aedebaccb8.png' },
]

const popularCoins = [
  { symbol: 'USDC', price: '1.0004', change: -0.03, icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0102bdf74091a473cbaa330641ad32c45.png' },
  { symbol: 'TRX', price: '0.2845', change: 0.07, icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.05938baf3249e440892fdc8f1409a0bc1.png' },
  { symbol: 'ARB', price: '0.1393', change: 1.31, icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.059d7c8946a88403db8cd14ed9c43dc75.png' },
  { symbol: 'BTC', price: '78,936.99', change: 1.68, icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0b96195d4f367459fbaac66fd39462aa1.png' },
  { symbol: 'OP', price: '0.2339', change: 2.41, icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.09c1b57c5b7f6443da080ba0406ae383a.png' },
  { symbol: 'ETH', price: '2,375.26', change: 2.64, icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0680cf64887f44f3fa7a8b55e243b7597.png' },
]

const marketData = ref([
  { symbol: 'BTC', pair: '/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0b96195d4f367459fbaac66fd39462aa1.png', price: '78,936.99', change: -1.68, low: '74,604.00', high: '79,360.00', volume: '46K', amount: '3.6B' },
  { symbol: 'ETH', pair: '/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0680cf64887f44f3fa7a8b55e243b7597.png', price: '2,375.26', change: -2.64, low: '2,157.14', high: '2,396.62', volume: '1.5M', amount: '3.6B' },
  { symbol: 'XRP', pair: '/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.057766c08906d48919834927082eb7043.png', price: '1.6484', change: -3.35, low: '1.5307', high: '1.6571', volume: '253M', amount: '418M' },
  { symbol: 'BNB', pair: '/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0ca54a58bb2f4465a9f4ef3f2effdb0b3.png', price: '777.10', change: -2.92, low: '728.44', high: '781.58', volume: '340K', amount: '264M' },
  { symbol: 'SOL', pair: '/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0dce5c5137d3f4803b8a8606140150057.png', price: '105.37', change: -3.24, low: '95.95', high: '106.12', volume: '6.6M', amount: '698M' },
  { symbol: 'TRX', pair: '/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.05938baf3249e440892fdc8f1409a0bc1.png', price: '0.2845', change: -0.07, low: '0.2817', high: '0.2869', volume: '298M', amount: '85M' },
  { symbol: 'DOGE', pair: '/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0409f9e843ec74da198ed062120b08f4d.png', price: '0.109', change: -4.67, low: '0.0995', high: '0.1106', volume: '1.8B', amount: '205M' },
  { symbol: 'ADA', pair: '/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0dca2867eee3849a6ab30a7d202871a32.png', price: '0.3014', change: -4.62, low: '0.2757', high: '0.3033', volume: '247M', amount: '74M' },
  { symbol: 'XLM', pair: '/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.062ab514bd06f4718ab0dd274127ce1bc.png', price: '0.1823', change: -4.95, low: '0.1684', high: '0.1836', volume: '98M', amount: '17M' },
  { symbol: 'SUI', pair: '/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.03c046ea626f94106995aca4c701fc795.png', price: '1.1563', change: -4.51, low: '1.0612', high: '1.1648', volume: '83M', amount: '96M' },
  { symbol: 'AVAX', pair: '/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.067fa1cfd85fb49a99f789f3770b7b778.png', price: '10.21', change: 3.34, low: '9.53', high: '10.32', volume: '4.3M', amount: '44M' },
])
</script>

<style scoped lang="less">
/* Custom tabs for mobile to look like pills */
.custom-mobile-tabs {
    :deep(.van-tabs__nav--card) {
        border: none;
        background: transparent;
        height: 36px;
        margin: 0;
    }
    :deep(.van-tabs__wrap) {
      height: auto;
    }
    :deep(.van-tab--card) {
        border: none;
        border-radius: 99px;
        background: rgba(255, 255, 255, 0.05);
        color: #888;
        margin-right: 8px;
        font-weight: bold;
        transition: all 0.2s;
        
        &.van-tab--active {
            background: #00f0ff;
            color: #000;
        }
    }
}

/* Original styles for desktop (preserved) */
.tab-base {
    display: flex;
    align-items: center;
    justify-content: space-between;}

.tab-base .search {
    width: 260px;
    height: 32px;
    display: flex;
    align-items: center;
    border-radius: 99px;
    border: 1px solid #31323f;
    background: #12141E;
    padding: 0 10px;}

.crypto-table {
    font-family: Arial,sans-serif;}

.table-header {
    display: flex;
    border-bottom: 1px solid #31323f;
    height: 51px;
    font-size: 14px;
    font-weight: 900;
    align-items: center;
    color: #eee;
    text-transform: uppercase;}

.header-cell {
    flex: 1;
    text-align: right;
    padding: 0 8px;}

.header-cell.name {
    flex: 1.6;
    text-align: left;}

.table-body {
    font-size: 15px;
    font-weight: 900;}

.table-row {
    display: flex;
    height: 83px;
    align-items: center;
    border-bottom: 1px solid #31323f;
    cursor: pointer;
    transition: background-color .2s ease;}

.table-row:hover {
    background-color: #1a1b26;
}

.row-cell {
    flex: 1;
    text-align: right;
    padding: 0 8px;}

.row-cell.name {
    flex: 1.6;
    display: flex;
    align-items: center;
    text-align: left;}
</style>
