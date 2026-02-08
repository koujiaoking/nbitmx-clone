<template>
  <div class="transaction-list-area max-w-[320px] w-full h-full border-l border-[#2B2F36] flex flex-col bg-[#0B0E11]">
    <!-- Tabs and Layout Switcher -->
    <div class="border-b border-[#2B2F36] px-2 pt-1 pb-1">
      <div class="flex items-center justify-between">
        <!-- Tabs -->
        <van-tabs 
          v-model:active="activeTab" 
          type="line" 
          background="transparent" 
          color="#FFFFFF" 
          title-active-color="#FFFFFF" 
          title-inactive-color="#848e9c" 
          line-width="30px" 
          line-height="2px" 
          :border="false" 
          class="custom-tabs flex-1"
        >
          <van-tab :title="t('trade.entrusted')"></van-tab>
          <van-tab :title="t('trade.latestDeal')"></van-tab>
        </van-tabs>
        
        
      </div>
    </div>

    <!-- Content -->
    <div class="cm-transaction-content flex-1 overflow-y-auto custom-scrollbar">
      <!-- 委托订单视图 -->
      <div v-if="activeTab === 0" class="transaction-table">
        <!-- Layout Switcher (Only show for 委托订单 tab) -->
        <div class="direction-box">
          <div 
            v-for="layout in layouts" 
            :key="layout.id"
            class="item"
            :class="{ active: activeLayout === layout.id }"
            @click="activeLayout = layout.id"
          >
            <img 
              :src="getLayoutIcon(layout.id)" 
            />
          </div>
        </div>
        <!-- Table Header -->
        <div class="flex justify-between px-4 py-2 text-xs text-[#848E9C]">
          <span>{{ t('trade.amount') }}</span>
          <span>{{ t('trade.price') }}</span>
        </div>
        
        <!-- Buy Orders (Long) - 布局1和2显示 -->
        <ul v-if="activeLayout === 1 || activeLayout === 2" class="table-body">
          <li 
            v-for="(order, i) in buyOrders" 
            :key="'buy-' + i" 
            class="table-li relative flex justify-between items-center h-[22px] px-4 my-1 cursor-pointer"
          >
            <span class="column amount text-[#EAECEF] text-xs relative z-10">{{ order.amount }}</span>
            <span class="column long text-xs relative z-10 text-[#0ECB81]">{{ order.price }}</span>
            
            <!-- Background Bar -->
            <i class="long-bg absolute top-0 right-0 bottom-0 opacity-20 bg-[#0ECB81]" 
               :style="{ width: order.bgOffset + '%', transform: `translateX(${order.bgOffset}%)`, transitionDuration: '300ms' }"></i>
          </li>
        </ul>
        
        <!-- Middle Price - 所有布局都显示 -->
        <li class="table-li li-middle">
          <span class="top">
            <span :style="{ color: priceDirection === 'up' ? 'green' : 'red' }">{{ currentPrice }}</span>
            <span class="img-down">
              <svg width="14" height="14" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10 L90 70 L60 70 L60 90 L40 90 L40 70 L10 70 Z" :fill="priceDirection === 'up' ? 'green' : 'red'"></path>
              </svg>
            </span>
          </span>
          <span class="bottom">≈ ${{ currentPrice }}</span>
        </li>
        
        <!-- Sell Orders (Short) - 布局1和3显示 -->
        <ul v-if="activeLayout === 1 || activeLayout === 3" class="table-body">
          <li 
            v-for="(order, i) in sellOrders" 
            :key="'sell-' + i" 
            class="table-li relative flex justify-between items-center h-[22px] px-4 my-1 cursor-pointer"
          >
            <span class="column amount text-[#EAECEF] text-xs relative z-10">{{ order.amount }}</span>
            <span class="column short text-xs relative z-10 text-[#F6465D]">{{ order.price }}</span>
            
            <!-- Background Bar -->
            <i class="short-bg absolute top-0 right-0 bottom-0 opacity-20 bg-[#F6465D]" 
               :style="{ width: order.bgOffset + '%', transform: `translateX(${order.bgOffset}%)`, transitionDuration: '300ms' }"></i>
          </li>
        </ul>
      </div>

      <!-- 最新成交视图 -->
      <div v-else class="transaction-table">
        <div class="order-section">
          <!-- Table Header -->
          <div class="table-header">
            <span class="column time">{{ t('trade.time') }}</span>
            <span class="column middle">{{ t('trade.price') }}</span>
            <span class="column amount">{{ t('trade.amount') }}</span>
          </div>
          
          <!-- Bids (Buy Trades) -->
          <ul class="table-body bids">
            <li 
              v-for="(trade, i) in buyTrades" 
              :key="'buy-trade-' + i" 
              class="table-li"
            >
              <span class="column time">{{ trade.time }}</span>
              <span class="column middle long">{{ trade.price }}</span>
              <span class="column amount">{{ trade.amount }}</span>
              <i class="up-bg" :style="{ transform: `translateX(${trade.bgOffset}%)`, transitionDuration: '300ms' }"></i>
            </li>
          </ul>
          
          <!-- Asks (Sell Trades) -->
          <ul class="table-body asks">
            <li 
              v-for="(trade, i) in sellTrades" 
              :key="'sell-trade-' + i" 
              class="table-li"
            >
              <span class="column time">{{ trade.time }}</span>
              <span class="column middle short">{{ trade.price }}</span>
              <span class="column amount">{{ trade.amount }}</span>
              <i class="down-bg" :style="{ transform: `translateX(${trade.bgOffset}%)`, transitionDuration: '300ms' }"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeTab = ref(0) // 0: Entrusted Order, 1: Latest Deal
