<template>
  <div class="w-full home-portfolio">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div 
        v-for="(item, index) in list" 
        :key="index"
        class="portfolio-card group"
      >
        <!-- Rank -->
        <div class="rank-num group-hover:scale-150 transition-transform duration-300 origin-center">
          {{ index + 1 }}
        </div>
        
        <div class="flex-1 flex items-center justify-between pl-4 md:pl-8 pr-2">
          <!-- Avatars & Name -->
          <div class="flex flex-col gap-2 min-w-[120px]">
             <div class="flex -space-x-2">
                <img v-for="i in 3" :key="i" :src="`https://i.pravatar.cc/150?u=${index}-${i}`" class="w-8 h-8 rounded-full border-2 border-[#14151a]" />
             </div>
             <div class="text-white text-[14px] font-bold">{{ item.name }}</div>
          </div>

          <!-- APR -->
          <div class="text-left min-w-[80px]">
             <div class="text-[#00f0ff] text-[12px] mb-1 font-medium">APR</div>
             <div class="text-white text-[16px]">{{ item.apr }}%</div>
          </div>

          <!-- Duration -->
          <div class="text-right min-w-[80px]">
             <div class="text-[#00f0ff] text-[12px] mb-1 font-medium">進行時間</div>
             <div class="text-white text-[16px]">{{ item.days }}日</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const list = ref([
  { name: 'SOL+DAI+XRP', apr: '0.3', days: '2' },
  { name: 'SOL+DAI+XRP', apr: '0.3', days: '2' },
  { name: 'SOL+DAI+XRP', apr: '0.3', days: '2' },
  { name: 'SOL+DAI+XRP', apr: '0.3', days: '2' },
  { name: 'SOL+DAI+XRP', apr: '0.3', days: '2' },
])
</script>

<style scoped lang="less">
.portfolio-card {
  display: flex;
  align-items: center;
  padding: 24px 30px;
  background-color: transparent; 
  /* The screenshot shows a very dark/black background effectively. 
     If the container usually has a bg, we might want transparent or #000. 
     The hover adds a distinct background. */
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background-color: rgba(0, 240, 255, 0.05); /* Dark cyan tint */
    background-image: linear-gradient(90deg, rgba(0,240,255,0.05) 0%, rgba(0,0,0,0) 100%);
    .rank-num {
        color: #fff;
    }
  }

  .rank-num {
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    width: 40px;
    text-align: center;
    line-height: 1;
    transition: transform 0.3s;
    font-family: 'DIN', sans-serif; /* Assuming a numeric font */
  }
}
</style>
