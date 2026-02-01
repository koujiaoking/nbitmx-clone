<template>
  <div class="home-pc">
    <!-- PC端首页 - 完整桌面布局 -->
    
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

    <!-- Home Quotes - Scrolling Crypto Prices -->
    <div class="home-quotes mb-[30px]">
      <div class="box">
        <div class="quotes-wrap">
          <div class="quotes-content">
            <span class="quote-item">BTC <span class="price">$82,788.82</span><span class="change-down">(-6.04%)</span></span>
            <span class="quote-item">ETH <span class="price">$2,737.44</span><span class="change-down">(-6.73%)</span></span>
            <span class="quote-item">XRP <span class="price">$1.7587</span><span class="change-down">(-6.22%)</span></span>
            <span class="quote-item">BNB <span class="price">$843.23</span><span class="change-down">(-5.42%)</span></span>
            <span class="quote-item">SOL <span class="price">$115.90</span><span class="change-down">(-5.73%)</span></span>
            <span class="quote-item">DOGE <span class="price">$0.1146</span><span class="change-down">(-5.24%)</span></span>
            <span class="quote-item">TRX <span class="price">$0.2906</span><span class="change-down">(-1.46%)</span></span>
            <span class="quote-item">ADA <span class="price">$0.3246</span><span class="change-down">(-6.27%)</span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col mx-auto w-1360px">
      <div class="home-banner">
        <a-carousel arrows :dots="false">
          <template #prevArrow>
            <div class="left-hand">
              <CaretLeftOutlined style="color: rgb(122, 122, 151); font-size: 12px;" />
            </div>
          </template>
          <template #nextArrow>
            <div class="right-hand">
              <CaretRightOutlined style="color: rgb(122, 122, 151); font-size: 12px;" />
            </div>
          </template>
          <div class="home-banner-item" v-for="i in 2" :key="i">
            <div class="home-banner-item-row">
              <div class="image">
                <img src="@/assets/images/index-defi.png" alt="">
              </div>
              <div class="image">
                <img src="@/assets/images/index-bitcoin.png" alt="">
              </div>
              <div class="image">
                <img src="@/assets/images/index-nft-sale.png" alt="">
              </div>
            </div>
          </div>
          
        </a-carousel>
      </div>
    </div>

    <!-- Main Content Wrapper -->
    <div class="content-wrapper">

      
      
      <!-- Home Announce -->
      <div class="home-announce" v-animate-on-scroll="'animate__fadeInUp'">
        <div class="notice-container">
          <div class="notice-icon">📢</div>
          <p class="text-p">Latest announcements and platform updates - Stay informed about new features and trading opportunities</p>
        </div>
      </div>

      <!-- Platform Statistics -->
      <div class="home-introduce" v-animate-on-scroll="'animate__fadeIn'">
        <p class="label-p">
          A Comprehensive Cryptocurrency Exchange for Diversified Trading Needs
        </p>
        <div class="stats-container">
          <div class="stat-item stat-1">
            <span class="stat-number">9M+</span>
            <i class="stat-label">Customers</i>
          </div>
          <div class="stat-item stat-2">
            <span class="stat-number">190+</span>
            <i class="stat-label">Countries</i>
          </div>
          <div class="stat-item stat-3">
            <span class="stat-number">$207B+</span>
            <i class="stat-label">Trading Volume</i>
          </div>
        </div>
      </div>

      <!-- AI Strategy Section -->
      <div v-animate-on-scroll="'animate__fadeInUp'">
        <AiStrategy />
      </div>

      <!-- Market Overview -->
      <div v-animate-on-scroll="'animate__fadeInUp'">
        <MarketOverview />
      </div>

      <!-- NFT Showcase -->
      <div class="home-nft" v-animate-on-scroll="'animate__zoomIn'">
        <header class="nft-header">Explore Our NFT Marketplace</header>
        <div class="nft-btn">Explore NFTs</div>
        <img src="/assets/images/nft-1-_K3Dez7N.png" alt="NFT 1" class="nft-1" />
        <img src="/assets/images/nft-2-Bidcm4Hl.png" alt="NFT 2" class="nft-2" />
        <img src="/assets/images/nft-3-DTTE9tVe.png" alt="NFT 3" class="nft-3" />
        <img src="/assets/images/nft-4-BtmWgRar.png" alt="NFT 4" class="nft-4" />
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AiStrategy from '@/components/AiStrategy.vue'
import MarketOverview from '@/components/MarketOverview.vue'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons-vue';

// Import video asset
import homeBannerVideo from '@/assets/videos/home-banner.mp4'


onMounted(() => {
  console.log('PC Homepage loaded')
})
</script>

<style scoped lang="less">
.home-pc {
  --uno: 'min-h-screen bg-black text-white';
}

.content-wrapper {
  --uno: 'flex flex-col mx-auto';
}
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

/* ==================== Home Quotes Section ==================== */
.home-quotes {
  position: relative;
  width: 100%;
  border-width: 1px 0;
  border-style: solid;
  border-color: rgb(44, 44, 62);
  background-color: rgb(15, 15, 22);
}

.home-quotes .box {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 9vw;
  line-height: 46px;
}

@media (min-width: 768px) {
  .home-quotes .box {
    width: 1360px;
    height: 46px;
  }
}

.quotes-wrap {
  position: relative;
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  overflow: hidden;
}

.quotes-content {
  position: absolute;
  white-space: nowrap;
  color: white;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  animation: scroll-quotes 131.43s linear infinite;
  will-change: transform;
}

@media (min-width: 768px) {
  .quotes-content {
    font-size: 18px;
  }
}

@media screen and (min-width: 992px) {
  .quotes-content:hover {
    animation-play-state: paused;
  }
}

@keyframes scroll-quotes {
  0% {
    transform: translate(0);
  }
  to {
    transform: translate(-50%);
  }
}

.quote-item {
  margin: 0 20px;
}

.quote-item .price {
  color: white;
  padding-left: 5px;
}

.quote-item .change-up {
  color: #00f0ff;
}

.quote-item .change-down {
  color: #ff4834;
}
.home-banner {
  height: 320px;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 70px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: initial;
  flex-direction: initial;
  align-items: center;
  justify-content: initial;
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
       margin-top: -30px;
      &:hover {
        background-color: rgba(0, 240, 255, .3);
        border: 2px solid #00f0ff;
      }
  }
  .home-banner-item {
    height: 320px;
    width: 100%;
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
:deep(.ant-carousel) {
  width: 1360px;
}
:deep(.slick-slide) {
  height: 320px;
  display: flex;
  width: 1360px;
}

</style>
