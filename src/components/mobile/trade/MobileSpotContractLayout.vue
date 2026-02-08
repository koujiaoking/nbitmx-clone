<template>
  <div class="mobile-spot-contract-layout">
    <!-- 顶部价格和布局切换 -->
    <div class="price-header">
      <div class="symbol-price">
        <div class="symbol">
          {{ symbol }}
          <van-icon name="arrow-down" size="12" />
        </div>
        <div :class="['price-change', priceChangeClass]">
          {{ priceChange }}
          <van-icon :name="priceChangeClass === 'up' ? 'arrow-up' : 'arrow-down'" size="10" />
        </div>
      </div>
      
      <!-- 布局切换按钮 -->
      <button class="layout-toggle" @click="toggleLayout">
        <van-icon :name="isChartView ? 'bars' : 'chart-trending-o'" size="20" />
      </button>
    </div>

    <!-- 盘口视图 (默认) -->
    <div v-if="!isChartView" class="orderbook-view">
      <!-- 买卖选择和市价按钮 -->
      <div class="trade-tabs">
        <button :class="['tab-btn', tradeType === 'buy' ? 'active' : '']" @click="tradeType = 'buy'">
          买入
        </button>
        <button class="market-btn">市价</button>
        <button :class="['tab-btn', tradeType === 'sell' ? 'active' : '']" @click="tradeType = 'sell'">
          卖出
        </button>
      </div>

      <!-- 盘口列表 -->
      <div class="orderbook-grid">
        <!-- 左侧卖单 -->
        <div class="orderbook-side sell-side">
          <div class="orderbook-header">
            <span class="label">价格<br/>(USDT)</span>
            <span class="label">数量<br/>(BTC)</span>
          </div>
          <div class="orderbook-items">
            <slot name="sellOrders">
              <div v-for="(order, index) in mockSellOrders" :key="index" class="order-item sell">
                <span class="price">{{ order.price }}</span>
                <span class="quantity">{{ order.quantity }}</span>
              </div>
            </slot>
          </div>
        </div>

        <!-- 右侧交易表单 -->
        <div class="trade-form">
          <!-- 市价/限价选择 -->
          <div class="order-type-selector">
            <van-dropdown-menu>
              <van-dropdown-item v-model="orderType" :options="orderTypeOptions" />
            </van-dropdown-menu>
          </div>

          <!-- 当前价格显示 -->
          <div class="current-price">
            <span class="price-value">{{ currentPrice }}</span>
            <span class="currency">USDT</span>
          </div>

          <!-- 数量滑块 -->
          <div class="amount-section">
            <div class="section-label">Transaction Amount</div>
            <van-slider v-model="amount" :max="100" bar-height="4px" active-color="#00f0ff">
              <template #button>
                <div class="slider-button"></div>
              </template>
            </van-slider>
            <div class="amount-labels">
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </div>

          <!-- 数量输入 -->
          <div class="quantity-section">
            <div class="section-label">数量</div>
            <div class="input-group">
              <input type="text" :value="quantity" placeholder="0" />
              <span class="currency">BTC</span>
            </div>
          </div>

          <!-- 可用余额 -->
          <div class="balance-info">
            <span class="label">可用</span>
            <span class="value">{{ available }} USDT</span>
            <van-icon name="arrow" size="12" />
          </div>

          <!-- 买入按钮 -->
          <button :class="['action-btn', tradeType]">
            {{ tradeType === 'buy' ? '买入' : '卖出' }}
          </button>
        </div>
      </div>

      <!-- 底部订单Tab -->
      <div class="bottom-tabs">
        <van-tabs v-model:active="bottomTab" class="order-tabs">
          <van-tab title="当前委托"></van-tab>
          <van-tab title="已成交"></van-tab>
          <van-tab title="已挂单"></van-tab>
        </van-tabs>
        
        <div class="orders-content">
          <slot name="orders">
            <div class="empty-state">
              <van-icon name="search" size="64" color="#666" />
              <p>没有更多了</p>
            </div>
          </slot>
        </div>
      </div>
    </div>

    <!-- 图表视图 (切换后) -->
    <div v-else class="chart-view">
      <!-- 价格统计 -->
      <div class="stats-bar">
        <div class="stat-item">
          <span class="label">24H最高价</span>
          <span class="value high">{{ stats.high24h }}</span>
        </div>
        <div class="stat-item">
          <span class="label">24H最低价</span>
          <span class="value low">{{ stats.low24h }}</span>
        </div>
        <div class="stat-item">
          <span class="label">24H成交量</span>
          <span class="value">{{ stats.volume24h }}</span>
        </div>
        <div class="stat-item">
          <span class="label">24H成交额</span>
          <span class="value">{{ stats.turnover24h }}</span>
        </div>
      </div>

      <!-- 图表区域 -->
      <div class="chart-container">
        <slot name="chart">
          <div class="chart-placeholder">
            <div class="tradingview-widget-container" ref="chartContainer">
              <!-- TradingView 图表 -->
            </div>
          </div>
        </slot>
      </div>

      <!-- Tab 切换 -->
      <van-tabs v-model:active="chartTab" class="chart-tabs">
        <van-tab title="委托订单"></van-tab>
        <van-tab title="最新交易"></van-tab>
      </van-tabs>

      <!-- 底部盘口列表 -->
      <div class="bottom-orderbook">
        <div class="orderbook-header">
          <span>买入</span>
          <span>卖出</span>
          <van-dropdown-menu>
            <van-dropdown-item v-model="precision" :options="precisionOptions" />
          </van-dropdown-menu>
        </div>
        
        <div class="orderbook-table">
          <slot name="orderbookTable">
            <table>
              <tbody>
                <tr v-for="(row, index) in mockOrderbookRows" :key="index">
                  <td class="buy-qty">{{ row.buyQty }}</td>
                  <td class="price buy">{{ row.buyPrice }}</td>
                  <td class="price sell">{{ row.sellPrice }}</td>
                  <td class="sell-qty">{{ row.sellQty }}</td>
                </tr>
              </tbody>
            </table>
          </slot>
        </div>
      </div>

      <!-- 底部交易按钮 -->
      <div class="bottom-action">
        <button class="trade-btn">交易</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

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
  currentPrice: '69,168.00',
  priceChange: '0.5298%',
  stats: () => ({
    high24h: '71751.33',
    low24h: '67300.00',
    volume24h: '5.96M',
    turnover24h: '411777.64M'
  })
})

