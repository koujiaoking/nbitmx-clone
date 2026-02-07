<template>
<div class="w-1360px mx-auto min-h-1026px pt-30px pb-70px recharge-view">
  <section class="section-top no-vw">
    <div class="left">
      <h4 class="white-color-text">充值</h4>
      <div class="content">
        <div class="steps">
          <div class="step active"><span>1</span></div>
          <div class="line"></div>
          <div class="step active">2</div>
        </div>
        <div class="operate-area">
          <div class="select-container">
            <div class="select-header" role="button" aria-expanded="false" tabindex="0">
              <span>選擇幣種</span>
              <span class="select-right">
                <!-- TODO: Currency icon image -->
                <img class="currency-icon" src="https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0641ec97345654e7e99e024bcb569c9fd.png" alt="">
                <span class="selected-value">USDC</span>
                <div class="svg-container svg-img" style="fill: rgb(122, 122, 151);">
                  <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5L8 0H0L4 5Z"></path>
                  </svg>
                </div>
              </span>
            </div>
          </div>
          
          <div class="cm-input-box-pc">
            <span>存入金額</span>
            <input class="numeric-input text-right" type="text" placeholder="輸入金額" v-model="depositAmount">
          </div>
          
          <div class="amount-convert">我會得到 {{ depositAmount || 0 }} USDC</div>
          
          <ul class="tips">
            <li>此操作將向您的錢包充值 <span style="color: rgb(255, 255, 255);">合約帳戶</span></li>
            <li>預計需要 1 次區塊鏈網絡確認才能到帳。</li>
            <li>充值/存款時務必確認網絡與提幣平台相同，否則資產將無法找回。</li>
            <li>如款項未按時到帳，請立即聯繫客服核實。 <span style="color: rgb(255, 255, 255);">線上客服</span></li>
          </ul>
          <button class="next-btn">提交</button>
        </div>
      </div>
    </div>
    <div class="deposit-page">
      <div class="qr-wrap">
        <!-- QR Code Canvas Placeholder -->
        <canvas class="qr-canvas" height="300" width="300"></canvas>
      </div>
      <div class="label-row">帳戶地址</div>
      <div class="c-input-box">
        <input type="text" placeholder="帳戶地址" disabled v-model="walletAddress">
        <svg class="copy-icon">
          <use href="#icon-copy"></use>
        </svg>
      </div>
      <div class="limit-info">
        <div>最低充值限額: 1 USDC</div>
        <div>最高充值限額 : 10000000 USDC</div>
      </div>
    </div>
  </section>
  
  <section class="section-bottom no-vw">
    <h3>
      <span class="white-color-text">近期充值記錄</span>
      <span class="blue-color-text">查看歷史記錄</span>
    </h3>
    <div class="data-list">
      <div class="titles">
        <div class="column column0">交易時間</div>
        <div class="column column1">加密貨幣</div>
        <div class="column column2">交易類型</div>
        <div class="column column2">狀態</div>
        <div class="column column3">數量</div>
        <div class="column column5">手續費</div>
        <div class="column column6">狀態</div>
      </div>
      <div class="list-wrap">
        <div class="cm-empty-image">
          <svg width="66" height="50" viewBox="0 0 66 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33936 7.80139H46.3551V24.4C46.3551 33.3608 46.3551 37.8412 44.6112 41.2638C43.0773 44.2744 40.6296 46.7221 37.619 48.2561C34.1964 50 29.716 50 20.7551 50H13.7394C11.4991 50 10.379 50 9.52339 49.564C8.77075 49.1805 8.15882 48.5686 7.77533 47.8159C7.33936 46.9603 7.33936 45.8402 7.33936 43.6V7.80139Z" fill="white" fill-opacity="0.04"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M59.5244 29.0085C59.5244 34.755 54.9639 39.4135 49.3384 39.4135C43.7128 39.4135 39.1523 34.755 39.1523 29.0085C39.1523 23.262 43.7128 18.6035 49.3384 18.6035C54.9639 18.6035 59.5244 23.262 59.5244 29.0085ZM55.8508 29.1791C55.8508 32.9473 52.8603 36.002 49.1714 36.002C45.4825 36.002 42.4921 32.9473 42.4921 29.1791C42.4921 25.4109 45.4825 22.3562 49.1714 22.3562C52.8603 22.3562 55.8508 25.4109 55.8508 29.1791Z" fill="#7A7A97"></path>
            <path d="M49.1715 36.0021C52.8605 36.0021 55.8509 32.9473 55.8509 29.1791C55.8509 25.4109 52.8605 22.3562 49.1715 22.3562C45.4826 22.3562 42.4922 25.4109 42.4922 29.1791C42.4922 32.9473 45.4826 36.0021 49.1715 36.0021Z" fill="#00A609" fill-opacity="0.1"></path>
          </svg>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const depositAmount = ref('')
const walletAddress = ref('0x403AD07CBd18B2583f7AeAeC2fC807e66a2cA692')
</script>

<style scoped lang="less">
.recharge-view {
  box-sizing: border-box;
}

