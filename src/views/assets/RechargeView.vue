<!-- 充值页面 -->
<template>
  <div class="recharge-page bg-black min-h-screen text-white">
    
    <main class="pt-[56px]">
      <div class="max-w-[1000px] mx-auto px-4 lg:px-6 py-8">
        <h1 class="text-2xl font-bold mb-8">充值</h1>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- 左侧：充值信息 -->
          <div class="bg-[#12141E] rounded-2xl p-6">
            <div class="space-y-6">
              <div>
                <label class="text-sm text-gray-500 mb-2 block">选择币种</label>
                <select class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-nbit-cyan outline-none">
                  <option>USDT (TRC20)</option>
                  <option>USDT (ERC20)</option>
                  <option>BTC</option>
                  <option>ETH</option>
                </select>
              </div>

              <div class="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                <div class="flex gap-2">
                  <div class="i-carbon-warning text-amber-500 mt-0.5"></div>
                  <div class="text-xs text-amber-500">
                    <div class="font-bold mb-1">重要提示</div>
                    <ul class="space-y-1 list-disc list-inside">
                      <li>请勿向该地址充值任何非USDT资产</li>
                      <li>最小充值金额：10 USDT</li>
                      <li>充值到账需要1-3个区块确认</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：充值地址 -->
          <div class="bg-[#12141E] rounded-2xl p-6">
            <h3 class="font-bold mb-4">充值地址</h3>
            <div class="bg-white p-4 rounded-lg mb-4 flex items-center justify-center">
              <div class="text-center">
                <div class="w-48 h-48 bg-gray-200 flex items-center justify-center rounded">
                  <span class="text-gray-500 text-xs">QR Code</span>
                </div>
              </div>
            </div>
            <div class="bg-white/5 rounded-lg p-4 break-all text-sm">
              TJDENsfBJs4RFETt1X3sSdJNkPceDhNcap
            </div>
            <button class="w-full mt-4 py-3 bg-nbit-cyan hover:bg-nbit-cyan/90 text-black font-bold rounded-lg transition-all">
              复制地址
            </button>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script setup lang="ts">
</script>
