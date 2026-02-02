<template>
  <div class="quotes-page bg-[#000] min-h-screen text-white font-sans pt-[60px] pb-[100px]"> <!-- Added padding top/bottom based on html/css context -->
    <div class="mx-auto w-[1360px] max-w-full px-4 sm:px-6 lg:px-8">
      <h1 class="h-[45px] font-bold text-[30px] leading-[45px] text-white mb-[20px]">Cryptocurrency Quotes</h1>
      
      <!-- Top Cards: Gain Ranking & Popular Currencies -->
      <div class="flex flex-col lg:flex-row items-stretch justify-between mt-[50px] gap-[50px]">
        
        <!-- Gain Ranking -->
        <div class="w-full lg:w-1/2 px-[20px] py-[26px] box-border rounded-[12px] border border-[#31323f]">
          <div class="font-bold text-[20px]">Gain ranking</div>
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
          <div class="font-bold text-[20px]">Popular currencies</div>
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

      <!-- Tabs and Search -->
      <div class="tab-base mt-[42px] flex items-center justify-between">
        <div class="cm-tabs-container flex-1">
           <van-tabs v-model:active="activeTab" background="transparent" title-active-color="#fff" title-inactive-color="#888" line-width="50px" line-height="2px" color="#fff" :border="false">
             <van-tab title="Optional" name="optional"></van-tab>
             <van-tab title="Spot" name="spot"></van-tab>
             <van-tab title="Contract" name="contract"></van-tab>
             <van-tab title="Options" name="options"></van-tab>
           </van-tabs>
        </div>
        <div class="search w-[260px] h-[32px] flex items-center rounded-full border border-[#31323f] bg-[#12141E] px-[10px] ml-4">
          <div class="svg-container svg-img fill-[#5e5e7a]">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4733 13.5267L11.9999 11.0733C12.96 9.87627 13.4249 8.35686 13.2991 6.82753C13.1733 5.2982 12.4664 3.87519 11.3236 2.85109C10.1808 1.827 8.68914 1.27967 7.15522 1.32164C5.62129 1.36362 4.16175 1.99171 3.0767 3.07676C1.99164 4.16181 1.36356 5.62136 1.32158 7.15528C1.27961 8.6892 1.82694 10.1809 2.85103 11.3237C3.87512 12.4664 5.29814 13.1734 6.82747 13.2992C8.3568 13.425 9.87621 12.9601 11.0733 12L13.5266 14.4533C13.5886 14.5158 13.6623 14.5654 13.7436 14.5993C13.8248 14.6331 13.9119 14.6505 13.9999 14.6505C14.0879 14.6505 14.1751 14.6331 14.2563 14.5993C14.3376 14.5654 14.4113 14.5158 14.4733 14.4533C14.5934 14.329 14.6606 14.1629 14.6606 13.99C14.6606 13.8171 14.5934 13.651 14.4733 13.5267ZM7.33327 12C6.41029 12 5.50804 11.7263 4.74061 11.2135C3.97318 10.7007 3.37504 9.97191 3.02183 9.11919C2.66862 8.26646 2.57621 7.32815 2.75627 6.42291C2.93634 5.51766 3.38079 4.68614 4.03344 4.0335C4.68608 3.38085 5.5176 2.9364 6.42285 2.75633C7.32809 2.57627 8.2664 2.66868 9.11913 3.02189C9.97185 3.3751 10.7007 3.97324 11.2135 4.74067C11.7262 5.5081 11.9999 6.41035 11.9999 7.33333C11.9999 8.57101 11.5083 9.75799 10.6331 10.6332C9.75793 11.5083 8.57095 12 7.33327 12Z" />
            </svg>
          </div>
          <input type="text" placeholder="Search" class="bg-transparent border-none text text-[#eaeae7] flex-1 ml-2 focus:outline-none placeholder-[#5e5e7a]">
        </div>
      </div>

      <!-- Crypto Table -->
      <div class="crypto-table mt-[20px] font-sans">
        <!-- Header -->
        <div class="table-header flex border-b border-[#31323f] h-[51px] text-[14px] font-black items-center text-[#eee] uppercase">
          <div class="header-cell name flex-[1.6]">Crypto</div>
          <div class="header-cell flex-1 text-right">Latest Price</div>
          <div class="header-cell flex-1 text-right">24H Change</div>
          <div class="header-cell flex-1 text-right">24H Low</div>
          <div class="header-cell flex-1 text-right">24H High</div>
          <div class="header-cell flex-1 text-right">24H Volume</div>
          <div class="header-cell flex-1 text-right">24H Amount</div>
          <div class="header-cell flex-1 text-right">Operation</div>
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
                <img src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Design%20tools%20/%20horizontal%20distribute%20center'%3e%3cpath%20id='Vector'%20d='M15.834%204.16797H15.0007V2.5013C15.0007%202.28029%2014.9129%202.06833%2014.7566%201.91205C14.6003%201.75577%2014.3883%201.66797%2014.1673%201.66797C13.9463%201.66797%2013.7343%201.75577%2013.5781%201.91205C13.4218%202.06833%2013.334%202.28029%2013.334%202.5013V4.16797H12.5007C12.2796%204.16797%2012.0677%204.25577%2011.9114%204.41205C11.7551%204.56833%2011.6673%204.78029%2011.6673%205.0013V15.0013C11.6673%2015.2223%2011.7551%2015.4343%2011.9114%2015.5906C12.0677%2015.7468%2012.2796%2015.8346%2012.5007%2015.8346H13.334V17.5013C13.334%2017.7223%2013.4218%2017.9343%2013.5781%2018.0906C13.7343%2018.2468%2013.9463%2018.3346%2014.1673%2018.3346C14.3883%2018.3346%2014.6003%2018.2468%2014.7566%2018.0906C14.9129%2017.9343%2015.0007%2017.7223%2015.0007%2017.5013V15.8346H15.834C16.055%2015.8346%2016.267%2015.7468%2016.4232%2015.5906C16.5795%2015.4343%2016.6673%2015.2223%2016.6673%2015.0013V5.0013C16.6673%204.78029%2016.5795%204.56833%2016.4232%204.41205C16.267%204.25577%2016.055%204.16797%2015.834%204.16797ZM15.0007%2014.168H13.334V5.83464H15.0007V14.168ZM9.16732%203.33464H7.50065V2.5013C7.50065%202.28029%207.41285%202.06833%207.25657%201.91205C7.10029%201.75577%206.88833%201.66797%206.66732%201.66797C6.4463%201.66797%206.23434%201.75577%206.07806%201.91205C5.92178%202.06833%205.83398%202.28029%205.83398%202.5013V3.33464H4.16732C3.9463%203.33464%203.73434%203.42243%203.57806%203.57871C3.42178%203.73499%203.33398%203.94696%203.33398%204.16797V15.8346C3.33398%2016.0556%203.42178%2016.2676%203.57806%2016.4239C3.73434%2016.5802%203.9463%2016.668%204.16732%2016.668H5.83398V17.5013C5.83398%2017.7223%205.92178%2017.9343%206.07806%2018.0906C6.23434%2018.2468%206.4463%2018.3346%206.66732%2018.3346C6.88833%2018.3346%207.10029%2018.2468%207.25657%2018.0906C7.41285%2017.9343%207.50065%2017.7223%207.50065%2017.5013V16.668H9.16732C9.38833%2016.668%209.60029%2016.5802%209.75657%2016.4239C9.91285%2016.2676%2010.0007%2016.0556%2010.0007%2015.8346V4.16797C10.0007%203.94696%209.91285%203.73499%209.75657%203.57871C9.60029%203.42243%209.38833%203.33464%209.16732%203.33464ZM8.33398%2015.0013H5.00065V5.0013H8.33398V15.0013Z'%20fill='%23ECECFF'/%3e%3c/g%3e%3c/svg%3e" class="mr-[5px] w-[13px]">
                Trading
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('spot')

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

