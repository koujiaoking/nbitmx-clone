<template>
  <div>
    <!-- User Info Section -->
    <div class="user-info">
      <div class="flex">
        <div class="mr-8vw flex-none">
          <div class="flex items-center h-5vw">
            <span class="truncate inline-block max-w-32vw mr-1vw">0x6754...88c2</span>
            <span class="truncate vip vip6"><i>VIP0</i></span>
          </div>
          <div class="flex items-center h-5vw">
            <span class="truncate">UID:775889</span>
          </div>
        </div>
        <div class="score level1"><span class="num">100</span></div>
      </div>
    </div>

    <!-- Menu Items -->
    <!-- Home -->
    <div class="draw-row" style="height: 10vw;">
      <div class="top" @click="delayedNavigate('/')">
        <div class="svg-img">
          <span class="iconfont text-[20px]">&#xe931;</span>
        </div> 
        {{ $t('menu.home') }}
      </div>
    </div>

    <!-- Quick Buy (Expandable) -->
    <div class="draw-row" :class="{ 'expand-row': expandQuickBuy }" style="min-height: 10vw; height: auto;" @click="expandQuickBuy = !expandQuickBuy">
      <div class="top">
        <div class="svg-img">
            <span class="iconfont text-[20px]">&#xe92c;</span>
        </div> 
        {{ $t('menu.quickBuy') }}
        <div class="right-triangle" :class="{ 'rotate-180': expandQuickBuy }">
           <svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" class="svg-class"><path d="M7 4L2 0V8L7 4Z" fill="white"></path></svg>
        </div>
      </div>
      <transition
        name="collapse"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <ul class="child-list" v-show="expandQuickBuy" @click.stop>
            <li @click="openExternal('https://buy.simplex.com/')">
                <img src="https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.020fd0ea0ffe349618b04a542794991ae.png" alt="Simplex" class="h-20px max-w-50vw mr-10px"> Simplex
            </li>
            <li @click="openExternal('https://www.coinbase.com/')">
                <img src="https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.08cc4e1e104734ddeb6ddf90441c466b8.png" alt="Coinbase" class="h-20px max-w-50vw mr-10px"> Coinbase
            </li>
            <li @click="openExternal('https://www.kraken.com/')">
                <img src="https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0db05c2a278dc4bcba1b628197308eab5.png" alt="Kraken" class="h-20px max-w-50vw mr-10px"> Kraken
            </li>
        </ul>
      </transition>
    </div>

    <!-- Recharge -->
    <div class="draw-row" style="height: 10vw;">
        <div class="top" @click="delayedNavigate('/assets/recharge')">
            <div class="svg-img">
                <span class="iconfont text-[20px]">&#xe829;</span>
            </div>
            {{ $t('menu.recharge') }}
        </div>
    </div>

    <!-- Language -->
    <div class="draw-row">
        <div class="top" @click="showLanguagePopup = true">
            <div class="svg-img">
                <span class="iconfont text-[20px]">&#xe640;</span>
            </div>
            
            <span class="flex-1">{{ currentLanguage?.name }}</span>
            <img class="i18n-curr-icon" :src="currentLanguage?.flag" alt="">
        </div>
    </div>

    <!-- Transaction Center (Expandable) -->
    <div class="draw-row" :class="{ 'expand-row': expandTrade }" style="min-height: 10vw; height: auto;" @click="expandTrade = !expandTrade">
        <div class="top">
            <div class="svg-img">
               <span class="iconfont text-[20px]">&#xe932;</span>
            </div>
            <span class="flex-1">{{ $t('menu.tradeCenter') }}</span>
            <div class="right-triangle" :class="{ 'rotate-180': expandTrade }">
                <svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" class="svg-class"><path d="M7 4L2 0V8L7 4Z" fill="white"></path></svg>
            </div>
        </div>
        <transition
            name="collapse"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
        >
            <ul class="child-list" v-show="expandTrade" @click.stop>
                <li @click="delayedNavigate('/play/futures/trade')">{{ $t('menu.options') }}</li>
                <li @click="delayedNavigate('/play/spot/trade')">{{ $t('menu.spot') }}</li>
                <li @click="delayedNavigate('/play/ucontract/index')">{{ $t('menu.perpetualContract') }}</li>
            </ul>
        </transition>
    </div>

    <!-- Copy Trading -->
    <div class="draw-row" style="height: 10vw;">
        <div class="top" @click="delayedNavigate('/follow/index')">
            <div class="svg-img">
                <span class="iconfont text-[20px]">&#xe92f;</span>
            </div>
            {{ $t('menu.copyTrading') }}
        </div>
    </div>

    <!-- Charity -->
    <div class="draw-row" style="height: 10vw;">
        <div class="top" @click="delayedNavigate('/charity')">
            <div class="svg-img">
                <span class="iconfont text-[20px]">&#xe91c;</span>
            </div>
            {{ $t('menu.charity') }}
        </div>
    </div>
    <div class="draw-row" style="height: 10vw;">
        <div class="top" @click="delayedNavigate('/nft/index')">
            <div class="svg-img">
                <span class="iconfont text-[20px]">&#xe92e;</span>
            </div>
            NFT
        </div>
    </div>
    <div class="draw-row" :class="{ 'expand-row': expandFinancial }" style="min-height: 10vw; height: auto;" @click="expandFinancial = !expandFinancial">
        <div class="top">
            <div class="svg-img">
               <span class="iconfont text-[20px]">&#xe936;</span>
            </div>
            <span class="flex-1">金融理财</span>
            <div class="right-triangle" :class="{ 'rotate-180': expandFinancial }">
                <svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" class="svg-class"><path d="M7 4L2 0V8L7 4Z" fill="white"></path></svg>
            </div>
        </div>
        <transition
            name="collapse"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
        >
            <ul class="child-list" v-show="expandFinancial" @click.stop>
                <li @click="delayedNavigate('/web3/index')">AI智算</li>
            </ul>
        </transition>
    </div>
    <!-- Assets Center -->
    <div class="draw-row" style="height: 10vw;">
        <div class="top" @click="delayedNavigate('/assets/index')">
            <div class="svg-img">
               <span class="iconfont text-[20px]">&#xe92b;</span>
            </div>
            {{ $t('menu.assets') }}
        </div>
    </div>

    <div class="row-line"></div>

    
    
    <!-- Activity Hall -->
    <div class="draw-row" style="height: 10vw;">
        <div class="top" @click="delayedNavigate('/assets/address')">
            <div class="svg-img">
                <span class="iconfont text-[20px]">&#xe934;</span>
            </div>
            地址簿
        </div>
    </div>

    <!-- Share -->
    <div class="draw-row" style="height: 10vw;">
        <div class="top" @click="delayedNavigate('/customer/index')">
            <div class="svg-img">
                <span class="iconfont text-[20px]">&#xe92d;</span>
            </div>
            {{ $t('menu.share') }}
        </div>
    </div>

    <!-- Notice -->
    <div class="draw-row" style="height: 10vw;">
        <div class="top" @click="delayedNavigate('/notices')">
            <div class="svg-img">
                <span class="iconfont text-[20px]">&#xe935;</span>
            </div>
            {{ $t('menu.notice') }}
        </div>
    </div>

    <!-- Set Fund Password -->
    <div class="draw-row" style="height: 10vw;">
        <div class="top" @click="showToast('Feature coming soon')">
            <div class="svg-img">
                <span class="iconfont text-[20px]">&#xe933;</span>
            </div>
            {{ $t('menu.fundPassword') }}
        </div>
    </div>

    <div class="row-line"></div>

    <!-- Logout -->
    <div class="draw-row" style="height: 10vw;">
        <div class="top" @click="handleLogout">
            <div class="svg-img">
                <span class="iconfont text-[20px]">&#xe930;</span>
            </div>
            {{ $t('menu.logout') }}
        </div>
    </div>

    <!-- Language Switcher Popup -->
    <van-popup v-model:show="showLanguagePopup" position="right" :style="{ width: '100%', height: '100%' }" class="!bg-black text-white">
      <div class="flex flex-col h-full bg-[#0a0a0f]">
        <!-- Header -->
        <div class="flex items-center justify-between h-[14vw] px-[4vw] border-b border-white/5">
           <span class="text-[4.5vw] font-bold">{{ $t('menu.language') }}</span>
           <van-icon name="cross" size="24" color="white" @click="showLanguagePopup = false" />
        </div>
        
        <!-- Language List -->
        <div class="flex-1 overflow-y-auto py-4">
           <div 
             v-for="lang in languageConfig" 
             :key="lang.code" 
             class="flex items-center justify-between py-4 px-6 active:bg-white/5"
             @click="handleSetLocale(lang.code)"
           >
              <div class="flex items-center gap-4">
                  <img :src="getImageUrl(lang.flag)" class="w-6 h-6 rounded-sm object-cover" />
                  <span class="text-[4vw]">{{ lang.name }}</span>
              </div>
              <van-icon v-if="currentLanguage?.code === lang.code" name="success" color="#00f0ff" size="20" />
           </div>
        </div>
      </div>
    </van-popup>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { languageConfig, setLocale, type SupportedLocale } from '@/locales/i18n'

