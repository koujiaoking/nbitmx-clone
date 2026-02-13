<template>
  <div class="customer-page customer-service-view">
    <div class="customer-top">
      <div class="customer-left-content">
        <h1>和好友一起賺錢</h1>
        <h4>推薦用戶的交易可享最高20%傭金</h4>
        <div class="banner-placeholder">
          <img src="@/assets/images/share-top-bg.png" alt="">
        </div>
      </div>
      <div class="customer-right-content">
        <div class="amount-row mb-40px">
          <van-field v-model="inviteCode" label="邀請碼" readonly placeholder="邀請碼" input-align="right">
            <template #button>
              <span class="copy-span" v-copy="inviteCode">
                <SvgIcon type="other" name="icon-copy" />
              </span>
            </template>
          </van-field>
        </div>
        <div class="amount-row">
          <van-field v-model="inviteLink" label="邀請鏈接" readonly placeholder="邀請鏈接" input-align="right">
            <template #button>
              <span class="copy-span" v-copy="inviteLink">
                <svg class="w-25px h-25px color-white">
                  <use href="#icon-copy"></use>
                </svg>
              </span>
            </template>
          </van-field>
        </div>
        <button class="create-qrcode mt-70px" @click="showQRModal = true">
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

    <!-- QR Code Modal -->
    <van-popup v-model:show="showQRModal" round class="qr-modal-popup"
      :style="{ width: '520px', height: '430px', padding: '15px', borderRadius: '20px', background: '#12141e', boxShadow: '2px 2px 10px #0003', overflow: 'hidden' }">
      <div class="header">
        <h3>想擁有 <span>加密貨幣？</span></h3>
        <p>與我們一起開始您的加密貨幣之旅</p><van-icon @click="showQRModal = false" name="cross" color="#fff" size="24" />
      </div>
      <div class="content"><img class="bg2" src="@/assets/images/share-code-bg2.svg"><img class="bg1"
          src="@/assets/images/share-code-bg1.svg"></div>
      <div class="bottom"><button class="btn" @click="downloadQRCode">儲存到本地</button></div>
      <div class="code-wrap">
        <a-qrcode 
              :value="qrCodeValue" 
              :size="150" 
              :icon="logoUrl"
              error-level="H"
              class="custom-qrcode"
            />
      </div>
      <!-- <div class="qr-modal-content">
          <div class="close-btn" @click="showQRModal = false">
              <van-icon name="cross" color="#fff" size="24" />
          </div>
          
          <div class="modal-header-text">
              <div class="title">想擁有 <span class="highlight">加密貨幣?</span></div>
              <div class="subtitle">與我們一起開始您的加密貨幣之旅</div>
          </div>
          
          <div class="qr-code-wrapper" ref="qrCodeRef">
             <a-qrcode 
                :value="qrCodeValue" 
                :size="200" 
                :icon="logoUrl"
                error-level="H"
                class="custom-qrcode"
             />
          </div>
          
          <button class="save-btn" @click="downloadQRCode">
              儲存到本地
          </button>
      </div> -->
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue';
import { ref, computed } from 'vue'
import logoUrl from '@/assets/images/logo.png' // Ensure logo exists or use empty string

const inviteCode = ref('jzkllcweok') // Mock data
const inviteLink = ref('https://nbitmx.com/customer/index') // Mock data

const showQRModal = ref(false)
const qrCodeValue = computed(() => `${inviteLink.value}?code=${inviteCode.value}`)
const qrCodeRef = ref<HTMLElement | null>(null)

