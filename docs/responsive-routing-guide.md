# 响应式路由系统使用指南

## ✨ 功能特性

### 1. 自动设备检测
- **PC端（≥768px）**：自动加载 `desktop/index.vue`
- **移动端（<768px）**：自动加载 `mobile/index.vue`

### 2. 窗口大小变化监听 🆕
- 浏览器窗口调整大小时自动切换组件
- 跨越 768px 分界点时，自动卸载旧组件并加载新组件
- 无需刷新页面即可查看不同设备版本

### 3. 使用示例

**路由配置**:
```typescript
// 响应式页面（支持窗口变化自动切换）
defineRoute('/', 'Index', '@/views/index', {
  responsive: true
})

// 业务组件（统一实现，不响应窗口变化）
defineRoute('/assets', 'Assets', '@/views/PlaceholderView', {
  responsive: false
})
```

**文件结构**:
```
views/
├── index/
│   ├── desktop/index.vue  ← PC版本
│   └── mobile/index.vue   ← 移动版本
└── PlaceholderView.vue    ← 统一组件
```

## 🎮 测试方法

1. 打开浏览器开发者工具（F12）
2. 切换到响应式设计模式（Ctrl/Cmd + Shift + M）
3. 调整窗口宽度：
   - **宽度 > 768px**: 显示 PC 版本
   - **宽度 < 768px**: 显示移动版本
4. 观察组件自动切换

## 🔧 工作原理

### 响应式包装组件

```typescript
defineComponent({
  setup() {
    const { isDesktop } = useDevice() // 响应式设备检测
    
    return () => {
      // 每次 isDesktop 变化时，重新渲染对应组件
      const deviceFolder = isDesktop.value ? 'desktop' : 'mobile'
      const AsyncComp = defineAsyncComponent(loader)
      return h(AsyncComp)
    }
  }
})
```

### useDevice Composable

自动监听窗口 resize 事件：
```typescript
window.addEventListener('resize', updateDeviceType)
```

## 📝 注意事项

1. **状态丢失**：切换组件时，组件状态会重置
2. **性能优化**：频繁切换时可能有轻微性能影响
3. **建议**：为保持用户体验，避免在移动和桌面版本之间频繁切换

## 🎯 适用场景

✅ **适合响应式切换**:
- 首页
- NFT 展示页
- 营销页面

❌ **不适合响应式切换**:
- 交易页面（有表单状态）
- 订单页面（有实时数据）
- 聊天页面（有连接状态）

对于不适合的场景，使用 `responsive: false` 并在组件内部用 CSS 处理响应式布局。
