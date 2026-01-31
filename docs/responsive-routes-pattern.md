# 响应式路由组件模式

## 文件结构

```
views/
├── index.vue          # 智能路由包装器（根据设备切换PC/H5组件）
├── index-pc.vue       # PC端专用组件
└── index-h5.vue       # H5/移动端专用组件
```

## 工作原理

### 1. index.vue - 智能路由包装器

```vue
<template>
  <div class="home-wrapper">
    <!-- PC端组件 -->
    <IndexPC v-if="isDesktop" />
    
    <!-- H5端组件 -->
    <IndexH5 v-else />
  </div>
</template>

<script setup>
import { useDevice } from '@/composables/useDevice'
import IndexPC from './index-pc.vue'
import IndexH5 from './index-h5.vue'

const { isDesktop } = useDevice()
</script>
```

### 2. index-pc.vue - PC端组件

完整的桌面布局：
- 大屏幕优化的布局
- 多列网格布局
- 桌面端的交互效果
- 使用 `home-extracted.css`

### 3. index-h5.vue - H5端组件

移动端优化布局：
- 垂直滚动布局
- 单列设计
- 触摸优化
- 简化的UI元素
- 移动端专属样式

## 使用Demo

访问首页 `/` 时：
- 桌面设备（>=1024px）→ 渲染 `index-pc.vue`
- 移动设备（<1024px）→ 渲染 `index-h5.vue`

## 为其他页面应用此模式

### 步骤：

1. **重命名现有组件**
   ```bash
   mv src/views/about.vue src/views/about-pc.vue
   ```

2. **创建H5版本**
   ```bash
   # 创建移动端组件
   touch src/views/about-h5.vue
   ```

3. **创建智能包装器**
   ```vue
   <!-- src/views/about.vue -->
   <template>
     <AboutPC v-if="isDesktop" />
     <AboutH5 v-else />
   </template>
   
   <script setup>
   import { useDevice } from '@/composables/useDevice'
   import AboutPC from './about-pc.vue'
   import AboutH5 from './about-h5.vue'
   
   const { isDesktop } = useDevice()
   </script>
   ```

## 优势

✅ **清晰的代码分离** - PC和H5代码完全独立
✅ **易于维护** - 修改PC不影响H5，反之亦然
✅ **性能优化** - 只加载当前设备需要的组件
✅ **统一模式** - 所有页面遵循相同的结构
✅ **SEO友好** - 路由不变，对搜索引擎友好

## 测试

```bash
# 启动开发服务器
bun dev

# 打开浏览器访问
http://localhost:5173

# 调整浏览器窗口大小
- 宽度 >= 1024px → 看到PC版本
- 宽度 < 1024px → 看到H5版本

# 或使用浏览器开发工具的设备模拟
- F12 → Toggle device toolbar (Ctrl+Shift+M)
- 选择不同设备查看效果
```
