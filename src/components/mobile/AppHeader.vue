<template>
  <header class="fixed inset-0 h-[12vw] flex items-center justify-between px-[3.2vw] z-10 bg-black border-b border-[#12141e]">
    <!-- Logo -->
    <a href="/" class="mr-[10px] h-[6vw] flex items-center">
      <!-- TODO: Check asset path -->
       <img src="@/assets/images/logo.png" alt="logo" class="h-full" /> 
    </a>
    
    <!-- Right Actions -->
    <div class="flex items-center gap-[14px]">
      <slot name="right">
        <van-icon name="bell" size="24px" color="white" />
        <van-icon name="service" size="24px" color="white" />
        
        <!-- Menu Icon -->
        <van-icon name="wap-nav" color="#ffffff" size="28px" @click="showMenu = true" />
      </slot>
    </div>
    
  </header>
  
  <!-- Full Screen Menu Popup -->
  <van-popup v-model:show="showMenu" position="left" :style="{ width: '100%', height: '100%' }" class="!bg-black">
     <div class="flex flex-col h-full">
        <header class="draw-header">
           <img class="nft-logo" src="@/assets/images/logo.png" alt="logo" />
           <van-icon name="close" color="white" size="28px" class="close-btn" @click="showMenu = false" />
        </header>
        
      <div class="menu-content flex-1 overflow-y-auto">
           <MobileMenu @close="showMenu = false" />
        </div>
     </div>
  </van-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import MobileMenu from '@/components/mobile/MobileMenu.vue' // Import the new component

defineOptions({
  inheritAttrs: false
})

const showMenu = ref(false)
const { t } = useI18n()
</script>

<style scoped lang="less">
/* Header Styles from provided HTML - Migrated to Less/UnoCSS overrides */
/* Header Styles from provided HTML - Migrated to Less/UnoCSS overrides */
/* height is handled by UnoCSS h-[12vw] */

/* Drawer Header Styles from request */
.draw-header {
    height: 15.46vw;
    display: flex;
    align-items: center;
    padding-left: 6.9vw;
    padding-right: 6.9vw;
    font-size: 6.4vw;
    font-weight: 600;
    border-bottom: 1px solid #12141e;

    .nft-logo {
        margin-right: 4.6vw;
        width: auto;
        height: 7.46vw;
        line-height: 7.46vw;
    }

    .close-btn {
        margin-left: auto;
    }
}
</style>
