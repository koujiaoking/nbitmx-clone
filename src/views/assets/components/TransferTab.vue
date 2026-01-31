<!-- 划转组件 -->
<template>
  <div class="transfer-tab py-6">
    <div class="max-w-[600px] mx-auto">
      <div class="bg-[#12141E] rounded-2xl p-8">
        <h3 class="text-xl font-bold mb-6">资产划转</h3>
        
        <div class="space-y-6">
          <!-- From账户 -->
          <div>
            <label class="text-sm text-gray-500 mb-2 block">从</label>
            <select class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-nbit-cyan outline-none">
              <option>现货账户</option>
              <option>合约账户</option>
              <option>期权账户</option>
            </select>
          </div>

          <!-- 切换按钮 -->
          <div class="flex justify-center">
            <button class="w-10 h-10 bg-nbit-cyan/10 hover:bg-nbit-cyan/20 rounded-full flex items-center justify-center transition-all">
              <div class="i-carbon-arrows-vertical text-nbit-cyan"></div>
            </button>
          </div>

          <!-- To账户 -->
          <div>
            <label class="text-sm text-gray-500 mb-2 block">到</label>
            <select class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-nbit-cyan outline-none">
              <option>合约账户</option>
              <option>现货账户</option>
              <option>期权账户</option>
            </select>
          </div>

          <!-- 币种选择 -->
          <div>
            <label class="text-sm text-gray-500 mb-2 block">币种</label>
            <select class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-nbit-cyan outline-none">
              <option>USDT</option>
              <option>BTC</option>
              <option>ETH</option>
            </select>
          </div>

          <!-- 金额输入 -->
          <div>
            <div class="flex justify-between mb-2">
              <label class="text-sm text-gray-500">划转数量</label>
              <div class="text-xs text-gray-500">可用: 10,000.00 USDT</div>
            </div>
            <div class="relative">
              <input 
                type="text" 
                placeholder="请输入划转数量"
                class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pr-20 focus:border-nbit-cyan outline-none"
              />
              <button class="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-nbit-cyan/10 text-nbit-cyan text-xs rounded hover:bg-nbit-cyan/20 transition-all">
                全部
              </button>
            </div>
          </div>

          <!-- 提交按钮 -->
          <button class="w-full py-4 bg-nbit-cyan hover:bg-nbit-cyan/90 text-black font-bold rounded-lg transition-all">
            确认划转
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
