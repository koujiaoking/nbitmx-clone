<template>
<div class="customer-page customer-service-view">
  <div class="customer-top">
    <div class="customer-left-content">
      <h1>和好友一起賺錢</h1>
      <h4>推薦用戶的交易可享最高20%傭金</h4>
      <!-- TODO: Image src="/assets/share-top-bg-DRWqpfVP.png" -->
      <div class="banner-placeholder">
        [Referral Banner Image]
      </div>
    </div>
    <div class="customer-right-content">
      <div class="amount-row mb-40px">
        <van-field
          v-model="inviteCode"
          label="邀請碼"
          readonly
          placeholder="邀請碼"
          input-align="right"
        >
          <template #button>
            <span class="copy-span">
              <svg class="w-25px h-25px color-white">
                <use xlink:href="#icon-copy"></use>
              </svg>
            </span>
          </template>
        </van-field>
      </div>
      <div class="amount-row">
        <van-field
          v-model="inviteLink"
          label="邀請鏈接"
          readonly
          placeholder="邀請鏈接"
          input-align="right"
        >
          <template #button>
            <span class="copy-span">
              <svg class="w-25px h-25px color-white">
                <use href="#icon-copy"></use>
              </svg>
            </span>
          </template>
        </van-field>
      </div>
      <button class="create-qrcode mt-70px">
        <van-icon name="qr" size="25" />
        <span class="text-black text-14px fw-700">生成二維碼</span>
      </button>
      <h4 class="mt-40px mb-20px text-18px text-white">我的邀請</h4>
      <section class="my-invite">
        <div><span class="amount">0</span><span>被邀請人數</span></div>
        <div><span class="amount">0</span><span>總返利</span></div>
        <div><span class="amount">--</span><span>今日返利</span></div>
        <div><span class="amount">--</span><span>本月返利</span></div>
      </section>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inviteCode = ref('')
const inviteLink = ref('')
</script>

<style scoped lang="less">
/* === Base Variables === */
:root {
  --content-bg: #1f1f2f;
  --data-bg18: #2c2c3e;
}

.customer-service-view {
  box-sizing: border-box !important;
}

/* === Customer Page === */
.customer-page {
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box !important;
  width: 1360px;
  min-height: 100%;
  padding-bottom: 45px;
  padding-top: 30px;
}

.customer-top {
  background-color: var(--content-bg);
  position: relative;
  margin-top: 80px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between
}

.customer-left-content {
  width: 600px
}

.customer-left-content h1 {
  z-index: 2;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 48px;
  color: #fff;
  font-weight: 700;
  line-height: 48px
}

.customer-left-content h4 {
  margin-bottom: 36px;
  font-size: 16px;
  color: #888;
  font-weight: 500
}

.banner-placeholder {
  width: 100%;
  height: 514px;
  background: #333;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
}

.customer-right-content {
  border: 2px solid var(--data-bg18);
  box-sizing: border-box !important;
  width: 700px;
  height: 702px;
  border-radius: 12px;
  background-color: #1f1f2f;
  padding: 40px
}

.amount-row {
  width: 620px;
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  background-color: #000;
  position: relative;
}

.amount-row .input-border {
  height: 100%;
  background-color: transparent;
  text-align: right
}

.amount-row .input-border input {
  margin-right: 90px;
  margin-top: 8px;
  align-items: center;
  text-align: right
}

.amount-row .copy-span {
  width: 90px;
  height: 60px;
  border-radius: 12px;
  background-color: #00f0ff;
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center
}

.create-qrcode {
  width: 620px;
  height: 70px;
  border-radius: 12px;
  border-style: none;
  background-color: #00f0ff;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  column-gap: 10px
}

.my-invite {
  border: 1px solid var(--data-bg18);
  width: 100%;
  height: 240px;
  display: flex;
  border-radius: 20px
}

.my-invite div {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
}

.my-invite div span {
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #888;
  line-height: 15px
}

.my-invite div .amount {
  height: 45px;
  text-align: center;
  font-size: 24px;
  color: #fff;
  line-height: 45px
}

.my-invite .line {
  position: relative;
  margin-top: 2vw;
  margin-bottom: 2vw;
  margin-left: auto;
  margin-right: auto;
  height: 1px;
  flex-basis: 90%;
  background-color: #373739
}

/* Helper classes */
.mb-40px { margin-bottom: 40px; }
.mt-70px { margin-top: 70px; }
.mt-40px { margin-top: 40px; }
.mb-20px { margin-bottom: 20px; }
.text-18px { font-size: 18px; }
.text-white { color: white; }
.text-black { color: black; }
.text-14px { font-size: 14px; }
.fw-700 { font-weight: 700; }

/* van-field styling */
:deep(.van-field) {
  background: transparent;
  height: 100%;
  padding: 0 20px;
}
:deep(.van-field__label) {
  color: #c8c9cc;
  display: flex;
  align-items: center;
}
:deep(.van-field__control) {
  color: #fff;
  text-align: right;
}
:deep(.van-field__button) {
  padding: 0;
}

/* === Mobile Responsive === */
@media screen and (max-width: 992px) {
  .customer-page {
    box-sizing: border-box !important;
    padding-left: 3.2vw;
    padding-right: 3.2vw;
    width: 100%;
  }
  
  .customer-page .c-card-title {
    padding: 0
  }
  
  .customer-top {
    flex-direction: column;
    margin-top: 20px;
  }
  
  .customer-left-content {
    width: 100%;
  }
  
  .customer-left-content h1 {
    font-size: 28px;
    line-height: 32px;
  }
  
  .banner-placeholder {
    height: 300px;
  }
  
  .customer-right-content {
    width: 100%;
    height: auto;
    margin-top: 20px;
    padding: 20px;
  }
  
  .amount-row {
    width: 100%;
  }
  
  .create-qrcode {
    width: 100%;
  }
  
  .icon-square {
    margin-right: 2vw;
    width: 2.5vw;
    height: 2.5vw;
    border-radius: .5vw;
    background-color: #00f0f0
  }
  
  .label-text {
    font-size: 4.5vw;
    text-transform: uppercase
  }
  
  .code {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 4vw
  }
  
  .my-invite {
    margin: 0;
    display: flex;
    flex-wrap: wrap
  }
  
  .my-invite div {
    display: flex;
    flex: none;
    flex-basis: 50%;
    flex-direction: column
  }
  
  .my-invite div span {
    height: 9vw;
    text-align: center;
    font-size: 12px;
    color: #888;
    font-weight: 700;
    line-height: 9vw
  }
  
  .my-invite div .amount {
    font-size: 4.3vw;
    color: #00f0ff
  }
  
  .my-invite .line {
    position: relative;
    margin-top: 2vw;
    margin-bottom: 2vw;
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    flex-basis: 90%;
    background-color: #373739
  }
}
</style>
