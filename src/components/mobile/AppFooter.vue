```
<template>
  <div class="tabber-nav-bar">
    <div class="wrap">
      <!-- Home -->
      <div class="item" :class="{ active: active === 'home' }" @click="navigateTo('/')">
        <img :src="getImageUrl(active === 'home' ? 'tabbar-home-active.svg' : 'tabbar-home.svg')" alt="home" />
        <p>{{ t('common.home') }}</p>
      </div>

      <!-- Market -->
      <div class="item" :class="{ active: active === 'market' }" @click="navigateTo('/quotes/index')">
        <img :src="getImageUrl(active === 'market' ? 'tabbar-market-active.svg' : 'tabbar-market.svg')" alt="market" />
        <p>{{ t('common.markets') }}</p>
      </div>

      <!-- Trade (Floating) -->
      <div class="item" @click="showTradeMenu = true">
        <img :src="getImageUrl('tabbar-transaction.svg')" alt="trade" />
        <p>{{ t('common.trading') }}</p>
      </div>

      <!-- AI -->
      <div class="item" :class="{ active: active === 'ai' }" @click="navigateTo('/web3/index')">
        <img :src="getImageUrl('tabbar-ai.svg')" alt="ai" :class="{ 'opacity-50': active !== 'ai' }" />
        <p>{{ t('common.aiComputing') }}</p>
      </div>

      <!-- Assets -->
      <div class="item" :class="{ active: active === 'assets' }" @click="navigateTo('/assets/index')">
        <img :src="getImageUrl(active === 'assets' ? 'tabbar-assets-active.svg' : 'tabbar-assets.svg')" alt="assets" />
        <p>{{ t('common.assets') }}</p>
      </div>
    </div>

    <!-- Trade Menu ActionSheet -->
    <van-action-sheet 
      v-model:show="showTradeMenu" 
      :actions="actions" 
      title=" " 
      :closeable="true" 
      class="trade-menu-sheet"
      @select="onSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const active = ref('home')
const showTradeMenu = ref(false)
const router = useRouter()
const route = useRoute()
const { t } = useI18n()

// Trade Menu Actions
const actions = computed(() => [
  { name: t('header.options'), path: '/play/futures/trade/BTCUSDT' },
  { name: t('header.spot'), path: '/play/currency/trade/BTCUSDT' },
  { name: t('header.perpetualContract'), path: '/play/ucontract/index/BTCUSDT' },
])

const onSelect = (item: any) => {
  showTradeMenu.value = false
  if (item.path) {
    router.push(item.path)
  }
}

// Map routes to active tab
const routeMap: Record<string, string> = {
  '/': 'home',
  '/quotes/index': 'market',
  '/web3/index': 'ai',
  '/assets/index': 'assets'
}

const updateActive = () => {
  const path = route.path
  // Check exact match or prefix if needed
  if (routeMap[path]) {
    active.value = routeMap[path]
  } else {
    // Fallback logic
    if (path.startsWith('/quotes')) active.value = 'market'
    else if (path.startsWith('/web3')) active.value = 'ai'
    else if (path.startsWith('/assets')) active.value = 'assets'
    else active.value = ''
  }
}

watch(() => route.path, updateActive, { immediate: true })

const getImageUrl = (name: string) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href
}

const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<style scoped lang="less">
.tabber-nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 20vw;
  background-color: rgb(26, 27, 35);
  padding-bottom: 2.6vw;

  .wrap {
    box-shadow: 0 -2.13333vw 5.86667vw #33415514;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(26, 27, 35);
  }

  .item {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 3.2vw;
    color: rgb(100, 116, 139);
    position: relative;

    img {
      margin-bottom: 1vw;
      width: 8.5vw;
      height: 8.5vw;
      object-fit: contain;
    }

    p {
      line-height: 3.4vw;
      white-space: nowrap;
    }

    &.active {
      p {
        color: #07ecfe;
      }
    }
  }
}

:deep(.trade-menu-sheet) {
  background-color: #12141e;
  
  .van-action-sheet__header {
     background-color: #12141e;
     color: white;
  }
  
  .van-action-sheet__content {
      background-color: #12141e;
  }

  .van-action-sheet__item {
      background: #12141e;
      color: white;
      border-bottom: 1px solid #1f212d;
      box-sizing: border-box !important;

      &:active {
          background-color: #1a1b23;
      }
  }
  
  // Remove border from last item if desired
  .van-action-sheet__item:last-child {
      border-bottom: none;
  }
  
  .van-action-sheet__close {
      color: white;
  }
}
</style>
```
