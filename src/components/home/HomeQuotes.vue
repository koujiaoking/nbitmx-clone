<template>
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
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
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
</style>
