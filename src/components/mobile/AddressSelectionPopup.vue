<template>
  <van-popup
    v-model:show="show"
    round
    class="address-selection-popup !bg-[#1f1f2f] !w-[90%]"
    :style="{ maxHeight: '80%' }"
    @closed="onClosed"
  >
    <div class="popup-content text-white flex flex-col h-full p-4">
      <!-- Header -->
      <div class="header flex justify-between items-center mb-4">
        <span class="text-lg font-bold">選擇地址</span>
        <van-icon name="cross" size="20" color="#84849f" @click="show = false" />
      </div>

      <!-- Search -->
      <div class="search-box mb-4">
        <div class="bg-transparent border border-[#00f0ff] rounded px-3 py-2 flex items-center">
            <van-icon name="search" color="#84849f" />
            <input type="text" placeholder="搜尋貨幣" class="bg-transparent border-none outline-none text-white ml-2 w-full text-sm" />
        </div>
      </div>

      <!-- List -->
      <div class="list flex-1 overflow-y-auto min-h-[200px]">
        <div
          v-for="(item, index) in options"
          :key="index"
          class="item p-3 border border-[#2c2c3e] rounded mb-3 bg-[#13131b]"
          @click="selectItem(item)"
        >
          <div class="flex items-center mb-1">
             <div class="w-6 h-6 rounded-full bg-[#00f0ff] flex items-center justify-center mr-2">
                <van-icon name="gem" color="#000" size="14" />
             </div>
             <span class="text-[#00f0ff] font-bold">{{ item.label }}</span>
          </div>
          <div class="text-white text-sm break-all pl-8">{{ item.address }}</div>
        </div>
      </div>
      
      <!-- Action Buttons? -->
       <div class="flex gap-4 mt-4">
           <van-button block color="#2c2c3e" class="text-white border border-[#5e5e7a] rounded" @click="show = false">取消</van-button>
           <van-button block color="#00f0ff" class="text-black rounded" @click="confirmSelection">確認</van-button>
       </div>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array as PropType<any[]>,
    default: () => []
  }
})

const emit = defineEmits(['update:show', 'select'])

const show = computed({
  get: () => props.show,
  set: (val) => emit('update:show', val)
})

const selectItem = (item: any) => {
  emit('select', item)
  show.value = false
}

const confirmSelection = () => {
    // If multi-select, logic here. For now assume click selects.
    show.value = false
}

const onClosed = () => {
}
</script>

<style scoped>
/* Custom overrides if needed */
</style>
