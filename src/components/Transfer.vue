<template>
  <div class="transfer-card backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 w-full max-w-md mx-auto mt-8">
    <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
      <i class="i-carbon-send-alt text-blue-400"></i>
      Native Token Transfer
    </h3>

    <div v-if="!isConnected" class="text-center py-8">
      <p class="text-gray-400 mb-4">Please connect your wallet to transfer tokens</p>
      <button 
        @click="openModal"
        class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition-colors font-medium"
      >
        Connect Wallet
      </button>
    </div>

    <form v-else @submit.prevent="handleSend" class="space-y-4">
      <!-- Recipient Address -->
      <div>
        <label class="block text-sm font-medium text-gray-300 mb-2">Recipient Address</label>
        <div class="relative">
          <input
            v-model="toAddress"
            type="text"
            placeholder="0x..."
            class="w-full bg-black/20 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm"
            :disabled="isPending"
            required
            pattern="^0x[a-fA-F0-9]{40}$"
            title="Please enter a valid Ethereum address starting with 0x"
          />
          <!-- Validation Icon -->
          <div v-if="toAddress && isValidAddress" class="absolute right-3 top-1/2 -translate-y-1/2 text-green-400">
             <i class="i-carbon-checkmark-filled"></i>
          </div>
        </div>
      </div>

      <!-- Amount -->
      <div>
        <label class="block text-sm font-medium text-gray-300 mb-2">Amount</label>
        <div class="relative">
          <input
            v-model="amount"
            type="number"
            step="0.000000000000000001"
            min="0"
            placeholder="0.0"
            class="w-full bg-black/20 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors font-mono text-lg"
            :disabled="isPending"
            required
          />
          <div class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
             {{ symbol }}
          </div>
        </div>
        <div class="text-right mt-1 text-xs text-gray-500">
          Balance: {{ formattedBalance }} {{ symbol }}
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm break-words">
        {{ extractErrorMessage(error) }}
      </div>

      <!-- Success / Tx Hash -->
      <div v-if="hash" class="bg-blue-500/10 border border-blue-500/20 px-4 py-3 rounded-lg">
        <div class="text-blue-400 text-sm font-medium mb-1">Transaction Sent!</div>
        <a 
          :href="explorerUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-xs text-blue-300/80 hover:text-blue-300 hover:underline break-all flex items-center gap-1"
        >
          {{ hash }}
          <i class="i-carbon-launch"></i>
        </a>
      </div>
      
      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isPending || !isValidInput || isConfirming"
        class="w-full py-3.5 rounded-lg font-medium text-white transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        :class="isPending || isConfirming ? 'bg-gray-600' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/20'"
      >
        <span v-if="isPending" class="i-svg-spinners-90-ring-with-bg"></span>
        <span v-else-if="isConfirming" class="i-svg-spinners-3-dots-fade"></span>
        <span v-else class="i-carbon-send-filled"></span>
        
        <span v-if="isPending">Confirming in Wallet...</span>
        <span v-else-if="isConfirming">Waiting for Confirmation...</span>
        <span v-else>Send {{ amount || '0' }} {{ symbol }}</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useSendTransaction, useWaitForTransactionReceipt, useBalance } from '@wagmi/vue'
import { parseEther, isAddress, formatUnits } from 'viem'
import { useWeb3Wallet } from '@/composables/useWeb3Wallet'

// Web3 State
const { isConnected, openModal, address, chainId } = useWeb3Wallet()
const { data: balanceData } = useBalance({ address })

// Transaction Hooks
const { 
  sendTransaction, 
  data: hash, 
  error, 
  isPending, 
  reset 
} = useSendTransaction()

const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
  hash,
})

// Form State
const toAddress = ref('')
const amount = ref('')

// Computeds
const symbol = computed(() => balanceData.value?.symbol || 'ETH')
const formattedBalance = computed(() => {
  if (!balanceData.value) return '0.00'
  return Number(formatUnits(balanceData.value.value, balanceData.value.decimals)).toFixed(4)
})

const isValidAddress = computed(() => isAddress(toAddress.value))
const isValidAmount = computed(() => {
  const val = parseFloat(amount.value)
  return !isNaN(val) && val > 0
})
const isValidInput = computed(() => isValidAddress.value && isValidAmount.value)

// Explorer URL Helper
const explorerUrl = computed(() => {
  if (!hash.value) return '#'
  // Simple mapping, can be expanded or moved to config
  const baseUrl = chainId.value === 1 ? 'https://etherscan.io/tx/' :
                  chainId.value === 137 ? 'https://polygonscan.com/tx/' :
                  chainId.value === 56 ? 'https://bscscan.com/tx/' :
                  chainId.value === 42161 ? 'https://arbiscan.io/tx/' :
                  'https://etherscan.io/tx/' // fallback
  return `${baseUrl}${hash.value}`
})

// Actions
const handleSend = async () => {
    if (!isValidInput.value) return
    
    // Reset previous state
    if (error.value || isConfirmed.value) {
        // Unfortunately useSendTransaction reset() might not be available in all versions or behaves differently, 
        // but typically starting a new mutation clears old state in TanStack Query v5 logic implicitly or we handle UI state.
        // We will just let sendTransaction overwrite.
    }

    try {
        await sendTransaction({
            to: toAddress.value as `0x${string}`,
            value: parseEther(amount.value),
        })
    } catch (e) {
        console.error('Transaction Failed:', e)
    }
}

// Watchers
watch(isConfirmed, (val) => {
    if (val) {
        // Use a notification toast in a real app, here we just let the UI reflect success state
        console.log('Transaction Confirmed')
        toAddress.value = ''
        amount.value = ''
    }
})

// Helpers
const extractErrorMessage = (err: any): string => {
    if (!err) return ''
    if (err.shortMessage) return err.shortMessage
    if (err.message) return err.message.slice(0, 100) + '...'
    return 'Transaction failed'
}
</script>

<style scoped lang="less">
/* Add any specific styles if tailwind + uno isn't enough */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
