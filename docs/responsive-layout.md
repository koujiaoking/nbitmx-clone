# 响应式布局系统使用文档

## 概述

项目现在支持基于设备自动切换PC和移动端布局。在 `App.vue` 中实现了全局响应式布局系统，无需在每个页面单独处理。

## 核心功能

### 1. 设备检测 Composable

位置：`src/composables/useDevice.ts`

提供的响应式属性：
- `isMobile` - 是否为移动设备 (< 768px)
- `isTablet` - 是否为平板设备 (768px - 1023px)
- `isDesktop` - 是否为桌面设备 (>= 1024px)
- `screenWidth` - 当前屏幕宽度
- `screenHeight` - 当前屏幕高度

### 2. 断点设置

| 设备类型 | 屏幕宽度范围 | 变量 |
|---------|------------|------|
| Mobile  | < 768px    | `isMobile = true` |
| Tablet  | 768px - 1023px | `isTablet = true` |
| Desktop | >= 1024px  | `isDesktop = true` |

## App.vue 布局逻辑

### PC布局 (Desktop >= 1024px)

```vue
<template v-if="isDesktop">
  <AppHeader />           <!-- 完整桌面导航栏 -->
  <RouterView />          <!-- 页面内容 -->
  <AppFooter />           <!-- 桌面页脚 -->
  <FloatingServiceBtn />  <!-- 客服按钮 -->
</template>
```

**特点：**
- 完整的导航头部
- 页脚始终显示（除非路由meta设置隐藏）
- 无底部导航栏
- 客服按钮位置默认

### H5布局 (Mobile/Tablet < 1024px)

```vue
<template v-else>
  <AppHeader class="mobile-header" />      <!-- 简化移动导航 -->
  <RouterView />                           <!-- 页面内容 -->
  <MobileTabBar />                         <!-- 底部导航栏 -->
  <AppFooter v-if="showMobileFooter" />    <!-- 可选移动页脚 -->
  <FloatingServiceBtn class="mobile-service-btn" /> <!-- 调整位置的客服按钮 -->
</template>
```

**特点：**
- 简化的移动头部（sticky定位）
- 底部固定导航栏
- 页脚可选（默认仅首页显示）
- 客服按钮位置上移（避开底部导航栏）
- 底部增加80px padding给导航栏留空间

## 在组件中使用

### 基础用法

```vue
<script setup>
import { useDevice } from '@/composables/useDevice'

const { isMobile, isDesktop } = useDevice()
</script>

<template>
  <div>
    <!-- 移动端内容 -->
    <div v-if="isMobile" class="mobile-content">
      移动端UI
    </div>
    
    <!-- 桌面端内容 -->
    <div v-else-if="isDesktop" class="desktop-content">
      桌面端UI
    </div>
  </div>
</template>
```

### 条件渲染不同组件

```vue
<script setup>
import { useDevice } from '@/composables/useDevice'
import MobileCard from './MobileCard.vue'
import DesktopCard from './DesktopCard.vue'

const { isMobile } = useDevice()
</script>

<template>
  <MobileCard v-if="isMobile" />
  <DesktopCard v-else />
</template>
```

### 响应式样式

```vue
<script setup>
import { useDevice } from '@/composables/useDevice'

const { screenWidth } = useDevice()
</script>

<template>
  <div :style="{ fontSize: screenWidth < 768 ? '14px' : '16px' }">
    响应式文字大小
  </div>
</template>
```

## CSS类名

App组件会根据设备自动添加类名：

```css
/* 桌面端 */
#app.is-desktop {
  /* 桌面样式 */
}

/* 移动端 */
#app.is-mobile {
  /* 移动样式 */
  padding-bottom: 80px; /* 为底部导航栏留空间 */
}
```

## 自定义配置

### 修改断点

编辑 `src/composables/useDevice.ts`:

```typescript
// 默认值
const MOBILE_BREAKPOINT = 768  // 修改这个值来调整移动端断点
```

### 自定义移动端页脚显示逻辑

编辑 `App.vue` 中的 `showMobileFooter` computed:

```typescript
const showMobileFooter = computed(() => {
  // 仅在首页显示
  return route.path === '/'
  
  // 或者在特定路由显示
  // return ['/', '/about', '/contact'].includes(route.path)
})
```

## 注意事项

1. **自动响应**：设备检测会自动监听窗口resize事件，无需手动更新
2. **性能优化**：组件卸载时会自动清理事件监听器
3. **SSR兼容**：composable在onMounted时初始化，支持SSR
4. **布局切换**：窗口大小改变会立即切换布局，无需刷新

## 示例场景

### 场景1：首页不同布局

```vue
<!-- views/index.vue -->
<script setup>
import { useDevice } from '@/composables/useDevice'

const { isMobile } = useDevice()
</script>

<template>
  <!-- 移动端：上下滚动布局 -->
  <div v-if="isMobile" class="mobile-home">
    <MobileBanner />
    <MobileFeatures />
    <MobileStats />
  </div>
  
  <!-- 桌面端：多列布局 -->
  <div v-else class="desktop-home">
    <DesktopHero />
    <DesktopFeatures />
    <DesktopStats />
  </div>
</template>
```

### 场景2：导航菜单

```vue
<!-- components/Navigation.vue -->
<script setup>
import { useDevice } from '@/composables/useDevice'

const { isMobile } = useDevice()
const showMobileMenu = ref(false)
</script>

<template>
  <!-- 移动端：抽屉菜单 -->
  <div v-if="isMobile">
    <button @click="showMobileMenu = true">☰</button>
    <Drawer v-model="showMobileMenu">
      <MobileMenu />
    </Drawer>
  </div>
  
  <!-- 桌面端：横向菜单 -->
  <nav v-else class="desktop-nav">
    <DesktopMenu />
  </nav>
</template>
```

## 疑难解答

### Q: 为什么切换设备后布局没变化？
A: 确保导入了 `useDevice` composable 并在setup中调用。检查浏览器控制台是否有错误。

### Q: 如何调试当前设备类型？
A: 在组件中添加：
```vue
<div>{{ { isMobile, isTablet, isDesktop, screenWidth } }}</div>
```

### Q: 移动端底部导航栏被内容遮挡？
A: 确保 `#app.is-mobile` 有 `padding-bottom: 80px` 样式。

### Q: 如何针对特定页面禁用移动布局？
A: 可以在路由meta中添加标记，然后在App.vue中判断。
