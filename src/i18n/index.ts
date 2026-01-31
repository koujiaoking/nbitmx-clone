/**
 * 国际化配置入口文件
 * @description 配置Vue I18n多语言支持
 */
import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN'
import en from './locales/en'
import ja from './locales/ja'

/** 支持的语言列表 */
export const SUPPORTED_LOCALES = [
  { code: 'zh-CN', name: '中文简体', flag: '🇨🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
] as const

/** 默认语言 */
export const DEFAULT_LOCALE = 'en'

/**
 * 获取浏览器语言或localStorage中保存的语言
 * @returns 语言代码
 */
function getDefaultLocale(): string {
  // 优先从localStorage获取
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && SUPPORTED_LOCALES.some(l => l.code === savedLocale)) {
    return savedLocale
  }

  // 从浏览器语言获取
  const browserLocale = navigator.language
  if (browserLocale.startsWith('zh')) {
    return 'zh-CN'
  }
  if (browserLocale.startsWith('ja')) {
    return 'ja'
  }

  return DEFAULT_LOCALE
}

/**
 * 创建i18n实例
 */
const i18n = createI18n({
  legacy: false, // 使用Composition API模式
  locale: getDefaultLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    'zh-CN': zhCN,
    en,
    ja,
  },
  // 禁止警告信息
  silentTranslationWarn: true,
  missingWarn: false,
  fallbackWarn: false,
})

/**
 * 切换语言
 * @param locale - 目标语言代码
 */
export function setLocale(locale: string) {
  if (SUPPORTED_LOCALES.some(l => l.code === locale)) {
    // @ts-ignore
    i18n.global.locale.value = locale
    localStorage.setItem('locale', locale)
    document.documentElement.lang = locale
  }
}

/**
 * 获取当前语言
 * @returns 当前语言代码
 */
export function getLocale(): string {
  // @ts-ignore
  return i18n.global.locale.value
}

export default i18n
