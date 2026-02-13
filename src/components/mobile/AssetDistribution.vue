<template>
  <div class="asset-distribution-card bg-[#1E2026] rounded-lg p-4 mt-3 mx-4" v-if="hasData">
    <div class="header flex items-center justify-between mb-4">
      <h3 class="text-white text-base font-bold flex items-center">
        資產分佈
        <van-icon name="replay" class="ml-2 text-[#84849f] text-sm" />
      </h3>
    </div>
    
    <div class="chart-container flex items-center mb-6">
      <!-- Left: Donut Chart -->
      <div class="chart-wrapper relative w-[120px] h-[120px]">
        <div ref="chartRef" class="w-full h-full"></div>
        <!-- Center Text -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
           <!-- Optional center content -->
        </div>
      </div>
      
      <!-- Right: Legend -->
      <div class="legend flex-1 pl-6">
        <div v-for="(item, index) in distributionData" :key="index" class="legend-item flex items-center justify-between mb-3 last:mb-0">
          <div class="flex items-center">
            <span class="w-2 h-2 rounded-full mr-2" :style="{ backgroundColor: item.color }"></span>
            <span class="text-[#84849f] text-sm">{{ item.name }}</span>
          </div>
          <span class="text-white font-medium">{{ item.percentage }}%</span>
        </div>
      </div>
    </div>

    <!-- Bottom: Details List -->
    <div class="details-list border-t border-[#2c2c3e] pt-4">
      <div v-for="(item, index) in distributionData" :key="index" class="detail-item flex items-center justify-between mb-4 last:mb-0">
        <span class="text-[#f7931a] text-sm font-medium" :style="{ color: item.color }">{{ item.name }}</span>
        <div class="text-right">
          <div class="text-white font-bold">${{ item.value }}</div>
          <div class="text-[#00f0ff] text-xs text-right">{{ item.usdtValue }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref<HTMLElement | null>(null)
const hasData = ref(true)

const distributionData = ref([
  { name: '現貨帳戶', value: '0', usdtValue: '0', percentage: '0.0000', color: '#fba969' },
  { name: '期權帳戶', value: '0', usdtValue: '0', percentage: '0.0000', color: '#d39be9' },
  { name: '合約帳戶', value: '0', usdtValue: '0', percentage: '0.0000', color: '#66ccff' }
])

const initChart = () => {
  if (!chartRef.value) return
  
  const myChart = echarts.init(chartRef.value)
  
  const option = {
    series: [
      {
        name: 'Asset Distribution',
        type: 'pie',
        radius: ['65%', '90%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          scale: false, // Disable scaling on hover for valid look
          label: {
            show: false
          }
        },
        labelLine: {
          show: false
        },
        data: distributionData.value.map(item => ({
          value: 1, // Mock equal distribution for empty state visual
          name: item.name,
          itemStyle: {
            color: item.color,
            borderRadius: 5,
            borderColor: '#1E2026',
            borderWidth: 2
          }
        }))
      }
    ]
  }
  
  myChart.setOption(option)
}

onMounted(() => {
  initChart()
})
</script>

<style scoped>
.asset-distribution-card {
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); */
}
</style>
