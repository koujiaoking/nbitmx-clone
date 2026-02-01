<template>
  <!-- Home Top - Video Background Section -->
    <div class="home-top -mt-[56px]">
      <div class="top-bg">
        <video class="video-bg" autoplay loop playsinline muted>
          <source :src="homeBannerVideo" type="video/mp4" />
        </video>
      </div>
      <div class="top-left" v-animate-on-scroll="'animate__fadeInLeft'">
        <h1>
          {{ $t('homeBanner.title-1') }} <span class="theme-color">{{ $t('homeBanner.title-2') }}</span> {{ $t('homeBanner.title-3') }} <span class="theme-color">{{ $t('homeBanner.title-4') }}</span>
        </h1>
        <h4 class="fade-in-left">
          {{ $t('homeBanner.desc') }}
        </h4>
        <div class="input-container">
          <div class="login-btn cm-btn-animation2">
            <span>{{ $t('homeBanner.button') }}</span>
          </div>
        </div>
        <div class="flex mt-48px">
          <div class="data-item">
            <span class="data-label">{{ $t('homeBanner.item1Label') }}</span>
            <span class="data-value">{{ $t('homeBanner.item1Value') }}</span>
          </div>
          <div class="data-item">
            <span class="data-label">{{ $t('homeBanner.item2Label') }}</span>
            <span class="data-value">{{ $t('homeBanner.item2Value') }}</span>
          </div>
          <div class="data-item">
            <span class="data-label">{{ $t('homeBanner.item3Label') }}</span>
            <span class="data-value">{{ $t('homeBanner.item3Value') }}</span>
          </div>
        </div>
      </div>
      <div class="bottom-right"></div>
    </div>
</template>

<script setup lang="ts">
import homeBannerVideo from '@/assets/videos/home-banner.mp4'
</script>

<style scoped lang="less">

.home-top {
  position: relative;
  height: 816px;
  width: 100%;
  min-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  font-size: 14px;
  .top-left {
    position: relative;
    z-index: 2;
    max-width: 850px;
    min-height: 425px;
    display: flex;
    flex-direction: column;
  }
}

.top-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
}

.top-bg .video-bg {
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-width: 1440px;
  object-position: center center;
}



.top-left h1 {
  color: white;
  font-size: 50px;
  line-height: 60px;
  font-weight: 500;
}

.top-left h4 {
  margin-top: 40px;
  margin-bottom: 60px;
  text-align: left;
  font-size: 30px;
  color: #cbd9da;
  font-weight: 400;
  line-height: 30px;
}
.data-item {
  margin-right: 58px;
  display: flex;
  flex-direction: column;
  text-align: left;
  .data-label {
    font-family: PingFang SC;
    font-size: 32px;
    font-weight: 400;
    line-height: 60px;
  }
  .data-value {
    font-family: PingFang SC;
    font-size: 14px;
    color: #888;
    font-weight: 400;
    line-height: 14px;
  }
}

.top-left .input-container {
  margin-top: 40px;
  display: flex;
  align-items: center;
}

.top-left .input-container .login-btn {
  margin-right: 16px;
  display: inline-block;
  cursor: pointer;
  border-radius: 99px;
  padding: 0 20px;
  text-align: center;
  min-width: 160px;
  height: 54px;
  font-size: 20px;
  line-height: 54px;
}

.top-left .input-container .cm-btn-animation2 {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 99px;
  background-color: rgb(0, 240, 255);
  color: black;
}

.top-left .input-container .cm-btn-animation2:hover:before {
  width: 100%;
}

.top-left .input-container .cm-btn-animation2 > span {
  position: relative;
  z-index: 1;
}

.top-left .input-container .cm-btn-animation2:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  height: 100%;
  border-radius: 99px;
  background-color: white;
  width: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

</style>