const marketData = [
  { symbol: 'BTC/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0b96195d4f367459fbaac66fd39462aa1.png', price: '$78,936.99', change: 1.68, low: '$74,604.00', high: '$79,360.00', volume: '46523.63', amount: '3672435486.58' },
  { symbol: 'ETH/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0680cf64887f44f3fa7a8b55e243b7597.png', price: '$2,375.26', change: 2.64, low: '$2,157.14', high: '$2,396.62', volume: '1533780.46', amount: '3643127369.01' },
  { symbol: 'XRP/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.057766c08906d48919834927082eb7043.png', price: '$1.6484', change: 3.35, low: '$1.5307', high: '$1.6571', volume: '253948112.00', amount: '418608067.82' },
  { symbol: 'BNB/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0ca54a58bb2f4465a9f4ef3f2effdb0b3.png', price: '$777.10', change: 2.92, low: '$728.44', high: '$781.58', volume: '340240.35', amount: '264400779.09' },
  { symbol: 'SOL/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0dce5c5137d3f4803b8a8606140150057.png', price: '$105.37', change: 3.24, low: '$95.95', high: '$106.12', volume: '6631378.56', amount: '698748358.55' },
  { symbol: 'TRX/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.05938baf3249e440892fdc8f1409a0bc1.png', price: '$0.2845', change: 0.07, low: '$0.2817', high: '$0.2869', volume: '298881455.00', amount: '85031773.95' },
  { symbol: 'DOGE/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0409f9e843ec74da198ed062120b08f4d.png', price: '$0.109', change: 4.67, low: '$0.0995', high: '$0.1106', volume: '1885874464.00', amount: '205466022.85' },
  { symbol: 'ADA/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0dca2867eee3849a6ab30a7d202871a32.png', price: '$0.3014', change: 4.62, low: '$0.2757', high: '$0.3033', volume: '247745401.30', amount: '74670463.95' },
  { symbol: 'XLM/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.062ab514bd06f4718ab0dd274127ce1bc.png', price: '$0.1823', change: 4.95, low: '$0.1684', high: '$0.1836', volume: '98677718.00', amount: '17988947.99' },
  { symbol: 'SUI/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.03c046ea626f94106995aca4c701fc795.png', price: '$1.1563', change: 4.51, low: '$1.0612', high: '$1.1648', volume: '83517239.30', amount: '96570983.80' },
  { symbol: 'LTC/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0d30fa45f78814c84a419b109b09d431b.png', price: '$60.75', change: 3.81, low: '$56.51', high: '$61.17', volume: '777417.13', amount: '47228090.77' },
  { symbol: 'UNI/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.000c75f8edd0a4ae888b2200cb6f0ac8a.png', price: '$3.966', change: 2.93, low: '$3.704', high: '$3.999', volume: '7632943.85', amount: '30272255.31' },
  { symbol: 'AVAX/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.067fa1cfd85fb49a99f789f3770b7b778.png', price: '$10.21', change: 3.34, low: '$9.53', high: '$10.32', volume: '4387507.66', amount: '44796453.21' },
  { symbol: 'DOT/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.01ba2b323da9945138df2c479aa7cc91c.png', price: '$1.564', change: 3.99, low: '$1.452', high: '$1.576', volume: '9651444.31', amount: '15094858.90' },
  { symbol: 'AAVE/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0c7835776ba5644afaef82b4d981a4dd7.png', price: '$129.64', change: 3.82, low: '$120.40', high: '$131.03', volume: '178345.83', amount: '23120752.88' },
  { symbol: 'WLD/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0971f2da6cb2240408e5e03a88269c871.png', price: '$0.406', change: 2.55, low: '$0.3829', high: '$0.4107', volume: '36637697.30', amount: '14874905.10' },
  { symbol: 'ENA/USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.07c0137d6cfed4569a9c83e7942569934.png', price: '$0.1418', change: 3.20, low: '$0.1306', high: '$0.1448', volume: '229576143.70', amount: '32553897.18' }
]
</script>

