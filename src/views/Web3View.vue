<template>
  <div class="web3-page">
    <div class="page-header">
      <van-icon name="arrow-left" class="cursor-pointer" style="font-size: 20px; transform: rotate(0deg);" @click="$router.back()" />
      <p>WEB3</p>
    </div>
    
    <div class="box-1">
      <div class="card-data">
        <div class="card-title">流動性 Web3 產出</div>
        <p class="total"><i>0</i>ETH </p>
        <div class="data-info">
          <div>
            <p>總產出</p>
            <p><span>0</span>ETH </p>
          </div>
          <div>
            <p>可兌換</p>
            <p><span>0</span>ETH </p>
          </div>
          <div>
            <p>可提幣餘額</p>
            <p><span>0</span>USDT </p>
          </div>
          <div>
            <p>帳戶餘額</p>
            <p><span>0</span>USDT </p>
          </div>
        </div>
        <p class="time-out">即將到來的收益
          <van-count-down :time="0" format="HH:mm:ss" style="--van-count-down-text-color: #adadad; --van-count-down-font-size: 16px;" />
        </p>
        <button class="c-btn">
          <van-icon name="arrow-double-right" />
          <span>參與 WEB3.0</span>
          <van-icon name="arrow-double-left" />
        </button>
      </div>
      <!-- Placeholder or original path if user updates it -->
      <img src="@/assets/images/web3_top.png" alt="" class="img01">
    </div>

    <div class="box-2">
      <div class="swap-container text-white">
        <div class="switch border-b border-[#2e3044] pb-4 mb-6">
          <p :class="{ active: currentTab === 'swap' }" @click="currentTab = 'swap'">{{ $t('web3.swap') }}</p>
          <p :class="{ active: currentTab === 'withdrawal' }" @click="currentTab = 'withdrawal'">{{ $t('web3.withdrawal') }}</p>
          <p :class="{ active: currentTab === 'earnings' }" @click="currentTab = 'earnings'">{{ $t('web3.earningsRecord') }}</p>
        </div>

        <!-- Swap Tab -->
        <div v-if="currentTab === 'swap'">
          <div class="input-view">
            <div class="input-box">
              <van-field v-model="swapAmount" type="number" :placeholder="$t('web3.swapPlaceholder')" class="submit-input" :border="false" />
            </div>
            <div class="icon-change">
              <van-icon name="exchange" style="font-size: 25px;" />
            </div>
            <div class="ustd-box">
              <img src="@/assets/icons/usdt.png" alt="">
              <p>USDT</p>
            </div>
          </div>
          <div class="px-2 mt-4 mb-6">
             <a-slider v-model:value="sliderValue" track-color="#00f0ff" />
             <div class="flex justify-between text-[#888] text-xs mt-2">
                 <span>0%</span>
                 <span>25%</span>
                 <span>50%</span>
                 <span>75%</span>
                 <span>100%</span>
             </div>
          </div>
          <button class="c-btn">{{ $t('web3.swapBtn') }}</button>
        </div>

        <!-- Withdrawal Tab -->
        <div v-if="currentTab === 'withdrawal'">
             <div class="input-view">
                <div class="input-box">
                  <van-field v-model="withdrawAmount" type="number" placeholder="0" class="submit-input" :border="false" />
                </div>
                <div class="flex items-center gap-2 px-2">
                   <van-icon name="exchange" style="font-size: 20px; color: #888; transform: rotate(90deg);" />
                </div>
                <div class="ustd-box">
                  <img src="@/assets/icons/usdt.png" alt="">
                  <p>USDT</p>
                </div>
             </div>
             <div class="px-2 mt-4 mb-6">
             <a-slider v-model:value="withdrawSliderValue" track-color="#00f0ff" />
                 <div class="flex justify-between text-[#888] text-xs mt-2">
                     <span>0%</span>
                     <span>25%</span>
                     <span>50%</span>
                     <span>75%</span>
                     <span>100%</span>
                 </div>
             </div>
             <button class="c-btn">{{ $t('web3.withdrawBtn') }}</button>
        </div>

        <!-- Earnings Record Tab -->
        <div v-if="currentTab === 'earnings'" class="earnings-record text-center py-10">
             <div class="grid grid-cols-4 gap-2 text-xs text-[#888] mb-4 border-b border-[#2e3044] pb-2">
                 <div>{{ $t('web3.profitAndLoss') }} (ETH)</div>
                 <div>{{ $t('web3.profitRate') }}</div>
                 <div>{{ $t('web3.balance') }}</div>
                 <div>{{ $t('web3.time') }}</div>
             </div>
             
             <!-- Empty State -->
             <div class="flex flex-col items-center justify-center py-10">
                 <van-icon name="description" size="64" color="#888" class="mb-4 opacity-50" />
                 <p class="text-[#888]">{{ $t('common.noMore') }}</p>
             </div>
        </div>
      </div>
      
      <div class="total-data-view">
        <div class="title">質押收益數據</div>
        <p><span class="label">總產量</span><span class="val">165,317,685.3500</span></p>
        <p><span class="label">活躍節點</span><span class="val">76,525.0000</span></p>
        <p><span class="label">參與者</span><span class="val">7,653,485</span></p>
        <p><span class="label">用戶收入</span><span class="val">81,770,134.0000</span></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const swapAmount = ref('')
