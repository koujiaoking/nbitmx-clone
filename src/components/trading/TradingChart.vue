<!-- TradingView K线图组件 -->
<template>
  <div class="trading-chart h-full flex flex-col bg-[#0A0A0F]">
    <!-- 工具栏 -->
    <div class="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-[#12141E]">
      <!-- 图表类型 -->
      <div class="flex gap-2">
        <button 
          @click="chartType = 'candlestick'"
          class="px-3 py-1 text-xs rounded transition-all"
          :class="chartType === 'candlestick' ? 'bg-nbit-cyan text-black font-bold' : 'text-gray-400 hover:text-white'"
        >
          K线
        </button>
        <button 
          @click="chartType = 'line'"
          class="px-3 py-1 text-xs rounded transition-all"
          :class="chartType === 'line' ? 'bg-nbit-cyan text-black font-bold' : 'text-gray-400 hover:text-white'"
        >
          分时
        </button>
      </div>
      
      <!-- 时间周期 -->
      <div class="flex gap-1">
        <button 
          v-for="t in timeframes" 
          :key="t"
          @click="timeframe = t"
          class="px-2 py-1 text-xs rounded transition-all"
          :class="timeframe === t ? 'bg-white/10 text-nbit-cyan font-medium' : 'text-gray-400 hover:text-white'"
        >
          {{ t }}
        </button>
      </div>

      <!-- 指标 -->
      <div class="flex gap-2">
        <button class="px-3 py-1 text-xs text-gray-400 hover:text-white transition-all">
          指标
        </button>
      </div>
    </div>
    
    <!-- 图表容器 -->
    <div ref="chartContainer" class="flex-1"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { createChart, ColorType, CandlestickSeries, LineSeries, type IChartApi, type ISeriesApi } from 'lightweight-charts'

interface Props {
  symbol?: string
}

const props = withDefaults(defineProps<Props>(), {
  symbol: 'BTC/USDT'
})

const chartContainer = ref<HTMLElement>()
const chartType = ref<'candlestick' | 'line'>('candlestick')
const timeframe = ref('15m')
const timeframes = ['1m', '5m', '15m', '1h', '4h', '1d']

let chart: IChartApi | null = null
let series: any = null
let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  initChart()
})

onUnmounted(() => {
  cleanup()
})

// 监听图表类型变化
watch(chartType, () => {
  if (chart) {
    // 移除旧系列
    if (series) {
      chart.removeSeries(series)
    }
    // 添加新系列
    addSeries()
    // 加载数据
    loadData()
  }
})

// 监听时间周期变化
watch(timeframe, () => {
  loadData()
})

function initChart() {
  if (!chartContainer.value) return

  // 创建图表实例
  chart = createChart(chartContainer.value, {
    layout: {
      background: { type: ColorType.Solid, color: '#0A0A0F' },
      textColor: '#848E9C',
    },
    grid: {
      vertLines: { color: '#1A1B24' },
      horzLines: { color: '#1A1B24' },
    },
    crosshair: {
      mode: 1 as any,
    },
    rightPriceScale: {
      borderColor: '#1A1B24',
    },
    timeScale: {
      borderColor: '#1A1B24',
      timeVisible: true,
      secondsVisible: false,
    },
    width: chartContainer.value.clientWidth,
    height: chartContainer.value.clientHeight,
  })

  // 添加系列
  addSeries()

  // 加载数据
  loadData()

  // 响应式调整
  resizeObserver = new ResizeObserver(entries => {
    if (entries.length === 0 || !chart || !entries[0]) return
    const { width, height } = entries[0].contentRect
    if (chart && width > 0 && height > 0) {
      chart.applyOptions({ width, height })
    }
  })
  if (chartContainer.value && resizeObserver) {
    resizeObserver.observe(chartContainer.value)
  }
}

function addSeries() {
  if (!chart) return

  if (chartType.value === 'candlestick') {
    series = chart.addSeries(CandlestickSeries, {
      upColor: '#0ECB81',
      downColor: '#F6465D',
      borderVisible: false,
      wickUpColor: '#0ECB81',
      wickDownColor: '#F6465D',
    })
  } else {
    series = chart.addSeries(LineSeries, {
      color: '#00F0FF',
      lineWidth: 2,
    })
  }
}

function loadData() {
  if (!series) return

  const data = generateMockData()
  
  if (chartType.value === 'candlestick') {
    ;(series as ISeriesApi<"Candlestick">).setData(data)
  } else {
    // 转换为折线图数据（使用收盘价）
    const lineData = data.map(d => ({
      time: d.time,
      value: d.close
    }))
    ;(series as ISeriesApi<"Line">).setData(lineData)
  }

  // 自适应视图
  if (chart) {
    chart.timeScale().fitContent()
  }
}

// 生成模拟K线数据
function generateMockData() {
  const data = []
  const intervals: Record<string, number> = {
    '1m': 60,
    '5m': 300,
    '15m': 900,
    '1h': 3600,
    '4h': 14400,
    '1d': 86400
  }
  
  const interval = intervals[timeframe.value] || 900
  const bars = timeframe.value === '1d' ? 100 : 200
  
  let time = Math.floor(Date.now() / 1000) - interval * bars
  let price = 64000 + Math.random() * 2000
  
  for (let i = 0; i < bars; i++) {
    time += interval
    const volatility = price * 0.015
    const change = (Math.random() - 0.5) * volatility
    
    const open = price
    const close = price + change
    const high = Math.max(open, close) + Math.random() * volatility * 0.3
    const low = Math.min(open, close) - Math.random() * volatility * 0.3
    
    data.push({ 
      time: time as any, 
      open: Number(open.toFixed(2)), 
      high: Number(high.toFixed(2)), 
      low: Number(low.toFixed(2)), 
      close: Number(close.toFixed(2)) 
    })
    
    price = close
  }
  
  return data
}

function cleanup() {
  if (resizeObserver && chartContainer.value) {
    resizeObserver.unobserve(chartContainer.value)
    resizeObserver = null
  }
  if (chart) {
    chart.remove()
    chart = null
  }
  series = null
}
</script>
