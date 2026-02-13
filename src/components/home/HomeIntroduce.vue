<template>
  <div class="home-introduce" v-animate-on-scroll="'animate__fadeIn'">
      <p class="label-p">
         A cryptocurrency exchange for
         <span class="theme-color">Everyone</span>
      </p>
      <div class="stats-container">
        <div class="liquid-metal">
          <img src="@/assets/images/home-introduce-gif.gif" alt="">
        </div>
        <div class="stat-item stat-1" v-animate-on-scroll="'animate__fadeInBottom'">
          <span class="stat-number">9M+</span>
          <i class="stat-label">Clients</i>
        </div>
        <div class="stat-item stat-2" v-animate-on-scroll="'animate__fadeInBottom'">
          <span class="stat-number">190+</span>
          <i class="stat-label">Countries Supported</i>
        </div>
        <div class="stat-item stat-3" v-animate-on-scroll="'animate__fadeInBottom'">
          <span class="stat-number">$207B+</span>
          <i class="stat-label">Quarterly Trading Volume</i>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.home-introduce {
    margin: 50px auto 120px;
    background-image: url(../../assets/images/home-introduce-bg.png);
    background-size: 100% 100%;
    position: relative;
    width: 1360px;
    height: 544px;
    background-size: cover;
    background-repeat: no-repeat;
}
.label-p {
    position: absolute;
    top: 73px;
    left: 50px;
    z-index: 2;
    width: 788px;
    font-size: 50px;
    --un-text-opacity: 1;
    color: rgb(255 255 255 / var(--un-text-opacity));
    line-height: 60px;
}

.stat-item {
    position: absolute;
    bottom: 120px;
    z-index: 2;
    height: 100px;
    display: inline-flex;
    flex-direction: column;
    .stat-number {
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text!important;
      background-clip: text!important;
      font-size: 90px;
      line-height: 100px;
    }
    .stat-label {
      font-size: 24px;
      --un-text-opacity: 1;
      color: rgb(255 255 255 / var(--un-text-opacity));
      line-height: 40px;
    }
}


.stat-1 .stat-number {
    background: linear-gradient(90deg,#c979dc 49.79%,#3b0086);
}

.stat-2 .stat-number {
    background: linear-gradient(90deg,#10e28e 49.79%,#073427);
}

.stat-3 .stat-number {
    background: linear-gradient(90deg,#00f0ff 49.79%,#19007d);
}
.stat-1 {
  left: 263px;
}
.stat-2 {
  left: 600px;
}
.stat-3 {
  right: 60px;
}
.stats-container {
  .liquid-metal {
    position: absolute;
    left: 48px;
    bottom: 125px;
    z-index: 1;
  }
}

</style>