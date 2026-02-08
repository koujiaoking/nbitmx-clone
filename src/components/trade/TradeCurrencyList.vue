<template>
  <div class="trade-currency-list h-full flex flex-col area-left">
    <!-- Search Box -->
    <div class="search-area">
      <div class="search-box">
        <span class="iconfont">&#xe628;</span>
        <input type="text" :placeholder="t('trade.search')" />
      </div>
    </div>

    <!-- Main Tabs -->
    <div class="cm-tabs-container px-2 border-b border-[#2B2F36]">
      <van-tabs v-model:active="activeTab" type="line" background="transparent" color="#FFFFFF" title-active-color="#FFFFFF" title-inactive-color="#848e9c" line-width="20px" line-height="2px" :border="false" class="custom-tabs" @click-tab="handleTabClick">
        <van-tab :title="t('quotes.tabOptional')" name="Optional"></van-tab>
        <van-tab :title="t('quotes.tabOptions')" name="Options"></van-tab>
        <van-tab :title="t('quotes.tabSpot')" name="Spot"></van-tab>
        <van-tab :title="t('quotes.tabContract')" name="Contract"></van-tab>
      </van-tabs>
    </div>

    <!-- Sub Header Tabs (replacing list-header) -->
    <div class="sub-header-tabs px-2 border-b border-[#2B2F36]">
       <van-tabs v-model:active="activeSubTab" shrink type="line" background="transparent" color="transparent" title-active-color="#EAECEF" title-inactive-color="#848e9c" :border="false" class="no-underline-tabs" line-width="0">
          <van-tab v-for="tab in subTabs" :key="tab" :title="tab" :name="tab"></van-tab>
       </van-tabs>
    </div>
    
    <!-- List -->
    <div class="currency-list playHome-products flex-1 overflow-y-auto custom-scrollbar">
      <div class="scroll-wrap">
        <ul class="list">
          <li v-for="(item, index) in displayedList" :key="index" class="row hover:bg-[#1E2329] cursor-pointer" :class="{ active: isActive(item.pair) }" @click="handleCurrencyClick(item)">
            <div class="column currency">
              <div 
                class="iconfont cursor-pointer transition-colors"
                :class="isFavorite(item.pair) ? 'fill-[#FFD700]' : 'fill-[#888]'"
                @click.stop="toggleFavorite(item.pair)"
              >
                &#xe929;
              </div>
              <img class="logo" :src="item.logo" :alt="item.name">
              <span class="right">
                <span class="product">{{ item.pair }}</span>
                <span class="unit">{{ item.name }}</span>
              </span>
            </div>
            <span class="column quotes" :class="item.changeClass">
              <span class="price">{{ item.price }}</span>
              <span class="text">{{ item.change }}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()

const activeTab = ref('Spot')
const activeSubTab = ref('')

// 收藏列表
const favorites = ref<string[]>([])

// 从 localStorage 加载收藏列表
onMounted(() => {
  const saved = localStorage.getItem('tradeFavorites')
  if (saved) {
    try {
      favorites.value = JSON.parse(saved)
    } catch (e) {
      console.error('Failed to load favorites:', e)
      favorites.value = []
    }
  }
  updateTabFromRoute()
})

// Initialize activeTab based on route
const updateTabFromRoute = () => {
  const path = route.path
  if (path.includes('/play/currency/trade')) {
    activeTab.value = 'Spot'
  } else if (path.includes('/play/ucontract/index')) {
    activeTab.value = 'Contract'
  } else if (path.includes('/play/futures/trade')) {
    activeTab.value = 'Options'
  }
}

const handleTabClick = ({ name }: { name: string }) => {
  if (name === 'Optional') {
    // Do not jump, just filter
    activeTab.value = 'Optional'
    return
  }

  // Determine symbol (fallback to default or keep current)
  const paramSymbol = route.params.symbol
  const symbol = Array.isArray(paramSymbol) ? paramSymbol[0] : (paramSymbol || 'BTCUSDT')
  
  if (name === 'Spot') {
    router.push(`/play/currency/trade/${symbol}`)
  } else if (name === 'Contract') {
    router.push(`/play/ucontract/index/${symbol}`)
  } else if (name === 'Options') {
    router.push(`/play/futures/trade/${symbol}`)
  }
}

const subTabs = computed(() => {
  if (activeTab.value === 'Optional') {
    return [t('quotes.tabOptional')] // "自选"
  } else if (activeTab.value === 'Spot') {
    return [t('quotes.tabSpot')] // "现货"
  } else if (activeTab.value === 'Contract') {
    return [t('quotes.tabContract'), t('quotes.tabHeavyMetal')] // "合约", "重金属"
  } else if (activeTab.value === 'Options') {
    return [t('quotes.tabOptions'), t('quotes.tabHeavyMetal')] // "期权", "重金属"
  }
  return []
})

// Set initial sub tab
watch(subTabs, (newTabs) => {
  if (newTabs.length > 0) {
    activeSubTab.value = newTabs[0] || ''
  }
}, { immediate: true })

