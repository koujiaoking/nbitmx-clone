<template>
  <div class="responsive-view">
    <!-- 桌面端视图 (>= 960px) -->
    <div v-if="isDesktop" class="desktop-view">
      <slot name="desktop">
        <!-- 默认桌面端内容 -->
        <slot></slot>
      </slot>
    </div>

    <!-- 移动端视图 (< 960px) -->
    <div v-else class="mobile-view">
      <slot name="mobile">
        <!-- 默认移动端内容 (如果没有提供mobile slot，则显示默认slot) -->
        <slot></slot>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 响应式视图组件
 * @description 根据屏幕宽度自动切换桌面端和移动端视图
 * 
 * 使用方法:
 * <ResponsiveView>
 *   <template #desktop>桌面端内容</template>
 *   <template #mobile>移动端内容</template>
 * </ResponsiveView>
 * 
 * 或者只提供一个slot，组件会根据断点显示:
 * <ResponsiveView>
 *   <div>默认内容</div>
 * </ResponsiveView>
 */
import { ref, onMounted, onUnmounted } from 'vue'

// ============================================
// Props 配置
// ============================================

interface Props {
  /**
   * 断点宽度，默认 960px
   * 屏幕宽度 >= breakpoint 时显示桌面端
   * 屏幕宽度 < breakpoint 时显示移动端
   */
  breakpoint?: number
}

const props = withDefaults(defineProps<Props>(), {
  breakpoint: 960
})

// ============================================
// 响应式状态
// ============================================

/**
 * 是否为桌面端
 * true: >= breakpoint
 * false: < breakpoint
 */
const isDesktop = ref(true)

// ============================================
// 响应式监听
// ============================================

/**
 * 检查当前屏幕尺寸
 */
function checkScreenSize() {
  isDesktop.value = window.innerWidth >= props.breakpoint
}

/**
 * 防抖处理的resize监听器
 * 避免频繁触发导致性能问题
 */
let resizeTimer: number | null = null
function handleResize() {
  if (resizeTimer) {
    clearTimeout(resizeTimer)
  }
  
  resizeTimer = setTimeout(() => {
    checkScreenSize()
  }, 100) as unknown as number
}

// ============================================
// 生命周期钩子
// ============================================

onMounted(() => {
  // 初始化检查屏幕尺寸
  checkScreenSize()
  
  // 添加resize监听
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  // 清理resize监听
  window.removeEventListener('resize', handleResize)
  
  // 清理定时器
  if (resizeTimer) {
    clearTimeout(resizeTimer)
  }
})
</script>

<style scoped>
/**
 * 响应式视图容器
 */
.responsive-view {
  width: 100%;
}

/**
 * 桌面端视图容器
 */
.desktop-view {
  width: 100%;
}

/**
 * 移动端视图容器
 */
.mobile-view {
  width: 100%;
}
</style>
