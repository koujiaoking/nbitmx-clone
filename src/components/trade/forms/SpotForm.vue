<template>
  <div class="w-full h-auto px-4 py-2 border-t border-[#2B2F36]">
    <div class="mb-2">
        <van-tabs v-model:active="tradeType" type="line" background="transparent" color="#00f0ff" title-active-color="#00f0ff" title-inactive-color="#848e9c" line-width="30px" line-height="2px" :border="false">
          <van-tab title="Market Transaction"></van-tab>
          <van-tab title="Limit Trade"></van-tab>
        </van-tabs>
    </div>
    <!-- Spot Market Buy/Sell Form -->
    <div class="flex space-x-4">
      <!-- Buy Section -->
      <section class="flex-1">
        <div class="mb-2 bg-[#1E2026] rounded px-2 h-10 flex items-center justify-between border border-[#2B2F36]">
            <span class="text-[#848E9C] text-xs">Price(USDT)</span>
            <van-field v-model="buyPrice" type="number" placeholder="Market Price" disabled :border="false" class="field-transparent p-0 w-[100px]" input-align="right" />
        </div>
        <div class="mb-2 bg-[#1E2026] rounded px-2 h-10 flex items-center justify-between border border-[#2B2F36]">
            <span class="text-[#848E9C] text-xs">Amount(USDT)</span>
            <van-field v-model="buyAmount" type="number" placeholder="Please enter" :border="false" class="field-transparent p-0 w-[100px]" input-align="right" />
        </div>
        <!-- Slider -->
        <div class="mt-4 mb-4 px-2">
           <a-slider v-model:value="buySlider" :tooltipVisible="false" track-color="#00f0ff" />
           <div class="flex justify-between text-[10px] text-[#848E9C] mt-1 px-1">
             <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
           </div>
        </div>
        <div class="flex justify-between text-xs mb-1">
            <span class="text text-[#848E9C]">Available</span>
            <span class="num text-[#EAECEF]">0.00 USDT</span>
        </div>
        <div class="flex justify-between text-xs mb-3">
            <span class="text text-[#848E9C]">Can buy</span>
            <span class="num text-[#EAECEF]">0.000000 btc</span>
        </div>
        <button class="w-full h-10 rounded bg-[#0ECB81] text-white font-bold hover:opacity-90 transition border-none cursor-pointer">Buy btc</button>
      </section>

      <!-- Sell Section -->
      <section class="flex-1">
        <div class="mb-2 bg-[#1E2026] rounded px-2 h-10 flex items-center justify-between border border-[#2B2F36]">
            <span class="text-[#848E9C] text-xs">Price(USDT)</span>
            <van-field v-model="sellPrice" type="number" placeholder="Market Price" disabled :border="false" class="field-transparent p-0 w-[100px]" input-align="right" />
        </div>
        <div class="mb-2 bg-[#1E2026] rounded px-2 h-10 flex items-center justify-between border border-[#2B2F36]">
            <span class="text-[#848E9C] text-xs">Amount(btc)</span>
            <van-field v-model="sellAmount" type="number" placeholder="Please enter" :border="false" class="field-transparent p-0 w-[100px]" input-align="right" />
        </div>
        <!-- Slider -->
        <div class="mt-4 mb-4 px-2">
           <a-slider v-model:value="sellSlider" :tooltipVisible="false" track-color="#F6465D" />
           <div class="flex justify-between text-[10px] text-[#848E9C] mt-1 px-1">
             <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
           </div>
        </div>
        <div class="flex justify-between text-xs mb-1">
            <span class="text text-[#848E9C]">Available</span>
            <span class="num text-[#EAECEF]">0.000000 btc</span>
        </div>
        <div class="flex justify-between text-xs mb-3">
            <span class="text text-[#848E9C]">Available for sale</span>
            <span class="num text-[#EAECEF]">0.00 USDT</span>
        </div>
        <button class="w-full h-10 rounded bg-[#F6465D] text-white font-bold hover:opacity-90 transition border-none cursor-pointer">Sell btc</button>
      </section>
    </div>
    
    <div class="my-4 border-t border-[#2B2F36]"></div>
    
    <div class="text-sm text-[#EAECEF] font-bold mb-2">Spot transaction instructions</div>
    <p class="text-xs text-[#848E9C] leading-5">
      At present, the usual way to trade digital assets is: to purchase stable currency USDT (USDT is anchored to the US dollar, theoretically 1 USDT = 1 US dollar) with legal tender, and then use USDT as the base currency to trade digital assets such as Bitcoin. The method of exchanging one currency for another is called 'currency transaction' or 'spot transaction'.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tradeType = ref(0) 

const buyPrice = ref('')
const buyAmount = ref('')
const buySlider = ref(0)

const sellPrice = ref('')
const sellAmount = ref('')
const sellSlider = ref(0)
</script>

<style scoped>
:deep(.field-transparent) {
  background-color: transparent !important;
}
:deep(.van-cell) {
  background: transparent !important;
  padding: 0;
  color: #EAECEF;
}
:deep(.van-field__control) {
  color: #EAECEF;
}
</style>
