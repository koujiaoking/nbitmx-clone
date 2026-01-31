import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { languageConfig, type SupportedLocale } from '@/locales/i18n'
import { i18n } from '@/locales/i18n'

export const useLanguageStore = defineStore('language', () => {
  // 从 localStorage 获取保存的语言，或使用默认语言
  const getStoredLocale = (): SupportedLocale => {
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

  // 当前语言
  const currentLocale = ref<SupportedLocale>(getStoredLocale())

  // 所有可用语言
  const availableLanguages = computed(() => languageConfig)

  // 当前语言配置
  const currentLanguage = computed(() => {
    return languageConfig.find(l => l.code === currentLocale.value) || languageConfig[0]
  })

  // 当前语言国旗
  const currentFlag = computed(() => currentLanguage.value.flag)

  // 当前语言名称
  const currentName = computed(() => currentLanguage.value.name)

  // 设置语言
  function setLanguage(locale: SupportedLocale) {
    currentLocale.value = locale
    i18n.global.locale.value = locale
    localStorage.setItem('app-locale', locale)
    document.documentElement.lang = locale
  }

  // 初始化时同步到 i18n
  i18n.global.locale.value = currentLocale.value

  return {
    currentLocale,
    availableLanguages,
    currentLanguage,
    currentFlag,
    currentName,
    setLanguage
  }
})
