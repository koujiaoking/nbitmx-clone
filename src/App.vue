<template>
  <a-config-provider :theme="antdTheme">
    <div class="app-wrapper" :class="{ 'is-mobile': isMobile, 'is-desktop': isDesktop, 'is-main': isMobile && isMainPage }">
      <!-- <AppLoadingSpinner /> -->
      <!-- PC Layout (Desktop) -->
      <template v-if="isDesktop">
        <!-- Desktop Header -->
        <AppHeader />
        
        <!-- Page Content -->
        <RouterView />
        
        <!-- Desktop Footer -->
        <AppFooter v-if="!hideFooter" />
        
        <!-- Floating Customer Service Button (Desktop) -->
        <FloatingServiceBtn />
      </template>
      
      <!-- H5 Layout (Mobile/Tablet) -->
      <template v-else>
        <!-- Main Page Header -->
        <MobileAppHeader v-if="isMainPage" class="mobile-header" />
        
        <!-- Secondary Page Header (NavBar) -->
        <van-nav-bar
          v-else
          :title="pageTitle"
          left-arrow
          fixed
          placeholder
          @click-left="onClickLeft"
          class="mobile-navbar"
        />
        
        <!-- Page Content -->
        <router-view v-slot="{ Component }">
            <transition :name="transitionName">
              <component :is="Component" />
            </transition>
        </router-view>
        
        <!-- Mobile Main Footer -->
        <MobileAppFooter v-if="isMainPage" class="mobile-footer" />
      </template>
    </div>
  </a-config-provider>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue' // Added ref
import { useRoute, useRouter } from 'vue-router'
import { useDevice } from '@/composables/useDevice'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import MobileAppHeader from '@/components/mobile/AppHeader.vue'
import MobileAppFooter from '@/components/mobile/AppFooter.vue'
import FloatingServiceBtn from '@/components/FloatingServiceBtn.vue'

const route = useRoute()
const router = useRouter()

// Device detection
const { isMobile, isTablet, isDesktop } = useDevice()

// Ant Design Theme Configuration
// Ant Design Theme Configuration
const antdTheme = {
  token: {
    colorBgContainer: '#0f0f16', // 容器背景色
    colorBorderSecondary: '#2c2c3e', // 次級邊框色
    colorText: '#e5e7eb', // 主要文本色
    colorTextSecondary: '#9ca3af', // 次要文本色
    colorTextHeading: '#e5e7eb', // 標題文本色
    colorBgElevated: '#1a1b24', // 浮層背景色 (下拉菜單等)
    colorPrimary: '#00f0ff', // 主色調
    colorBorder: '#2c2c3e', // 邊框色
    borderRadius: 8, // 圓角
    controlItemBgHover: 'rgba(255, 255, 255, 0.08)', // 懸停背景色
  },
  components: {
    Table: {
      headerBg: '#0f0f16', // 表頭背景
      headerColor: '#e5e7eb', // 表頭文字顏色
      bodySortBg: '#0f0f16', // 排序背景
      rowHoverBg: '#1a1b24', // 行懸停背景
      rowSelectedBg: 'rgba(0, 240, 255, 0.15)', // 行選中背景
      rowSelectedHoverBg: 'rgba(0, 240, 255, 0.2)', // 行選中懸停背景
      borderColor: '#2c2c3e', // 邊框顏色
      headerBorderRadius: 0, // 表頭圓角
    },
    Input: {
      colorBgContainer: '#12131e', // 輸入框背景色
      colorBorder: '#2c2c3e', // 輸入框邊框色
      colorTextPlaceholder: '#5e5e7a', // 占位符顏色
      colorText: '#ffffff', // 輸入文字顏色
      activeBorderColor: '#00f0ff', // 激活邊框色
      hoverBorderColor: '#00f0ff', // 懸停邊框色
      controlHeight: 42,
    },
    Select: {
      colorBgContainer: '#12131e', // 下拉選框背景色
      colorBorder: '#2c2c3e', // 下拉選框邊框色
      colorText: '#ffffff', // 選中文字顏色
      colorTextPlaceholder: '#5e5e7a', // 占位符顏色
      optionSelectedBg: 'rgba(0, 240, 255, 0.15)', // 選項選中背景
      optionActiveBg: 'rgba(255, 255, 255, 0.08)', // 選項懸停背景
      colorBgElevated: '#1a1b24', // 下拉菜單背景色
      optionSelectedColor: '#ffffff', // 選中文字顏色
      controlItemBgHover: 'rgba(255, 255, 255, 0.08)', // 懸停背景
      controlItemBgActive: 'rgba(0, 240, 255, 0.1)', // 激活背景
      controlHeight: 42,
    },
    DatePicker: {
      colorBgContainer: '#12131e', // 日期選擇器背景色
      colorBorder: '#2c2c3e', // 日期選擇器邊框色
      colorText: '#ffffff', // 日期文字顏色
      colorTextPlaceholder: '#5e5e7a', // 占位符顏色
      colorBgElevated: '#1a1b24', // 彈出層背景色
      cellActiveWithRangeBg: 'rgba(0, 240, 255, 0.1)', // 範圍選擇背景
      cellHoverWithRangeBg: 'rgba(0, 240, 255, 0.15)', // 範圍選擇懸停背景
      cellRangeBorderColor: '#00f0ff', // 範圍邊框色
    }
  }
}

