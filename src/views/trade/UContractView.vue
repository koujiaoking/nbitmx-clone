<!-- 合约交易页面 -->
<template>
  <div class="futures-trade-page bg-black min-h-screen text-white">
    
    <main class="pt-[56px] h-screen flex flex-col">
      <!-- 交易主界面 -->
      <div class="flex-1 flex overflow-hidden">
        <!-- 左侧：币种列表 (20%) -->
        <aside class="w-[250px] border-r border-white/5 hidden lg:block">
          <CoinSelector :selected-symbol="selectedCoin.symbol" @select="handleSelectCoin" />
        </aside>

        <!-- 中间：K线图和Ticker (60%) -->
        <div class="flex-1 flex flex-col min-w-0">
          <!-- Ticker信息栏 -->
          <div class="bg-[#12141E] border-b border-white/5 px-4 py-3">
            <div class="flex items-center gap-6 flex-wrap">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <img :src="selectedCoin.icon" :alt="selectedCoin.symbol" class="w-6 h-6 rounded-full" />
                  <span class="text-lg font-bold">{{ selectedCoin.symbol }}</span>
                  <span class="text-xs text-gray-500">永续</span>
                </div>
              </div>
              <div>
                <div class="text-xs text-gray-500 mb-small.json">最新价</div>
                <div 
                  class="text-2xl font-bold"
                  :class="priceChange > 0 ? 'text-nbit-green' : 'text-red-500'"
                >
                  {{ selectedCoin.price }}
                </div>
              </div>
              <div>
                <div class="text-xs text-gray-500 mb-1">24h涨跌</div>
                <div 
                  class="text-sm font-bold"
                  :class="parseFloat(selectedCoin.change) > 0 ? 'text-nbit-green' : 'text-red-500'"
                >
                  {{ parseFloat(selectedCoin.change) > 0 ? '+' : '' }}{{ selectedCoin.change }}%
                </div>
              </div>
              <div>
                <div class="text-xs text-gray-500 mb-1">24h最高</div>
                <div class="text-sm">{{ selectedCoin.high }}</div>
              </div>
              <div>
                <div class="text-xs text-gray-500 mb-1">24h最低</div>
                <div class="text-sm">{{ selectedCoin.low }}</div>
              </div>
              <div>
                <div class="text-xs text-gray-500 mb-1">24h成交量(BTC)</div>
                <div class="text-sm">{{ selectedCoin.volume }}</div>
              </div>
              <div>
                <div class="text-xs text-gray-500 mb-1">资金费率</div>
                <div class="text-sm text-nbit-green">0.01%</div>
              </div>
            </div>
          </div>

          <!-- K线图 -->
          <div class="flex-1 min-h-0">
            <TradingChart :symbol="selectedCoin.symbol" />
          </div>
        </div>

        <!-- 右侧：订单簿和最新成交 (20%) -->
        <aside class="w-[320px] border-l border-white/5 flex flex-col hidden xl:flex">
          <div class="flex-1 min-h-0">
            <OrderBook />
          </div>
          <div class="flex-1 min-h-0 border-t border-white/5">
            <TransactionList />
          </div>
        </aside>
      </div>

      <!-- 底部：交易面板和委托单 -->
      <div class="h-[280px] border-t border-white/5 bg-[#12141E]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 h-full">
          <!-- 买入面板 -->
          <div class="bg-[#0A0A0F] rounded-lg p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex gap-2">
                <button class="px-4 py-1.5 bg-nbit-green text-white rounded text-sm font-bold">买入/做多</button>
                <button class="px-4 py-1.5 bg-transparent text-gray-400 rounded text-sm">市价</button>
                <button class="px-4 py-1.5 bg-transparent text-gray-400 rounded text-sm">限价</button>
              </div>
              <div class="text-xs text-gray-500">可用: 10,000.00 USDT</div>
            </div>
            
            <div class="space-y-3">
              <div>
                <label class="text-xs text-gray-500 mb-1 block">价格 (USDT)</label>
                <input 
                  type="text" 
                  value="64,245.10"
                  class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-nbit-cyan outline-none"
                />
              </div>
              <div>
                <label class="text-xs text-gray-500 mb-1 block">数量 (BTC)</label>
                <input 
                  type="text" 
                  placeholder="0.00"
                  class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-nbit-cyan outline-none"
                />
              </div>
              <div>
                <label class="text-xs text-gray-500 mb-1 block">杠杆</label>
                <div class="flex gap-2">
                  <button 
                    v-for="lev in [1, 5, 10, 20, 50, 100]" 
                    :key="lev"
                    class="flex-1 py-1.5 rounded text-xs border border-white/10 hover:border-nbit-cyan transition-all"
                  >
                    {{ lev }}x
                  </button>
                </div>
              </div>
              <button class="w-full py-3 bg-nbit-green hover:bg-nbit-green/90 text-white rounded-lg font-bold transition-all">
                买入做多 BTC
              </button>
            </div>
          </div>

          <!-- 卖出面板 -->
          <div class="bg-[#0A0A0F] rounded-lg p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex gap-2">
                <button class="px-4 py-1.5 bg-red-500 text-white rounded text-sm font-bold">卖出/做空</button>
                <button class="px-4 py-1.5 bg-transparent text-gray-400 rounded text-sm">市价</button>
                <button class="px-4 py-1.5 bg-transparent text-gray-400 rounded text-sm">限价</button>
              </div>
              <div class="text-xs text-gray-500">可用: 0.00 BTC</div>
            </div>
            
            <div class="space-y-3">
              <div>
                <label class="text-xs text-gray-500 mb-1 block">价格 (USDT)</label>
                <input 
                  type="text" 
                  value="64,245.10"
                  class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-nbit-cyan outline-none"
                />
              </div>
              <div>
                <label class="text-xs text-gray-500 mb-1 block">数量 (BTC)</label>
                <input 
                  type="text" 
                  placeholder="0.00"
                  class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-nbit-cyan outline-none"
                />
              </div>
              <div>
                <label class="text-xs text-gray-500 mb-1 block">杠杆</label>
                <div class="flex gap-2">
                  <button 
                    v-for="lev in [1, 5, 10, 20, 50, 100]" 
                    :key="lev"
                    class="flex-1 py-1.5 rounded text-xs border border-white/10 hover:border-nbit-cyan transition-all"
                  >
                    {{ lev }}x
                  </button>
                </div>
              </div>
              <button class="w-full py-3 bg-red-500 hover:bg-red-500/90 text-white rounded-lg font-bold transition-all">
                卖出做空 BTC
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CoinSelector from '@/components/trading/CoinSelector.vue'
import OrderBook from '@/components/trading/OrderBook.vue'
import TransactionList from '@/components/trading/TransactionList.vue'
import TradingChart from '@/components/trading/TradingChart.vue'

const selectedCoin = ref({
  symbol: 'BTC/USDT',
  icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
  price: '64,245.10',
  change: '1.25',
  high: '65,123.50',
  low: '63,890.20',
  volume: '2,456.78'
})

const priceChange = ref(1.25)

const handleSelectCoin = (coin: any) => {
  selectedCoin.value = {
    ...coin,
    high: '65,123.50',
    low: '63,890.20'
  }
}
</script>