const emit = defineEmits(['layout-change', 'trade'])

// 视图切换
const isChartView = ref(false)
const tradeType = ref<'buy' | 'sell'>('buy')
const bottomTab = ref(0)
const chartTab = ref(0)

// 交易表单
const orderType = ref('market')
const orderTypeOptions = [
  { text: '市价', value: 'market' },
  { text: '限价', value: 'limit' }
]
const amount = ref(0)
const quantity = ref('0.0072')
const available = ref('0 USDT')

// 盘口精度
const precision = ref('0.1')
const precisionOptions = [
  { text: '0.1', value: '0.1' },
  { text: '1', value: '1' },
  { text: '10', value: '10' }
]

const priceChangeClass = computed(() => {
  return props.priceChange?.startsWith('-') ? 'down' : 'up'
})

// Mock 数据
const mockSellOrders = [
  { price: '69148.90', quantity: '0.0026' },
  { price: '69148.80', quantity: '0.0045' },
  { price: '69148.70', quantity: '0.0003713' },
  { price: '69148.60', quantity: '0.0063' },
  { price: '69148.50', quantity: '0.0086' },
  { price: '69148.40', quantity: '0.0088' },
  { price: '69148.30', quantity: '0.0033' },
  { price: '69148.20', quantity: '0.0069' }
]

const mockOrderbookRows = [
  { buyQty: '0.0072', buyPrice: '69108.62', sellPrice: '69109.82', sellQty: '0.0026' },
  { buyQty: '0.0062', buyPrice: '69108.52', sellPrice: '69109.92', sellQty: '0.0014' },
  { buyQty: '0.0074', buyPrice: '69108.42', sellPrice: '69110.02', sellQty: '0.0047' },
  { buyQty: '0.0025', buyPrice: '69108.32', sellPrice: '69110.12', sellQty: '0.0049' },
  { buyQty: '0.0077', buyPrice: '69108.22', sellPrice: '69110.22', sellQty: '0.0007397' },
  { buyQty: '0.0051', buyPrice: '69108.12', sellPrice: '69110.32', sellQty: '0.0025' }
]

const toggleLayout = () => {
  isChartView.value = !isChartView.value
  emit('layout-change', isChartView.value ? 'chart' : 'orderbook')
}
</script>

<style scoped lang="less">
.mobile-spot-contract-layout {
  min-height: 100vh;
  background: #0a0a0f;
  color: #fff;
  display: flex;
  flex-direction: column;
}

// 顶部价格区域
.price-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3vw 4vw;
  background: #0a0a0f;
  border-bottom: 1px solid #1a1a1f;
}

