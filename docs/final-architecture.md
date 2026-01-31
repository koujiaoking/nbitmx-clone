# 路由层响应式 + 国际化完整方案

## ✨ 核心特点

### 1. 路由层自动处理 - 零包装器

**router/index.ts**:
```typescript
defineRoute('/', 'Index', '@/views/index', {
  responsive: true,  // 静态展示页
})

defineRoute('/assets/withdraw', 'Withdraw', '@/views/assets/WithdrawView', {
  responsive: false,  // 业务组件（默认）
})
```

**文件结构**:
```
views/
├── index/                    # 响应式页面
│   ├── desktop/index.vue    # PC版
│   └── mobile/index.vue     # H5版
└── assets/
    └── WithdrawView.vue     # 业务组件（统一）
```

### 2. 业务组件统一实现

交易/钱包/提现等业务组件只写一套：

```vue
<!-- assets/WithdrawView.vue -->
<template>
  <div :class="{ 'mobile-layout': isMobile }">
    <form @submit="handleWithdraw">
      <input v-model="amount" />
      <button>{{ $t('common.withdraw') }}</button>
    </form>
  </div>
</template>

<script setup>
// useDevice 和 useI18n 自动导入
const { isMobile } = useDevice()
const { t } = useI18n()

// 统一业务逻辑，API只对接一次
async function handleWithdraw() {
  await withdrawAPI(amount.value)
}
</script>

<style scoped>
.mobile-layout { padding: 16px; }
</style>
```

### 3. 国际化全局可用

```vue
<template>
  <!-- $t 全局可用 -->
  <h1>{{ $t('hero.title', { count: '3600万' }) }}</h1>
</template>

<script setup>
// useI18n 自动导入
const { t, locale } = useI18n()

function switchLang() {
  locale.value = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
}
</script>
```

## 📋 添加新页面

### 静态展示页（需PC/H5分离）

```bash
# 1. 创建文件夹
mkdir -p src/views/about/desktop src/views/about/mobile

# 2. 创建组件
# about/desktop/index.vue - PC版
# about/mobile/index.vue - H5版

# 3. 配置路由
defineRoute('/about', 'About', '@/views/about', {
  responsive: true,  # 关键！
})
```

### 业务组件（统一实现）

```bash
# 1. 创建单一组件
# settings/SettingsView.vue

# 2. 配置路由
defineRoute('/settings', 'Settings', '@/views/settings/SettingsView', {
  responsive: false,  # 或省略（默认false）
})
```

## 🎯 工作原理

**responsiveRoute.ts**:
```typescript
function createResponsiveComponent(basePath, { responsive }) {
  if (!responsive) {
    // 业务组件：直接加载
    return import(`${basePath}.vue`)
  }

  // 静态页：根据设备加载
  const { isDesktop } = useDevice()
  const folder = isDesktop.value ? 'desktop' : 'mobile'
  
  try {
    return import(`${basePath}/${folder}/index.vue`)
  } catch {
    // 回退机制
    return import(`${basePath}.vue`)
  }
}
```

## 🌍 国际化

### 语言切换（Header & Footer）

✅ **AppHeader**: 鼠标悬停显示菜单
✅ **AppFooter**: 鼠标悬停显示菜单
✅ 当前语言显示勾选图标
✅ 点击切换立即生效

### 使用

```typescript
import { setLocale } from '@/locales/i18n'

setLocale('en-US')  // 切换
