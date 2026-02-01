<template>
  <div class="home-announce">
        <div class="notice-container w-full">
          <div class="iconfont text-[#00f0ff] text-[22px] mr-[10px]">
            &#xe605;
          </div>
          <swiper
          :modules="[Autoplay]"
          :direction="'vertical'"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          class="h-[30px] flex-1"
        >
          <swiper-slide v-for="(notice, index) in notices" :key="index" class="flex items-center">
            <span class="text-gray-300 hover:text-[#00f0ff] cursor-pointer transition-colors truncate font-400 text-[20px]">
              {{ notice }}
            </span>
          </swiper-slide>
        </swiper>
         <div class="text-[#00f0ff] iconfont text-[18px]">
          &#xe631;
        </div>
        </div>
        
       
      </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// Import video asset
import homeBannerVideo from '@/assets/videos/home-banner.mp4'

const modules = [Navigation, Autoplay]

const notices = ref([
  'NBITMX Will List New Token ABC/USDT with High APY Staking',
  'System Maintenance Notice: Scheduled Upgrade on Feb 15th',
  'Join our Global Trading Competition to Win 100,000 USDT',
  'New Feature Alert: Copy Trading Now Available for All Users'
])
</script>

<style scoped lang="less">
.home-announce {
  border: 2px solid rgba(255, 255, 255, .12);
  background: radial-gradient(114.2% 133.85% at 7.14% 3.6%, #1d37387d .01%, #23233612);
  margin-left: auto;
  margin-right: auto;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 32px;
  font-size: 12px;
  --un-backdrop-blur: blur(6px);
  .notice-container {
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    vertical-align: middle;
  }  
}

.home-announce {
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
    padding: 10px 20px;
}
</style>
