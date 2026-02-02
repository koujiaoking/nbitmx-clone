<template>
  <div class="common-problem w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12">
      <div 
        v-for="(item, index) in problemList" 
        :key="index"
        class="problem-item"
        :class="{ 'is-open': item.isOpen }"
        @mouseenter="hoverIndex = index"
        @mouseleave="hoverIndex = -1"
        @click="toggle(index)"
      >
        <!-- Header -->
        <div class="problem-header flex items-center justify-between py-6 cursor-pointer">
          <div class="text-[18px] font-medium text-white">{{ item.title }}</div>
          <div class="icon-wrapper">
            <div class="icon-box" :class="{ 'is-active': item.isOpen }">
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="11" width="14" height="2" rx="1" fill="currentColor" class="h-line" />
                <rect x="11" y="5" width="2" height="14" rx="1" fill="currentColor" class="v-line" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div 
           class="problem-content text-[#B7BDC6] text-[14px] leading-relaxed overflow-hidden transition-all duration-300"
           :style="{ maxHeight: item.isOpen ? '200px' : '0px', opacity: item.isOpen ? 1 : 0, marginBottom: item.isOpen ? '24px' : '0' }"
        >
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hoverIndex = ref(-1)

const problemList = ref([
  {
    title: '法律說明',
    content: '請妥善保管您的賬號、密碼，不要將您的賬號信息透露給其他人。若不慎洩露賬號信息，請您及時修改密碼，或者聯繫客服處理。',
    isOpen: false
  },
  {
    title: '為什麼需要進行實名認證?',
    content: '實名認證是為了確保交易安全，防止洗錢等非法活動。',
    isOpen: false
  },
  {
    title: '關於充值',
    content: '充值通常在區塊鏈網絡確認後到賬，具體時間取決於網絡擁堵情況。',
    isOpen: false
  },
  {
    title: '登錄密碼忘記如何解決',
    content: '您可以通過郵箱或手機驗證碼找回密碼，或聯繫客服協助重置。',
    isOpen: false
  },
  {
    title: '關於賬號安全',
    content: '請妥善保管您的賬號、密碼，不要將您的賬號信息透露給其他人。若不慎洩露賬號信息，請您及時修改密碼，或者聯繫客服處理。',
    isOpen: true // Default open as per screenshot example
  },
  {
    title: '什麼是凍結資產?',
    content: '凍結資產通常指在掛單交易中暫時鎖定的資產，交易完成或取消後會解凍。',
    isOpen: false
  }
])

const toggle = (index: number) => {
  if (problemList.value[index]) {
    problemList.value[index].isOpen = !problemList.value[index].isOpen
  }
}
</script>

<style scoped lang="less">
.problem-item {
  border-bottom: 1px solid #282828;
  transition: all 0.3s ease;
  padding: 0 20px;
  background: transparent;
  border-radius: 4px;

  &:hover {
    // Hover effect from requirement: "鼠標經過的時候整體改變背景色"
    // Screenshot shows expanded item has dark cyan bg.
    // Let's make hover slightly lighter or consistent with active if user wants that.
    // Based on "About Account Security" being open and having bg, and user request:
    background: #14151a; 
  }

  .icon-wrapper {
     background: #282828;
     border-radius: 50%;
     width: 24px;
     height: 24px;
     display: flex;
     align-items: center;
     justify-content: center;
     transition: all 0.3s;

     .icon-box {
        width: 14px;
        height: 14px;
        color: #848E9C;
        transition: all 0.3s;
        
        .v-line, .h-line {
          transform-origin: center;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
     }
  }

  &.is-open {
    background: rgba(0, 240, 255, 0.05);
    border-bottom-color: transparent;
    
    .problem-header {
       .text-white {
         color: #00f0ff;
       }
    }
    .icon-wrapper {
        background: #00f0ff;
        
        .icon-box {
            color: #000;
            transform: rotate(180deg);
            
            .v-line {
              transform: rotate(90deg);
            }
        }
    }
  }
}
</style>
