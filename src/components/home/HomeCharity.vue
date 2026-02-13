<template>
  <div class="charity-bg">
  <div class="group">
    <span>#安全性</span>
    <span>#透明度</span>
    <span>#即時可追溯性</span>
    <span>#效率與速度</span>
    <span>#自動化</span>
  </div>

  <div class="row">
    <span>
      <img src="@/assets/images/charity-1.png" alt="" />
      <span>For Charity</span>
    </span>

    <span>
      <img src="@/assets/images/charity-2.png" alt="" />
      <span>24 Hours turnover</span>
    </span>

    <span>
      <img src="@/assets/images/charity-3.png" alt="" />
      <span>Tokens</span>
    </span>

    <span>
      <img src="@/assets/images/charity-4.png" alt="" />
      <span>Market place</span>
    </span>
  </div>

  <div class="relative z-2">
    <GAnimateButton text="前往慈善中心" size="small" />
  </div>

  <video class="video-bg" autoplay playsinline loop>
    <source src="@/assets/videos/charity-bg.mp4" type="video/mp4" />
  </video>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.charity-bg {
    background-image: url(../../assets/images/charity-bg.png);
    background-size: 100%;
    position: relative;
    margin: 60px auto 40px;
    width: 1260px;
    height: 500px;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    padding: 60px;}

.charity-bg .group {
    position: relative;
    z-index: 2;
    margin-bottom: 70px;
    display: flex;
    justify-content: space-between;
    padding-left: 160px;
    padding-right: 160px;}

.charity-bg .group span {
    border: 1px solid #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 99px;
    padding: 16px 26px;
    font-size: 18px;
    --un-text-opacity: 1;
    color: rgb(255 255 255 / var(--un-text-opacity));}

.charity-bg .row {
    position: relative;
    z-index: 2;
    margin-bottom: auto;
    display: flex;
    justify-content: space-between;
    padding-left: 80px;
    padding-right: 80px;}

.charity-bg .row>span {
    display: flex;
    flex-direction: column;}

.charity-bg .row>span img {
    margin-bottom: 12px;
    height: 50px;
    width: auto;}

.charity-bg .row>span span {
    font-size: 18px;
    line-height: 18px;}

.charity-bg .video-bg {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    object-fit: cover;
    object-position: center center;}
</style>