<style scoped>

:deep(.van-tabs__nav) {
  background-color: transparent !important;
}
:deep(.van-tab) {
  font-size: 16px;
  color: #888;
  font-weight: bold;
}
:deep(.van-tab--active) {
  color: white !important;
}

/* Styles from quotes.css */
.tab-base {
    margin-top: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between
}

.tab-base .search {
    width: 260px;
    height: 32px;
    display: flex;
    align-items: center;
    transition: all 1s;
    -webkit-transition: all 1s;
    border-radius: 99px;
    border: 1px solid #31323f; /* var(--data-bg18) replacement */
    background: #12141E; /* var(--content-bg) replacement */
    padding: 0 10px
}

.tab-base .search input {
    touch-action: manipulation;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    flex: 1;
    font-style: normal;
    font-weight: 400;
    background: transparent;
    color: #eaeae7;
    outline: none;
}

.crypto-table {
    margin-top: 20px;
    font-family: Arial,sans-serif
}

.table-header {
    display: flex;
    border-bottom: 1px solid #31323f; /* var(--border-color) replacement */
    height: 51px;
    font-size: 14px;
    font-weight: 900;
    align-items: center;
    color: #eee;
    text-transform: uppercase
}

.header-cell {
    flex: 1;
    text-align: right;
    padding: 0 8px
}

.header-cell.name {
    flex: 1.6;
    text-align: left
}

.table-body {
    font-size: 15px;
    font-weight: 900
}

.table-row {
    display: flex;
    height: 83px;
    align-items: center;
    border-bottom: 1px solid #31323f; /* var(--border-color) replacement */
    cursor: pointer;
    transition: background-color .2s ease
}

.table-row:hover {
    background-color: #1a1b26; /* var(--hover-bg-1) replacement */
}

.row-cell {
    flex: 1;
    text-align: right;
    padding: 0 8px
}

.row-cell.name {
    flex: 1.6;
    display: flex;
    align-items: center;
    text-align: left
}

.trade-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 73px;
    height: 30px;
    border-radius: 99px;
    border: 1px solid #84849f;
    background: #12141E; /* var(--content-bg) replacement */
    padding: 3px 15px;
    font-size: 12px;
    color: #fff; /* var(--text-primary) replacement */
    transition: all .2s ease
}

.table-row:hover .trade-btn {
    border: 0;
    background: linear-gradient(to bottom, #6491e9, #556dea);
    color: #fff
}
</style>