const activeLayout = ref(1)

const layouts = [
    { id: 1, name: 'layout1' },
    { id: 2, name: 'layout2' },
    { id: 3, name: 'layout3' },
]

// 获取布局图标路径
const getLayoutIcon = (layoutId: number) => {
    return new URL(`../../assets/images/layout${layoutId}.svg`, import.meta.url).href
}

// Current price
const currentPrice = ref('69599.5500')
const priceDirection = ref('up')

// Buy Orders (Long)
const buyOrders = [
  { amount: '0.021776', price: '69579.184021', bgOffset: 86.3555 },
  { amount: '0.027931', price: '69577.914823', bgOffset: 33.9913 },
  { amount: '0.023878', price: '69570.492475', bgOffset: 70.6265 },
  { amount: '0.022390', price: '69564.407860', bgOffset: 34.7027 },
  { amount: '0.017595', price: '69564.169515', bgOffset: 80.0979 },
  { amount: '0.014942', price: '69560.440963', bgOffset: 31.0685 },
  { amount: '0.021756', price: '69559.898735', bgOffset: 72.533 },
  { amount: '0.018871', price: '69554.134499', bgOffset: 78.2906 },
  { amount: '0.020118', price: '69554.102319', bgOffset: 71.6881 },
  { amount: '0.022517', price: '69553.314301', bgOffset: 95.7503 },
]

// Sell Orders (Short)
const sellOrders = [
  { amount: '0.015841', price: '69622.357016', bgOffset: 47.4087 },
  { amount: '0.024753', price: '69623.239180', bgOffset: 45.2065 },
  { amount: '0.018972', price: '69627.087978', bgOffset: 72.0008 },
  { amount: '0.021100', price: '69628.086066', bgOffset: 75.5374 },
  { amount: '0.019797', price: '69637.615739', bgOffset: 55.867 },
  { amount: '0.018241', price: '69638.379755', bgOffset: 89.0695 },
  { amount: '0.014196', price: '69648.065525', bgOffset: 73.812 },
  { amount: '0.022866', price: '69658.745990', bgOffset: 88.0551 },
  { amount: '0.023275', price: '69661.884016', bgOffset: 65.2056 },
  { amount: '0.018659', price: '69664.681125', bgOffset: 70.4715 },
]

// Buy Trades
const buyTrades = [
  { time: '20:47:50', price: '69596.983313', amount: '0.016127', bgOffset: 36.7872 },
  { time: '20:46:33', price: '69595.476575', amount: '0.023689', bgOffset: 8.97009 },
  { time: '20:48:41', price: '69594.931080', amount: '0.011994', bgOffset: 29.173 },
  { time: '20:46:52', price: '69594.857248', amount: '0.018411', bgOffset: 44.6809 },
  { time: '20:47:24', price: '69594.264870', amount: '0.019582', bgOffset: 38.3021 },
  { time: '20:48:34', price: '69590.647479', amount: '0.020113', bgOffset: 24.4528 },
  { time: '20:45:45', price: '69590.622120', amount: '0.007633', bgOffset: 58.2035 },
  { time: '20:47:32', price: '69588.032023', amount: '0.010306', bgOffset: 61.1259 },
  { time: '20:49:12', price: '69581.845725', amount: '0.027197', bgOffset: 52.9778 },
  { time: '20:48:27', price: '69580.968335', amount: '0.015278', bgOffset: 55.4289 },
]