.symbol-price {
  display: flex;
  flex-direction: column;
  gap: 1vw;
  
  .symbol {
    font-size: 4vw;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 2vw;
  }
  
  .price-change {
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

.layout-toggle {
  width: 10vw;
  height: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1f;
  border: none;
  border-radius: 2vw;
  color: #fff;
  cursor: pointer;
  
  &:active {
    background: #2a2a2f;
  }
}

// 盘口视图
.orderbook-view {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.trade-tabs {
  display: flex;
  align-items: center;
  gap: 4vw;
  padding: 3vw 4vw;
  background: #0a0a0f;
  
  .tab-btn {
    flex: 1;
    height: 9vw;
    border: none;
    border-radius: 2vw;
    background: transparent;
    color: #888;
    font-size: 3.5vw;
    cursor: pointer;
    
    &.active {
      background: #00f0ff;
      color: #000;
      font-weight: 600;
    }
  }
  
  .market-btn {
    padding: 0 4vw;
    height: 9vw;
    border: 1px solid #333;
    border-radius: 2vw;
    background: transparent;
    color: #fff;
    font-size: 3.5vw;
    cursor: pointer;
  }
}

.orderbook-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2vw;
  padding: 0 4vw;
  flex: 1;
  overflow: hidden;
}

.orderbook-side {
  display: flex;
  flex-direction: column;
  font-size: 3vw;
}

.orderbook-header {
  display: flex;
  justify-content: space-between;
  padding: 2vw 0;
  color: #888;
  font-size: 2.8vw;
  border-bottom: 1px solid #1a1a1f;
  margin-bottom: 1vw;
  
  .label {
    line-height: 1.3;
  }
}

.orderbook-items {
  flex: 1;
  overflow-y: auto;
}

.order-item {
  display: flex;
  justify-content: space-between;
  padding: 1.5vw 0;
  
  &.sell .price {
    color: #ff4444;
  }
  
  .quantity {
    color: #888;
  }
}

// 交易表单
.trade-form {
  display: flex;
  flex-direction: column;
  gap: 3vw;
  padding: 3vw;
  background: #0d0d12;
  border-radius: 2vw;
}

.order-type-selector {
  :deep(.van-dropdown-menu) {
    background: transparent;
  }
  
  :deep(.van-dropdown-menu__bar) {
    background: #1a1a1f;
    border-radius: 2vw;
    height: 9vw;
  }
}

.current-price {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 2vw;
  padding: 2vw 0;
  font-size: 6vw;
  font-weight: 700;
  
  .currency {
    font-size: 3.5vw;
    color: #888;
  }
}

.section-label {
  font-size: 3vw;
  color: #888;
  margin-bottom: 2vw;
}

.amount-section {
  .amount-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 2vw;
    font-size: 2.5vw;
    color: #666;
  }
}

.slider-button {
  width: 4vw;
  height: 4vw;
  background: #00f0ff;
  border-radius: 50%;
}

.quantity-section {
  .input-group {
    display: flex;
    align-items: center;
    background: #1a1a1f;
    border-radius: 2vw;
    padding: 0 3vw;
    height: 10vw;
    
    input {
      flex: 1;
      background: transparent;
      border: none;
      color: #fff;
      font-size: 3.5vw;
      
      &::placeholder {
        color: #666;
      }
    }
    
    .currency {
      color: #888;
      font-size: 3vw;
    }
  }
}

.balance-info {
  display: flex;
  align-items: center;
  gap: 2vw;
  font-size: 3vw;
  
  .label {
    color: #888;
  }
  
  .value {
    flex: 1;
    color: #fff;
  }
}

.action-btn {
  height: 12vw;
  border: none;
  border-radius: 2vw;
  font-size: 4vw;
  font-weight: 600;
  cursor: pointer;
  
  &.buy {
    background: #00f0a0;
    color: #000;
  }
  
  &.sell {
    background: #ff4444;
    color: #fff;
  }
  
  &:active {
    opacity: 0.8;
  }
}

// 底部订单
.bottom-tabs {
  border-top: 1px solid #1a1a1f;
  background: #0a0a0f;
}

.order-tabs {
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

.orders-content {
  min-height: 30vh;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15vw 0;
  color: #666;
  
  p {
    margin-top: 4vw;
    font-size: 3.5vw;
  }
}

// 图表视图
.chart-view {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.stats-bar {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3vw;
  padding: 3vw 4vw;
  background: #0a0a0f;
  border-bottom: 1px solid #1a1a1f;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 1vw;
  
  .label {
    font-size: 2.8vw;
    color: #888;
  }
  
  .value {
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

.chart-container {
  flex: 1;
  min-height: 50vh;
}

.chart-placeholder {
  width: 100%;
  height: 100%;
  min-height: 50vh;
  background: #0d0d12;
}

.tradingview-widget-container {
  width: 100%;
  height: 100%;
}

.chart-tabs {
  background: #0a0a0f;
  border-top: 1px solid #1a1a1f;
  
  :deep(.van-tab) {
    color: #888;
    font-size: 3.5vw;
  }
  
  :deep(.van-tab--active) {
    color: #00f0ff;
  }
}

.bottom-orderbook {
  background: #0a0a0f;
  padding: 3vw 4vw;
}

.orderbook-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2vw;
  font-size: 3.5vw;
  
  :deep(.van-dropdown-menu) {
    width: auto;
  }
}

.orderbook-table {
  table {
    width: 100%;
    font-size: 3vw;
    
    td {
      padding: 2vw 0;
      
      &.price {
        &.buy {
          color: #00f0a0;
        }
        
        &.sell {
          color: #ff4444;
        }
      }
      
      &.buy-qty,
      &.sell-qty {
        color: #888;
      }
    }
  }
}

.bottom-action {
  padding: 4vw;
  background: #0a0a0f;
  border-top: 1px solid #1a1a1f;
  
  .trade-btn {
    width: 100%;
    height: 12vw;
    background: #00f0ff;
    color: #000;
    border: none;
    border-radius: 2vw;
    font-size: 4vw;
    font-weight: 600;
    cursor: pointer;
    
    &:active {
      background: #00d0df;
    }
  }
}
</style>
