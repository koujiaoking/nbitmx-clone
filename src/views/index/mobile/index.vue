<template>
  <div class="home-h5">
    <!-- H5端首页 - 移动端垂直布局 -->
    
    <!-- Mobile Hero Section -->
    <div class="h5-hero">
      <div class="hero-bg">
        <video class="video-bg" autoplay loop playsinline muted>
          <source :src="homeBannerVideo" type="video/mp4" />
        </video>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">
          超过 <span class="highlight">3600万</span> 用户注册
        </h1>
        <p class="hero-subtitle">安全简单，搜索热门投资，即时获利</p>
        <button class="cta-button">立即交易</button>
        
        <!-- Mobile Stats -->
        <div class="mobile-stats">
          <div class="stat-item">
            <span class="stat-value">$75.31B</span>
            <span class="stat-label">24小时交易量</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">100+</span>
            <span class="stat-label">加密货币种类</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Price Ticker -->
    <div class="h5-ticker">
      <div class="ticker-scroll">
        <span class="ticker-item">BTC $82,788 <span class="red">-6.04%</span></span>
        <span class="ticker-item">ETH $2,737 <span class="red">-6.73%</span></span>
        <span class="ticker-item">XRP $1.75 <span class="red">-6.22%</span></span>
        <span class="ticker-item">SOL $115.90 <span class="red">-5.73%</span></span>
      </div>
    </div>

    <!-- Mobile Announcement -->
    <div class="h5-announce">
      <div class="announce-icon">📢</div>
      <p class="announce-text">最新公告和平台更新</p>
    </div>

    <!-- Mobile Platform Stats -->
    <div class="h5-stats">
      <h2 class="section-title">全面的加密货币交易平台</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number gradient-purple">9M+</div>
          <div class="stat-label">客户</div>
        </div>
        <div class="stat-card">
          <div class="stat-number gradient-green">190+</div>
          <div class="stat-label">国家</div>
        </div>
        <div class="stat-card">
          <div class="stat-number gradient-blue">$207B+</div>
          <div class="stat-label">交易量</div>
        </div>
      </div>
    </div>

    <!-- Mobile Market List -->
    <div class="h5-market">
      <h2 class="section-title">热门市场</h2>
      <div class="market-list">
        <div v-for="coin in hotCoins" :key="coin.symbol" class="market-item">
          <div class="coin-info">
            <img :src="coin.icon" :alt="coin.symbol" class="coin-icon" />
            <div class="coin-name">
              <span class="symbol">{{ coin.symbol }}</span>
              <span class="name">{{ coin.name }}</span>
            </div>
          </div>
          <div class="coin-price">
            <div class="price">${{ coin.price }}</div>
            <div :class="['change', coin.change >= 0 ? 'green' : 'red']">
              {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile NFT Section -->
    <div class="h5-nft">
      <div class="nft-bg-overlay"></div>
      <h2 class="nft-title">探索NFT市场</h2>
      <button class="nft-button">查看NFT</button>
      <div class="nft-preview">
        <img src="/assets/images/nft-1-_K3Dez7N.png" alt="NFT" class="nft-img" />
      </div>
    </div>

    <!-- Mobile CTA Section -->
    <div class="h5-cta">
      <h3>开始您的加密货币之旅</h3>
      <button class="cta-btn">免费注册</button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

// Import video asset
import homeBannerVideo from '@/assets/videos/home-banner.mp4'

// Mobile market data
const hotCoins = ref([
  { symbol: 'BTC', name: 'Bitcoin', price: '82,788', change: -6.04, icon: '/src/assets/icons/btc.png' },
  { symbol: 'ETH', name: 'Ethereum', price: '2,737', change: -6.73, icon: '/src/assets/icons/eth.png' },
  { symbol: 'SOL', name: 'Solana', price: '115.90', change: -5.73, icon: '/src/assets/icons/sol.png' },
  { symbol: 'BNB', name: 'BNB', price: '843.23', change: -5.42, icon: '/src/assets/icons/bnb.png' },
])

onMounted(() => {
  console.log('H5 Homepage loaded')
})
</script>

<style scoped>
.home-h5 {
  min-height: 100vh;
  background: #000;
  color: #fff;
  font-size: 14px;
}

/* Mobile Hero */
.h5-hero {
  position: relative;
  height: 85vh;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.video-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 60px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 16px;
}

.highlight {
  color: #00f0ff;
}

.hero-subtitle {
  font-size: 16px;
  color: #cbd9da;
  margin-bottom: 32px;
}

.cta-button {
  background: linear-gradient(90deg, #00f0ff, #00afff);
  color: #000;
  border: none;
  border-radius: 99px;
  padding: 14px 48px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 48px;
}

.mobile-stats {
  display: flex;
  gap: 32px;
  margin-top: 24px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
}

.stat-label {
  font-size: 12px;
  color: #888;
  margin-top: 4px;
}

/* Mobile Ticker */
.h5-ticker {
  background: #0f0f16;
  border-top: 1px solid #2c2c3e;
  border-bottom: 1px solid #2c2c3e;
  padding: 12px 0;
  overflow: hidden;
}

.ticker-scroll {
  display: flex;
  gap: 24px;
  animation: scroll 20s linear infinite;
  white-space: nowrap;
}

.ticker-item {
  font-size: 14px;
}

.red {
  color: #ff4834;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Sections */
.h5-announce {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  margin: 20px 16px;
  background: rgba(29, 55, 56, 0.49);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  backdrop-filter: blur(6px);
}

.announce-icon {
  margin-right: 12px;
  font-size: 20px;
}

.announce-text {
  font-size: 14px;
  color: #fff;
}

.h5-stats {
  padding: 40px 20px;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 32px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stat-card {
  text-align: center;
  padding: 20px 12px;
  background: rgba(20, 21, 26, 0.8);
  border-radius: 12px;
}

.stat-number {
  font-size: 32px;
  font-weight: 700;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-purple {
  background: linear-gradient(90deg, #c979dc, #3b0086);
}

.gradient-green {
  background: linear-gradient(90deg, #10e28e, #073427);
}

.gradient-blue {
  background: linear-gradient(90deg, #00f0ff, #19007d);
}

/* Market List */
.h5-market {
  padding: 40px 20px;
}

.market-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.market-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #14151a;
  border-radius: 12px;
}

.coin-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.coin-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.coin-name {
  display: flex;
  flex-direction: column;
}

.symbol {
  font-size: 16px;
  font-weight: 600;
}

.name {
  font-size: 12px;
  color: #888;
}

.coin-price {
  text-align: right;
}

.price {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.change {
  font-size: 14px;
}

.green {
  color: #0ecb81;
}

/* NFT Section */
.h5-nft {
  position: relative;
  padding: 60px 20px;
  margin: 20px;
  border-radius: 20px;
  background: linear-gradient(135deg, #1a1a2e, #0f0f1e);
  overflow: hidden;
}

.nft-bg-overlay {
  position: absolute;
  inset: 0;
  background: url('/assets/images/nft-bg.png') center/cover;
  opacity: 0.3;
}

.nft-title {
  position: relative;
  z-index: 2;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
}

.nft-button {
  position: relative;
  z-index: 2;
  display: block;
  margin: 0 auto 32px;
  padding: 12px 36px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #fff;
  border-radius: 24px;
  color: #fff;
  font-size: 16px;
}

.nft-preview {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}

.nft-img {
  width: 200px;
  height: auto;
  border-radius: 16px;
}

/* CTA Section */
.h5-cta {
  padding: 60px 20px;
  text-align: center;
}

.h5-cta h3 {
  font-size: 24px;
  margin-bottom: 24px;
}

.cta-btn {
  background: #fff;
  color: #000;
  border: none;
  border-radius: 99px;
  padding: 14px 48px;
  font-size: 16px;
  font-weight: 600;
}
</style>
