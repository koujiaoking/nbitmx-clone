<template>
  <!-- Mobile View -->
  <div v-if="isMobile" class="mobile-withdraw-view">
    <van-nav-bar
        title="提幣"
        left-arrow
        fixed
        placeholder
        @click-left="onClickLeft"
        class="mobile-navbar"
      >
        <template #right>
    <span class="text-[#00f0ff] text-sm" @click="$router.push('/customer/index')">聯繫客服</span>
  </template>
        </van-nav-bar>

    <div class="content px-4 pt-4">
      <div class="label text-[#888] mb-2">帳戶</div>
      
      <!-- Account/Currency Select -->
      <div class="form-item mb-6">
        <div class="select-box bg-[#1f1f2f] rounded p-3 flex justify-between items-center border border-[#2c2c3e]" @click="showCurrencySheet = true">
           <div class="flex items-center">
             <img :src="currentCurrency.icon" class="w-6 h-6 rounded-full mr-2" />
             <span class="text-white">{{ currentCurrency.name }}</span>
           </div>
           <van-icon name="arrow-down" color="#888" />
        </div>
        <div class="text-[#888] text-xs mt-2">可提取數量 {{ currentCurrency.balance || 0 }} {{ currentCurrency.shortName }}</div>
      </div>

      <!-- Address Input (Replaced with Selection) -->
      <div class="form-item mb-6">
        <div class="label text-[#888] mb-2">錢包地址</div>
        <div class="input-box bg-[#1f1f2f] rounded p-3 flex justify-between items-center border border-[#2c2c3e]" @click="showAddressSheet = true">
           <span v-if="selectedAddress" class="text-white text-sm break-all pr-2">{{ selectedAddress.address }}</span>
           <span v-else class="text-[#5e5e7a] text-sm">請選擇提幣地址</span>
           <van-icon name="arrow-down" color="#888" size="16" />
        </div>
      </div>

      <!-- Amount Input -->
      <div class="form-item mb-6">
        <div class="label text-[#888] mb-2">提幣金額</div>
        <div class="input-box bg-[#1f1f2f] rounded p-3 flex justify-between items-center border border-[#2c2c3e]">
           <input type="number" v-model="withdrawAmount" placeholder="輸入提幣金額" class="bg-transparent text-white w-full outline-none text-sm placeholder-[#5e5e7a]" />
           <div class="flex items-center">
             <span class="text-[#00f0ff] text-sm mr-2 font-bold" @click="withdrawAmount = '1000'">All</span>
             <SvgIcon type="other" name="icon-unit-t" class="w-4 h-4 text-[#00f0ff]" />
           </div>
        </div>
        
        <div class="limit-info mt-4 text-[#888] text-xs">
           <div class="flex justify-between mb-1">
             <span>提幣範圍</span>
             <span>{{ currentCurrency.range }} {{ currentCurrency.shortName }}</span>
           </div>
           <div class="flex justify-between">
             <span>提幣手續費 <van-icon name="question-o" color="#00f0ff" size="14" class="ml-1" @click.stop="showFeeInfoSheet = true" /> 0%</span>
             <span>預計到帳 {{ estimatedArrival }} {{ currentCurrency.shortName }}</span>
           </div>
        </div>
      </div>

      <!-- Submit -->
      <van-button block color="#00f0ff" class="submit-btn text-black rounded-full mt-8" @click="handleSubmit">
        <span class="text-black font-bold">提交</span>
      </van-button>
      
      <!-- Popups -->
      <CoinSelectionPopup
        v-model:show="showCurrencySheet"
        title="選擇幣種"
        :options="currencyOptions"
        @select="onSelectCurrency"
      />
      
      <AddressSelectionPopup
        v-model:show="showAddressSheet"
        :options="addressOptions"
        @select="onSelectAddress"
      />
      
      <FeeInfoPopup
        v-model:show="showFeeInfoSheet"
      />

      <!-- Fund Password Modal Stub -->
      <van-popup v-model:show="showFundPassword" position="bottom" round :style="{ height: '40%' }" class="fund-password-popup">
        <div class="p-4 bg-[#1a1a2e] h-full relative">
            <div class="text-center text-white text-lg font-bold mb-6">設定資金密碼</div>
            <van-icon name="cross" class="absolute top-4 right-4 text-white" @click="showFundPassword = false" />
            
            <div class="text-white text-sm mb-2 flex items-center">
                <span class="w-1 h-3 bg-[#556dea] mr-2 display-inline-block"></span>
                資金密碼
            </div>
            
            <div class="password-input bg-[#0d0d12] p-3 rounded mb-8 flex justify-between items-center">
                <input type="password" placeholder="請輸入新密碼" class="bg-transparent text-white w-full outline-none" />
                <van-icon name="closed-eye" color="#fff" />
            </div>
            
            <van-button block color="#00f0ff" class="text-black rounded-full" @click="handleSetPassword">
                <span class="text-black font-bold">確認</span>
            </van-button>
        </div>
      </van-popup>
    </div>
  </div>

  <!-- PC View (Preserved) -->
  <div v-else class="w-1360px mx-auto min-h-1026px pt-30px pb-70px withdraw-view">
     <!-- ... PC content ... -->
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
                <span class="select-right">
                  <img class="currency-icon" src="https://bitcotyrax.oss-ap-southeast-1.aliyuncs.com/image2e4301b9d05641c095fdf51de154b4ff.png" alt="">
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
              <span>提幣地址</span>
              <input type="text" maxlength="65" v-model="withdrawAddress" placeholder="">
              <div class="bookwrap">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ececff">
                  <path d="M18 2H8C6.93913 2 5.92172 2.42143 5.17157 3.17157C4.42143 3.92172 4 4.93913 4 6V18C4 19.0609 4.42143 20.0783 5.17157 20.8284C5.92172 21.5786 6.93913 22 8 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V4C20 3.46957 19.7893 2.96086 19.4142 2.58579C19.0391 2.21071 18.5304 2 18 2ZM6 6C6 5.46957 6.21071 4.96086 6.58579 4.58579C6.96086 4.21071 7.46957 4 8 4H18V14H8C7.29504 14.003 6.60399 14.1964 6 14.56V6ZM8 20C7.46957 20 6.96086 19.7893 6.58579 19.4142C6.21071 19.0391 6 18.5304 6 18C6 17.4696 6.21071 16.9609 6.58579 16.5858C6.96086 16.2107 7.46957 16 8 16H18V20H8Z"></path>
                </svg>
              </div>
            </div>
            
            <ul class="tips">
              <li>提幣將從[錢包地址/帳戶]轉出 <span style="color: rgb(255, 255, 255);">合約帳戶</span> 從可用餘額中扣除</li>
              <li>請確認您的提幣地址是否正確。錯誤的地址將導致資產損失且無法追回。</li>
            </ul>
            
            <div class="view-detail step2">提幣詳情</div>
            
            <div class="cm-input-box-pc">
              <span>提幣金額</span>
              <input class="numeric-input text-right" type="text" placeholder="輸入金額" v-model="withdrawAmount">
            </div>
            
            <div class="count-fee-item"><span>可用金額</span><span>0.000000 USDT</span></div>
            <div class="count-fee-item"><span>最小提幣金額</span><span>1 USDT</span></div>
            <div class="count-fee-item"><span>提幣手續費</span><i class="icon-question"></i><span>0%</span></div>
            <div class="count-fee-item recevie"><span>預計到帳</span><span>{{ withdrawAmount || 0 }} USDT</span></div>
            
            <div class="next-btn" @click="handleSubmit">提交</div>
          </div>
        </div>
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
import { ref, computed } from 'vue'
import AppHeader from '@/components/mobile/AppHeader.vue'
import CoinSelectionPopup from '@/components/mobile/CoinSelectionPopup.vue'
import AddressSelectionPopup from '@/components/mobile/AddressSelectionPopup.vue'
import FeeInfoPopup from '@/components/mobile/FeeInfoPopup.vue'
import SvgIcon from '@/components/base/SvgIcon.vue'
import { useDevice } from '@/composables/useDevice'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()

