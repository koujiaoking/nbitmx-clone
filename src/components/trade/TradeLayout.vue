<template>
  <div class="vben-layout-content h-screen flex flex-col bg-[#0B0E11] text-[#EAECEF] overflow-hidden">
    <!-- Top Info Area -->
    <div class="flex-shrink-0">
      <slot name="top-info"></slot>
    </div>

    <!-- Main Content Area -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Left: Currency List (Vertical Scroll) -->
      <div class="w-[300px] flex-shrink-0 overflow-y-auto border-r border-[#2B2F36]">
        <slot name="left-sidebar"></slot>
      </div>

      <!-- Right: Chart, Form, Order Book (Vertical Scroll) -->
      <div class="flex-1 overflow-y-auto custom-scrollbar relative">
        <slot name="right-content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Trade Layout Shell
</script>

<style scoped lang="less">
/* Scrollbar styling for Webkit */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #2B2F36;
  border-radius: 3px;
}
.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}
</style>