// Sell Trades
const sellTrades = [
  { time: '20:47:26', price: '69602.164002', amount: '0.009587', bgOffset: 49.4545 },
  { time: '20:48:07', price: '69605.061098', amount: '0.018249', bgOffset: 35.5433 },
  { time: '20:49:48', price: '69605.617955', amount: '0.014404', bgOffset: 61.3221 },
  { time: '20:49:29', price: '69610.974578', amount: '0.009966', bgOffset: 33.1339 },
  { time: '20:45:31', price: '69614.006465', amount: '0.015025', bgOffset: 25.1747 },
  { time: '20:47:19', price: '69617.618164', amount: '0.016996', bgOffset: 56.6857 },
  { time: '20:47:23', price: '69617.917487', amount: '0.007095', bgOffset: 52.4364 },
  { time: '20:46:04', price: '69621.743563', amount: '0.010557', bgOffset: 38.9508 },
  { time: '20:46:34', price: '69622.641842', amount: '0.025595', bgOffset: 56.7695 },
  { time: '20:49:43', price: '69623.837591', amount: '0.015808', bgOffset: 29.7315 },
]
</script>

<style scoped lang="less">

/* Layout Switcher Styles */
.direction-box {
    margin-top: 12px;
    margin-bottom: 12px;
    height: 24px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    .item {
      --primary-color: #339a6f;
      --bg-color: #141428;
      --right-color: #7a7a97;
      --secondary-color: #a41862;
      margin-right: 10px;
      width: 24px;
      height: 24px;
      cursor: pointer;
      border-width: 2px;
      --un-border-opacity: 1;
      border-color: rgb(44 44 62 / var(--un-border-opacity));
      border-radius: 8px;
      border-style: solid;
      &.active {
        --primary-color: #40d38e !important;
        --secondary-color: #e21a7b !important;
        --right-color: #ececff !important;
        border-color: #84849f !important;
      }
    }
}

/* Table Body Styles */
.table-body {
  padding: 0 20px;
  list-style: none;
  margin: 0;
}

.table-li {
  padding: 0;
  margin: 0 0 2px;
  box-sizing: border-box;
  display: flex;
  height: 26px;
  line-height: 26px;
  width: 100%;
  position: relative;
  z-index: 2;
  overflow: hidden;
  cursor: pointer;
}

.table-li:hover .long-bg,
.table-li:hover .short-bg,
.table-li:hover .up-bg,
.table-li:hover .down-bg {
  opacity: 1;
  transform: translate(0) !important;
}

.column {
  text-align: left;
  flex: 1;
}

.column:last-of-type {
  text-align: right;
}

.column.middle {
  text-align: center;
  flex: 1;
}

.column.middle.long {
  color: var(--font-win, #0ECB81);
}

.column.middle.short {
  color: var(--font-lose, #F6465D);
}

.column.time,
.column.amount {
  flex: 1;
}

/* Background bars */
.long-bg, .short-bg, .up-bg, .down-bg {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.3s ease;
  transform-origin: right center;
  opacity: 0.8;
}

.long-bg {
  background: linear-gradient(90deg, rgba(64, 211, 142, 0.1), rgba(64, 211, 142, 0.9));
}

.short-bg {
  background: linear-gradient(90deg, rgba(255, 72, 52, 0.1), rgba(255, 72, 52, 0.9));
}

.up-bg {
  background: linear-gradient(90deg, #40d38e1a, #40d38ee6);
}

.down-bg {
  background: linear-gradient(90deg, #ff48341a, #ff4834e6);
}

/* Middle Price Styles */
.li-middle {
  font-size: 20px;
  height: 35px;
  margin: 5px 0;
  display: flex;
  justify-content: flex-start;
  padding: 0 20px;
}

.li-middle > span {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  font-weight: 400;
  color: #888;
  font-size: 14px;
}

.li-middle .top {
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.img-down {
  display: flex;
  align-items: center;
}

.bottom {
  margin-left: 10px;
}

/* Latest Deals Styles */
.transaction-table {
  width: 100%;
  position: relative;
}

.table-header {
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  color: #5e5e7a;
  display: flex;
  padding: 0 20px;
}

.order-section {
  width: 100%;
}

/* Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(124, 124, 151, 0.3);
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
</style>
