# 全局响应式路由 + 国际化实现指南

## 📁 项目结构

```
src/
├── views/
│   ├── desktop/           # PC端页面组件
│   │   └── index.vue
│   ├── mobile/            # H5端页面组件
│   │   └── index.vue
│   └── index.vue          # 智能路由包装器（自动切换）
├── locales/
│   ├── index.json         # 国际化文本
│   └── i18n.ts            # i18n 配置
├── composables/
│   └── useDevice.ts       # 设备检测
└── router/
    └── smartRoute.ts      # 智能路由工具（可选）
```

## 🎯 核心特性

### 1. 全局响应式路由

**无需在每个页面import useDevice**，所有路由自动根据设备加载对应组件。

#### 工作原理

```vue
<!-- views/index.vue (智能包装器) -->
<template>
  <component :is="currentComponent" />
</template>

<script setup>
// 自动从 desktop 或 mobile 文件夹动态导入
const currentComponent = computed(() => {
  return isDesktop.value
    ? defineAsyncComponent(() => import('./desktop/index.vue'))
    : defineAsyncComponent(() => import('./mobile/index.vue'))
})
</script>
```

### 2. 国际化自动导入

**无需在每个组件import useI18n**，`$t` 全局可用。

#### vite.config.ts 配置

```typescript
AutoImport({
  imports: [
    'vue',
    'vue-router',
    {
      'vue-i18n': ['useI18n'],
    },
  ],
})
```

#### 使用方式

```vue
<template>
  <div>
    <!-- 直接使用 $t，无需导入 -->
    <h1>{{ $t('hero.title', { count: '3600万' }) }}</h1>
    <button>{{ $t('common.goTrade') }}</button>
  </div>
</template>

<script setup>
// 如果需要编程式访问
const { t, locale } = useI18n() // 自动导入，无需 import

function changeLanguage() {
  locale.value = 'en-US'
}
</script>
```

## 📝 添加新页面步骤

### 方法：创建响应式路由页面

```bash
# 1. 创建智能包装器
touch src/views/about.vue

# 2. 创建PC和H5版本
touch src/views/desktop/about.vue
touch src/views/mobile/about.vue
```

**about.vue (智能包装器)**:
```vue
<template>
  <component :is="currentComponent" />
</template>

<script setup>
const { isDesktop } = useDevice() // 自动导入，无需import

const currentComponent = computed(() => {
  return isDesktop.value
    ? defineAsyncComponent(() => import('./desktop/about.vue'))
    : defineAsyncComponent(() => import('./mobile/about.vue'))
})
</script>
```

**desktop/about.vue (PC版本)**:
```vue
<template>
  <div class="about-desktop">
    <h1>{{ $t('about.title') }}</h1>
    <!-- PC布局 -->
  </div>
</template>
```

**mobile/about.vue (H5版本)**:
```vue
<template>
  <div class="about-mobile">
    <h1>{{ $t('about.title') }}</h1>
    <!-- 移动布局 -->
  </div>
</template>
```

## 🌍 国际化使用

### 添加翻译文本

编辑 `src/locales/index.json`:

```json
{
  "zh-CN": {
    "about": {
      "title": "关于我们",
      "description": "我们是..."
    }
  },
  "en-US": {
    "about": {
      "title": "About Us",
      "description": "We are..."
    }
  }
}
```

### 在组件中使用

```vue
<template>
  <!-- 模板中直接使用 $t -->
  <h1>{{ $t('about.title') }}</h1>
  
  <!-- 带参数 -->
  <p>{{ $t('hero.title', { count: '3600万' }) }}</p>
</template>

<script setup>
// script 中使用 t
const { t, locale } = useI18n() // 自动导入

const greeting = computed(() => t('common.hello'))

// 切换语言
function switchToEnglish() {
  locale.value = 'en-US'
}
</script>
```

### 切换语言

```typescript
import { setLocale } from '@/locales/i18n'

// 切换到英文
setLocale('en-US')

// 切换到中文
setLocale('zh-CN')
```

## 🔧 自动导入说明

### 全局可用API（无需import）

- **Vue**: `ref`, `reactive`, `computed`, `watch`, `onMounted` 等
- **Vue Router**: `useRoute`, `useRouter`
- **Vue I18n**: `useI18n`
- **自定义**: `useDevice` (需手动添加到AutoImport配置)

### 如何添加更多自动导入

编辑 `vite.config.ts`:

```typescript
AutoImport({
  imports: [
    'vue',
    'vue-router',
    {
      'vue-i18n': ['useI18n'],
      '@/composables/useDevice': ['useDevice'], // 添加自定义composable
    },
  ],
})
```

## 🧪 验证方式

### 测试响应式路由

```bash
# 浏览器访问
http://localhost:5173

# 按F12，切换设备模拟
- Desktop (>= 1024px) → 加载 desktop/index.vue
- Mobile (< 1024px) → 加载 mobile/index.vue

# 查看Console
应该只看到一个组件日志（当前设备对应的）
```

### 测试国际化

```vue
<template>
  <div>
    <p>{{ $t('common.home') }}</p>
    <button @click="toggle">切换语言</button>
  </div>
</template>

<script setup>
const { locale } = useI18n()

function toggle() {
  locale.value = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
}
</script>
```

## 📌 注意事项

1. **组件命名**: desktop和mobile文件夹中的组件文件名要一致
2. **路由配置**: router/index.ts 中只需配置智能包装器
3. **类型**: AutoImport 会生成 `auto-imports.d.ts`，提供类型支持
4. **懒加载**: `defineAsyncComponent` 实现按需加载，性能更好
5. **语言持久化**: 语言选择自动保存到 localStorage

## 🎉 优势总结

✅ **代码简洁**: 无需每个文件 import useDevice
✅ **一次配置**: App.vue 统一管理设备切换
✅ **文件夹管理**: desktop/mobile 结构清晰
✅ **自动导入**: $t 和 Vue API 全局可用
✅ **类型安全**: TypeScript 支持完整
✅ **性能优化**: 懒加载 + 按需导入
