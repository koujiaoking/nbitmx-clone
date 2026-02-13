import { createI18n } from 'vue-i18n'
import messages from './index.json'
import iconKo from '@/assets/flag/ko.svg'
import iconEn from '@/assets/flag/en.svg'
import iconZhHK from '@/assets/flag/zh-HK.svg'
import iconJa from '@/assets/flag/ja.svg'
import iconDe from '@/assets/flag/de.svg'
import iconRu from '@/assets/flag/ru.svg'
import iconPt from '@/assets/flag/pt.svg'
// 支持的语言类型
export type SupportedLocale = 'ko' | 'en' | 'zh-HK' | 'ja' | 'de' | 'ru' | 'pt'

// 语言配置
export const languageConfig = [
  { code: 'ko', name: '한국어', flag: iconKo },
  { code: 'en', name: 'English', flag: iconEn },
  { code: 'zh-HK', name: '中文繁體', flag: iconZhHK },
  { code: 'ja', name: '日本語', flag: iconJa },
  { code: 'de', name: 'Deutsch', flag: iconDe },
  { code: 'ru', name: 'Русский', flag: iconRu },
  { code: 'pt', name: 'Português', flag: iconPt },
] as const

// 获取默认语言
function getDefaultLocale(): SupportedLocale {
  const savedLocale = localStorage.getItem('app-locale')
  if (savedLocale && languageConfig.find(l => l.code === savedLocale)) {
    return savedLocale as SupportedLocale
  }

  // 检测浏览器语言
  const browserLang = navigator.language
  if (browserLang.startsWith('ko')) return 'ko'
  if (browserLang.startsWith('ja')) return 'ja'
  if (browserLang.startsWith('de')) return 'de'
  if (browserLang.startsWith('ru')) return 'ru'
  if (browserLang.startsWith('pt')) return 'pt'
  if (browserLang.startsWith('zh-TW') || browserLang.startsWith('zh-HK')) return 'zh-HK'
  if (browserLang.startsWith('en')) return 'en'

  return 'en' // 默认英语
}

// 创建 i18n 实例
export const i18n = createI18n({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: 'en',
  messages,
  globalInjection: true,
})

// 设置语言
export function setLocale(locale: SupportedLocale) {
  i18n.global.locale.value = locale
  localStorage.setItem('app-locale', locale)
  document.documentElement.lang = locale
}

// 默认导出 i18n 实例
export default i18n
