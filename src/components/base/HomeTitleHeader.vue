<template>
  <div class="home-title-header mb-[60px]" v-animate-on-scroll="'animate__fadeInBottom'">
    <div class="title-content">
      <div class="image" v-if="$slots.image">
        <slot name="image"></slot>
      </div>
      <div class="title">
        <span v-if="!right" class="theme-color mr-[15px]">
          {{ imp }}
        </span>
        {{ title }}
        <span v-if="right" class="theme-color ml-[15px]">
          {{ imp }}
        </span>
      </div>
      <div class="action" v-if="$slots.action">
        <slot name="action"></slot>
      </div>
    </div>
    <div class="title-desc" v-if="desc" v-html="desc" />
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'

const props = withDefaults(defineProps<{
  imp?: string
  title?: string
  desc?: string
  right?: boolean
}>(), {
  imp: '',
  title: '',
  desc: '',
  right: false
})

const $slots = useSlots()
</script>

<style scoped lang="less">
/* Add basic styling to ensure layout structure is visible if needed by user later */
.home-title-header {
  display: flex;
  flex-direction: column;
  .title-content {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    position: relative;
    .action {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .title-desc {
    margin-top: 40px;
    text-align: center;
    font-size: 24px;
    --un-text-opacity: 1;
    color: rgb(203 217 218 / var(--un-text-opacity));
    line-height: 26px;
    :deep(p) {
      width: 1000px;
      font-size: 24px;
      margin: 0 auto;
      line-height: 26px;
      margin-bottom: 4px;
    }
  }
}
</style>