<script setup lang="ts">
import { computed, onMounted } from 'vue'
import iconG from '@/assets/icons/icon-g.svg?raw'
import iconMenu from '@/assets/icons/icon-menu.svg?raw'
import iconOther from '@/assets/icons/icon-other.svg?raw'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: '' // 'g', 'menu', 'other'
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: [Number, String],
    default: 16
  }
})

const symbolId = computed(() => {
  // If the user passes a full ID like 'icon-unit-t' (which exists in icon-other.svg), use it directly.
  return props.name.startsWith('#') ? props.name.slice(1) : props.name
})

const svgClass = computed(() => {
  if (props.name) {
    return `svg-icon icon-${props.name}`
  }
  return 'svg-icon'
})

const iconStyle = computed(() => {
  const s = typeof props.size === 'number' ? `${props.size}px` : props.size
  return {
    width: s,
    height: s,
    color: props.color
  }
})

const injectSprite = (content: string, id: string) => {
  if (document.getElementById(id)) return
  const div = document.createElement('div')
  div.id = id
  div.style.display = 'none'
  div.innerHTML = content
  document.body.appendChild(div)
}

onMounted(() => {
  if (props.type === 'g') {
    injectSprite(iconG, 'sprite-icon-g')
  } else if (props.type === 'menu') {
    injectSprite(iconMenu, 'sprite-icon-menu')
  } else if (props.type === 'other') {
    injectSprite(iconOther, 'sprite-icon-other')
  } else {
      // Load all by default if type isn't specified to be safe
      injectSprite(iconG, 'sprite-icon-g')
      injectSprite(iconMenu, 'sprite-icon-menu')
      injectSprite(iconOther, 'sprite-icon-other')
  }
})
</script>

<template>
  <svg :class="svgClass" aria-hidden="true" :style="iconStyle">
    <use :xlink:href="'#' + symbolId" />
  </svg>
</template>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>