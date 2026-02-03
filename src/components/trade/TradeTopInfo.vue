<template>
  <div class="top-info box-border w-full min-w-[1280px] h-[52px] relative bg-[#12141E] flex items-center px-5 mb-[2px]">
    <img class="logo w-6 h-6 mr-[6px]" src="https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0b96195d4f367459fbaac66fd39462aa1.png" alt="btc">
    <span class="h5Name text-[18px]">BTC/USDT</span>
    <span class="line relative w-[2px] h-[14px] bg-[#2B2F36] mx-5"></span>
    <span class="icon-box w-6 h-6 bg-[#1E2026] border border-[#2B2F36] rounded flex items-center justify-center cursor-pointer relative">
      <div class="svg-container w-4 h-4 text-[#888]">
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M14.6673 6.73362C14.734 6.40028 14.4673 6.00028 14.134 6.00028L10.334 5.46695L8.60065 2.00028C8.53398 1.86695 8.46732 1.80028 8.33398 1.73362C8.00065 1.53362 7.60065 1.66695 7.40065 2.00028L5.73398 5.46695L1.93398 6.00028C1.73398 6.00028 1.60065 6.06695 1.53398 6.20028C1.26732 6.46695 1.26732 6.86695 1.53398 7.13362L4.26732 9.80028L3.60065 13.6003C3.60065 13.7336 3.60065 13.867 3.66732 14.0003C3.86732 14.3336 4.26732 14.467 4.60065 14.267L8.00065 12.467L11.4007 14.267C11.4673 14.3336 11.6007 14.3336 11.734 14.3336C11.8007 14.3336 11.8007 14.3336 11.8673 14.3336C12.2007 14.267 12.4673 13.9336 12.4007 13.5336L11.734 9.73362L14.4673 7.06695C14.6007 7.00028 14.6673 6.86695 14.6673 6.73362Z"></path>
        </svg>
      </div>
    </span>
    <span class="line relative w-[2px] h-[14px] bg-[#2B2F36] mx-5 mr-5"></span>
    
    <!-- Stats Items -->
    <span class="item flex flex-col justify-between mr-[30px] h-9">
      <span class="text big text-[16px] text-[#00f0ff] leading-[18px]">79072.0000</span>
      <span class="normal text-[#848E9C] text-xs">≈ $79072.0000</span>
    </span>
    <span class="item flex flex-col justify-between mr-[30px] h-9">
      <span class="text text-[#848E9C] text-xs leading-[18px]">24H Change</span>
      <span class="num text-[#00f0ff] text-sm leading-4">2.13%</span>
    </span>
    <span class="item flex flex-col justify-between mr-[30px] h-9">
      <span class="text text-[#848E9C] text-xs leading-[18px]">24H High</span>
      <span class="num theme-up text-[#0ECB81] text-sm leading-4">79360</span>
    </span>
    <span class="item flex flex-col justify-between mr-[30px] h-9">
      <span class="text text-[#848E9C] text-xs leading-[18px]">24H Low</span>
      <span class="num theme-down text-[#F6465D] text-sm leading-4">74604</span>
    </span>
    <span class="item flex flex-col justify-between mr-[30px] h-9">
      <span class="text text-[#848E9C] text-xs leading-[18px]">24H Volume</span>
      <span class="num text-[#EAECEF] text-sm leading-4">46929.30686</span>
    </span>
    <span class="item flex flex-col justify-between mr-[30px] h-9">
      <span class="text text-[#848E9C] text-xs leading-[18px]">24H Amount</span>
      <span class="num text-[#EAECEF] text-sm leading-4">3710794152.03</span>
    </span>
    
    <span class="normal ml-auto text-[#848E9C] text-xs">EST 12:33:46 | 81ms</span>
  </div>
</template>

<script setup lang="ts">
// Top Info Component
</script>

<style scoped>
/* Using Tailwind/UnoCSS classes directly in template for better portability */
</style>
