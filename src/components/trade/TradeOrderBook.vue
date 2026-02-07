<template>
  <div class="transaction-list-area max-w-[320px] w-full h-full border-l border-[#2B2F36] flex flex-col bg-[#0B0E11]">
    <!-- Tabs and Layout Switcher -->
    <div class="border-b border-[#2B2F36] px-2 pt-1 pb-1">
        <div class="flex items-center justify-between">
            <van-tabs v-model:active="activeTab" type="line" background="transparent" color="#FFFFFF" title-active-color="#FFFFFF" title-inactive-color="#848e9c" line-width="30px" line-height="2px" :border="false" class="custom-tabs flex-1">
                <van-tab :title="t('trade.entrusted')"></van-tab>
                <van-tab :title="t('trade.latestDeal')"></van-tab>
            </van-tabs>
        </div>
        
            <div 
                v-for="layout in layouts" 
                :key="layout.id"
                class="layout-btn flex items-center justify-center transition-all duration-200"
                :class="{ active: activeLayout === layout.id }"
                @click="activeLayout = layout.id"
            >
                <!-- Layout 1 -->
                <svg v-if="layout.id === 1" width="16" height="16" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30" height="30" rx="8" fill="var(--bg-color, #1A1B24)" />
                  <rect x="5" y="5" width="5.87413" height="9.09091" rx="2" fill="var(--primary-color, #00F0FF)" />
                  <rect x="13.811" y="5" width="10.7692" height="4.54545" rx="2" fill="var(--right-color, #888)" />
                  <rect x="13.811" y="12.2729" width="10.7692" height="4.54545" rx="2" fill="var(--right-color, #888)" />
                  <rect x="13.811" y="19.5459" width="10.7692" height="4.54545" rx="2" fill="var(--right-color, #888)" />
                  <rect x="5" y="15.9131" width="5.87413" height="9.09091" rx="2" fill="var(--secondary-color, #DB4242)" />
                </svg>
                <!-- Layout 2 -->
                <svg v-if="layout.id === 2" width="16" height="16" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30" height="30" rx="8" fill="var(--bg-color, #1A1B24)" />
                  <rect x="5" y="5" width="6" height="19" rx="2" fill="var(--primary-color, #00F0FF)" />
                  <rect x="13.811" y="5" width="10.7692" height="4.54545" rx="2" fill="var(--right-color, #888)" />
                  <rect x="13.811" y="12.2729" width="10.7692" height="4.54545" rx="2" fill="var(--right-color, #888)" />
                  <rect x="13.811" y="19.5459" width="10.7692" height="4.54545" rx="2" fill="var(--right-color, #888)" />
                </svg>
                <!-- Layout 3 -->
                <svg v-if="layout.id === 3" width="16" height="16" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30" height="30" rx="8" fill="var(--bg-color, #1A1B24)" />
                  <rect x="13.811" y="5" width="10.7692" height="4.54545" rx="2" fill="var(--right-color, #888)" />
                  <rect x="13.811" y="12.2729" width="10.7692" height="4.54545" rx="2" fill="var(--right-color, #888)" />
                  <rect x="13.811" y="19.5459" width="10.7692" height="4.54545" rx="2" fill="var(--right-color, #888)" />
                  <rect x="5" y="5" width="6" height="20" rx="2" fill="var(--secondary-color, #DB4242)" />
                </svg>
            </div>
    </div>
    
    <!-- Table Header (Mock) -->
    <div class="flex justify-between px-4 py-2 text-xs text-[#848E9C]">
        <span>{{ t('trade.amount') }}</span>
        <span>{{ t('trade.price') }}</span>
    </div>

    <!-- Content -->
    <div class="cm-transaction-content flex-1 overflow-y-auto custom-scrollbar">
      <div class="transaction-table">
        <ul class="table-body">
          <li v-for="(order, i) in orderBook" :key="i" class="table-li relative flex justify-between items-center h-[22px] px-4 my-1 cursor-pointer">
            <span class="column amount text-[#EAECEF] text-xs relative z-10">{{ order.amount }}</span>
            <span class="column text-xs relative z-10" :class="order.type === 'buy' ? 'text-[#0ECB81]' : 'text-[#F6465D]'">{{ order.price }}</span>
            
            <!-- Background Bar -->
            <i class="absolute top-0 right-0 bottom-0 opacity-20" 
               :class="order.type === 'buy' ? 'bg-[#0ECB81]' : 'bg-[#F6465D]'" 
               :style="{ width: order.bgOffset + '%' }"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeTab = ref(0) // Entrusted Order
const activeLayout = ref(1)

const layouts = [
    { id: 1, name: 'layout1' },
    { id: 2, name: 'layout2' },
    { id: 3, name: 'layout3' },
]

const orderBook = [
  { amount: '0.023244', price: '79048.355912', type: 'buy', bgOffset: 91 },
  { amount: '0.025649', price: '79041.500727', type: 'buy', bgOffset: 50 },
  { amount: '0.020041', price: '79037.969489', type: 'buy', bgOffset: 40 },
  { amount: '0.015255', price: '79034.238213', type: 'buy', bgOffset: 31 },
  { amount: '0.017003', price: '79032.495119', type: 'buy', bgOffset: 47 },
  { amount: '0.019489', price: '79030.051879', type: 'buy', bgOffset: 34 },
  { amount: '0.015995', price: '79029.061272', type: 'buy', bgOffset: 85 },
  { amount: '0.023492', price: '79028.320081', type: 'buy', bgOffset: 43 },
  { amount: '0.020798', price: '79028.302028', type: 'buy', bgOffset: 78 },
  { amount: '0.015660', price: '79025.627017', type: 'buy', bgOffset: 50 },
  // Short/Sell
  { amount: '0.015959', price: '79093.608366', type: 'sell', bgOffset: 42 },
  { amount: '0.016652', price: '79095.613742', type: 'sell', bgOffset: 91 },
  { amount: '0.022345', price: '79098.830103', type: 'sell', bgOffset: 60 },
  { amount: '0.021067', price: '79099.175427', type: 'sell', bgOffset: 62 },
  { amount: '0.022312', price: '79101.799307', type: 'sell', bgOffset: 31 },
  { amount: '0.020447', price: '79109.473638', type: 'sell', bgOffset: 55 },
  { amount: '0.018044', price: '79112.421104', type: 'sell', bgOffset: 37 },
  { amount: '0.017061', price: '79116.670160', type: 'sell', bgOffset: 48 },
  { amount: '0.013164', price: '79117.680871', type: 'sell', bgOffset: 40 },
  { amount: '0.014807', price: '79118.439877', type: 'sell', bgOffset: 79 },
]
</script>

<style scoped lang="less">
@import '@/styles/trade.less';

/* Layout Switcher Styles */
.layout-btn {
    --primary-color: #339a6f;
    --bg-color: #141428;
    --right-color: #7a7a97;
    --secondary-color: #a41862;
    
    margin-right: 10px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    border-width: 2px;
    background-color: var(--bg-color);
    border-color: #2c2c3e;
    border-radius: 8px;
    border-style: solid;

    &.active {
        --primary-color: #40d38e !important;
        --secondary-color: #e21a7b !important;
        --right-color: #ececff !important;
        border-color: #84849f !important;
    }
}
</style>
