<!-- 地址管理页面 -->
<template>
  <div class="address-manage-page bg-black min-h-screen text-white">
    
    <main class="pt-[56px]">
      <div class="max-w-[1240px] mx-auto px-4 lg:px-6 py-8">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-2xl font-bold">地址管理</h1>
          <button class="px-6 py-3 bg-nbit-cyan hover:bg-nbit-cyan/90 text-black font-bold rounded-lg transition-all">
            + 添加新地址
          </button>
        </div>
        
        <div class="bg-[#12141E] rounded-2xl p-6">
          <!-- 搜索 -->
          <div class="mb-6">
            <input 
              type="text" 
              placeholder="搜索地址或备注..."
              class="w-full md:w-[320px] bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-nbit-cyan outline-none"
            />
          </div>

          <!-- 地址列表表格 -->
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="text-gray-500 text-xs border-b border-white/5">
                  <th class="py-4">币种</th>
                  <th class="py-4">地址</th>
                  <th class="py-4">备注</th>
                  <th class="py-4">添加时间</th>
                  <th class="py-4 text-right">操作</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr v-for="addr in addresses" :key="addr.id" class="border-b border-white/5 hover:bg-white/5 transition-all">
                  <td class="py-4">
                    <div class="flex items-center gap-2">
                      <img :src="addr.icon" :alt="addr.currency" class="w-5 h-5 rounded-full" />
                      <span class="font-bold">{{ addr.currency }}</span>
                    </div>
                  </td>
                  <td class="py-4">
                    <div class="font-mono text-xs">{{ addr.address }}</div>
                  </td>
                  <td class="py-4 text-gray-400">{{ addr.note }}</td>
                  <td class="py-4 text-gray-400">{{ addr.addedAt }}</td>
                  <td class="py-4 text-right">
                    <button class="text-nbit-cyan hover:text-nbit-cyan/80 text-xs font-medium">删除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script setup lang="ts">

const addresses = [
  { id: 1, currency: 'USDT', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png', address: 'TJDENsfBJs4RFETt1X3sSdJNkPceDhNcap', note: '日常提现', addedAt: '2026-01-20' },
  { id: 2, currency: 'BTC', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', note: '冷钱包', addedAt: '2026-01-15' }
]
</script>
