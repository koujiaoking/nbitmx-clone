<template>
  <Transition name="tabbar-slide">
    <div v-if="isMobile && showTabBar" class="mobile-tabbar">
      <div 
        v-for="tab in tabs" 
        :key="tab.name"
        class="tab-item"
        :class="{ active: isActive(tab.route) }"
        @click="navigateTo(tab.route)"
      >
        <div class="tab-icon" v-html="tab.icon"></div>
        <span class="tab-label">{{ tab.label }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isMobile = ref(false)
const showTabBar = ref(true)

interface Tab {
  name: string
  label: string
  route: string
  icon: string
}

const tabs: Tab[] = [
  { 
    name: 'home', 
    label: '首页', 
    route: '/', 
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>' 
  },
  { 
    name: 'market', 
    label: '行情', 
    route: '/quotes', 
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>' 
  },
  { 
    name: 'trade', 
    label: '交易', 
    route: '/spot/index', 
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z M7 14l5-5 5 5z"/></svg>' 
  },
  { 
    name: 'ai', 
    label: 'AI计算', 
    route: '/ai-computing', 
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-1 6h-2v-2h2v2zm0-3h-2V12h2v2zm-12 3H5v-2h2v2zm0-3H5V12h2v2zM9 17H7v-2h2v2zm0-3H7V12h2v2zm11-9H4c-1.1 0-2 .9-2 2v3h20V7c0-1.1-.9-2-2-2zm-1 4H5V7h14v2z"/></svg>' 
  },
  { 
    name: 'asset', 
    label: '资产', 
    route: '/assets/overview', 
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>' 
  }
]

const isActive = (tabRoute: string) => {
  return route.path === tabRoute || route.path.startsWith(tabRoute + '/')
}

const navigateTo = (path: string) => {
  if (route.path !== path) {
    router.push(path)
  }
}

// 检查是否为移动端
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

let lastScrollY = 0
// 处理滚动事件，向下滚动隐藏TabBar
const handleScroll = () => {
  const currentScrollY = window.scrollY
  // 向下滚动隐藏TabBar，向上滚动显示TabBar
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    showTabBar.value = false
  } else {
    showTabBar.value = true
  }
  lastScrollY = currentScrollY
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="less">
.mobile-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #181A20;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  padding-bottom: env(safe-area-inset-bottom);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
}

.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 8px 4px;
  position: relative;
}

.tab-icon {
  font-size: 24px;
  color: #848E9C;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab-icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.tab-label {
  font-size: 11px;
  color: #848E9C;
  transition: all 0.3s ease;
  font-weight: 500;
}

.tab-item.active .tab-icon,
.tab-item.active .tab-label {
  color: #00F0FF;
}

.tab-item.active::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #00F0FF 0%, #00AFFF 100%);
  border-radius: 0 0 2px 2px;
}

.tab-item:active {
  transform: scale(0.95);
}

/* Transitions */
.tabbar-slide-enter-active,
.tabbar-slide-leave-active {
  transition: transform 0.3s ease;
}

.tabbar-slide-enter-from,
.tabbar-slide-leave-to {
  transform: translateY(100%);
}
</style>