const emit = defineEmits(['close'])
const router = useRouter()
const { locale } = useI18n()
const expandQuickBuy = ref(false)
const expandTrade = ref(false)
const expandFinancial = ref(false)
const showLanguagePopup = ref(false)

const currentLanguage = computed(() => {
  return languageConfig.find(lang => lang.code === locale.value) || languageConfig[1] // Default to English if not found
})

const handleSetLocale = (code: SupportedLocale) => {
    setLocale(code)
    showLanguagePopup.value = false
}

// Delayed navigation to allow transition to start/finish while menu is open? 
// Or simply to ensure menu closes slightly after.
const delayedNavigate = (path: string) => {
    router.push(path)
    setTimeout(() => {
        emit('close')
    }, 200) 
}

const openExternal = (url: string) => {
    window.open(url, '_blank')
    // Also close menu for external links? 
    emit('close')
}

// TODO: Use real auth store
const handleLogout = () => {
    import('vant').then(({ showToast }) => {
        showToast('Logged out')
        router.push('/login')
        setTimeout(() => emit('close'), 300)
    })
}

const showToast = (msg: string) => {
     import('vant').then(({ showToast }) => {
        showToast(msg)
    })
}

// Helper to resolve image paths (since dynamic import might need handling in Vite)
const getImageUrl = (path: string) => {
    // Check if path is absolute or relative
    if (path.startsWith('/src')) {
        return path 
    }
    return new URL(`/src/assets/flag/${path}`, import.meta.url).href
}

