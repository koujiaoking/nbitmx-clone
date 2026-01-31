<template>
  <div class="fixed bottom-8 right-8 z-[100] group/cs">
    <!-- Hover Tooltip -->
    <div class="absolute bottom-full right-0 mb-4 opacity-0 group-hover/cs:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover/cs:translate-y-0">
      <div class="bg-[#1e2026] border border-white/10 rounded-xl p-4 shadow-2xl min-w-[200px]">
        <div class="text-white font-bold mb-1">Customer Service</div>
        <div class="text-nbit-gray text-xs mb-3">Online 24/7 to help you.</div>
        <button class="w-full py-2 bg-nbit-cyan text-black text-xs font-bold rounded-lg hover:brightness-110 transition-all">
          Chat Now
        </button>
      </div>
      <!-- Triangle -->
      <div class="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#1e2026] border-r border-b border-white/10 rotate-45"></div>
    </div>

    <!-- Main Button -->
    <button class="w-14 h-14 bg-nbit-cyan rounded-full shadow-[0_8px_24px_rgba(0,240,255,0.4)] flex items-center justify-center text-black hover:scale-110 active:scale-95 transition-all duration-300">
       <div class="i-carbon-service-desk text-2xl"></div>
       <!-- Pulsing Ring -->
       <div class="absolute inset-0 rounded-full border-2 border-nbit-cyan animate-ping opacity-20"></div>
    </button>
  </div>
</template>

<script setup lang="ts">
// No logic needed for static clone
</script>

<style scoped>
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
