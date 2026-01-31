# Vue Virtual Scroller 使用指南

## 📦 已安装

vue-virtual-scroller 已全局注册，可在任何组件中使用。

## 🎯 何时使用

- ✅ 长列表（>100项）：行情数据、交易记录、订单历史
- ✅ 无限滚动：新闻列表、通知列表
- ✅ 大数据表格：交易对列表、资产列表

## 💡 基础用法

### 1. RecycleScroller（推荐）

用于固定高度项目的虚拟滚动：

```vue
<template>
  <RecycleScroller
    class="scroller"
    :items="marketData"
    :item-size="60"
    key-field="id"
    v-slot="{ item }"
  >
    <div class="market-item">
      <span>{{ item.symbol }}</span>
      <span>{{ item.price }}</span>
      <span :class="item.change >= 0 ? 'green' : 'red'">
        {{ item.change }}%
      </span>
    </div>
  </RecycleScroller>
</template>

<script setup>
const marketData = ref([
  { id: 1, symbol: 'BTC', price: '82,788', change: -6.04 },
  { id: 2, symbol: 'ETH', price: '2,737', change: -6.73 },
  // ... 更多数据
])
</script>

<style scoped>
.scroller {
  height: 600px; /* 必须设置固定高度 */
}

.market-item {
  height: 60px; /* 必须与 item-size 一致 */
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #2c2c3e;
}
</style>
```

### 2. DynamicScroller

用于动态高度项目：

```vue
<template>
  <DynamicScroller
    :items="newsItems"
    :min-item-size="100"
    class="news-scroller"
  >
    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[item.content]"
        :data-index="index"
      >
        <div class="news-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
          <span>{{ item.date }}</span>
        </div>
      </DynamicScrollerItem>
    </template>
  </DynamicScroller>
</template>

<script setup>
const newsItems = ref([
  { id: 1, title: 'News 1', content: 'Short content...', date: '2024-01-31' },
  { id: 2, title: 'News 2', content: 'Very long content...', date: '2024-01-30' },
])
</script>
```

### 3. 无限滚动

```vue
<template>
  <RecycleScroller
    :items="items"
    :item-size="80"
    @scroll-end="loadMore"
  >
    <template v-slot="{ item }">
      <div class="item">{{ item.name }}</div>
    </template>
  </RecycleScroller>
</template>

<script setup>
const items = ref([...])
const loading = ref(false)

async function loadMore() {
  if (loading.value) return
  loading.value = true
  
  const newItems = await fetchMoreData()
  items.value.push(...newItems)
  
  loading.value = false
}
</script>
```

## 📋 常见应用场景

### 行情列表（MarketOverview.vue）

```vue
<RecycleScroller
  class="market-list"
  :items="marketData"
  :item-size="72"
  key-field="symbol"
>
  <template v-slot="{ item }">
    <div class="coin-row">
      <img :src="item.icon" class="coin-icon" />
      <div class="coin-info">
        <span class="symbol">{{ item.symbol }}</span>
        <span class="name">{{ item.name }}</span>
      </div>
      <div class="price-info">
        <span class="price">${{ item.price }}</span>
        <span :class="['change', item.change >= 0 ? 'green' : 'red']">
          {{ item.change }}%
        </span>
      </div>
    </div>
  </template>
</RecycleScroller>

<style scoped>
.market-list {
  height: 500px;
  overflow-y: auto;
}

.coin-row {
  height: 72px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
```

### 交易记录

```vue
<DynamicScroller
  :items="tradeHistory"
  :min-item-size="60"
  class="trade-history"
>
  <template v-slot="{ item, index, active }">
    <DynamicScrollerItem :item="item" :active="active" :data-index="index">
      <div class="trade-item">
        <span>{{ item.time }}</span>
        <span>{{ item.pair }}</span>
        <span :class="item.side">{{ item.side }}</span>
        <span>{{ item.price }}</span>
        <span>{{ item.amount }}</span>
      </div>
    </DynamicScrollerItem>
  </template>
</DynamicScroller>
```

## ⚙️ 重要配置

| 参数 | 说明 | 默认值 |
|------|------|--------|
| `items` | 数据数组 | required |
| `item-size` | 固定项高度（RecycleScroller） | required |
| `min-item-size` | 最小项高度（DynamicScroller） | required |
| `key-field` | 唯一标识字段 | 'id' |
| `buffer` | 缓冲区项目数 | 200 |
| `page-mode` | 整页滚动模式 | false |

## 🎨 样式提示

```css
/* 滚动容器必须有固定高度 */
.scroller {
  height: 600px;
  overflow-y: auto;
}

/* 自定义滚动条 */
.scroller::-webkit-scrollbar {
  width: 6px;
}

.scroller::-webkit-scrollbar-thumb {
  background: #00f0ff;
  border-radius: 3px;
}

/* 项目高度必须固定或有最小值 */
.item {
  height: 60px; /* RecycleScroller */
  min-height: 60px; /* DynamicScroller */
}
```

## ⚠️ 注意事项

1. **必须设置容器高度**：滚动容器必须有固定高度
2. **固定项高度**：RecycleScroller 的所有项必须相同高度
3. **唯一 key**：每项必须有唯一标识
4. **性能优化**：避免在 slot 中使用复杂计算
5. **响应式数据**：确保 items 是响应式的（ref/reactive）

## 🚀 性能对比

| 列表大小 | 普通列表 | Virtual Scroller |
|----------|----------|------------------|
| 100 项 | ~50ms | ~5ms |
| 1000 项 | ~500ms | ~5ms |
| 10000 项 | 卡顿 | ~5ms |

## 📚 更多资源

- [官方文档](https://github.com/Akryum/vue-virtual-scroller)
- [在线示例](https://akryum.github.io/vue-virtual-scroller/)
