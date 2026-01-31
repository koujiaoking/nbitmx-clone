<template>
  <div 
    class="language-selector" 
    @mouseenter="showMenu = true"
    @mouseleave="showMenu = false"
  >
    <!-- 触发器：使用 slot 允许自定义 -->
    <div class="language-trigger">
      <slot :current-flag="languageStore.currentFlag" :current-name="languageStore.currentName">
        <!-- 默认触发器样式 -->
        <img 
          :src="languageStore.currentFlag" 
          alt="language" 
          class="default-flag"
        />
      </slot>
    </div>

    <!-- 语言下拉菜单 -->
    <div 
      class="language-menu" 
      :class="{ 'menu-visible': showMenu }"
    >
      <div 
        v-for="lang in languageStore.availableLanguages" 
        :key="lang.code" 
        class="language-option" 
        @click="selectLanguage(lang.code)"
      >
        <img 
          :src="lang.flag" 
          alt="" 
          class="option-flag"
        />
        <span class="option-name">{{ lang.name }}</span>
        <img 
          v-if="languageStore.currentLocale === lang.code" 
          class="check-icon" 
          src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%3e%3cpath%20d='M3.42472%209.9411L8.12193%2014.6383L18.4667%204.21212L20.5031%206.2349L8.04049%2018.7654L1.49695%2012.2218L3.42472%209.9411Z'%20fill='%2300F0FF'/%3e%3c/svg%3e" 
          alt="selected"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLanguageStore } from '@/stores/language'
import type { SupportedLocale } from '@/locales/i18n'

const languageStore = useLanguageStore()
const showMenu = ref(false)

function selectLanguage(locale: SupportedLocale) {
  languageStore.setLanguage(locale)
  showMenu.value = false // 隐藏菜单
}
</script>

<style scoped lang="less">
.language-selector {
  position: relative;
  display: inline-block;
}

.language-trigger {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.default-flag {
  width: 22px;
  height: 22px;
  object-fit: cover;
  border-radius: 4px;
}

/* 语言菜单 - 与AppHeader菜单样式一致 */
.language-menu {
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.49);
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 70px; /* 初始位置，隐藏时 */
  right: 0;
  z-index: 999;
  width: 208px;
  max-height: 400px; /* 支持滚动 */
  overflow-y: auto; /* 添加滚动条 */
  border-radius: 0.375rem;
  background-color: rgb(27, 27, 29);
  padding: 3px;
  color: rgb(144, 144, 173);
  transition: all 0.3s ease; /* 平滑过渡动画 */
}

/* 悬停时显示 - 与AppHeader一致的动画 */
.language-selector:hover .language-menu,
.language-menu.menu-visible {
  visibility: visible;
  top: calc(100% + 10px); /* 显示时的位置 */
  opacity: 1;
}

.language-option {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: all 0.2s;
  min-height: 50px;
}

.language-option:hover {
  background: linear-gradient(90deg, #00e3ff, #089);
}

.language-option:hover .option-name {
  color: rgb(0, 0, 0);
}

.option-flag {
  width: 22px;
  height: 22px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 12px;
  flex-shrink: 0;
}

.option-name {
  flex: 1;
  font-size: 15px;
  color: rgb(255, 255, 255);
  transition: color 0.2s;
}

.check-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

/* 自定义滚动条样式 */
.language-menu::-webkit-scrollbar {
  width: 6px;
}

.language-menu::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.language-menu::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.language-menu::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
