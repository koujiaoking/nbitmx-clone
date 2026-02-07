<template>
  <div class="home-title-header mb-[60px]" :class="{ 'is-mobile': mobile }" v-animate-on-scroll="'animate__fadeInBottom'">
    <div class="title-content">
      <div class="image" v-if="$slots.image">
        <slot name="image"></slot>
      </div>
      <div class="title">
        <span v-if="!right && !mobile" class="theme-color mr-[15px]">
          {{ imp }}
        </span>
        
        <span v-if="mobile" class="text-white text-[5vw] flex-1 text-left" v-animate-on-scroll="'animate__fadeInRight'">
            {{ title }}
        </span>
        <slot name="title" v-else>
            {{ title }}
        </slot>

        <span v-if="right && !mobile" class="theme-color ml-[15px]">
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
  mobile?: boolean
}>(), {
  imp: '',
  title: '',
  desc: '',
  right: false,
  mobile: false
})

const $slots = useSlots()
</script>

<style scoped lang="less">
.home-title-header {
  display: flex;
  flex-direction: column;

  .title-content {
    display: flex;
    align-items: center;
    // Default Desktop Style
    justify-content: center;
    font-size: 50px;
    position: relative;

    .image {
        display: flex;
        align-items: center;
    }

    .title {
        // Desktop title styles
    }

    .action {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  // Mobile Overrides
  &.is-mobile {
      margin-bottom: 20px; // Adjust margin for mobile
      
      .title-content {
          justify-content: flex-start; // Left align
          font-size: inherit; // Reset size
          
          .title {
              flex: 1;
              text-align: left;
              margin: 0 10px; // Add spacing
              font-size: inherit;
          }

          .action {
              position: static; // Relative flow
              transform: none;
              margin-left: auto;
          }
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