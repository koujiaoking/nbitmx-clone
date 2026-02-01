<template>
  <div class="ai-strategy-card w-[390px] h-[76px] relative overflow-hidden">
    <svg width="100%" height="100%" viewBox="0 0 400 60" preserveAspectRatio="none">
      <defs>
        <linearGradient :id="gradientId" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" :stop-color="color" stop-opacity="0.3" />
          <stop offset="50%" :stop-color="color" stop-opacity="1" />
          <stop offset="100%" :stop-color="color" stop-opacity="0.3" />
        </linearGradient>
      </defs>
      <path
        :d="pathD"
        :stroke="`url(#${gradientId})`"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const props = withDefaults(defineProps<{
  color?: string
  width?: number
  height?: number
  points?: number
}>(), {
  color: '#00f0ff',
  width: 400,
  height: 60,
  points: 40
})

const gradientId = `line-gradient-${Math.random().toString(36).substr(2, 9)}`
const dataPoints = ref<number[]>([])

const pathD = computed(() => {
  if (dataPoints.value.length === 0) return ''
  
  const stepX = props.width / (dataPoints.value.length - 1)
  
  /* 
     映射逻辑：
     数据点 0 (最低) -> y = height - padding
     数据点 1 (最高) -> y = padding
  */
  const padding = 5
  const usableHeight = props.height - padding * 2
  
  return dataPoints.value.map((val, index) => {
    const x = index * stepX
    // val 是 0-1, 我们要翻转y轴，因为svg坐标系向下是正
    const y = props.height - padding - (val * usableHeight)
    return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')
})

// 生成随机波动数据，类似心电图或K线
function generateRandomData(count: number) {
  const data = []
  let current = 0.5
  
  for (let i = 0; i < count; i++) {
    // 随机漫步
    const change = (Math.random() - 0.5) * 0.4 // 波动幅度
    current += change
    
    // 限制在 0.1 - 0.9 之间，防止贴边
    if (current > 0.9) current = 0.9
    if (current < 0.1) current = 0.1
    
    // 偶尔加入剧烈波动
    if (Math.random() < 0.1) {
       current = Math.random() // 突变
    }
    
    data.push(current)
  }
  return data
}

onMounted(() => {
  dataPoints.value = generateRandomData(props.points)
})

// 暴露重新生成的方法
defineExpose({
  refresh: () => {
    dataPoints.value = generateRandomData(props.points)
  }
})
</script>

<style scoped lang="less">
.ai-strategy-card {
  /* 确保背景透明 */
  background: transparent;
}
</style>