// Back Button Logic
const onClickLeft = () => {
  router.back()
}
const { isMobile } = useDevice()
const withdrawAddress = ref('') // Needs to be synced if using text input in PC, but mobile uses selectedAddress obj
const withdrawAmount = ref('')
const showCurrencySheet = ref(false)
const showAddressSheet = ref(false)
const showFeeInfoSheet = ref(false)
const showFundPassword = ref(false)

const currentCurrency = ref({ 
    name: 'USDT-ERC', 
    shortName: 'USDT',
    icon: 'https://bitcotyrax.oss-ap-southeast-1.aliyuncs.com/image2e4301b9d05641c095fdf51de154b4ff.png',
    balance: '0.000000',
    range: '1 - 100000000'
})

const selectedAddress = ref<any>(null)

const currencyOptions = [
    { name: 'USDT-ERC', shortName: 'USDT', icon: 'https://bitcotyrax.oss-ap-southeast-1.aliyuncs.com/image2e4301b9d05641c095fdf51de154b4ff.png', balance: '0.000000', range: '1 - 100000000' },
    { name: 'USDT-TRC', shortName: 'USDT', icon: 'https://bitcotyrax.oss-ap-southeast-1.aliyuncs.com/image2e4301b9d05641c095fdf51de154b4ff.png', balance: '100.000000', range: '0.1 - 50000000' }
]

