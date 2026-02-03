<template>
<div class="w-1360px mx-auto min-h-1026px pt-30px pb-70px withdraw-view">
  <section class="section-top no-vw">
    <div class="left">
      <h4 class="white-color-text">提幣</h4>
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
                <span class="selected-value">USDT-ERC</span>
                <div class="svg-container svg-img" style="fill: rgb(122, 122, 151);">
                  <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5L8 0H0L4 5Z"></path>
                  </svg>
                </div>
              </span>
            </div>
          </div>
          
          <div class="get-address">
            <van-field
              v-model="withdrawAddress"
              label="提幣地址"
              placeholder="輸入提幣地址"
              maxlength="65"
            >
              <template #button>
                <div class="bookwrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ececff">
                    <path d="M18 2H8C6.93913 2 5.92172 2.42143 5.17157 3.17157C4.42143 3.92172 4 4.93913 4 6V18C4 19.0609 4.42143 20.0783 5.17157 20.8284C5.92172 21.5786 6.93913 22 8 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V4C20 3.46957 19.7893 2.96086 19.4142 2.58579C19.0391 2.21071 18.5304 2 18 2ZM6 6C6 5.46957 6.21071 4.96086 6.58579 4.58579C6.96086 4.21071 7.46957 4 8 4H18V14H8C7.29504 14.003 6.60399 14.1964 6 14.56V6ZM8 20C7.46957 20 6.96086 19.7893 6.58579 19.4142C6.21071 19.0391 6 18.5304 6 18C6 17.4696 6.21071 16.9609 6.58579 16.5858C6.96086 16.2107 7.46957 16 8 16H18V20H8Z"></path>
                  </svg>
                </div>
              </template>
            </van-field>
          </div>
          
          <ul class="tips">
            <li>提幣將從[錢包地址/帳戶]轉出 <span style="color: rgb(255, 255, 255);">合約帳戶</span> 從可用餘額中扣除</li>
            <li>請確認您的提幣地址是否正確。錯誤的地址將導致資產損失且無法追回。</li>
          </ul>
          <div class="view-detail step2">提幣詳情</div>
          
          <van-field
            v-model="withdrawAmount"
            label="提幣金額"
            type="number"
            placeholder="輸入金額"
            input-align="right"
            class="cm-input-box-pc"
          />
          
          <div class="count-fee-item"><span>可用金額</span><span>0.000000 USDT</span></div>
          <div class="count-fee-item"><span>最小提幣金額</span><span>1 USDT</span></div>
          <div class="count-fee-item"><span>提幣手續費</span><i class="icon-question"></i><span>0%</span></div>
          <div class="count-fee-item recevie"><span>預計到帳</span><span>{{ withdrawAmount || 0 }} USDT</span></div>
          <div class="next-btn">提交</div>
        </div>
      </div>
    </div>
    <div class="right-con">
      <h4 class="white-color-text title">常見問題</h4>
      <p class="row">如何提幣？</p>
      <p class="row">提幣未到帳的原因？</p>
      <p class="row">提幣到帳時間及手續費是多少？</p>
      <p class="row">如何查詢提幣記錄和歷史記錄？</p>
    </div>
  </section>
  
  <section class="section-bottom no-vw">
    <h3><span class="white-color-text">最近提幣記錄</span></h3>
    <div class="data-list">
      <div class="titles">
        <div class="column column0">時間</div>
        <div class="column orderNo">序列號</div>
        <div class="column column1">加密貨幣</div>
        <div class="column column2">提幣地址</div>
        <div class="column column31">手續費</div>
        <div class="column column3">數量</div>
        <div class="column column5">狀態</div>
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

const withdrawAddress = ref('')
const withdrawAmount = ref('')
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
  --data-bg19: #3c3c4e;
  --border-color: #2c2c3e;
}

