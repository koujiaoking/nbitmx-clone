<template>
  <div class="base-scroller" :class="scrollerClass">
    <div class="scroller-content" :style="contentStyle">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  height?: string
  maxHeight?: string
  horizontal?: boolean
  hideScrollbar?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  height: 'auto',
  maxHeight: 'none',
  horizontal: false,
  hideScrollbar: false
})

const scrollerClass = computed(() => ({
  'horizontal-scroll': props.horizontal,
  'hide-scrollbar': props.hideScrollbar
}))

const contentStyle = computed(() => ({
  height: props.height,
  maxHeight: props.maxHeight
}))
</script>

<style scoped>
.base-scroller {
  position: relative;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.base-scroller.horizontal-scroll {
  overflow-y: hidden;
  overflow-x: auto;
}

.scroller-content {
  width: 100%;
}

/* Custom Scrollbar Styles */
.base-scroller::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.base-scroller::-webkit-scrollbar-track {
  background: #0A0A0F;
  border-radius: 3px;
}

.base-scroller::-webkit-scrollbar-thumb {
  background: #2a2a2f;
  border-radius: 3px;
  transition: background 0.3s;
}

.base-scroller::-webkit-scrollbar-thumb:hover {
  background: #3a3a3f;
}

/* Hide scrollbar option */
.base-scroller.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.base-scroller.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Horizontal scroll */
.horizontal-scroll .scroller-content {
  display: flex;
  width: max-content;
}
</style>