const sliderValue = ref(0)
const withdrawAmount = ref('')
const withdrawSliderValue = ref(0)
const currentTab = ref('swap')
</script>

<style scoped lang="less">
/* Copied from web3.css and adapted */
.c-btn {
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
    height: 50px;
    cursor: pointer;
    border-radius: 8px;
    border-style: none;
    background-color: rgb(0 240 255);
    padding: 8px 10px;
    font-size: 16px;
    color: rgb(0 0 0);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    box-sizing: border-box !important;
}

.submit-input {
    --van-field-input-text-color: white;
    --van-field-placeholder-text-color: #adadad;
    margin: 0;
    background-color: transparent;
    padding: 0;
}

:deep(.submit-input input) {
    border: 1px solid #3c3e53; /* var(--border-color1) */
    border-radius: 8px;
    padding: 10px 15px;
    font-size: 16px;
    color: white;
}

:deep(.submit-input input:focus) {
    border: 1px solid #00f0ff;
    border-radius: 12px;
}

.web3-page {
    padding-bottom: 50px;
}

.page-header {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 30px 20px;
    color: white;
}

.page-header p {
    font-size: 20px;
}

.box-1 {
    display: flex;
    flex-direction: column;
}

.box-1 .img01 {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
}

.box-1 .card-data {
    border: 1px solid #3c3e53;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box !important;
    text-align: center;
    margin-right: 20px;
}

.box-1 .card-data .card-title {
    font-size: 20px;
    color: white;
}

.box-1 .card-data .total {
    margin: 10px 0;
    font-size: 20px;
    color: #888;
}

.box-1 .card-data .total i {
    font-style: normal;
    font-weight: 600;
    color: white;
    margin-right: 5px;
}

.box-1 .card-data .data-info {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
}

.box-1 .card-data .data-info > div {
    width: 50%;
    padding: 10px;
    box-sizing: border-box !important;
}

.box-1 .card-data .data-info > div p {
    margin: 5px 0;
    color: #adadad;
}

.box-1 .card-data .data-info > div p span {
    color: white;
    margin-right: 5px;
    font-size: 18px;
}

.time-out {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #adadad;
    margin-top: 20px;
}




