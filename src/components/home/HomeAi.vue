<template>
  <div class="flex flex-wrap items-center">
    <li class="item-container" v-for="i in 5">
      <div class="top">
        <a-avatar-group :max-count="2" :max-style="{ color: '#f56a00', backgroundColor: '#fde3cf' }">
          <a-avatar :src="icons.sol" />
          <a-avatar :src="icons.eth" />
        </a-avatar-group>
        <span class="text-18px ml-8px">SOL/ETH</span>
      </div>
      <AiStrategyCard />
      <div class="bottom">
        <div class="left">
          <span>最大收益率</span>
          <span class="theme-color">45.2%</span>
        </div>
        <span class="middle">
          <img class="ball-gif" src="@/assets/images/ai-logo2.gif" alt="">
          <img class="ball-png" src="@/assets/images/ai-logo2.png" alt="">
        </span>
        <div class="right">
          <span>參與人數</span>
          <span class="count">73</span>
        </div>
      </div>
    </li>
  </div>
</template>

<script setup lang="ts">
import icons from '@/assets/icons'
</script>

<style scoped lang="less">
.item-container {
    background-image: url(../../assets/images/ai-bg1.png);
    background-size: 100% 100%;
    transition: all .2s;
    margin-bottom: 30px;
    width: 400px;
    height: 238px;
    flex: none;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
    justify-content: center
}

.item-container:hover {
    transform: translateY(-10px)
}

.item-container>.top {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14px;
    width: 360px;
    height: 40px;
    display: flex;
    align-items: center
}

.item-container>.bottom {
    background-image: url(../../assets/images/ai-bg2.png);
    background-size: 100% 100%;
    margin-left: auto;
    margin-right: auto;
    width: 320px;
    height: 58px;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    padding-left: 20px;
    padding-right: 20px
}

.item-container>.bottom .left {
    display: inline-flex;
    flex: 1 1 0%;
    flex-direction: column
}

.item-container>.bottom .middle {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center
}

.item-container>.bottom .middle .ball-gif {
    position: relative;
    z-index: 2;
    width: 52px;
    height: 52px;
    flex: none;
    border-radius: 9999px
}

.item-container>.bottom .middle .ball-png {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    flex: none
}

.item-container>.bottom .right {
    display: inline-flex;
    flex: 1 1 0%;
    flex-direction: column;
    align-items: flex-end
}

.item-container>.bottom .left>span:nth-of-type(1),.item-container>.bottom .right>span:nth-of-type(1) {
    font-size: 12px
}

.item-container:nth-of-type(3n-1) {
    margin-left: 30px;
    margin-right: 30px
}

.line {
    margin-bottom: 11px;
    width: 390px;
    height: 76px
}

 .ant-avatar-group .ant-avatar {
    border-color: transparent
}

</style>
