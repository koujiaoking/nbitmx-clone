<template>
  <div class="trend-analysis mt-[80px]">
    <h2 class="mb-[30px] text-[30px] lh-[40px] font-bold">Trend analysis</h2>
    <van-tabs v-model:active="active" shrink>
      <van-tab v-for="item in trendData" :key="item.symbol">
        <template #title>
          <div class="trend-item">
            <div class="trend-icon">
              <img :src="`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`" class="trend-img" @error="e=>(e.target as HTMLImageElement).src='https://assets.coincap.io/assets/icons/btc@2x.png'" />
            </div>
            <div class="trend-info">
              <div class="trend-symbol">
                {{ item.symbol }}/USDT
              </div>
              <div class="trend-price">
                {{ item.price }}
                <span class="trend-change" :class="{ 'price-up': item.change >= 0, 'price-down': item.change < 0 }">{{ item.change > 0 ? '+' : '' }}{{ item.change }}%</span>
              </div>
            </div>
          </div>
        </template>
      </van-tab>
    </van-tabs>
    <div class="py-[20px]">
      <GLightweightChart />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)

const trendData = ref([
  { symbol: 'POL', price: '0.103000', change: -0.19 },
  { symbol: 'ALGO', price: '0.101100', change: -1.55 },
  { symbol: 'RENDER', price: '1.507000', change: -1.95 },
  { symbol: 'NEAR', price: '1.172000', change: 0.00 },
  { symbol: 'ARB', price: '0.137300', change: 0.00 },
  { symbol: 'ETC', price: '9.580000', change: 0.00 },
  { symbol: 'BTC', price: '96732.12', change: 2.15 },
  { symbol: 'ETH', price: '3892.45', change: -0.85 },
  { symbol: 'SOL', price: '198.60', change: 5.23 },
  { symbol: 'XRP', price: '1.12000', change: 1.12 },
  { symbol: 'DOGE', price: '0.18000', change: -4.20 },
  { symbol: 'ADA', price: '0.85000', change: 0.90 },
  { symbol: 'AVAX', price: '35.4000', change: -2.30 },
  { symbol: 'DOT', price: '7.15000', change: 1.45 },
  { symbol: 'LINK', price: '15.2000', change: -0.65 },
])
</script>

<style scoped lang="less">
.trend-analysis {
  :deep(.van-tabs__wrap) {
    height: auto;
  }
  :deep(.van-tabs__nav) {
    background: transparent;
    border: none;
    padding-bottom: 0;
  }
  :deep(.van-tab) {
    padding: 0;
    margin-right: 12px;
    flex: none;
    background: transparent;
  }
  
  // Hide default underlines
  :deep(.van-tabs__line) {
    display: none; 
  }
  :deep(.van-tabs__content) {
    background: transparent;
    margin-top: 10px;
  }

  // Custom Item Styles
  .trend-item {
    width: 250px;
    height: 50px;
    display: flex;
    cursor: pointer;
    align-items: center;
    border-radius: 999px;
    background-repeat: no-repeat;
    padding: 8px 12px;

    .trend-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      overflow: hidden;
      background: #222;
      flex-shrink: 0;
      margin-right: 8px;
      
      .trend-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .trend-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;

      .trend-symbol {
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        line-height: 1;
        font-family: sans-serif;
      }

      .trend-price {
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        font-family: monospace;
        color: #fff;

        &.price-up {
          color: #00f0ff;
        }
        &.price-down {
          color: #ff3b30;
        }
        
        .trend-change {
          margin-left: 4px;
        }
      }
    }
  }

  // Active State
  :deep(.van-tab--active) {
    .trend-item {
        border: 1px solid #0a444b;
        background-image: url(../../assets/images/trends-btn.png);
        background-size: 100% 100%;
        -webkit-backdrop-filter: blur(7px);
        backdrop-filter: blur(7px);
    }
  }
}
</style>