// Main Pages (Home, Market, Assets)
const mainRoutes = ['Index', 'Quotes', 'QuotesIndex', 'Assets', 'AssetsPage', 'AssetsIndex']
const isMainPage = computed(() => route.name && mainRoutes.includes(route.name as string))

// Page Title for Secondary Pages
const pageTitle = computed(() => {
  return (route.meta.title as string)?.split('|')[0]?.trim() || 'Nbitmx'
})

// Footer visibility logic (Desktop)
const hideFooter = computed(() => route.meta.hideFooter === true)

// Back Button Logic
const onClickLeft = () => {
  router.back()
}

// ---------------------------
// Mobile Page Transition Logic
// ---------------------------
const transitionName = ref('')
const enableAnimation = ref(true) // Configurable variable as requested

router.beforeEach((to, from) => {
  if (!isMobile.value || !enableAnimation.value) {
      transitionName.value = ''
      return
  }

  const isToMain = to.name && mainRoutes.includes(to.name as string)
  const isFromMain = from.name && mainRoutes.includes(from.name as string)

  // 1. Tab switching: No animation
  if (isToMain && isFromMain) {
      transitionName.value = ''
      return
  }

  // 2. From Main to Detail: Slide Left (Forward)
  if (isFromMain && !isToMain) {
      transitionName.value = 'slide-left'
      return
  }

  // 3. From Detail to Main: Slide Right (Back)
  if (!isFromMain && isToMain) {
      transitionName.value = 'slide-right'
      return
  }

  // 4. Detail to Detail: Determine by hierarchy or default
  // Simple heuristic: compare path depth or use history position if available (optional enhancement)
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  
  if (toDepth < fromDepth) {
      transitionName.value = 'slide-right'
  } else {
      transitionName.value = 'slide-left'
  }
})
</script>

<style lang="less">
/* Global styles */
.app-wrapper {
  min-height: 100vh;
  background: #0d0d0f;
  color: #fff;
}

/* Desktop-specific adjustments */
.app-wrapper.is-desktop {
  max-width: 100vw;
  overflow-x: hidden;
}

/* Mobile-specific adjustments */
.app-wrapper.is-mobile {
  max-width: 100vw;
  overflow-x: hidden;
  padding-bottom: 0; 
}

/* Add padding for Fixed Header/Footer on Main Mobile Pages */
.app-wrapper.is-mobile.is-main {
  padding-top: 12vw;  /* MobileAppHeader Height */
  padding-bottom: 20vw; /* MobileAppFooter Height */
}

/* Ensure secondary pages don't inherit this if they differ, but we scoped it to .is-main */

.app-wrapper.is-mobile .mobile-footer {
  z-index: 100;
}

/* Mobile header modifications */
.mobile-header {
  position: fixed; /* Explicitly fixed as per component design */
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.mobile-navbar {
  /* Vant NavBar Customization */
  --van-nav-bar-background: #1A1B23;
  --van-nav-bar-title-text-color: #EAECEF;
  --van-nav-bar-icon-color: #EAECEF;
  --van-border-width: 0px; 
}

/* Mobile service button positioning */
.mobile-service-btn {
  bottom: 20px;
}
.mobile-service-btn.has-footer {
  bottom: 100px; /* Above tabbar */
}

/* -----------------------------
   Page Transition Animations 
   ----------------------------- */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.2s ease-in-out; 
  position: fixed; /* Fixed to prevent layout jumps during potential overlap */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto; /* Allow scrolling within the page */
  background-color: #0d0d0f; /* Ensure background opacity */
  z-index: 1; /* Below header/footer if they are higher z-index (header is 100) */
  padding-top: 12vw; /* Default padding for pages to clear header (adjusted dynamically via class usually) */
}

/* Handle pages that don't need padding or have different structures */
/* We might need to be careful with 'position: fixed' breaking scrolling if not handled. */
/* Alternative: absolute with min-height */

/* Slide Left (Forward): Enter from Right */
.slide-left-enter-from {
  transform: translateX(100%);
  z-index: 2;
}
.slide-left-leave-to {
  transform: translateX(-20%); /* Optional parallax feel: leave slightly left */
  opacity: 0.8;
  z-index: 1;
}

/* Slide Right (Back): Enter from Left */
.slide-right-enter-from {
  transform: translateX(-20%);
  opacity: 0.8;
  z-index: 1;
}
.slide-right-leave-to {
  transform: translateX(100%);
  z-index: 2;
}

/* Override padding for specific views via child classes if needed, 
   but 'app-wrapper.is-mobile.is-main' usually handles it on the wrapper. 
   When simplified, 'fixed' might lose the wrapper padding context?
   Actually, .slide-x items are the router-view children. 
*/

/* Hide number input spinners */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