/* === Section Top === */
.section-top {
  width: 100%;
  min-height: 434px;
  margin-bottom: 30px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.section-top .left {
  flex: 1;
  margin-left: 0;
}

.section-top .left h4 {
  font-size: 18px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 30px;
}

.section-top .left .content {
  display: flex;
  text-align: left;
}

.section-top .left .content .steps {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-top .left .content .steps .line {
  width: 0;
  height: 222px;
  border: 1px dashed #84849f;
  margin: 10px 0;
}

.section-top .left .content .steps .step {
  width: 20px;
  height: 20px;
  border: 1px solid #5e5e7a;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  color: #5e5e7a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-top .left .content .steps .step.active {
  color: #fff;
  border-color: #fff;
}

.section-top .left .content .operate-area {
  margin-left: 35px;
  position: relative;
}

/* === Select Container === */
.select-container {
  width: 456px;
}

.select-header {
  height: 44px;
  border-radius: 6px;
  border: 1px solid #2c2c3e;
  background: #1f1f2f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  cursor: pointer;
  color: #5e5e7a;
}

.select-right {
  display: flex;
  align-items: center;
  color: #fff;
}

.select-right .currency-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
}

.select-right .selected-value {
  margin-right: 8px;
}

/* === Input Box === */
.cm-input-box-pc {
  width: 456px;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #2c2c3e;
  background: #1f1f2f;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-top: 20px;
  color: #5e5e7a;
}

.cm-input-box-pc span {
  white-space: nowrap;
}

.cm-input-box-pc input {
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
  text-align: right;
}

.amount-convert {
  color: #888;
  margin: 5px auto 0;
}

.tips {
  display: block;
  width: 450px;
  margin-bottom: 10px;
  margin-top: 20px;
  padding-left: 20px;
  color: #84849f;
  font-size: 14px;
}

.tips li {
  width: 450px;
  list-style-type: disc;
  margin-top: 5px;
}

.next-btn {
  width: 456px;
  height: 46px;
  line-height: 46px;
  border-radius: 99px;
  margin-top: 30px;
  background: #00f0ff;
  color: #000;
  text-align: center;
  cursor: pointer;
  border: none;
}

/* === Deposit Page (Right Side) === */
.deposit-page {
  box-sizing: border-box;
  flex: 1 1 0%;
}

.qr-wrap {
  width: 300px;
  margin: 0 auto 20px;
}

.qr-canvas {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 6px;
}

.label-row {
  color: #fff;
  margin-bottom: 10px;
  font-size: 14px;
}

.c-input-box {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #2c2c3e;
  border-radius: 6px;
  background: #1f1f2f;
  width: 100%;
  min-width: 400px;
  box-sizing: border-box;
}

.c-input-box input {
  width: 100%;
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  outline: none;
}

.c-input-box .copy-icon {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
  fill: #00f0ff;
}

.limit-info {
  margin-top: 20px;
  color: #84849f;
  font-size: 14px;
}

.limit-info div {
  margin-bottom: 5px;
}

/* === Section Bottom === */
section.no-vw {
  flex: none;
  border-radius: 12px;
  border: 2px solid #2c2c3e;
}

.white-color-text {
  color: #fff;
}

.blue-color-text {
  margin-left: 20px;
  cursor: pointer;
  background: linear-gradient(90deg,#9bb8f0,#6491e9 49.79%,#556dea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-bottom {
  box-sizing: border-box;
  width: 100%;
  height: 462px;
  border-radius: 12px;
  background: #1f1f2f;
  padding: 0 30px;
}

.section-bottom h3 {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #2c2c3e;
  height: 70px;
  line-height: 70px;
  margin: 0;
}

.section-bottom .data-list {
  width: 100%;
  height: 361px;
  text-align: center;
}

.section-bottom .data-list .titles {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #5e5e7a;
  font-size: 12px;
}

.section-bottom .data-list .list-wrap {
  height: 320px;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-bottom .data-list .column0 { width: 15%; text-align: left; }
.section-bottom .data-list .column1 { width: 20%; padding-left: 5%; box-sizing: border-box; }
.section-bottom .data-list .column2,
.section-bottom .data-list .column3,
.section-bottom .data-list .column5 { width: 15%; }
.section-bottom .data-list .column6 { width: 10%; position: relative; cursor: pointer; }

.cm-empty-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #5e5e7a;
}

/* === Responsive === */
@media (max-width: 768px) {
  .recharge-view {
    width: 100% !important;
    padding: 15px;
  }
  
  .section-top {
    flex-direction: column;
    padding: 15px;
  }
  
  .section-top .left .content {
    flex-direction: column;
  }
  
  .section-top .left .content .steps {
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .section-top .left .content .steps .line {
    width: 50px;
    height: 0;
    border-top: 1px dashed #84849f;
    border-left: none;
  }
  
  .section-top .left .content .operate-area {
    margin-left: 0;
  }
  
  .select-container,
  .cm-input-box-pc,
  .tips,
  .tips li,
  .next-btn {
    width: 100%;
  }
  
  .c-input-box {
    min-width: 100%;
  }
  
  .section-bottom {
    height: auto;
    padding: 15px;
  }
}
</style>
