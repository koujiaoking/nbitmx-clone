<template>
  <div class="transfer-view min-h-screen bg-black text-white">
    <!-- Mobile Header -->
    <van-nav-bar
        v-if="isMobile"
        title="劃轉"
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
    <!-- Fallback or PC Header -->
    <AppHeader v-else :show-logo="false" title="劃轉">
      <template #right>
        <span class="text-[#00f0ff] text-sm" @click="$router.push('/customer/index')">聯繫客服</span>
      </template>
    </AppHeader>

    <div class="content px-4 pt-4">
      <!-- From/To Section -->
      <div class="transfer-card bg-[#1f1f2f] rounded-lg p-4 mb-6 relative border border-[#2c2c3e]">
        <div class="from-row flex justify-between items-center mb-4" @click="showAccountPicker">
           <span class="text-[#888] w-12 text-sm">從</span>
           <div class="flex-1 flex justify-between items-center">
              <span class="text-white">{{ fromAccount }}</span>
              <van-icon name="arrow-down" color="#888" size="12" />
           </div>
        </div>
        
        <div class="divider border-t border-dashed border-[#2c2c3e] my-2 relative">
           <div class="swap-icon absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1f1f2f] p-1 rounded-full cursor-pointer" @click.stop="swapAccounts">
              <van-icon name="exchange" color="#fff" size="20" class="transform rotate-90" />
           </div>
        </div>

        <div class="to-row flex justify-between items-center mt-4" @click="showAccountPicker">
           <span class="text-[#888] w-12 text-sm">到</span>
           <div class="flex-1 flex justify-between items-center">
              <span class="text-white">{{ toAccount }}</span>
              <van-icon name="arrow-down" color="#888" size="12" />
           </div>
        </div>
      </div>

      <!-- Currency Select -->
      <div class="label text-white mb-2 font-bold">加密貨幣</div>
      <div class="form-item mb-6">
        <div class="select-box bg-[#1f1f2f] rounded p-3 flex justify-between items-center border border-[#2c2c3e]" @click="showCurrencySheet = true">
           <div class="flex items-center">
             <img :src="currentCurrency.icon" class="w-6 h-6 rounded-full mr-2" />
             <span class="text-white">{{ currentCurrency.name }}</span>
           </div>
           <van-icon name="arrow-down" color="#888" />
        </div>
      </div>

      <!-- Amount Input -->
      <div class="label text-white mb-2 font-bold">數量</div>
      <div class="form-item mb-2">
        <div class="input-box bg-[#1f1f2f] rounded p-3 flex justify-between items-center border border-[#2c2c3e]">
           <input type="number" v-model="transferAmount" placeholder="Amount to transfer" class="bg-transparent text-white w-full outline-none text-sm placeholder-[#5e5e7a]" />
           <div class="flex items-center">
             <span class="text-[#00f0ff] text-sm w-20 font-bold text-right" @click="transferAmount = '1000'">全部劃轉</span>
           </div>
        </div>
      </div>
      <div class="text-[#888] text-xs mb-8">最大可劃轉 {{ currentCurrency.balance || 0 }} {{ currentCurrency.shortName }}</div>

      <!-- Submit -->
      <van-button block color="#00f0ff" class="submit-btn text-black rounded-full" @click="handleSubmit">
        <span class="text-black font-bold">確認劃轉</span>
      </van-button>
      
      <div class="text-center mt-6">
        <span class="text-[#00f0ff] text-sm" @click="$router.push('/assets/recharge')">購買加密貨幣</span>
      </div>
      
    </div>

    <!-- Modals -->
    <AccountPicker
        v-model:show="showAccountSheetVisible"
        :columns="accountColumns"
        title="從 → 到"
        @confirm="onAccountConfirm"
    />
    
    <CoinSelectionPopup
        v-model:show="showCurrencySheet"
        title="選擇幣種"
        :options="currencyOptions"
        @select="onSelectCurrency"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppHeader from '@/components/mobile/AppHeader.vue'
import AccountPicker from '@/components/mobile/AccountPicker.vue'
import CoinSelectionPopup from '@/components/mobile/CoinSelectionPopup.vue'
import SvgIcon from '@/components/base/SvgIcon.vue'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
import { useDevice } from '@/composables/useDevice'

const router = useRouter()
const { isMobile } = useDevice()

const onClickLeft = () => {
  router.back()
}

const fromAccount = ref('期權賬戶')
const toAccount = ref('現貨賬戶')
const transferAmount = ref('')
const showAccountSheetVisible = ref(false)
const showCurrencySheet = ref(false)

const accountTypes = ['期權賬戶', '現貨賬戶', '合約賬戶']
const options = accountTypes.map(t => ({ text: t, value: t }))
const accountColumns = [
    options,
    options
]

const currentCurrency = ref({ 
    name: 'USDT', 
    shortName: 'USDT',
    icon: 'https://bitcotyrax.oss-ap-southeast-1.aliyuncs.com/image2e4301b9d05641c095fdf51de154b4ff.png',
    balance: '1000.00'
})

const currencyOptions = [
    { name: 'USDT', shortName: 'USDT', icon: 'https://bitcotyrax.oss-ap-southeast-1.aliyuncs.com/image2e4301b9d05641c095fdf51de154b4ff.png', balance: '1000.00' },
    { name: 'USDC', shortName: 'USDC', icon: 'https://bitcotyrax.oss-ap-southeast-1.aliyuncs.com/image2e4301b9d05641c095fdf51de154b4ff.png', balance: '500.00' }
]

const showAccountPicker = () => {
    // Set default selected indexes could be added if needed, but van-picker handles internal state state or we pass default-index
    showAccountSheetVisible.value = true
}

const onAccountConfirm = (selectedValues: any[]) => {
    // selectedValues is array of selected options from columns
    // For simple string columns, it's just the strings.
    // If objects, it's objects.
    // Start with checking what van-picker returns for multi-column
    if (Array.isArray(selectedValues)) {
         // Vant picker returns the selected values (not options) if columns are simple,
         // but if columns are objects, it might return the values if configured, or options.
         // With columns-field-names, the events usually return the values defined by 'value'.
         // However, onConfirm({ selectedOptions }) returns the objects.
         // Let's use selectedOptions from the arg destructured in AccountPicker, wait.
         // AccountPicker emits `selectedOptions`.
         // So here selectedValues IS selectedOptions (array of objects).
         fromAccount.value = selectedValues[0]?.value || selectedValues[0]
         toAccount.value = selectedValues[1]?.value || selectedValues[1]
    }
    showAccountSheetVisible.value = false
}

const onSelectCurrency = (item: any) => {
    currentCurrency.value = item
    showCurrencySheet.value = false
    // showToast(`Selected ${item.name}`)
}

const swapAccounts = () => {
    const temp = fromAccount.value
    fromAccount.value = toAccount.value
    toAccount.value = temp
}

const handleSubmit = () => {
    showToast('劃轉成功')
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
