<!-- 提现页面 -->
<template>
  <div class="withdraw-page bg-black min-h-screen text-white">
    
    <main class="pt-[56px]">
      <div class="max-w-[800px] mx-auto px-4 lg:px-6 py-8">
        <h1 class="text-2xl font-bold mb-8">提现</h1>
        
          <div class="bg-[#12141E] rounded-2xl p-8">
          <div class="space-y-6">
            <div>
              <label class="text-sm text-gray-500 mb-2 block">币种</label>
              <select class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-nbit-cyan outline-none">
                <option>USDT</option>
                <option>BTC</option>
                <option>ETH</option>
              </select>
            </div>

            <div>
              <label class="text-sm text-gray-500 mb-2 block">提现地址</label>
              <input 
                type="text" 
                placeholder="请输入或选择提现地址"
                class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-nbit-cyan outline-none"
              />
            </div>

            <div>
              <div class="flex justify-between mb-2">
                <label class="text-sm text-gray-500">提现数量</label>
                <div class="text-xs text-gray-500">可用: 10,000.00 USDT</div>
              </div>
              <div class="relative">
                <input 
                  type="text" 
                  placeholder="最小提现: 10 USDT"
                  class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pr-20 focus:border-nbit-cyan outline-none"
                />
                <button class="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-nbit-cyan/10 text-nbit-cyan text-xs rounded hover:bg-nbit-cyan/20 transition-all">
                  全部
                </button>
              </div>
              <div class="mt-2 text-xs text-gray-500">
                <div>手续费: 1 USDT</div>
                <div>实际到账: ~9,999.00 USDT</div>
              </div>
            </div>

            <button class="w-full py-4 bg-nbit-cyan hover:bg-nbit-cyan/90 text-black font-bold rounded-lg transition-all">
              提交提现
            </button>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script setup lang="ts">
</script>
