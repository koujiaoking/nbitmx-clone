/**
 * 应用全局状态Store
 * @description 管理应用级别的全局状态
 */
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { setLocale, getLocale, SUPPORTED_LOCALES } from '@/i18n'

export const useAppStore = defineStore('app', () => {
  // ============================================
  // 状态
  // ============================================

  /** 当前语言 */
  const locale = ref(getLocale())

  /** 是否显示移动端菜单 */
  const showMobileMenu = ref(false)

  /** 是否正在加载 */
  const loading = ref(false)

  /** 是否为暗色模式 */
  const darkMode = ref(true)

  // ============================================
  // 计算属性
  // ============================================

  /** 当前语言信息 */
  const currentLocaleInfo = computed(() => {
    return SUPPORTED_LOCALES.find(l => l.code === locale.value) || SUPPORTED_LOCALES[1]
  })

  // ============================================
  // 方法
  // ============================================

  /**
   * 切换语言
   * @param newLocale - 目标语言代码
   */
  function changeLocale(newLocale: string) {
    locale.value = newLocale
    setLocale(newLocale)
  }

  /**
   * 切换移动端菜单显示状态
   */
  function toggleMobileMenu() {
    showMobileMenu.value = !showMobileMenu.value
  }

  /**
   * 关闭移动端菜单
   */
  function closeMobileMenu() {
    showMobileMenu.value = false
  }

  /**
   * 设置加载状态
   */
  function setLoading(value: boolean) {
    loading.value = value
  }

  return {
    locale,
    showMobileMenu,
    loading,
    darkMode,
    currentLocaleInfo,
    changeLocale,
    toggleMobileMenu,
    closeMobileMenu,
    setLoading,
  }
})