const downloadQRCode = () => {
  const canvas = document.querySelector('.custom-qrcode canvas') as HTMLCanvasElement;
  if (canvas) {
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.download = 'nbitmx-invite-qr.png';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
</script>

<style scoped lang="less">
/* QR Modal Styles */
.qr-modal-popup {
  overflow: visible;
  .header {
        box-sizing: border-box;
        height: 200px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        padding-top: 18px;
        padding-left: 20px
    }

    .header h3 {
        margin-top: 45px;
        margin-left: 20px;
        font-size: 26px;
        --un-text-opacity: 1;
        color: rgb(255 255 255 / var(--un-text-opacity));
        font-weight: 700
    }

    .header h3 span {
        color: #f2c017
    }

    .header p {
        margin-left: 20px;
        font-size: 16px
    }

    .header .van-icon {
        color: var(--font-color-main);
        position: absolute;
        top: 20px;
        right: 20px;
        border-radius: 9999px;
        --un-bg-opacity: 1;
        background-color: rgb(0 0 0 / var(--un-bg-opacity));
        padding: 5px;
        font-size: 20px;
        font-weight: 700
    }

    .content img.bg2 {
        position: absolute;
        left: 50px;
        bottom: 40px;
        z-index: 1
    }

    .content img.bg1 {
        position: absolute;
        top: 0;
        left: 50%;
        --un-translate-x: -50%;
        transform: translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))
    }

    .bottom {
        background: linear-gradient(180deg,#00a609b3,#0e0f18b3);
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 114px
    }

    .bottom .btn {
        width: 160px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        padding: 5px 10px;
        font-size: 16px;
        position: absolute;
        bottom: 40px;
        right: 45px;
        cursor: pointer;
        border-style: none;
        --un-bg-opacity: 1;
        background-color: rgb(0 240 240 / var(--un-bg-opacity));
        --un-text-opacity: 1;
        color: rgb(0 0 0 / var(--un-text-opacity))
    }

    .code-wrap {
        border: 2px solid #53bd68;
        position: absolute;
        bottom: 100px;
        right: 50px;
        width: 150px;
        height: 150px;
        border-radius: 8px;
        --un-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--un-bg-opacity));
        display: flex;
        align-items: center;
        justify-content: center
    }
}




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
  justify-content: space-between;
}

.customer-left-content {
  width: 600px;
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
  line-height: 48px;
}

.customer-left-content h4 {
  margin-bottom: 36px;
  font-size: 16px;
  color: #888;
  font-weight: 500;
}

.banner-placeholder {
  width: 100%;
  height: 514px;
  // background: #333;
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
  padding: 40px;
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
  text-align: right;
}

.amount-row .input-border input {
  margin-right: 90px;
  margin-top: 8px;
  align-items: center;
  text-align: right;
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
  justify-content: center;
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
  column-gap: 10px;
}

.my-invite {
  border: 1px solid #2c2c3e;
  width: 100%;
  height: 240px;
  display: flex;
  border-radius: 20px;
}

.my-invite div {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.my-invite div span {
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #888;
  line-height: 15px;
}

.my-invite div .amount {
  height: 45px;
  text-align: center;
  font-size: 24px;
  color: #fff;
  line-height: 45px;
}

.my-invite .line {
  position: relative;
  margin-top: 2vw;
  margin-bottom: 2vw;
  margin-left: auto;
  margin-right: auto;
  height: 1px;
  flex-basis: 90%;
  background-color: #373739;
}

/* Helper classes */
.mb-40px {
  margin-bottom: 40px;
}

.mt-70px {
  margin-top: 70px;
}

.mt-40px {
  margin-top: 40px;
}

.mb-20px {
  margin-bottom: 20px;
}

.text-18px {
  font-size: 18px;
}

.text-white {
  color: white;
}

.text-black {
  color: black;
}

.text-14px {
  font-size: 14px;
}

.fw-700 {
  font-weight: 700;
}

/* van-field styling */
:deep(.van-field) {
  background: transparent;
  height: 100%;
  padding: 0 0 0 20px;
}

:deep(.van-field__label) {
  color: #c8c9cc;
  display: flex;
  align-items: center;
}

:deep(.van-field__control) {
  color: #fff;
  text-align: right;
  padding-right: 20px;
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
    padding: 0;
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
    background-color: #00f0f0;
  }

  .label-text {
    font-size: 4.5vw;
    text-transform: uppercase;
  }

  .code {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 4vw;
  }

  .my-invite {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }

  .my-invite div {
    display: flex;
    flex: none;
    flex-basis: 50%;
    flex-direction: column;
  }

  .my-invite div span {
    height: 9vw;
    text-align: center;
    font-size: 12px;
    color: #888;
    font-weight: 700;
    line-height: 9vw;
  }

  .my-invite div .amount {
    font-size: 4.3vw;
    color: #00f0ff;
  }

  .my-invite .line {
    position: relative;
    margin-top: 2vw;
    margin-bottom: 2vw;
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    flex-basis: 90%;
    background-color: #373739;
  }
}
</style>
