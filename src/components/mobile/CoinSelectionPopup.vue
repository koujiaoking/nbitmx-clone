<template>
  <van-popup
    v-model:show="show"
    position="bottom"
    round
    class="coin-selection-popup"
    :style="{ maxHeight: '70%', display: 'flex', flexDirection: 'column' }"
    @closed="onClosed"
  >
    <div class="popup-content bg-[#1f1f2f] text-white flex flex-col h-full overflow-hidden">
      <!-- Header -->
      <div class="header flex justify-between items-center p-4 border-b border-[#2c2c3e]">
        <span class="text-lg font-bold">{{ title || 'Select Currency' }}</span>
        <van-icon name="cross" size="20" color="#84849f" @click="show = false" />
      </div>

      <!-- Search (Optional, based on need, but good for list) -->
      <!-- <div class="px-4 py-2">
         <div class="bg-[#13131b] rounded px-3 py-2 flex items-center">
             <van-icon name="search" color="#5e5e7a" />
             <input type="text" placeholder="Search" class="bg-transparent border-none outline-none text-white ml-2 w-full" />
         </div>
      </div> -->

      <!-- List -->
      <div class="list flex-1 overflow-y-auto">
        <div
          v-for="(item, index) in options"
          :key="index"
          class="item flex items-center justify-between p-4 border-b border-[#2c2c3e] active:bg-[#2c2c3e]"
          @click="selectItem(item)"
        >
          <div class="flex items-center">
            <img 
                v-if="item.icon" 
                :src="item.icon" 
                class="w-8 h-8 rounded-full mr-3"
                alt="coin"
            />
            <span class="text-base font-medium">{{ item.name }}</span>
          </div>
          
          <!-- Selected checkmark if needed, logic passed from parent or just internal state? 
               Usually parent knows current selected. For now simple list. -->
           <div v-if="modelValue && modelValue.name === item.name">
               <van-icon name="success" color="#00f0ff" />
           </div>
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  options: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  modelValue: { // Currently selected item
      type: Object as PropType<any>,
      default: null
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

const onClosed = () => {
    // any cleanup
}
</script>

<style scoped>
.coin-selection-popup {
    background: #1f1f2f;
}
</style>
