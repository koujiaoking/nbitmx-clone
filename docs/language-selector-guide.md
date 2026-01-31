# 语言选择器组件 (LanguageSelector)

## 📦 组件说明

可复用的语言选择器组件，提供统一的多语言切换功能，支持自定义触发器样式。

## ✨ 特性

- ✅ **Pinia Store 集成** - 语言状态全局共享
- ✅ **Slot 插槽支持** - 自定义触发器样式
- ✅ **平滑动画** - 与 AppHeader 菜单样式一致
- ✅ **自定义滚动条** - 支持多语言列表滚动
- ✅ **LocalStorage 持久化** - 刷新保持语言设置
- ✅ **自动检测** - 浏览器语言自动匹配

## 📁 文件结构

```
src/
├── stores/
│   └── language.ts           # Pinia 语言状态管理
├── components/
│   └── LanguageSelector.vue  # 可复用语言选择器
└── locales/
    ├── i18n.ts               # i18n 配置
    └── index.json            # 语言翻译文件
```

## 🎯 使用方法

### 基础用法（默认样式）

```vue
<template>
  <LanguageSelector />
</template>

<script setup>
import LanguageSelector from '@/components/LanguageSelector.vue'
</script>
```

### 自定义触发器（使用插槽）

```vue
<template>
  <LanguageSelector>
    <template #default="{ currentFlag, currentName }">
      <!-- 自定义触发器内容 -->
      <div class="custom-trigger">
        <img :src="currentFlag" alt="language" />
        <span>{{ currentName }}</span>
      </div>
    </template>
  </LanguageSelector>
</template>
```

### 在 AppHeader 中使用

```vue
<LanguageSelector>
  <template #default="{ currentFlag }">
    <img 
      :src="currentFlag" 
      alt="language" 
      class="w-[22px] h-[22px] object-cover rounded-[4px]" 
    />
  </template>
</LanguageSelector>
```

### 在 AppFooter 中使用

```vue
<LanguageSelector>
  <template #default="{ currentFlag, currentName }">
    <div class="lang cursor-pointer">
      <img :src="currentFlag" alt="language" class="w-[20px] h-[20px]" />
      <span>{{ currentName }}</span>
      <span class="icon">→</span>
    </div>
  </template>
</LanguageSelector>
```

## 🎨 插槽 Props

| Prop | 类型 | 说明 |
|------|------|------|
| `currentFlag` | `string` | 当前语言的国旗图标路径 |
| `currentName` | `string` | 当前语言的名称 |

## 🔧 Store API

### 使用 Language Store

```typescript
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()

// 获取当前语言
const currentLocale = languageStore.currentLocale // 'zh-CN' | 'en-US' | ...

// 获取当前语言配置
const currentLang = languageStore.currentLanguage // { code, name, flag }

// 获取所有可用语言
const languages = languageStore.availableLanguages

// 切换语言
languageStore.setLanguage('en-US')
```

### Store 状态

```typescript
{
  currentLocale: Ref<SupportedLocale>  // 当前语言代码
  availableLanguages: ComputedRef      // 所有可用语言列表
  currentLanguage: ComputedRef         // 当前语言完整配置
  currentFlag: ComputedRef<string>     // 当前语言国旗路径
  currentName: ComputedRef<string>     // 当前语言名称
  setLanguage: (locale) => void        // 切换语言方法
}
```

## 🎭 动画效果

组件使用与 AppHeader 菜单一致的动画效果：

- **平滑过渡**: `transition: all 0.3s ease`
- **渐显渐隐**: `visibility` + `opacity`
- **位置过渡**: `top` 从 70px 到 `calc(100% + 10px)`

```css
.language-menu {
  visibility: hidden;
  opacity: 0;
  top: 70px;
  transition: all 0.3s ease;
}

.language-selector:hover .language-menu {
  visibility: visible;
  opacity: 1;
  top: calc(100% + 10px);
}
```

## 📜 支持的语言

| 代码 | 语言 | 国旗文件 |
|------|------|----------|
| `zh-CN` | 中文简体 | `zh-cn.svg` |
| `en-US` | English | `en-us.svg` |
| `zh-TW` | 中文繁體 | `zh-tw.svg` |
| `ja-JP` | 日本語 | `ja-jp.svg` |
| `ko-KR` | 한국어 | `ko-kr.svg` |
| `es-ES` | Español | `es-es.svg` |
| `pt-PT` | Português | `pt-pt.svg` |

## 🎨 样式定制

### 主题变量

可以通过 CSS 变量或覆盖 scoped 样式来定制外观：

```css
/* 自定义下拉菜单宽度 */
.language-menu {
  width: 250px;
}

/* 自定义最大高度 */
.language-menu {
  max-height: 500px;
}

/* 自定义背景色 */
.language-menu {
  background-color: #1a1a2e;
}
```

### 滚动条样式

内置自定义滚动条样式（仅 Webkit）：

```css
.language-menu::-webkit-scrollbar {
  width: 6px;
}

.language-menu::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}
```

## 🔍 最佳实践

1. **全局使用 Store** - 避免在组件内部重复实现语言切换逻辑
2. **使用插槽定制** - 根据不同位置的设计需求定制触发器样式
3. **保持一致性** - 多个位置使用相同的组件确保行为一致
4. **测试多语言** - 确保所有翻译文本都已正确配置

## 🐛 常见问题

### Q: 语言切换后页面不更新？
A: 确保使用了 `$t()` 函数或 `useI18n()` composable，并且 i18n 已正确配置全局注入。

### Q: 自定义样式不生效？
A: 注意组件使用了 `scoped` 样式，可能需要使用 `:deep()` 选择器或在父组件中添加全局样式。

### Q: 如何添加新语言？
A: 
1. 在 `src/assets/flag/` 添加国旗 SVG
2. 在 `src/locales/index.json` 添加翻译
3. 在 `src/locales/i18n.ts` 的 `languageConfig` 添加配置

## 📝 示例

完整示例请参考：
- [AppHeader.vue](file:///Users/ls/codedev/liushuo/nbitmx-clone/src/components/AppHeader.vue) - 顶部导航语言切换
- [AppFooter.vue](file:///Users/ls/codedev/liushuo/nbitmx-clone/src/components/AppFooter.vue) - 底部语言切换

## 🚀 未来改进

- [ ] 支持 RTL（从右到左）语言
- [ ] 添加键盘导航支持
- [ ] 支持语言搜索过滤
- [ ] 添加语言切换动画效果
