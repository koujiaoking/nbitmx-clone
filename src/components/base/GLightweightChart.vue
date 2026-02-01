<template>
  <div class="chart-container-wrapper">
    <div class="time-range-selector">
      <button 
        v-for="range in ranges" 
        :key="range.value" 
        :class="{ active: currentRange === range.value }"
        @click="switchRange(range.value)"
      >
        {{ range.label }}
      </button>
    </div>
    <div ref="chartContainer" class="chart-container"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { createChart, ColorType, AreaSeries, type IChartApi, type ISeriesApi, type Time } from 'lightweight-charts'

const chartContainer = ref<HTMLElement | null>(null)
let chart: IChartApi | null = null
let areaSeries: ISeriesApi<'Area'> | null = null

const ranges = [
  { label: '1天', value: '1D' },
  { label: '5天', value: '5D' },
  { label: '1週', value: '1W' },
  { label: '1月', value: '1M' },
  { label: '3月', value: '3M' },
  { label: '6月', value: '6M' },
  { label: '1年', value: '1Y' },
]

const currentRange = ref('1M')

// Mock data generator
const generateData = (days: number) => {
  const data = []
  let price = 3000
  const endDate = new Date()
  const startDate = new Date()
  
  if (days === 1) {
     // Generate minutes for 1 day
     const now = new Date()
     const startOfDay = new Date(now.setHours(0,0,0,0))
     for (let i = 0; i < 24 * 60; i += 15) { // every 15 mins
         const t = new Date(startOfDay.getTime() + i * 60000)
         if (t > new Date()) break;
         price = price + Math.random() * 10 - 5
         data.push({ time: t.getTime() / 1000 as Time, value: price })
     }
  } else {
      startDate.setDate(endDate.getDate() - days)
      for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        price = price + Math.random() * 100 - 50
        const dateStr = d.toISOString().split('T')[0]
        data.push({ time: dateStr as Time, value: price })
      }
  }
  return data
}

const updateData = (range: string) => {
  if (!areaSeries) return
  
  let days = 30
  switch (range) {
    case '1D': days = 1; break;
    case '5D': days = 5; break;
    case '1W': days = 7; break;
    case '1M': days = 30; break;
    case '3M': days = 90; break;
    case '6M': days = 180; break;
    case '1Y': days = 365; break;
  }
  
  const data = generateData(days)
  areaSeries.setData(data)
  chart?.timeScale().fitContent()
}

const switchRange = (range: string) => {
  currentRange.value = range
  updateData(range)
}

onMounted(() => {
  if (!chartContainer.value) return

  chart = createChart(chartContainer.value, {
    layout: {
      background: { type: ColorType.Solid, color: 'transparent' },
      textColor: '#d1d4dc',
    },
    grid: {
      vertLines: { visible: false },
      horzLines: { visible: false, color: 'rgba(42, 46, 57, 0.5)' },
    },
    rightPriceScale: {
      borderVisible: false,
    },
    timeScale: {
      borderVisible: false,
      timeVisible: true,
      secondsVisible: false,
    },
    crosshair: {
      vertLine: {
        labelVisible: false,
      },
    },
  })

  areaSeries = chart.addSeries(AreaSeries, {
    topColor: 'rgba(0, 227, 255, 0.56)',
    bottomColor: 'rgba(0, 227, 255, 0.04)',
    lineColor: '#00e3ff',
    lineWidth: 2,
  })

  // Initial data
  updateData(currentRange.value)
  
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (chart) {
    chart.remove()
  }
})

const handleResize = () => {
  if (chart && chartContainer.value) {
    chart.applyOptions({ width: chartContainer.value.clientWidth })
  }
}
</script>

<style scoped lang="less">
.chart-container-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  background-color: #000;
  display: flex;
  flex-direction: column;
}

.time-range-selector {
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  z-index: 2;
  
  button {
    background: transparent;
    border: none;
    color: #888;
    font-size: 14px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    transition: all 0.2s;
    
    &:hover {
      color: #fff;
    }
    
    &.active {
      color: #fff;
      background-color: #333;
    }
  }
}

.chart-container {
  flex: 1;
  width: 100%;
}
</style>
