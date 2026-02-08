<template>
  <TradeLayout>
    <template #top-info>
      <TradeTopInfo />
    </template>
    
    <template #left-sidebar>
      <TradeCurrencyList />
    </template>
    
    <template #right-content>
      <div class="flex flex-col min-h-full">
        <!-- Upper Area: Chart, Form, OrderBook -->
        <div class="flex flex-col lg:flex-row border-b border-[#2B2F36]">
           <!-- Left Column: Chart + Form -->
           <div class="flex-1 flex flex-col border-r border-[#2B2F36] min-w-0">
              <!-- Chart Area - Fixed height or flex? Let's make it fixed min height for visibility -->
              <div class="h-[450px] w-full relative">
                 <TradeChart :symbol="currentSymbol" pageUri="nbitmx.com/play/currency/trade" />
              </div>
              <!-- Form Area -->
              <SpotForm class="!h-auto" />
           </div>
           
           <!-- Right Column: Order Book -->
           <div class="w-full lg:w-[320px] flex-shrink-0 lg:h-auto h-[400px]">
              <TradeOrderBook />
           </div>
        </div>
        
        <!-- Lower Area: Open Orders -->
        <div class="area-right-bottom p-0 bg-[#0B0E11]">
            <div class="order-list">
              <div class="cm-tabs-container px-4 border-b border-[#2B2F36]">
                <van-tabs v-model:active="activeOrderTab" shrink type="line" background="transparent" color="#FFFFFF" title-active-color="#FFFFFF" title-inactive-color="#848e9c" line-width="30px" line-height="2px" :border="false">
                    <van-tab :title="t('trade.entrusted')"></van-tab>
                    <van-tab :title="t('trade.traded')"></van-tab>
                    <van-tab :title="t('trade.canceled')"></van-tab>
                </van-tabs>
              </div>
              <div class="content-container">
                <!-- 显示订单数据 -->
                <div v-if="displayedOrders.length > 0" class="orders-table px-4 py-2">
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="text-[#848E9C] text-xs border-b border-[#2B2F36]">
                        <th class="text-left py-2">Time</th>
                        <th class="text-left py-2">Pair</th>
                        <th class="text-left py-2">Type</th>
                        <th class="text-right py-2">Price</th>
                        <th class="text-right py-2">Amount</th>
                        <th class="text-right py-2">Filled</th>
                        <th class="text-right py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr 
                        v-for="(order, index) in displayedOrders" 
                        :key="index"
                        class="border-b border-[#2B2F36] hover:bg-[#1E2329] cursor-pointer"
                      >
                        <td class="py-2 text-[#EAECEF]">{{ order.time }}</td>
                        <td class="py-2 text-[#EAECEF]">{{ order.pair }}</td>
                        <td class="py-2" :class="order.type === 'Buy' ? 'text-[#0ECB81]' : 'text-[#F6465D]'">{{ order.type }}</td>
                        <td class="py-2 text-right text-[#EAECEF]">{{ order.price }}</td>
                        <td class="py-2 text-right text-[#EAECEF]">{{ order.amount }}</td>
                        <td class="py-2 text-right text-[#EAECEF]">{{ order.filled }}</td>
                        <td class="py-2 text-right" :class="getStatusClass(order.status)">{{ order.status }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <!-- 空状态 -->
                <div v-else class="cm-empty-image empty-state flex flex-col items-center justify-center py-10">
                  <svg width="66" height="50" viewBox="0 0 66 50" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-class opacity-50">
                    <path d="M7.33936 7.80139H46.3551V24.4C46.3551 33.3608 46.3551 37.8412 44.6112 41.2638C43.0773 44.2744 40.6296 46.7221 37.619 48.2561C34.1964 50 29.716 50 20.7551 50H13.7394C11.4991 50 10.379 50 9.52339 49.564C8.77075 49.1805 8.15882 48.5686 7.77533 47.8159C7.33936 46.9603 7.33936 45.8402 7.33936 43.6V7.80139Z" fill="white" fill-opacity="0.04"></path>
                    <path d="M7.8014 49.9995C3.4928 49.9995 0 46.5067 0 42.1981H33.0283C33.0283 49.9995 40.3679 49.9995 40.3679 49.9995H7.8014Z" fill="url(#paint0_linear_863_39965)"></path>
                    <path d="M15.1408 -2.6226e-05C10.8322 -2.6226e-05 7.33936 3.49279 7.33936 7.80139H46.3552C46.3552 -2.6226e-05 53.6948 -2.6226e-05 53.6948 -2.6226e-05H15.1408Z" fill="url(#paint1_linear_863_39965)"></path>
                    <rect x="13.2173" y="13.3334" width="17.7606" height="2.5" rx="1.25" fill="white" fill-opacity="0.06"></rect>
                    <rect x="13.2173" y="22.0833" width="12.3911" height="2.50001" rx="1.25" fill="white" fill-opacity="0.06"></rect>
                    <rect x="13.2173" y="30.8333" width="16.5215" height="2.50001" rx="1.25" fill="white" fill-opacity="0.06"></rect>
                    <defs>
                      <linearGradient id="paint0_linear_863_39965" x1="22.6228" y1="42.1981" x2="22.6228" y2="49.9995" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0.08"></stop>
                        <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                      </linearGradient>
                      <linearGradient id="paint1_linear_863_39965" x1="33.3177" y1="7.80139" x2="33.3177" y2="-2.6226e-05" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0.04"></stop>
                        <stop offset="1" stop-color="white" stop-opacity="0.08"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="mt-2 text-[#5e5e7a] text-sm">No open orders found</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </template>
  </TradeLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import TradeLayout from '@/components/trade/TradeLayout.vue'
import TradeTopInfo from '@/components/trade/TradeTopInfo.vue'
import TradeCurrencyList from '@/components/trade/TradeCurrencyList.vue'
import TradeChart from '@/components/trade/TradeChart.vue'
import TradeOrderBook from '@/components/trade/TradeOrderBook.vue'
import SpotForm from '@/components/trade/forms/SpotForm.vue'

const { t } = useI18n()
const route = useRoute()
const activeOrderTab = ref(0) // 0: Entrusted, 1: Traded, 2: Canceled

const currentSymbol = computed(() => {
  const s = route.params.symbol
  const symbolStr = Array.isArray(s) ? s[0] : (s || 'BTCUSDT')
  return `BINANCE:${symbolStr}`
})

// 模拟订单数据
const mockOpenOrders = [
  { time: '2026-02-08 21:30:15', pair: 'BTC/USDT', type: 'Buy', price: '79072.00', amount: '0.125', filled: '0.000', status: 'Open' },
  { time: '2026-02-08 21:28:42', pair: 'ETH/USDT', type: 'Sell', price: '2850.50', amount: '1.500', filled: '0.800', status: 'Partial' },
  { time: '2026-02-08 21:25:18', pair: 'BTC/USDT', type: 'Buy', price: '78950.00', amount: '0.050', filled: '0.000', status: 'Open' },
]

const mockTradedOrders = [
  { time: '2026-02-08 21:20:33', pair: 'BTC/USDT', type: 'Buy', price: '79000.00', amount: '0.100', filled: '0.100', status: 'Filled' },
  { time: '2026-02-08 21:15:27', pair: 'ETH/USDT', type: 'Sell', price: '2840.00', amount: '2.000', filled: '2.000', status: 'Filled' },
  { time: '2026-02-08 21:10:45', pair: 'SOL/USDT', type: 'Buy', price: '105.20', amount: '10.000', filled: '10.000', status: 'Filled' },
]

const mockCanceledOrders = [
  { time: '2026-02-08 21:05:12', pair: 'BTC/USDT', type: 'Sell', price: '80000.00', amount: '0.200', filled: '0.000', status: 'Canceled' },
  { time: '2026-02-08 20:58:30', pair: 'XRP/USDT', type: 'Buy', price: '1.6000', amount: '100.000', filled: '0.000', status: 'Canceled' },
]

// 根据Tab显示不同的订单
const displayedOrders = computed(() => {
  if (activeOrderTab.value === 0) return mockOpenOrders
  if (activeOrderTab.value === 1) return mockTradedOrders
  if (activeOrderTab.value === 2) return mockCanceledOrders
  return []
})

// 获取状态样式
const getStatusClass = (status: string) => {
  if (status === 'Filled') return 'text-[#0ECB81]'
  if (status === 'Canceled') return 'text-[#F6465D]'
  if (status === 'Partial') return 'text-[#FFB800]'
  return 'text-[#848E9C]'
}
</script>

<style scoped lang="less">
@import '@/styles/trade.less';
</style>