// JS Animation Hooks for smooth height transition
const beforeEnter = (el: Element) => {
  (el as HTMLElement).style.height = '0'
  ;(el as HTMLElement).style.opacity = '0'
}

const enter = (el: Element) => {
  (el as HTMLElement).style.height = (el as HTMLElement).scrollHeight + 'px'
  ;(el as HTMLElement).style.opacity = '1'
}

const afterEnter = (el: Element) => {
  (el as HTMLElement).style.height = 'auto'
}

const beforeLeave = (el: Element) => {
  (el as HTMLElement).style.height = (el as HTMLElement).scrollHeight + 'px'
  ;(el as HTMLElement).style.opacity = '1'
}

const leave = (el: Element) => {
  (el as HTMLElement).style.height = '0'
  ;(el as HTMLElement).style.opacity = '0'
}
</script>

<style scoped lang="less">
/* Animation Styles */
.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

/* Extracted from menu.html style block and converted to Less */

.user-info {
    margin-left: 7vw;
    margin-right: 7vw;
    height: 21vw;
    display: flex;
    align-items: center;

    .score {
        width: 10vw;
        height: 10vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        font-size: 3vw;
        
        &.level1 {
             /* Use local asset or fallback */
             background-color: rgba(255,255,255,0.1); 
             border-radius: 50%;
        }

        .num {
            color: #084646;
            // height etc
        }
    }
    
    .vip {
        background-color: #f4ea2a;
        color: #000;
        font-size: 10px;
        padding: 0 4px;
        border-radius: 4px;
        font-style: normal;
        margin-left: 5px;
        i { font-style: normal; font-weight: bold;}
    }
}

.draw-row {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    font-size: 4vw;
    color: white; // Converted from rgb details
    margin-left: 4vw;
    margin-right: 4vw;
    margin-bottom: 2vw;
    min-height: 10vw; // Changed from fixed height to handle expansion
    flex-wrap: wrap; // Allow wrapping for expanded content

    .top {
        box-sizing: border-box;
        width: 100%;
        height: 10vw;
        display: flex;
        flex: none;
        align-items: center;
        border-radius: 1vw;
        padding-left: 2vw;
        padding-right: 2vw;
        cursor: pointer;
        
        &:active {
            background-color: rgba(255,255,255,0.05);
        }
    }

    .svg-img {
        margin-right: 2vw;
        width: 5vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .right-triangle {
        margin-left: auto;
        fill: white;
        transition: transform 0.2s;
        
        &.rotate-180 {
            transform: rotate(90deg);
        }
    }
    
    .i18n-curr-icon {
        margin-left: auto;
        width: 7vw;
    }

    &.expand-row {
        // flex-direction: column; // Handled by flex-wrap
    }

    .child-list {
        width: 100%;
        padding-left: 0;
        margin: 0;
        list-style: none;
        
        li {
            width: 100%;
            height: 10vw;
            display: flex;
            align-items: center;
            padding-left: 10vw;
            color: #9c9c9c;
            font-size: 3.8vw;
            
            img {
                height: 5vw; // converted from 20px approx
                margin-right: 2vw;
            }
        }
    }
}

.row-line {
    height: 1px;
    background-color: #1e2029;
    margin: 4vw 4vw;
}
</style>
