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
                 <TradeChart symbol="BINANCE:BTCUSDT" pageUri="nbitmx.com/play/currency/trade" />
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
                <van-tabs v-model:active="activeOrderTab" type="line" background="transparent" color="#00f0ff" title-active-color="#00f0ff" title-inactive-color="#848e9c" line-width="30px" line-height="2px" :border="false">
                    <van-tab title="Open orders"></van-tab>
                    <van-tab title="Filled Order"></van-tab>
                    <van-tab title="Cancelled Order"></van-tab>
                </van-tabs>
              </div>
              <div class="content-container">
                <div class="cm-empty-image empty-state flex flex-col items-center justify-center py-10">
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
import { ref } from 'vue'
import TradeLayout from '@/components/trade/TradeLayout.vue'
import TradeTopInfo from '@/components/trade/TradeTopInfo.vue'
import TradeCurrencyList from '@/components/trade/TradeCurrencyList.vue'
import TradeChart from '@/components/trade/TradeChart.vue'
import TradeOrderBook from '@/components/trade/TradeOrderBook.vue'
import SpotForm from '@/components/trade/forms/SpotForm.vue'

const activeOrderTab = ref(0)
</script>

<style scoped>
@import '@/views/jiaoyi.css';
</style>