.withdraw-view {
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

/* === Get Address === */
.get-address {
    height: 44px;
    border-radius: 6px;
    border: 1px solid var(--data-bg18);
    background: var(--content-bg);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #5e5e7a;
    background: #1f1f2f !important
}

.get-address .bookwrap {
    width: 43px;
    height: 100%;
    border-radius: 0 5px 5px 0;
    background: linear-gradient(90deg,#6491e9 49.79%,#556dea);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

/* === Section Top === */
.section-top {
    width: 100%;
    min-height: 434px;
    margin-bottom: 30px;
    margin-right: 30px;
    padding: 20px 30px;
    box-sizing: border-box !important;
    display: flex;
    justify-content: space-between
}

.section-top .left {
    flex: 1
}

.section-top .left h4 {
    font-size: 18px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 30px
}

.section-top .left .content {
    display: flex
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
    margin-bottom: 10px;
    margin-top: 20px;
    padding-left: 20px;
    color: var(--font-color3-pc);
    font-size: 14px
}

.section-top .left .content .tips li {
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
    cursor: pointer
}

.section-top .left .content .operate-area .view-detail {
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 14px;
    color: #5e5e7a
}

.section-top .left .content .operate-area .view-detail.step2 {
    color: #fff
}

.section-top .left .content .operate-area .coin-count {
    width: 456px;
    height: 44px;
    position: relative;
    border-radius: 6px;
    border: 1px solid var(--data-bg18);
    background: var(--content-bg);
    color: #5e5e7a;
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-top: 20px
}

/* === Right Side === */
.section-top .right-con {
    flex: none;
    width: 550px;
    box-sizing: border-box !important;
    margin-left: 100px;
    margin-top: 50px
}

.section-top .right-con .row {
    color: var(--font-color3-pc);
    height: 20px;
    line-height: 20px;
    margin-bottom: 20px
}

.section-top .right-con .title {
    font-size: 18px;
    height: 27px;
    line-height: 27px;
    margin-bottom: 8px
}

.section-top .count-fee-item {
    margin-top: 20px;
    display: flex;
    align-items: center
}

.section-top .count-fee-item span:nth-child(1) {
    color: #5e5e7a
}

.section-top .count-fee-item span:nth-child(2) {
    margin-left: 20px;
    color: #fff;
}

.section-top .count-fee-item .icon-question {
    background-image: url("data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2013.09C3.636%2013.09%200.91%2010.363%200.91%207C0.91%203.636%203.636%200.91%207%200.91C10.363%200.91%2013.09%203.636%2013.09%207C13.09%2010.363%2010.363%2013.09%207%2013.09Z'%20fill='%2300F0FF'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 16px;
    height: 16px;
    margin: 0 20px 0 5px;
    cursor: pointer
}

.section-top .white-color-text {
    color: var(--font-color-main)
}

section.no-vw {
    flex: none;
    border-radius: 12px;
    border: 2px solid var(--data-bg18);
}

/* === Section Bottom === */
.white-color-text {
    color: var(--font-color-main)
}

.section-bottom {
    box-sizing: border-box !important;
    width: 100%;
    min-height: 462px;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    background: var(--content-bg);
}

.section-bottom h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    height: 70px;
    line-height: 70px;
    margin: 0;
    padding: 0
}

.section-bottom .data-list {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.section-bottom .data-list .titles {
    display: flex;
    align-items: center;
    color: var(--font-color3-pc);
    font-size: 12px;
    height: 47px;
    border-bottom: 1px solid var(--border-color)
}

.section-bottom .data-list .list-wrap {
    flex: 1;
    overflow-y: auto
}

.section-bottom .data-list .item {
    height: 76px;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    font-size: 14px;
    transition: background-color .2s
}

.section-bottom .data-list .item:hover {
    background-color: var(--data-bg18)
}

.section-bottom .data-list .column {
    flex: 1;
    padding: 0 8px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.section-bottom .data-list .orderNo {
    flex: 1.5
}

.section-bottom .data-list .column0 {
    text-align: left;
}

.section-bottom .data-list .column2 {
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center
}

.section-bottom .data-list .column5 {
    position: relative
}

.copy-pc {
    margin-left: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center
}

.copy-pc:hover {
    opacity: .8
}

/* van-field styling */
:deep(.van-field) {
  background: var(--content-bg);
  border: 1px solid var(--data-bg18);
  border-radius: 6px;
}
:deep(.van-field__label) {
  color: #5e5e7a;
}
:deep(.van-field__control) {
  color: #fff;
}
.cm-input-box-pc {
  width: 456px;
  margin-top: 20px;
}

/* === Responsive === */
@media (max-width: 768px) {
  .withdraw-view {
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
  
  .section-top .left .content .operate-area .next-btn,
  .section-top .left .content .operate-area .coin-count,
  .get-address,
  .cm-input-box-pc {
    width: 100%;
  }
  
  .section-top .right-con {
    width: 100%;
    margin-left: 0;
    margin-top: 30px;
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
