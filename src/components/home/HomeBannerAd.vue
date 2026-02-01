<template>
  <div class="home-banner relative group">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="0"
          :loop="true"
          :navigation="{
            prevEl: '.banner-prev',
            nextEl: '.banner-next',
          }"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          class="w-full h-full"
        >
          <swiper-slide v-for="i in 2" :key="i">
            <div class="home-banner-item">
              <div class="home-banner-item-row">
                <div class="image">
                  <img src="@/assets/images/index-defi.png" alt="DeFi">
                </div>
                <div class="image">
                  <img src="@/assets/images/index-bitcoin.png" alt="Bitcoin">
                </div>
                <div class="image">
                  <img src="@/assets/images/index-nft-sale.png" alt="NFT Sale">
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <!-- Custom Navigation Buttons -->
        <div class="banner-prev left-hand absolute left-0 top-1/2 z-10 -translate-y-1/2">
          <CaretLeftOutlined style="color: rgb(122, 122, 151); font-size: 12px;" />
        </div>
        <div class="banner-next right-hand absolute right-0 top-1/2 z-10 -translate-y-1/2">
          <CaretRightOutlined style="color: rgb(122, 122, 151); font-size: 12px;" />
        </div>
      </div>
</template>

<script setup lang="ts">
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons-vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation, Autoplay]
</script>

<style scoped lang="less">
.home-banner {
  height: 320px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: initial;
  flex-direction: initial;
  align-items: center;
  justify-content: initial;
  margin-bottom: 30px;
  
  /* Navigation buttons positioning override */
  .left-hand, .right-hand {
      box-sizing: border-box;
      overflow: hidden;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      border: 2px solid #2c2c3e;
      background: #0f0f16;
      cursor: pointer;
      display: flex !important;
      align-items: center;
      justify-content: center;
      transition-duration: .3s;
      // margin-top: 0; /* Clear previous margin */
      
      &:hover {
        background-color: rgba(0, 240, 255, .3);
        border: 2px solid #00f0ff;
      }

      &.swiper-button-disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
  }

  .home-banner-item {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-banner-item-row {
    display: flex;
    gap: 25px;
    justify-content: center;
  }
  .image {
    width: 400px;
    height: 300px;
    overflow: hidden;
    transition-duration: .3s;
    &:hover {
      border-radius: 12px;
    }
    
    img {
      object-fit: contain;
      cursor: pointer;
      width: 100%;
      height: 100%;
      transition-duration: .3s;
      &:hover {
        transform: scale(1.2);
      }
    }
    
  }
}

/* Swiper custom styles if needed */
:deep(.swiper-slide) {
  display: flex;
  justify-content: center;
}
</style>
