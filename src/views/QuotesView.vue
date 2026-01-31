<template>
  <div class="quotes-page bg-[#0A0A0F] min-h-screen text-white font-sans">
    
    <main class="pt-[56px]">
      <!-- 市场排行榜头部 -->
      <section class="py-12 bg-[#12141E] border-b border-white/5">
        <div class="max-w-[1240px] mx-auto px-4 lg:px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- 热门币种 -->
            <div class="bg-white/5 rounded-2xl p-6 border border-white/5">
              <div class="flex justify-between items-center mb-6">
                <h3 class="font-bold flex items-center gap-2">
                  <div class="i-carbon-fire text-orange-500"></div> Hot List
                </h3>
                <span class="text-xs text-nbit-gray hover:text-white cursor-pointer transition-colors">More</span>
              </div>
              <div class="space-y-4">
                <div v-for="(coin, i) in hotCoins" :key="coin.symbol" class="flex justify-between items-center">
                  <div class="flex items-center gap-3">
                    <span class="text-nbit-gray text-xs w-4">{{ i+1 }}</span>
                    <img :src="coin.icon" class="w-6 h-6 rounded-full" />
                    <span class="font-bold">{{ coin.symbol }}</span>
                  </div>
                  <div class="text-nbit-green font-medium">+{{ coin.change }}%</div>
                </div>
              </div>
            </div>

            <!-- 新上线币种 -->
            <div class="bg-white/5 rounded-2xl p-6 border border-white/5">
              <div class="flex justify-between items-center mb-6">
                <h3 class="font-bold flex items-center gap-2">
                  <div class="i-carbon-add-alt text-nbit-cyan"></div> New Listings
                </h3>
                <span class="text-xs text-nbit-gray hover:text-white cursor-pointer transition-colors">More</span>
              </div>
              <div class="space-y-4">
                <div v-for="(coin, i) in newCoins" :key="coin.symbol" class="flex justify-between items-center">
                  <div class="flex items-center gap-3">
                    <img :src="coin.icon" class="w-6 h-6 rounded-full" />
                    <span class="font-bold">{{ coin.symbol }}</span>
                  </div>
                  <div class="text-white font-medium">${{ coin.price }}</div>
                </div>
              </div>
            </div>

            <!-- 涨幅榜 -->
            <div class="bg-white/5 rounded-2xl p-6 border border-white/5">
              <div class="flex justify-between items-center mb-6">
                <h3 class="font-bold flex items-center gap-2">
                  <div class="i-carbon-trending-up text-nbit-green"></div> Top Gainers
                </h3>
                <span class="text-xs text-nbit-gray hover:text-white cursor-pointer transition-colors">More</span>
              </div>
              <div class="space-y-4">
                <div v-for="(coin, i) in gainerCoins" :key="coin.symbol" class="flex justify-between items-center">
                  <div class="flex items-center gap-3">
                    <img :src="coin.icon" class="w-6 h-6 rounded-full" />
                    <span class="font-bold">{{ coin.symbol }}</span>
                  </div>
                  <div class="text-nbit-green font-bold">+{{ coin.change }}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 市场表格区域 -->
      <section class="py-12">
        <div class="max-w-[1240px] mx-auto px-4 lg:px-6">
          <div class="flex items-center gap-8 border-b border-white/5 mb-8">
            <button v-for="tab in ['Favorites', 'All Crypto', 'Layer 1', 'Web3', 'DeFi']" :key="tab" 
                    class="pb-4 text-sm font-medium border-b-2 transition-all"
                    :class="tab === 'All Crypto' ? 'border-nbit-cyan text-nbit-cyan' : 'border-transparent text-gray-400 hover:text-white'">
              {{ tab }}
            </button>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="text-nbit-gray text-xs border-b border-white/5">
                  <th class="py-4 font-normal">Name</th>
                  <th class="py-4 font-normal">Price</th>
                  <th class="py-4 font-normal">24h Change</th>
                  <th class="py-4 font-normal text-right">Market Cap</th>
                  <th class="py-4 font-normal text-center">Last 7 Days</th>
                  <th class="py-4 font-normal text-right pr-4">Action</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr v-for="coin in marketData" :key="coin.symbol" class="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td class="py-5">
                    <div class="flex items-center gap-3">
                      <div class="i-carbon-star text-nbit-gray hover:text-yellow-500 cursor-pointer"></div>
                      <img :src="coin.icon" class="w-8 h-8" />
                      <div>
                        <div class="font-bold text-white uppercase">{{ coin.symbol }}</div>
                        <div class="text-[10px] text-nbit-gray uppercase">{{ coin.name }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="py-5 font-bold">${{ coin.price }}</td>
                  <td class="py-5" :class="coin.change > 0 ? 'text-nbit-green' : 'text-red-500'">
                    {{ coin.change > 0 ? '+' : '' }}{{ coin.change }}%
                  </td>
                  <td class="py-5 text-right">${{ coin.marketCap }}</td>
                  <td class="py-5 px-4 h-full">
                     <div class="h-8 flex items-end gap-[2px] justify-center">
                       <div v-for="(h, i) in [40, 60, 45, 70, 85, 65, 90]" :key="i" 
                            class="w-[3px] rounded-full" 
                            :class="coin.change > 0 ? 'bg-nbit-green/40' : 'bg-red-500/40'"
                            :style="{ height: (h * (0.5 + Math.random())) + '%' }"></div>
                     </div>
                  </td>
                  <td class="py-5 text-right pr-4">
                    <button class="px-4 py-1.5 rounded-lg bg-nbit-cyan/10 text-nbit-cyan text-xs font-bold hover:bg-nbit-cyan hover:text-black transition-all">
                      Trade
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script setup lang="ts">

const hotCoins = [
  { symbol: 'BTC', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', change: '2.4' },
  { symbol: 'ETH', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', change: '1.8' },
  { symbol: 'SOL', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png', change: '5.2' }
]

const newCoins = [
  { symbol: 'STRK', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22691.png', price: '1.85' },
  { symbol: 'W', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29474.png', price: '0.64' }
]

const gainerCoins = [
  { symbol: 'PEPE', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png', change: '24.5' },
  { symbol: 'FLOKI', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10804.png', change: '18.1' }
]

const marketData = [
  { symbol: 'btc', name: 'bitcoin', price: '64,245.10', change: 1.25, marketCap: '1.2T', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' },
  { symbol: 'eth', name: 'ethereum', price: '3,450.60', change: -0.85, marketCap: '412B', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' },
  { symbol: 'bnb', name: 'binance coin', price: '580.20', change: 2.10, marketCap: '89B', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png' },
  { symbol: 'sol', name: 'solana', price: '145.75', change: 4.56, marketCap: '65B', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png' },
  { symbol: 'xrp', name: 'xrp', price: '0.62', change: -1.25, marketCap: '34B', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png' },
  { symbol: 'ada', name: 'cardano', price: '0.45', change: 0.12, marketCap: '16B', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png' },
  { symbol: 'doge', name: 'dogecoin', price: '0.16', change: 8.45, marketCap: '23B', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png' }
]
</script>
