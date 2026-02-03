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
              <span>
                <!-- TODO: Currency icon image -->
                <span class="currency-placeholder">[ICON]</span>
                <span class="selected-value">USDC</span>
                <div class="svg-container svg-img" style="fill: rgb(122, 122, 151);">
                  <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5L8 0H0L4 5Z"></path>
                  </svg>
                </div>
              </span>
            </div>
          </div>
          
          <van-field
            v-model="depositAmount"
            label="存入金額"
            type="number"
            placeholder="輸入金額"
            input-align="right"
            class="cm-input-box-pc"
          />
          
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
        <!-- Canvas/QR Placeholder -->
        <div class="qr-code-placeholder">QR Code</div>
      </div>
      <div class="label-row">帳戶地址</div>
      <div class="c-input-box">
        <van-field
          v-model="walletAddress"
          readonly
          placeholder="帳戶地址"
        >
          <template #button>
            <svg class="text-[#00F0FF] w-20px h-20px cursor-pointer">
              <use href="#icon-copy"></use>
            </svg>
          </template>
        </van-field>
      </div>
      <div class="limit-info">
        <div>最低充值限額: 1 USDC</div>
        <div>最高充值限額 : 10000000 USDC</div>
      </div>
    </div>
  </section>
  <section class="section-bottom no-vw">
    <h3><span class="white-color-text">近期充值記錄</span><span class="blue-color-text">查看歷史記錄</span></h3>
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
        <div class="text-center text-gray-500 py-10">暫無數據</div>
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

<style scoped>
/* === Base Variables === */
:root {
  --font-color-main: #fff;
  --font-color3-pc: #84849f;
  --btn-bg: #00f0ff;
  --font-color-btn: #000;
  --content-bg: #1f1f2f;
  --data-bg18: #2c2c3e;
  --border-color: #2c2c3e;
  --font-win: #00b15d;
}

.recharge-view {
  box-sizing: border-box !important;
}

/* === Blue color text === */
.blue-color-text {
    margin-left: 20px;
    cursor: pointer;
    background: linear-gradient(90deg,#9bb8f0,#6491e9 49.79%,#556dea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

.content {
    text-align: center;
    padding: 30px 50px
}

.cursor {
    cursor: pointer
}

/* === Section Top === */
.section-top {
    width: 100%;
    min-height: 434px;
    margin-bottom: 30px;
    margin-right: 30px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box !important;
}

.section-top .left {
    flex: 1;
    margin-left: 0
}

.section-top .left h4 {
    font-size: 18px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 30px
}

.section-top .left .content {
    display: flex;
    text-align: left
}

.section-top .left .content .steps {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center
}

.section-top .left .content .steps .line {
    width: 0;
    height: 222px;
    border: 1px dashed var(--font-color3-pc);
    margin: 10px 0
}

.section-top .left .content .steps .step {
    width: 20px;
    height: 20px;
    border: 1px solid #5e5e7a;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    color: #5e5e7a
}

.section-top .left .content .steps .step.active {
    color: #fff;
    border-color: #fff
}

.section-top .left .content .operate-area {
    margin-left: 35px;
    position: relative
}

.section-top .left .content .tips {
    display: block;
    width: 450px;
    margin-bottom: 10px;
    margin-top: 20px;
    padding-left: 20px;
    color: var(--font-color3-pc);
    font-size: 14px
}

.section-top .left .content .tips li {
    width: 450px;
    list-style-type: disc;
    margin-top: 5px
}

.section-top .left .content .operate-area .next-btn {
    width: 456px;
    height: 46px;
    line-height: 46px;
    border-radius: 99px;
    margin-top: 30px;
    background: var(--btn-bg);
    color: var(--font-color-btn);
    text-align: center;
    cursor: pointer;
    border: none
}

.section-top .left .content .operate-area .next-btn:disabled {
    opacity: .7;
    cursor: not-allowed
}

.section-top .left .content .operate-area .amount-convert {
    color: #888;
    margin: 5px auto 0
}

.section-top .white-color-text {
    color: var(--font-color-main)
}

.section-top .deposit-page {
    box-sizing: border-box !important;
    flex: 1 1 0%
}

.section-top .deposit-page .qr-wrap {
    width: 300px;
    height: 300px;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.section-top .deposit-page .qr-code-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #999;
    border-radius: 6px
}

.section-top .deposit-page .label-row {
    color: var(--font-color-main);
    margin-bottom: 10px;
    font-size: 14px
}

.section-top .deposit-page .c-input-box {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid var(--data-bg18);
    border-radius: 6px;
    background: var(--content-bg);
    width: 100%;
    min-width: 400px;
    box-sizing: border-box !important;
}

.section-top .deposit-page .limit-info {
    margin-top: 20px;
    color: var(--font-color3-pc);
    font-size: 14px
}

.section-top .deposit-page .limit-info div {
    margin-bottom: 5px
}

section.no-vw {
    flex: none;
    border-radius: 12px;
    border: 2px solid var(--data-bg18)
}

/* === Section Bottom === */
.white-color-text {
    color: var(--font-color-main)
}

.section-bottom {
    box-sizing: border-box !important;
    width: 100%;
    height: 462px;
    border-radius: 12px;
    background: var(--content-bg);
    padding: 0 30px
}

.section-bottom h3 {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-color);
    height: 70px;
    line-height: 70px;
    margin: 0
}

.section-bottom .data-list {
    width: 100%;
    height: 361px;
    text-align: center
}

.section-bottom .data-list .titles {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #5e5e7a;
    font-size: 12px
}

.section-bottom .data-list .list-wrap {
    height: 320px;
    overflow-y: auto
}

.section-bottom .data-list .item {
    height: 76px;
    border-bottom: 1px solid var(--border-color);
    background: var(--content-bg);
    display: flex;
    align-items: center;
    font-size: 14px
}

.section-bottom .data-list .column0 { width: 15%; text-align: left; }
.section-bottom .data-list .column1 { width: 20%; padding-left: 5%; box-sizing: border-box !important; }
.section-bottom .data-list .column2,
.section-bottom .data-list .column3,
.section-bottom .data-list .column4,
.section-bottom .data-list .column5 { width: 15%; }
.section-bottom .data-list .column6 { width: 10%; position: relative; cursor: pointer; }

.font-win {
    color: var(--font-win)
}

/* === Mobile Deposit Page === */
.deposit-page.mobile {
    box-sizing: border-box !important;
    padding: 5vw
}

.deposit-page.mobile .label-row {
    margin-top: 30px
}

/* van-field styling */
:deep(.van-field) {
  background: var(--content-bg);
  border: 1px solid var(--data-bg18);
  border-radius: 6px;
  margin-top: 20px;
}
:deep(.van-field__label) {
  color: #5e5e7a;
}
:deep(.van-field__control) {
  color: #fff;
}
.cm-input-box-pc {
  width: 456px;
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
    border-top: 1px dashed var(--font-color3-pc);
    border-left: none;
  }
  
  .section-top .left .content .operate-area {
    margin-left: 0;
  }
  
  .section-top .left .content .tips,
  .section-top .left .content .tips li,
  .section-top .left .content .operate-area .next-btn,
  .cm-input-box-pc {
    width: 100%;
  }
  
  .section-top .deposit-page .c-input-box {
    min-width: 100%;
  }
  
  .section-bottom {
    height: auto;
    padding: 15px;
  }
  
  .section-bottom .data-list .titles,
  .section-bottom .data-list .item {
    font-size: 12px;
  }
  
  .section-bottom .data-list .item {
    height: 60px;
  }
}
</style>
