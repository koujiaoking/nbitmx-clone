<template>
  <div class="iframe-wrapper" :style="{ height: height || '100%' }">
    <iframe
      :src="src"
      allowtransparency="true"
      frameborder="0"
      scrolling="no"
      class="g-iframe"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  height?: string
}>(), {
  src: '',
  height: '100%'
})
</script>

<style scoped lang="less">
.iframe-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.g-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>
