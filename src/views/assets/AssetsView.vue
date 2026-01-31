<!--资产管理主页面（带Tab切换）-->
<template>
  <div class="assets-page bg-black min-h-screen text-white">
    
    <main class="pt-[56px]">
      <div class="max-w-[1240px] mx-auto px-4 lg:px-6 py-8">
        <!-- Tab导航 -->
        <van-tabs v-model:active="activeTab" class="custom-tabs" @change="handleTabChange">
          <van-tab name="asset_overview" title="资产概览">
            <AssetOverview />
          </van-tab>
          <van-tab name="spot_account" title="现货账户">
            <div class="py-20 text-center text-gray-500">现货账户功能开发中...</div>
          </van-tab>
          <van-tab name="options_account" title="期权账户">
            <div class="py-20 text-center text-gray-500">期权账户功能开发中...</div>
          </van-tab>
          <van-tab name="futures_account" title="合约账户">
            <div class="py-20 text-center text-gray-500">合约账户功能开发中...</div>
          </van-tab>
          <van-tab name="order_center" title="订单中心">
            <div class="py-20 text-center text-gray-500">订单中心功能开发中...</div>
          </van-tab>
          <van-tab name="transfer" title="划转">
            <TransferTab />
          </van-tab>
          <van-tab name="flash_exchange" title="闪兑">
            <div class="py-20 text-center text-gray-500">闪兑功能开发中...</div>
          </van-tab>
        </van-tabs>
      </div>
    </main>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AssetOverview from './components/AssetOverview.vue'
import TransferTab from './components/TransferTab.vue'

const route = useRoute()
const router = useRouter()

const activeTab = ref('asset_overview')

onMounted(() => {
  const tab = route.query.tab as string
  if (tab) {
    activeTab.value = tab
  }
})

const handleTabChange = (name: string | number) => {
  router.push({ query: { tab: name } })
}
</script>

<style>
/* 自定义Vant Tab样式 */
.custom-tabs .van-tabs__nav {
  background: #12141E !important;
}
.custom-tabs .van-tab {
  color: #848E9C !important;
}
.custom-tabs .van-tab--active {
  color: #00F0FF !important;
}
.custom-tabs .van-tabs__line {
  background: #00F0FF !important;
}
</style>
