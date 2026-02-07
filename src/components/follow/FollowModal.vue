<template>
  <div class="follow-modal w-[90vw] md:w-[600px] bg-[#1a1b26] rounded-xl overflow-hidden text-white font-sans">
    <!-- Header -->
    <div class="header flex justify-between items-center px-6 py-4 border-b border-[#2e3044]">
      <span class="text-lg font-medium">跟單確認</span>
      <button @click="$emit('close')" class="text-[#888] hover:text-white text-2xl leading-none">&times;</button>
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- User Info -->
      <div class="bg-[#12131e] rounded-lg p-4 mb-6 relative overflow-hidden">
        <div class="flex items-start">
            <img :src="traderInfo.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Default'" class="w-12 h-12 rounded-full mr-4 border-2 border-[#fcdf7b]">
            <div class="flex-1">
                <div class="flex items-center mb-1">
                    <span class="text-lg font-bold mr-2">{{ traderInfo.name }}</span>
                    <span class="bg-gradient-to-l from-[#fcdf7b] to-[#f9cd4e] text-[#a07300] text-xs font-bold px-2 py-0.5 rounded-full">LV.{{ traderInfo.level || 8 }}</span>
                </div>
                <div class="text-[#888] text-sm mb-4 line-clamp-2">{{ traderInfo.desc || 'Guiding you through crypto journey.' }}</div>
                
                <div class="stats grid grid-cols-2 gap-y-2 text-sm">
                    <div class="mb-1">
                        <div class="text-[#00F0FF] text-xl font-bold font-mono">{{ traderInfo.roi || '+0%' }}</div>
                        <div class="text-[#00F0FF] text-xs font-mono">{{ traderInfo.pnl || '+$0' }}</div>
                    </div>
                    <div>
                        <div class="flex justify-between text-[#888]"><span>名額</span><span class="text-white">{{ traderInfo.quota || '0/0' }}</span></div>
                        <div class="flex justify-between text-[#888] mt-1"><span>近7天跟投人數</span><span class="text-white">{{ traderInfo.followers7d || 0 }}</span></div>
                    </div>
                    
                    <div>
                         <div class="flex justify-between text-[#888]"><span>勝率</span><span class="text-white font-mono">{{ traderInfo.winRate || '0%' }}</span></div>
                    </div>
                    <div>
                         <div class="flex justify-between text-[#888]"><span>帶單規模</span><span class="text-white font-mono">{{ traderInfo.assetSize || '$0' }}</span></div>
                    </div>
                </div>

                <div class="smart-follow mt-4 pt-4 border-t border-[#232437]">
                    <span class="text-[#ff9046] font-bold text-sm mb-1 block">智慧跟單</span>
                    <p class="text-[#888] text-xs">SOL momentum trades, ecosystem rotation plays, breakout setups.</p>
                </div>
            </div>
        </div>
      </div>

      <!-- Input -->
      <div class="mb-2">
          <div class="text-[#888] mb-2 text-sm">跟單額度</div>
          <div class="relative custom-field-wrapper">
              <van-field
                v-model="amount"
                type="number"
                placeholder="最低跟投金額 500"
                class="custom-field"
                :border="false"
              />
              <span class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 pointer-events-none">USDT</span>
          </div>
      </div>

      <!-- Slider -->
      <div class="mb-6 px-1">
          <van-slider v-model="sliderValue" bar-height="4px" active-color="#00F0FF" inactive-color="#2e3044" @update:model-value="handleSliderChange">
              <template #button>
                  <div class="w-4 h-4 bg-[#00F0FF] rounded-full border-2 border-white shadow-lg"></div>
              </template>
          </van-slider>
          <div class="flex justify-between text-[#888] text-xs mt-2 font-mono">
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
          </div>
      </div>

      <!-- Wallet Info -->
      <div class="flex justify-between items-center text-sm mb-8">
          <div class="flex items-center text-white">
              <span class="mr-1">從</span>
              <span class="text-[#00F0FF]">資產帳戶</span>
          </div>
          <div class="text-[#888]">
              可用 <span class="text-white font-mono">{{ availableBalance }}</span> USDT 
              <span class="ml-1 cursor-pointer">⇄</span>
          </div>
      </div>

      <!-- Submit Button -->
      <button @click="handleConfirm" class="w-full bg-[#00F0FF] hover:bg-[#33f3ff] text-black font-bold py-3 rounded-full transition-colors">立即跟單</button>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  traderInfo: {
    name: string;
    avatar: string;
    level: number;
    desc: string;
    roi: string;
    pnl: string;
    quota: string;
    followers7d: string;
    winRate: string;
    assetSize: string;
  }
}>();

const emit = defineEmits(['close', 'confirm']);

const amount = ref<number | ''>('');
const sliderValue = ref(0);
const availableBalance = 125000; // Mock balance

const handleSliderChange = (val: number) => {
    if (val === 0) {
        amount.value = '';
    } else {
        amount.value = Math.floor(availableBalance * (val / 100));
    }
}

const handleConfirm = () => {
    if (!amount.value || amount.value < 500) {
        // In real app, show toast
        // return; 
    }
    emit('confirm', { amount: amount.value });
}
</script>


<style scoped lang="less">
.custom-field-wrapper {
  border-radius: 9999px; /* full rounded */
  overflow: hidden;
  border: 1px solid #2e3044;
  background-color: #12131e;
  transition: border-color 0.3s;
}

.custom-field-wrapper:focus-within {
  border-color: #00F0FF;
}

.custom-field {
  background-color: transparent !important;
  color: white !important;
  padding: 12px 16px !important;
}

/* Override Vant field internal styles */
:deep(.van-field__control) {
  color: white !important;
  font-size: 16px;
}
:deep(.van-field__control::placeholder) {
  color: #444 !important;
}
</style>
