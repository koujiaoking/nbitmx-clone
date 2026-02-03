<template>
  <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm" @click.self="close">
    <div class="w-[90%] max-w-[400px] bg-[#1E2026] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up">
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-[#2B2F36]">
        <span class="text-lg font-medium text-white">{{ $t('fundPassword.title') }}</span>
        <div class="text-[#848E9C] hover:text-white cursor-pointer" @click="close">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
      </div>

      <!-- Body -->
      <div class="p-6">
        <div class="flex items-center mb-4">
          <span class="w-2 h-2 mr-2 bg-[#5D7CFE] rounded-xs"></span>
          <span class="text-sm font-bold text-white">{{ $t('fundPassword.label') }}</span>
        </div>
        
        <div class="relative bg-black/40 rounded border border-[#2B2F36] focus-within:border-[#00f0ff] transition-colors">
          <input 
            :type="showPassword ? 'text' : 'password'" 
            v-model="password"
            :placeholder="$t('fundPassword.placeholder')"
            class="w-full h-[48px] bg-transparent text-white px-4 text-sm focus:outline-none"
          />
          <div class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#848E9C] hover:text-white" @click="showPassword = !showPassword">
            <van-icon :name="showPassword ? 'eye-o' : 'closed-eye'" size="20" />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="px-6 pb-6">
        <button 
          @click="confirm"
          class="w-full h-[48px] bg-[#00f0ff] hover:bg-[#00d0df] text-black font-bold rounded flex items-center justify-center transition-colors text-base"
        >
          {{ $t('fundPassword.confirm') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['update:show', 'confirm'])

const password = ref('')
const showPassword = ref(false)

const close = () => {
  emit('update:show', false)
  password.value = ''
}

const confirm = () => {
  if (password.value) {
    emit('confirm', password.value)
    close()
  }
}
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out;
}
</style>
