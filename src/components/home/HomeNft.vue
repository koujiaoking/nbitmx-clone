<template>
  <div class="home-nft">
    <header v-animate-on-scroll="'animate__fadeInBottom'">
      <span class="theme-color mr-15px">Discover</span>
      the Exclusive
      <span class="text-[#d32d8b]">NFT</span>
      Collection
    </header>
    <div class="g-btn">
      <GAnimateButton size="small" text="前往NFT大廳" />
    </div>
    
    <img class="nft-icon" src="@/assets/images/nft-icon.svg" alt="">
    <img class="nft-1" v-animate-on-scroll="'nft-rotate-in-left-1'" src="@/assets/images/nft-1.png" alt="">
    <img
      class="nft-2" v-animate-on-scroll="'nft-rotate-in-left-2'" src="@/assets/images/nft-2.png" alt=""><img
      class="nft-3" v-animate-on-scroll="'nft-rotate-in-left-3'" src="@/assets/images/nft-3.png" alt=""><img
      class="nft-4" v-animate-on-scroll="'animate__fadeInBottom'" src="@/assets/images/nft-4.png" alt="">
      <video class="video-bg" autoplay playsinline loop>
      <source src="@/assets/videos/nft-bg.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
.home-nft {
    background-image: url(../../assets/images/nft-bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 210px;
    width: 1260px;
    height: 684px;
    display: flex;
    flex-direction: column;}

.home-nft>header {
    position: absolute;
    top: 110px;
    left: 70px;
    z-index: 2;
    width: 777px;
    font-size: 40px;
    --un-text-opacity: 1;
    color: rgb(255 255 255 / var(--un-text-opacity));
    font-weight: 600;
    line-height: 50px;
    text-transform: uppercase;}

.home-nft .g-btn {
    position: absolute;
    top: 260px;
    left: 70px;
    z-index: 2;
}

.home-nft .nft-icon {
    position: absolute;
    top: 260px;
    left: 350px;
    z-index: 2;
    width: 40px;
    height: 40px;}

.video-bg {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    object-fit: cover;
    object-position: center center;}

.nft-1 {
    position: absolute;
    bottom: 12px;
    left: -50px;
    z-index: 3;
    width: 265px;
    height: auto;}

.nft-2 {
    position: absolute;
    bottom: -37px;
    left: 170px;
    z-index: 1;
    width: auto;
    height: 310px;}

.nft-3 {
    position: absolute;
    bottom: 10px;
    left: 400px;
    z-index: 2;
    width: 265px;
    height: auto;}

.nft-4 {
    position: absolute;
    bottom: -100px;
    right: -100px;
    z-index: 2;
    width: 200px;
    height: 200px;}

.nft-rotate-in-left-1 {
    transform-origin: center center;
    animation: nft-rotate-in-left-1 3s ease 0s;}

.nft-rotate-in-left-2 {
    transform-origin: center center;
    animation: nft-rotate-in-left-2 3s ease 0s;}

.nft-rotate-in-left-3 {
    transform-origin: center center;
    animation: nft-rotate-in-left-3 3s ease 0s;}

@keyframes nft-rotate-in-left-1 {
    0% {
        transform: rotate(-900deg);
        left: -100%;    }

    to {
        transform: rotate(0);
        left: -50px;    }
}

@keyframes nft-rotate-in-left-2 {
    0% {
        transform: rotate(-900deg);
        left: -100%;    }

    to {
        transform: rotate(0);
        left: 170px;    }
}

@keyframes nft-rotate-in-left-3 {
    0% {
        transform: rotate(-900deg);
        left: -100%;    }

    to {
        transform: rotate(0);
        left: 400px;    }
}
.video-bg {
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
