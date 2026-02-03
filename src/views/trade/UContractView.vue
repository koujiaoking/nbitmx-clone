<template>
  <component :is="activeComponent" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, shallowRef, onMounted, onUnmounted } from 'vue'

const DesktopView = defineAsyncComponent(() => import('./desktop/UContractView.vue'))
const MobileView = defineAsyncComponent(() => import('./mobile/UContractView.vue'))

const activeComponent = shallowRef(DesktopView)

const checkLayout = () => {
  if (window.innerWidth < 768) {
    activeComponent.value = MobileView
  } else {
    activeComponent.value = DesktopView
  }
}

onMounted(() => {
  checkLayout()
  window.addEventListener('resize', checkLayout)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkLayout)
})
</script>
