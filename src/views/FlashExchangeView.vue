<template>
  <div class="flash-exchange-view min-h-screen bg-black text-white">
    <!-- Mobile Header -->
    <van-nav-bar
        v-if="isMobile"
        title="閃兌"
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
    <!-- Fallback or PC Header (if needed later, currently AppHeader was used) -->
    <AppHeader v-else :show-logo="false" title="閃兌">
      <template #right>
        <span class="text-[#00f0ff] text-sm" @click="$router.push('/customer/index')">聯繫客服</span>
      </template>
    </AppHeader>

    <div class="content px-4 pt-4">
      <div class="exchange-circle mx-auto flex flex-col justify-center items-center mb-[40px]">
          <div class="text-center color-white text-24px mt-40px">0</div>
          <div class="text-center color-gray text-14px mt-8px">可用餘額 (TRX)</div>
      </div>

      <!-- From Input -->
      <div class="form-item mb-4">
        <div class="input-box bg-[#1f1f2f] rounded p-3 flex justify-between items-center border border-[#2c2c3e]">
           <input type="number" v-model="fromAmount" placeholder="0" class="bg-transparent text-white w-full outline-none text-lg" />
           <div class="flex items-center" @click="showCurrencySheet('from')">
             <span class="text-[#00f0ff] text-sm mr-2 font-bold w-10">全部</span>
             <span class="text-white font-bold mr-1">{{ fromCurrency }}</span>
             <van-icon name="arrow-down" color="#888" size="12" />
           </div>
        </div>
      </div>

      <!-- To Input -->
      <div class="form-item mb-4">
        <div class="input-box bg-[#1f1f2f] rounded p-3 flex justify-between items-center border border-[#2c2c3e]">
           <input type="number" v-model="toAmount" placeholder="0" class="bg-transparent text-white w-full outline-none text-lg" disabled />
           <span class="text-white font-bold mr-1">{{ toCurrency }}</span>
        </div>
      </div>
      
      <div class="rate-info flex items-center text-[#888] text-xs mb-8">
          <span>今日匯率 1 {{ fromCurrency }} ≈ {{ exchangeRate }} {{ toCurrency }}</span>
          <img src="@/assets/images/icon-trans.svg" class="w-4 h-4 ml-1" @click="() => {}" />
      </div>

      <!-- Submit -->
      <van-button block color="#00f0ff" class="submit-btn text-black rounded-full" @click="handleSubmit">
        <span class="text-black font-bold">確認</span>
      </van-button>
      
    </div>

    <!-- Modals -->
    <CoinSelectionPopup
        v-model:show="showCurrencySheetVisible"
        title="選擇幣種"
        :options="currencyOptions"
        @select="onSelectCurrency"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import AppHeader from '@/components/mobile/AppHeader.vue'
import CoinSelectionPopup from '@/components/mobile/CoinSelectionPopup.vue'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
import { useDevice } from '@/composables/useDevice'

const router = useRouter()
const { isMobile } = useDevice()

const onClickLeft = () => {
  router.back()
}

const fromAmount = ref('')
const toAmount = ref('')
const fromCurrency = ref('TRX')
const toCurrency = ref('USDT')
const exchangeRate = ref(0.2754)
const showCurrencySheetVisible = ref(false)

const currencyOptions = [
    { name: 'TRX', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0641ec97345654e7e99e024bcb569c9fd.png' }, // Placeholder icons
    { name: 'USDT', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0998f55db750c4170b786f51659698f5a.png' },
    { name: 'USDC', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0641ec97345654e7e99e024bcb569c9fd.png' },
    { name: 'ETH', icon: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0680cf64887f44f3fa7a8b55e243b7597.png' }
]

const showCurrencySheet = (type: string) => {
    // Only 'from' is selectable in this simplified version based on screenshot
    if (type === 'from') {
        showCurrencySheetVisible.value = true
    }
}

const onSelectCurrency = (item: any) => {
    fromCurrency.value = item.name
    showCurrencySheetVisible.value = false
}

watch(fromAmount, (val) => {
    if (val) {
        toAmount.value = (parseFloat(val) * exchangeRate.value).toFixed(4)
    } else {
        toAmount.value = ''
    }
})

const handleSubmit = () => {
    showToast('閃兌成功')
}
</script>

<style scoped>
/* Ensure navbar inherits or sets correct styles if needed */
:deep(.van-nav-bar) {
  background-color: #000;
}
:deep(.van-nav-bar__title) {
  color: #fff;
}
:deep(.van-nav-bar__arrow) {
  color: #fff;
}
</style>
