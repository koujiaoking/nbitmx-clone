<template>
  <svg
    class="svg-icon"
    :class="[`svg-icon-${type}`]"
    aria-hidden="true"
  >
    <use :href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'

interface Props {
  /** svg 分类，对应 svg 文件名 */
  type?: string
  /** symbol 的 id（不带 #） */
  name: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'menu'
})

/**
 * 动态加载 svg sprite
 * vite 会把 svg 注入到 body 中
 */
const modules = import.meta.glob(
  '@/assets/icons/*.svg',
  { eager: true }
)

watchEffect(() => {
  const path = `/src/assets/icons/icon-${props.type}.svg`
  if (!modules[path]) {
    console.warn(`[SvgIcon] 未找到 svg 文件: ${props.type}.svg`)
  }
})

const symbolId = computed(() => {
  return `#${props.name}`
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>