const currencyList = [
  { pair: 'BTC/USDT', name: 'BTC', price: '79072.00', change: '+2.13%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0b96195d4f367459fbaac66fd39462aa1.png' },
  { pair: 'ETH/USDT', name: 'ETH', price: '2368.42', change: '+2.68%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0680cf64887f44f3fa7a8b55e243b7597.png' },
  { pair: 'XRP/USDT', name: 'XRP', price: '1.6481', change: '+3.47%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.057766c08906d48919834927082eb7043.png' },
  { pair: 'BNB/USDT', name: 'BNB', price: '777.30', change: '+3.49%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0ca54a58bb2f4465a9f4ef3f2effdb0b3.png' },
  { pair: 'SOL/USDT', name: 'SOL', price: '105.21', change: '+3.67%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0dce5c5137d3f4803b8a8606140150057.png' },
  { pair: 'USDC/USDT', name: 'USDC', price: '1.0004', change: '-0.02%', changeClass: 'down', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0102bdf74091a473cbaa330641ad32c45.png' },
  { pair: 'DOGE/USDT', name: 'DOGE', price: '0.1089', change: '+5.42%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0409f9e843ec74da198ed062120b08f4d.png' },
  { pair: 'TRX/USDT', name: 'TRX', price: '0.2840', change: '-0.28%', changeClass: 'down', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.05938baf3249e440892fdc8f1409a0bc1.png' },
  { pair: 'ADA/USDT', name: 'ADA', price: '0.3012', change: '+5.54%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0dca2867eee3849a6ab30a7d202871a32.png' },
  { pair: 'XLM/USDT', name: 'XLM', price: '0.1821', change: '+5.57%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.062ab514bd06f4718ab0dd274127ce1bc.png' },
  { pair: 'WBTC', name: 'WBTC', price: '78854.74', change: '+2.23%', changeClass: 'up', logo: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.056adb1a2ae34471daa998b08b7d4528f.png' },
]

// 根据 activeTab 过滤显示的列表
const displayedList = computed(() => {
  if (activeTab.value === 'Optional') {
    // 显示收藏的币种
    return currencyList.filter(item => favorites.value.includes(item.pair))
  }
  // 其他tab显示全部列表
  return currencyList
})

// 判断是否收藏
const isFavorite = (pair: string) => {
  return favorites.value.includes(pair)
}

// 切换收藏状态
const toggleFavorite = (pair: string) => {
  const index = favorites.value.indexOf(pair)
  if (index > -1) {
    favorites.value.splice(index, 1)
  } else {
    favorites.value.push(pair)
  }
  // 保存到 localStorage
  localStorage.setItem('tradeFavorites', JSON.stringify(favorites.value))
}

const isActive = (pair: string) => {
  const symbol = pair.replace('/', '')
  const currentSymbol = route.params.symbol
  // Handle array or string
  const current = Array.isArray(currentSymbol) ? currentSymbol[0] : currentSymbol
  if (!current) return pair === 'BTC/USDT'
  return current === symbol
}

const handleCurrencyClick = (item: any) => {
  const symbol = item.pair.replace('/', '')
  const path = route.path
  
  if (path.includes('/play/ucontract/index')) {
    router.push(`/play/ucontract/index/${symbol}`)
  } else if (path.includes('/play/futures/trade')) {
    router.push(`/play/futures/trade/${symbol}`)
  } else {
    // Default to Spot
    router.push(`/play/currency/trade/${symbol}`)
  }
}
</script>

<style scoped lang="less">
@import '@/styles/trade.less';

.trade-currency-list {
  .currency-list.playHome-products {
    .scroll-wrap {
      .list {
        .row {
          padding: 10px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;

          &:hover {
            background-color: var(--trade-hover);
          }

          &.active {
            background-color: rgba(14, 203, 129, 0.1);
            border-left: 2px solid var(--trade-up, #0ECB81);
          }

          .column {
            display: flex;
            align-items: center;

            &.currency {
              flex: 1;
              overflow: hidden;

              .iconfont {
                margin-right: 8px;
                display: flex;
                align-items: center;
                fill: #888;
              }

              .logo {
                width: 24px;
                height: 24px;
                margin-right: 8px;
                border-radius: 50%;
              }

              .right {
                flex: 1;
                overflow: hidden;
                display: flex;
                flex-direction: column;

                .product {
                  font-size: 13px;
                  font-weight: 500;
                  color: var(--trade-text-primary);
                }

                .unit {
                  font-size: 12px;
                  color: var(--trade-text-secondary);
                  margin-top: 2px;
                }
              }
            }

            &.quotes {
              flex-direction: column;
              align-items: flex-end;
              min-width: 80px;

              .price {
                font-weight: 500;
                font-size: 13px;
                color: var(--trade-text-primary);
              }

              .text {
                font-size: 12px;
                color: var(--trade-text-secondary);
              }

              &.up .text {
                color: var(--trade-up);
              }

              &.down .text {
                color: var(--trade-down);
              }
            }
          }
        }
      }
    }
  }
}
</style>
