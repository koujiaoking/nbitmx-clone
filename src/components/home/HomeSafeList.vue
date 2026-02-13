<template>
  <div class="safe-title-list h-360px">
  <div class="flex-none w-450px relative">
    <img src="@/assets/images/safe-1.png" class="h-100px w-100px" />

    <div
      class="inline-flex flex-col -transform-translate-y-40px absolute top-40px left-100px w-350px"
    >
      <p class="color-[#464a59] text-60px tracking-6px">
        0<i class="theme-color">1</i>
      </p>
      <p class="text-24px lh-36px mb-20px">儲備金說明</p>
      <p class="w-272px text-[#848a9c] text-18px lh-26px">
        我們承諾，平台以至少1:1的儲備比例持有所有用戶資產。
      </p>
    </div>
  </div>

  <div class="flex-none w-450px relative">
    <img src="@/assets/images/safe-2.png" class="h-100px w-100px" />

    <div
      class="inline-flex flex-col -transform-translate-y-40px absolute top-40px left-100px w-350px"
    >
      <p class="color-[#464a59] text-60px tracking-6px">
        0<i class="theme-color">2</i>
      </p>
      <p class="text-24px lh-36px mb-20px">用戶至上的理念</p>
      <p class="w-272px text-[#848a9c] text-18px lh-26px">
        面向全球市場，多語言支援。7*24小時線上客服，專業的客戶服務。
      </p>
    </div>
  </div>

  <div class="flex-none w-450px relative">
    <img src="@/assets/images/safe-3.png" class="h-100px w-100px" />

    <div
      class="inline-flex flex-col -transform-translate-y-40px absolute top-40px left-100px w-350px"
    >
      <p class="color-[#464a59] text-60px tracking-6px">
        0<i class="theme-color">3</i>
      </p>
      <p class="text-24px lh-36px mb-20px">用戶保護基金</p>
      <p class="w-272px text-[#848a9c] text-18px lh-26px">
        我們具有價值3億美元的用戶保護基金，為潛在的安全風險提供多一層保障。
      </p>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.safe-title-list {
    position: relative;
    margin-top: 117px;
    margin-bottom: 30px;
    width: 1360px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;}

.safe-title-list>div:nth-child(3)>div {
    width: 325px;}

.safe-title-list:after {
    content: "";
    background-image: url(../../assets/images/border-bg.png);
    background-size: 100% 100%;
    position: absolute;
    top: 170px;
    left: 36px;
    width: 1316px;
    height: 190px;
    background-repeat: no-repeat;}

.safe-title-list>div:nth-child(1) {
    width: 450px;
    flex: none;}

.safe-title-list>div:nth-child(2) {
    width: 458px;
    flex: none;}

.safe-title-list>div:nth-child(3) {
    flex: 1 1 0%;}
</style>
