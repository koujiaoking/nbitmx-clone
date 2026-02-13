<template>
  <van-popup
    v-model:show="show"
    position="bottom"
    round
    class="account-picker-popup"
  >
    <van-picker
      :columns="columns"
      @confirm="onConfirm"
      @cancel="show = false"
      :toolbar-position="'top'"
      :show-toolbar="true"
      confirm-button-text="確認"
      cancel-button-text="取消"
      :columns-field-names="{ text: 'text', value: 'value' }"
      title="從 → 到"
      class="bg-[#1f1f2f] text-white"
    />
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
  columns: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  title: {
      type: String,
      default: '選擇賬戶'
  }
})

const emit = defineEmits(['update:show', 'confirm'])

const show = computed({
  get: () => props.show,
  set: (val) => emit('update:show', val)
})

const onConfirm = ({ selectedOptions }: { selectedOptions: any[] }) => {
  emit('confirm', selectedOptions)
  show.value = false
}
</script>

<style scoped>
:deep(.van-picker) {
    background-color: #1f1f2f;
}
:deep(.van-picker__mask) {
    background-image: linear-gradient(180deg, rgba(31, 31, 47, 0.9), rgba(31, 31, 47, 0.4)), linear-gradient(0deg, rgba(31, 31, 47, 0.9), rgba(31, 31, 47, 0.4));
}
:deep(.van-picker__title) {
    color: white;
}
:deep(.van-picker__confirm) {
    color: #00f0ff;
}
:deep(.van-picker__cancel) {
    color: #84849f;
}
:deep(.van-picker-column__item) {
    color: #84849f;
}
:deep(.van-picker-column__item--selected) {
    color: #fff;
    font-weight: bold;
}
</style>