.swap-container .switch {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.swap-container .switch p {
    color: #888;
    cursor: pointer;
    font-size: 16px;
}

.swap-container .switch .active {
    color: #00f0ff;
}

.input-view {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
}

.input-box {
    flex: 1;
}

.ustd-box {
    display: flex;
    align-items: center;
    gap: 5px;
    color: white;
}

.ustd-box img {
    width: 24px;
    height: 24px;
}


.total-data-view .title {
    font-size: 18px;
    margin-bottom: 20px;
}

.total-data-view p {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    font-size: 14px;
}

.total-data-view .label {
    color: #adadad;
}

@media (min-width: 992px) {
    .web3-page {
        width: 1350px;
        margin: 0 auto;
    }
    
    .box-1 {
        flex-direction: row;
        align-items: stretch;
    }
    
    .box-1 .card-data {
        flex: 1;
        margin-bottom: 0;
    }
    
    .box-1 .img01 {
        width: 48%;
        margin-bottom: 0;
    }

    .box-2 {
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
    }

    .swap-container {
      border: 1px solid #3c3e53;
      margin-right: 25px;
      box-sizing: border-box !important;
      flex: 1 1 0%;
      overflow: hidden;
      border-radius: 10px;
      padding: 20px;
    }

    .total-data-view {
      border: 1px solid #3c3e53;
      width: 45%;
      overflow: hidden;
      border-radius: 10px;
      padding: 20px;
      box-sizing: content-box;
    }
}

/* Ant Design Slider Overrides */
:deep(.ant-slider-track) {
  background-color: #00f0ff !important;
}
:deep(.ant-slider-handle) {
  border-color: #00f0ff !important;
}
:deep(.ant-slider-handle:focus) {
    box-shadow: 0 0 0 5px rgba(0, 240, 255, 0.12) !important;
}
@media screen and (max-width: 992px) {
  .page-header {
    display: none;
  }
  .web3-page {
      box-sizing:border-box;
      width: 100%;
      padding-left: 3.2vw;
      padding-right: 3.2vw;
      padding-bottom: 10vw;
      padding-top: 3vw;
    }

    .box-1 {
        display: flex;
        flex-direction: column
    }

    .box-1 .img01 {
        order: 1;
        margin-bottom: 10px;
        width: 100%;
        height: auto
    }

    .box-1 .card-data {
        border: 1px solid #3c3e53;
        order: 2;
        margin-top: 2vw;
        margin-bottom: 2vw;
        overflow: hidden;
        border-radius: 2vw;
        --un-bg-opacity: 1;
        background-color: rgb(35 36 48 / var(--un-bg-opacity));
        padding: 3.2vw;
        text-align: center;
        margin-right: 0;
    }

    .box-1 .card-data .card-title {
        font-size: 4.2vw
    }

    .box-1 .card-data .total {
        margin-top: 1vw;
        margin-bottom: 1vw;
        font-size: 4vw;
        --un-text-opacity: 1;
        color: rgb(136 136 136 / var(--un-text-opacity));
        font-weight: 400
    }

    .box-1 .card-data .total i {
        margin-right: 1vw;
        --un-text-opacity: 1;
        color: rgb(255 255 255 / var(--un-text-opacity));
        font-weight: 600
    }

    .box-1 .card-data .data-info {
        margin-top: 3vw;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start
    }

    .box-1 .card-data .data-info>div {
        box-sizing: border-box;
        width: 50%;
        padding: 2vw 3vw;
        font-weight: 400
    }

    .box-1 .card-data .data-info>div p {
        margin-top: 1.2vw;
        margin-bottom: 1.2vw;
        font-size: 3.8vw;
        --un-text-opacity: 1;
        color: rgb(173 173 173 / var(--un-text-opacity))
    }

    .box-1 .card-data .data-info>div p:nth-child(2) {
        --un-text-opacity: 1;
        color: rgb(136 136 136 / var(--un-text-opacity))
    }

    .box-1 .card-data .data-info>div p:nth-child(2) span {
        margin-right: 1vw;
        font-size: 4vw;
        --un-text-opacity: 1;
        color: rgb(255 255 255 / var(--un-text-opacity))
    }

    .box-1 .card-data .time-out {
        margin-top: 2vw;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3.2vw;
        --un-text-opacity: 1;
        color: rgb(173 173 173 / var(--un-text-opacity));
        font-weight: 600
    }

    .box-2 {
        display: flex;
        flex-direction: column
    }

    .swap-container {
        border: 1px solid #3c3e53;
        margin-top: 3vw;
        margin-bottom: 3vw;
        box-sizing: border-box;
        width: 100%;
        overflow: hidden;
        border-radius: 2vw;
        --un-bg-opacity: 1;
        background-color: rgb(18 20 30 / var(--un-bg-opacity));
        padding: 3vw;
        order: 2
    }

    .swap-container .switch {
        margin-bottom: 15px;
        display: flex;
        align-items: center
    }

    .swap-container .switch p {
        padding: 1vw 2vw;
        font-size: 16px;
        --un-text-opacity: 1;
        color: rgb(136 136 136 / var(--un-text-opacity))
    }

    .swap-container .switch .active {
        --un-text-opacity: 1;
        color: rgb(0 240 255 / var(--un-text-opacity))
    }

    .swap-container .input-view {
        margin-top: 6vw;
        margin-bottom: 6vw;
        display: flex;
        align-items: center;
        column-gap: 2vw
    }

    .swap-container .input-view .input-box {
        box-sizing: border-box;
        flex: 1 1 0%;
        padding-left: 3vw;
        padding-right: 3vw
    }

    .swap-container .input-view .input-box input {
        width: 100%;
        background-color: transparent;
        font-size: 5vw
    }

    .swap-container .input-view .icon-change {
        flex: none;
        text-align: center
    }

    .swap-container .input-view .ustd-box {
        width: min-content;
        display: flex;
        align-items: center;
        column-gap: 1vw;
        padding-left: 3vw;
        padding-right: 4vw
    }

    .swap-container .input-view .ustd-box img {
        width: 6vw;
        height: 6vw
    }

    .total-data-view {
        border: 1px solid #3c3e53;
        order: 3;
        margin-top: 2vw;
        margin-bottom: 2vw;
        overflow: hidden;
        border-radius: 2vw;
        padding: 3.2vw
    }

    .total-data-view .title {
        margin-bottom: 5vw;
        font-size: 4.4vw;
        --un-text-opacity: 1;
        color: rgb(255 255 255 / var(--un-text-opacity))
    }

    .total-data-view>p {
        margin-top: 1vw;
        margin-bottom: 1vw;
        display: flex;
        justify-content: space-between;
        font-size: 3.6vw
    }

    .swiper-container {
        order: 1;
        margin-top: 3vw;
        margin-bottom: 10px;
        width: 100%
    }

    .swiper-container .item {
        width: 100%
    }

    .swiper-container .item img {
        width: 100%;
        overflow: hidden;
        border-radius: 2vw
    }
}
</style>
