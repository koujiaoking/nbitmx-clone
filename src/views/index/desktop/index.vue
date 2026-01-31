<template>
  <div class="home-pc">
    <!-- PC端首页 - 完整桌面布局 -->
    
    <!-- Home Top - Video Background Section -->
    <div class="home-top">
      <div class="top-bg">
        <video class="video-bg" autoplay loop playsinline muted>
          <source :src="homeBannerVideo" type="video/mp4" />
        </video>
      </div>
      <div class="top-left" v-animate-on-scroll="'animate__fadeInLeft'">
        <h1>
          Over <i class="theme-color">36 Million</i> User Sign-Ups <i class="theme-color">Exchange</i>
        </h1>
        <h4 class="fade-in-left">
          Simple, Secure. Search Popular Investments, Earn Profits Instantly
        </h4>
        <div class="input-container">
          <div class="login-btn cm-btn-animation2">
            <span>Go Trade</span>
          </div>
        </div>
        <p class="data-p1">
          <span>
            <span>$75.31 Billion</span>
            <span>24-Hour Trading Volume</span>
          </span>
          <span>
            <span>100+</span>
            <span>Cryptocurrency Types</span>
          </span>
          <span>
            <span>2 Billion</span>
            <span>Number of Registered Users</span>
          </span>
        </p>
      </div>
      <div class="bottom-right"></div>
    </div>

    <!-- Home Quotes - Scrolling Crypto Prices -->
    <div class="home-quotes">
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
  width: 100%;
  min-width: 1440px;
  height: 816px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  font-size: 14px;
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

.top-left {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  max-width: 850px;
  min-height: 425px;
}

.top-left h1 {
  color: white;
  font-size: 50px;
  line-height: 60px;
}

.top-left h4 {
  margin-top: 40px;
  margin-bottom: 60px;
  text-align: left;
  font-weight: normal;
  font-size: 30px;
  color: rgb(203, 217, 218);
  line-height: 30px;
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
