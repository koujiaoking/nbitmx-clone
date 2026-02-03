<template>
  <div class="currency-list flex flex-col h-full bg-[#0B0E11]">
    <!-- Search Box -->
    <div class="search-box mx-2 my-2 relative h-8 bg-[#1E2026] rounded border border-[#2B2F36] flex items-center px-2">
      <div class="svg-container w-4 h-4 mr-2 text-[#848E9C]">
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M14.4733 13.5267L11.9999 11.0733C12.96 9.87627 13.4249 8.35686 13.2991 6.82753C13.1733 5.2982 12.4664 3.87519 11.3236 2.85109C10.1808 1.827 8.68914 1.27967 7.15522 1.32164C5.62129 1.36362 4.16175 1.99171 3.0767 3.07676C1.99164 4.16181 1.36356 5.62136 1.32158 7.15528C1.27961 8.6892 1.82694 10.1809 2.85103 11.3237C3.87512 12.4664 5.29814 13.1734 6.82747 13.2992C8.3568 13.425 9.87621 12.9601 11.0733 12L13.5266 14.4533C13.5886 14.5158 13.6623 14.5654 13.7436 14.5993C13.8248 14.6331 13.9119 14.6505 13.9999 14.6505C14.0879 14.6505 14.1751 14.6331 14.2563 14.5993C14.3376 14.5654 14.4113 14.5158 14.4733 14.4533C14.5934 14.329 14.6606 14.1629 14.6606 13.99C14.6606 13.8171 14.5934 13.651 14.4733 13.5267ZM7.33327 12C6.41029 12 5.50804 11.7263 4.74061 11.2135C3.97318 10.7007 3.37504 9.97191 3.02183 9.11919C2.66862 8.26646 2.57621 7.32815 2.75627 6.42291C2.93634 5.51766 3.38079 4.68614 4.03344 4.0335C4.68608 3.38085 5.5176 2.9364 6.42285 2.75633C7.32809 2.57627 8.2664 2.66868 9.11913 3.02189C9.97185 3.3751 10.7007 3.97324 11.2135 4.74067C11.7262 5.5081 11.9999 6.41035 11.9999 7.33333C11.9999 8.57101 11.5083 9.75799 10.6331 10.6332C9.75793 11.5083 8.57095 12 7.33327 12Z"></path>
        </svg>
      </div>
      <input type="text" placeholder="Search" class="bg-transparent border-none text-[#EAECEF] text-xs w-full focus:outline-none placeholder-[#848E9C]">
    </div>

    <!-- Tabs -->
    <div class="cm-tabs-container px-2 border-b border-[#2B2F36]">
      <div class="flex text-xs space-x-4 text-[#848E9C] py-2">
        <span class="cursor-pointer hover:text-[#EAECEF]" @click="activeTab='Optional'" :class="{ 'text-[#00f0ff] font-bold': activeTab==='Optional'}">Optional</span>
        <span class="cursor-pointer hover:text-[#EAECEF]" @click="activeTab='Options'" :class="{ 'text-[#00f0ff] font-bold': activeTab==='Options'}">Options</span>
        <span class="cursor-pointer hover:text-[#EAECEF]" @click="activeTab='Spot'" :class="{ 'text-[#00f0ff] font-bold': activeTab==='Spot'}">Spot</span>
        <span class="cursor-pointer hover:text-[#EAECEF]" @click="activeTab='Contract'" :class="{ 'text-[#00f0ff] font-bold': activeTab==='Contract'}">Contract</span>
      </div>
    </div>

    <!-- Sub Tab Button -->
    <div class="playHome-products px-2 py-2">
      <div class="cm-tabs-button mb-2">
        <span class="text-xs bg-[#1E2026] px-2 py-1 rounded text-[#00f0ff] border border-[#00f0ff]">Spot</span>
      </div>
      
      <!-- List -->
      <div class="scroll-wrap overflow-y-auto custom-scrollbar flex-1">
        <div class="list space-y-1">
          <div v-for="(item, index) in currencyList" :key="index" class="row flex items-center justify-between py-2 px-2 hover:bg-[#1E2026] cursor-pointer rounded">
            <span class="column currency flex items-center space-x-2">
              <div class="svg-container w-3 h-3 text-[#848E9C]">
                 <!-- Star Icon -->
                 <svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14.6673 6.73362C14.734 6.40028 14.4673 6.00028 14.134 6.00028L10.334 5.46695L8.60065 2.00028C8.53398 1.86695 8.46732 1.80028 8.33398 1.73362C8.00065 1.53362 7.60065 1.66695 7.40065 2.00028L5.73398 5.46695L1.93398 6.00028C1.73398 6.00028 1.60065 6.06695 1.53398 6.20028C1.26732 6.46695 1.26732 6.86695 1.53398 7.13362L4.26732 9.80028L3.60065 13.6003C3.60065 13.7336 3.60065 13.867 3.66732 14.0003C3.86732 14.3336 4.26732 14.467 4.60065 14.267L8.00065 12.467L11.4007 14.267C11.4673 14.3336 11.6007 14.3336 11.734 14.3336C11.8007 14.3336 11.8007 14.3336 11.8673 14.3336C12.2007 14.267 12.4673 13.9336 12.4007 13.5336L11.734 9.73362L14.4673 7.06695C14.6007 7.00028 14.6673 6.86695 14.6673 6.73362Z"></path></svg>
              </div>
              <img class="logo w-4 h-4 rounded-full" :src="item.logo" :alt="item.name">
              <div class="flex flex-col">
                <span class="product text-xs font-bold text-[#EAECEF]">{{ item.pair }}</span>
                <span class="unit text-[10px] text-[#848E9C]">{{ item.name }}</span>
              </div>
            </span>
            <span class="column quotes flex flex-col items-end" :class="item.changeClass === 'up' ? 'text-[#0ECB81]' : 'text-[#F6465D]'">
              <span class="price text-xs font-medium">{{ item.price }}</span>
              <span class="text text-[10px]">{{ item.change }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('Spot')

const currencyList = [
  { pair: 'BTC/USDT', name: 'BTC', price: '79072.0000', change: '2.13%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0b96195d4f367459fbaac66fd39462aa1.png' },
  { pair: 'ETH/USDT', name: 'ETH', price: '2368.4200', change: '2.68%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0680cf64887f44f3fa7a8b55e243b7597.png' },
  { pair: 'XRP/USDT', name: 'XRP', price: '1.6481', change: '3.47%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.057766c08906d48919834927082eb7043.png' },
  { pair: 'BNB/USDT', name: 'BNB', price: '777.3000', change: '3.49%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0ca54a58bb2f4465a9f4ef3f2effdb0b3.png' },
  { pair: 'SOL/USDT', name: 'SOL', price: '105.2100', change: '3.67%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0dce5c5137d3f4803b8a8606140150057.png' },
  { pair: 'USDC/USDT', name: 'USDC', price: '1.0004', change: '-0.02%', changeClass: 'down', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0102bdf74091a473cbaa330641ad32c45.png' },
  { pair: 'DOGE/USDT', name: 'DOGE', price: '0.1089', change: '5.42%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0409f9e843ec74da198ed062120b08f4d.png' },
  { pair: 'TRX/USDT', name: 'TRX', price: '0.2840', change: '-0.28%', changeClass: 'down', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.05938baf3249e440892fdc8f1409a0bc1.png' },
  { pair: 'ADA/USDT', name: 'ADA', price: '0.3012', change: '5.54%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0dca2867eee3849a6ab30a7d202871a32.png' },
  { pair: 'XLM/USDT', name: 'XLM', price: '0.1821', change: '5.57%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.062ab514bd06f4718ab0dd274127ce1bc.png' },
  { pair: 'WBTC', name: 'WBTC', price: '78854.7400', change: '2.23%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.056adb1a2ae34471daa998b08b7d4528f.png' },
  { pair: 'SUI/USDT', name: 'SUI', price: '1.1551', change: '5.14%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.03c046ea626f94106995aca4c701fc795.png' },
  { pair: 'HBAR/USDT', name: 'HBAR', price: '0.0939', change: '6.19%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0f22860b22a004d0fb821c01e6a564432.png' },
  { pair: 'LINK/USDT', name: 'LINK', price: '9.9400', change: '5.30%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.012be8b9b57894415b743bb9a3a5cd69b.png' },
  { pair: 'BCH/USDT', name: 'BCH', price: '539.4000', change: '3.99%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0843e16ac5a3043edbe00ad20e3d9d875.png' },
  { pair: 'AVAX/USDT', name: 'AVAX', price: '10.2000', change: '3.87%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.067fa1cfd85fb49a99f789f3770b7b778.png' },
  { pair: 'UNI/USDT', name: 'UNI', price: '3.9590', change: '3.48%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.000c75f8edd0a4ae888b2200cb6f0ac8a.png' },
  { pair: 'LTC/USDT', name: 'LTC', price: '60.5700', change: '4.14%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0d30fa45f78814c84a419b109b09d431b.png' },
  { pair: 'TON/USDT', name: 'TON', price: '1.3710', change: '3.86%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.020892b70a3964681ac1b91f76c15a037.png' },
  { pair: 'DOT/USDT', name: 'DOT', price: '1.5630', change: '4.83%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.01ba2b323da9945138df2c479aa7cc91c.png' },
]
</script>

<style scoped>
/* Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #2B2F36;
  border-radius: 2px;
}
</style>
