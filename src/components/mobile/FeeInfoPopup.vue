<template>
  <van-popup
    v-model:show="show"
    position="bottom"
    round
    class="fee-info-popup !bg-[#1f1f2f]"
  >
    <div class="p-4 text-white">
        <div class="flex justify-between items-center mb-6">
            <span class="text-lg font-bold">提幣手續費</span>
            <van-icon name="cross" color="#84849f" @click="show = false" />
        </div>
        
        <div class="content mb-8 text-[#84849f] text-sm leading-6">
            請務必確認您的接收地址，因為錯誤轉帳無法撤回。
        </div>
        
        <van-button block color="#00f0ff" class="text-black rounded-full font-bold" @click="show = false">
            知道了
        </van-button>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:show'])

const show = computed({
  get: () => props.show,
  set: (val) => emit('update:show', val)
})
</script>