const addressOptions = [
    { label: 'My Wallet 1', address: '0x123123123123123123123123123' },
    { label: 'Exchange Wallet', address: 'TVxyz123abc456def789' },
    { label: 'Cold Storage', address: '0xabcde1234567890fghijk' }
]

const estimatedArrival = computed(() => {
    return withdrawAmount.value || '0'
})

const onSelectCurrency = (item: any) => {
    currentCurrency.value = item
    showCurrencySheet.value = false
    // showToast(`Selected ${item.name}`)
}

const onSelectAddress = (item: any) => {
    selectedAddress.value = item
    withdrawAddress.value = item.address
    showAddressSheet.value = false
}

const handleSubmit = () => {
    if (!withdrawAddress.value || !withdrawAmount.value) {
        showToast('請輸入地址和金額')
        return
    }
    // Mock logic: show fund password modal
    showFundPassword.value = true
}

const handleSetPassword = () => {
    showToast('資金密碼已設置')
    showFundPassword.value = false
}
</script>



<style scoped lang="less">
/* Mobile Styles */
.mobile-withdraw-view {
  min-height: 100vh;
  background-color: #000;
  padding-bottom: 20px;
}

.fund-password-popup {
    background: transparent;
}

/* PC Styles (Preserved) */
.withdraw-view {
  box-sizing: border-box;
}

/* ... Existing PC styles ... */

/* === Section Top === */
.section-top {
  width: 100%;
  min-height: 434px;
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

.section-top .left {
  flex: 1;
}

.section-top .left h4 {
  font-size: 18px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 30px;
}

.section-top .left .content {
  display: flex;
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

/* === Get Address (Withdrawal Address) === */
.get-address {
  width: 456px;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #2c2c3e;
  background: #1f1f2f;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #5e5e7a;
}

.get-address span {
  color: #5e5e7a;
  white-space: nowrap;
}

.get-address input {
  flex: 1;
  height: 42px;
  border: none;
  outline: none;
  background: transparent;
  text-align: right;
  color: #fff;
  padding-right: 8px;
}

.get-address .bookwrap {
  width: 43px;
  height: 100%;
  border-radius: 0 5px 5px 0;
  background: linear-gradient(90deg, #6491e9 49.79%, #556dea);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* === Tips === */
.tips {
  display: block;
  margin-bottom: 10px;
  margin-top: 20px;
  padding-left: 20px;
  color: #84849f;
  font-size: 14px;
}

.tips li {
  list-style-type: disc;
  margin-top: 5px;
}

/* === View Detail === */
.view-detail {
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  color: #5e5e7a;
}

.view-detail.step2 {
  color: #fff;
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

/* === Count Fee Item === */
.count-fee-item {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.count-fee-item span:nth-child(1) {
  color: #5e5e7a;
}

.count-fee-item span:nth-child(2) {
  margin-left: 20px;
  color: #fff;
}

.count-fee-item .icon-question {
  background-image: url("data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2013.09C3.636%2013.09%200.91%2010.363%200.91%207C0.91%203.636%203.636%200.91%207%200.91C10.363%200.91%2013.09%203.636%2013.09%207C13.09%2010.363%2010.363%2013.09%207%2013.09Z'%20fill='%2300F0FF'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 16px;
  height: 16px;
  margin: 0 20px 0 5px;
  cursor: pointer;
}

/* === Next Button === */
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

.section-bottom {
  box-sizing: border-box;
  width: 100%;
  min-height: 462px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  background: #1f1f2f;
}

.section-bottom h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2c2c3e;
  height: 70px;
  line-height: 70px;
  margin: 0;
  padding: 0;
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
  color: #84849f;
  font-size: 12px;
  height: 47px;
  border-bottom: 1px solid #2c2c3e;
}

.section-bottom .data-list .list-wrap {
  flex: 1;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-bottom .data-list .column {
  flex: 1;
  padding: 0 8px;
  text-align: center;
}

.section-bottom .data-list .orderNo {
  flex: 1.5;
}

.section-bottom .data-list .column0 {
  text-align: left;
}

.section-bottom .data-list .column2 {
  flex: 3;
}

.cm-empty-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #5e5e7a;
}

/* === Responsive === */
</style>
