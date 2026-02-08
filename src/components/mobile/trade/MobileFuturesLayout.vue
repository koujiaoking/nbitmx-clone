<template>
  <div class="mobile-futures-layout">
    <!-- 顶部价格信息区域 -->
    <div class="price-header">
      <div class="symbol-info">
        <div class="symbol-selector">
          {{ symbol }}
          <van-icon name="arrow-down" size="12" />
        </div>
        <div class="price-change">
          <span class="price">{{ currentPrice }}</span>
          <span :class="['change', priceChangeClass]">
            {{ priceChange }}
            <van-icon :name="priceChangeClass === 'up' ? 'arrow-up' : 'arrow-down'" size="10" />
          </span>
        </div>
      </div>
      
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-label">24H最高价</div>
          <div class="stat-value high">{{ stats.high24h }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">24H最低价</div>
          <div class="stat-value low">{{ stats.low24h }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">24H成交量</div>
          <div class="stat-value">{{ stats.volume24h }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">24H成交额</div>
          <div class="stat-value">{{ stats.turnover24h }}</div>
        </div>
      </div>
    </div>

    <!-- Tab 切换 -->
    <van-tabs v-model:active="activeTab" class="chart-tabs" @change="onTabChange">
      <van-tab title="图表"></van-tab>
      <van-tab title="委托订单"></van-tab>
      <van-tab title="最新交易"></van-tab>
    </van-tabs>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 图表视图 -->
      <div v-show="activeTab === 0" class="chart-container">
        <slot name="chart">
          <div class="chart-placeholder">
            <div class="tradingview-widget-container" ref="chartContainer">
              <!-- TradingView 图表将在这里渲染 -->
            </div>
          </div>
        </slot>
      </div>

      <!-- 委托订单视图 -->
      <div v-show="activeTab === 1" class="orders-container">
        <slot name="orders">
          <div class="empty-state">
            <van-icon name="search" size="64" color="#666" />
            <p>没有更多了</p>
          </div>
        </slot>
      </div>

      <!-- 最新交易视图 -->
      <div v-show="activeTab === 2" class="trades-container">
        <slot name="trades">
          <div class="empty-state">
            <van-icon name="search" size="64" color="#666" />
            <p>没有更多了</p>
          </div>
        </slot>
      </div>
    </div>

    <!-- 底部操作按钮 -->
    <div class="action-buttons">
      <button class="btn-long" @click="onBuyLong">
        买涨
      </button>
      <button class="btn-short" @click="onBuyShort">
        买跌
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  symbol?: string
  currentPrice?: string
  priceChange?: string
  stats?: {
    high24h: string
    low24h: string
    volume24h: string
    turnover24h: string
  }
}

const props = withDefaults(defineProps<Props>(), {
  symbol: 'BTC/USDT',
  currentPrice: '69,156.0100',
  priceChange: '0.5614%',
  stats: () => ({
    high24h: '71751.33',
    low24h: '67300.00',
    volume24h: '5.97M',
    turnover24h: '412835.48M'
  })
})

const emit = defineEmits(['buy-long', 'buy-short'])

const activeTab = ref(0)
const chartContainer = ref<HTMLElement>()

const priceChangeClass = computed(() => {
  return props.priceChange?.startsWith('-') ? 'down' : 'up'
})

const onTabChange = (index: number) => {
  console.log('Tab changed:', index)
}

const onBuyLong = () => {
  emit('buy-long')
}

const onBuyShort = () => {
  emit('buy-short')
}

onMounted(() => {
  // TODO: 初始化 TradingView 图表
  console.log('Chart container mounted')
})

onUnmounted(() => {
  // TODO: 清理 TradingView 图表
})
</script>

<style scoped lang="less">
.mobile-futures-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #0a0a0f;
  color: #fff;
  padding-bottom: 20vw; // 为底部按钮留空间
}

// 价格信息区域
.price-header {
  padding: 3vw 4vw;
  background: #0a0a0f;
  border-bottom: 1px solid #1a1a1f;
}

.symbol-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3vw;
}

.symbol-selector {
  display: flex;
  align-items: center;
  gap: 2vw;
  font-size: 4vw;
  font-weight: 600;
}

.price-change {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  .price {
    font-size: 7vw;
    font-weight: 700;
    margin-bottom: 1vw;
  }
  
  .change {
    font-size: 3.5vw;
    display: flex;
    align-items: center;
    gap: 1vw;
    
    &.up {
      color: #00f0a0;
    }
    
    &.down {
      color: #ff4444;
    }
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 1vw;
  
  .stat-label {
    font-size: 3vw;
    color: #888;
  }
  
  .stat-value {
    font-size: 3.5vw;
    color: #fff;
    
    &.high {
      color: #00f0a0;
    }
    
    &.low {
      color: #ff4444;
    }
  }
}

// Tab 样式
.chart-tabs {
  background: #0a0a0f;
  
  :deep(.van-tabs__wrap) {
    border-bottom: 1px solid #1a1a1f;
  }
  
  :deep(.van-tab) {
    color: #888;
    font-size: 3.5vw;
  }
  
  :deep(.van-tab--active) {
    color: #00f0ff;
  }
  
  :deep(.van-tabs__line) {
    background: #00f0ff;
  }
}

// 主要内容区域
.main-content {
  flex: 1;
  overflow-y: auto;
}

.chart-container,
.orders-container,
.trades-container {
  min-height: 60vh;
}

.chart-placeholder {
  width: 100%;
  height: 100%;
  min-height: 60vh;
  background: #0d0d12;
}

.tradingview-widget-container {
  width: 100%;
  height: 100%;
  min-height: 60vh;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20vw 0;
  color: #666;
  
  p {
    margin-top: 4vw;
    font-size: 3.5vw;
  }
}

// 底部操作按钮
.action-buttons {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4vw;
  padding: 4vw;
  background: #0a0a0f;
  border-top: 1px solid #1a1a1f;
  z-index: 100;
  
  button {
    height: 12vw;
    border: none;
    border-radius: 2vw;
    font-size: 4vw;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    
    &:active {
      transform: scale(0.98);
    }
  }
  
  .btn-long {
    background: #00f0a0;
    color: #000;
    
    &:active {
      background: #00d890;
    }
  }
  
  .btn-short {
    background: #ff4444;
    color: #fff;
    
    &:active {
      background: #dd3333;
    }
  }
}
</style>
