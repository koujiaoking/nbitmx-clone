<template>
  <section class="py-16 lg:py-20 bg-[#0A0A0F]">
    <div class="max-w-3xl mx-auto px-4 lg:px-6">
      <div class="text-center mb-12">
        <h2 class="text-[32px] lg:text-[40px] font-bold text-white mb-4">常见问题</h2>
        <p class="text-nbit-gray text-[16px]">快速解答您的疑问</p>
      </div>
      <div class="space-y-4">
        <van-collapse v-model="activeNames" :border="false">
          <van-collapse-item name="1" title="如何开始在 NBITMX 上交易？" class="bg-[#14151A] mb-4 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all">
            注册账户，验证您的身份，使用加密货币或银行转账充值，您就可以开始在我们的现货或衔生品市场上进行交易。
          </van-collapse-item>
          <van-collapse-item name="2" title="我的资金安全吗？" class="bg-[#14151A] mb-4 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all">
            是的，NBITMX 采用行业领先的安全措施，包括 98% 资产冷存储、多签名钱包和实时监控。
          </van-collapse-item>
          <van-collapse-item name="3" title="交易费率是多少？" class="bg-[#14151A] mb-4 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all">
            我们的现货交易费用从 Maker 和 Taker 都为 0.1% 开始。持有 NBIT 代币可以将费用减少高达 25%。
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref(['1'])
</script>

<style scoped lang="less">
/* Vant Collapse Overrides - kept here or moved to global if needed */
:deep(.van-collapse-item__content) {
  background-color: transparent;
  color: #9ca3af;
  padding-top: 0;
}

:deep(.van-cell) {
  background-color: transparent;
  color: white;
  padding: 1.2rem 1rem;
}

:deep(.van-cell::after) {
  display: none;
}

:deep(.van-cell__title) {
  font-weight: 600;
}
</style>
