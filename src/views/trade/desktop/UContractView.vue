<template>
<div class="trade-page">
  <!-- Top Info Bar -->
  <TradeTopInfo />
  
  <!-- Main Content Area -->
  <div class="trade-main">
    <!-- Left: Currency List -->
    <TradeCurrencyList />
    
    <!-- Center: Chart + Form + Orders -->
    <div class="trade-center">
      <!-- Chart Area -->
      <div class="trade-chart-area">
        <TradeChart :symbol="currentSymbol" pageUri="nbitmx.com/play/ucontract/index" />
      </div>
      
      <!-- Buy / Sell Form Area -->
      <div class="trade-form-area">
        <!-- Buy Section -->
        <div class="trade-form-section">
          <div class="trade-form-header">
            <div class="trade-form-type-tabs">
              <span :class="['trade-form-type-tab', { active: buyFormTab === 'limit' }]" @click="buyFormTab = 'limit'">{{ t('trade.market') }}</span>
              <span :class="['trade-form-type-tab', { active: buyFormTab === 'market' }]" @click="buyFormTab = 'market'">{{ t('trade.limit') }}</span>
            </div>
            <div class="text-[#848E9C] text-xs cursor-pointer hover:text-[#EAECEF]">{{ t('trade.fee') }}</div>
          </div>
          
          <div class="trade-input-group">
            <div class="trade-input-label">{{ t('trade.buyPrice') }} (USDT)</div>
            <div class="trade-input-box">
              <input type="text" v-model="buyPrice" :placeholder="t('trade.price')">
              <span class="unit">USDT</span>
            </div>
          </div>
          
          <div class="trade-input-group">
            <div class="trade-input-label">{{ t('trade.buyAmount') }} (BTC)</div>
            <div class="trade-input-box">
              <input type="text" v-model="buyAmount" :placeholder="t('trade.amount')">
              <span class="unit">BTC</span>
            </div>
          </div>
          
          <div class="trade-slider">
            <div class="trade-slider-track"></div>
            <div class="trade-slider-points">
              <div class="trade-slider-point active"></div>
              <div class="trade-slider-point"></div>
              <div class="trade-slider-point"></div>
              <div class="trade-slider-point"></div>
              <div class="trade-slider-point"></div>
            </div>
          </div>
          
          <div class="flex justify-between text-xs text-[#848E9C] mb-2">
            <span>{{ t('trade.available') }}</span>
            <span class="text-[#EAECEF]">0.00 USDT</span>
          </div>
           <div class="flex justify-between text-xs text-[#848E9C] mb-2">
            <span>{{ t('trade.turnover') }}</span>
            <span class="text-[#EAECEF]">0.00 USDT</span>
          </div>
          
          <button class="trade-btn buy">{{ t('trade.buy') }} BTC</button>
        </div>
        
        <!-- Sell Section -->
        <div class="trade-form-section">
          <div class="trade-form-header">
            <div class="trade-form-type-tabs">
              <span :class="['trade-form-type-tab', { active: sellFormTab === 'limit' }]" @click="sellFormTab = 'limit'">{{ t('trade.market') }}</span>
              <span :class="['trade-form-type-tab', { active: sellFormTab === 'market' }]" @click="sellFormTab = 'market'">{{ t('trade.limit') }}</span>
            </div>
          </div>
          
          <div class="trade-input-group">
            <div class="trade-input-label">{{ t('trade.sellPrice') }} (USDT)</div>
            <div class="trade-input-box">
              <input type="text" v-model="sellPrice" :placeholder="t('trade.price')">
              <span class="unit">USDT</span>
            </div>
          </div>
          
          <div class="trade-input-group">
            <div class="trade-input-label">{{ t('trade.sellAmount') }} (BTC)</div>
            <div class="trade-input-box">
              <input type="text" v-model="sellAmount" :placeholder="t('trade.amount')">
              <span class="unit">BTC</span>
            </div>
          </div>
          
          <div class="trade-slider">
             <div class="trade-slider-track"></div>
            <div class="trade-slider-points">
              <div class="trade-slider-point active"></div>
              <div class="trade-slider-point"></div>
              <div class="trade-slider-point"></div>
              <div class="trade-slider-point"></div>
              <div class="trade-slider-point"></div>
            </div>
          </div>
          
          <div class="flex justify-between text-xs text-[#848E9C] mb-2">
            <span>{{ t('trade.available') }}</span>
            <span class="text-[#EAECEF]">0.000000 BTC</span>
          </div>
          <div class="flex justify-between text-xs text-[#848E9C] mb-2">
            <span>{{ t('trade.turnover') }}</span>
            <span class="text-[#EAECEF]">0.00 USDT</span>
          </div>
          
          <button class="trade-btn sell">{{ t('trade.sell') }} BTC</button>
        </div>
      </div>
      
      <!-- Orders Section -->
      <div class="trade-orders-section">
        <van-tabs v-model:active="activeOrderTab" animated swipeable shrink background="transparent" color="#FFFFFF" title-active-color="#FFFFFF" title-inactive-color="#848e9c" line-width="30px" line-height="2px" :border="false">
           <van-tab :title="t('trade.entrusted')">
             <div class="trade-orders-content flex items-center justify-center h-[200px]">
                <div class="flex flex-col items-center">
                   <svg width="66" height="50" viewBox="0 0 66 50" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-30">
                    <path d="M7.33936 7.80139H46.3551V24.4C46.3551 33.3608 46.3551 37.8412 44.6112 41.2638C43.0773 44.2744 40.6296 46.7221 37.619 48.2561C34.1964 50 29.716 50 20.7551 50H13.7394C11.4991 50 10.379 50 9.52339 49.564C8.77075 49.1805 8.15882 48.5686 7.77533 47.8159C7.33936 46.9603 7.33936 45.8402 7.33936 43.6V7.80139Z" fill="white" fill-opacity="0.04"></path>
                    <path d="M7.8014 49.9995C3.4928 49.9995 0 46.5067 0 42.1981H33.0283C33.0283 49.9995 40.3679 49.9995 40.3679 49.9995H7.8014Z" fill="url(#paint0_linear)"></path>
                    <path d="M15.1408 0C10.8322 0 7.33936 3.49279 7.33936 7.80139H46.3552C46.3552 0 53.6948 0 53.6948 0H15.1408Z" fill="url(#paint1_linear)"></path>
                    <defs>
                      <linearGradient id="paint0_linear" x1="22.6228" y1="42.1981" x2="22.6228" y2="49.9995" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0.08"></stop>
                        <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                      </linearGradient>
                      <linearGradient id="paint1_linear" x1="33.3177" y1="7.80139" x2="33.3177" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0.04"></stop>
                        <stop offset="1" stop-color="white" stop-opacity="0.08"></stop>
                      </linearGradient>
                    </defs>
                   </svg>
                   <span class="text-[#848E9C] text-xs mt-2">{{ t('trade.noOrders') }}</span>
                </div>
             </div>
           </van-tab>
           <van-tab :title="t('trade.traded')"></van-tab>
           <van-tab :title="t('trade.canceled')"></van-tab>
           <van-tab :title="t('trade.assets')"></van-tab>
        </van-tabs>
      </div>
    </div>
    
    <!-- Right: Order Book -->
    <TradeOrderBook />
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import TradeTopInfo from '@/components/trade/TradeTopInfo.vue'
import TradeCurrencyList from '@/components/trade/TradeCurrencyList.vue'
import TradeChart from '@/components/trade/TradeChart.vue'
import TradeOrderBook from '@/components/trade/TradeOrderBook.vue'

const { t } = useI18n()
const route = useRoute()
const buyFormTab = ref('limit')
const sellFormTab = ref('limit')
const buyPrice = ref('')
const buyAmount = ref('')
const sellPrice = ref('')
const sellAmount = ref('')
const activeOrderTab = ref(0)

const currentSymbol = computed(() => {
  const s = route.params.symbol
  const symbolStr = Array.isArray(s) ? s[0] : (s || 'BTCUSDT')
  return `BINANCE:${symbolStr}`
})
</script>

<style scoped lang="less">
@import '@/styles/trade.less';
</style>
