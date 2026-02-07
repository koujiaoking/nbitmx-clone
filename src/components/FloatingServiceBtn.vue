<template>
  <!-- Floating Customer Service Button -->
  <div class="floating-service-btn">
    <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="fill-white">
      <path d="M14.5218 5.72703C14.2979 2.53356 11.4782 0 8.04314 0C4.6225 0 1.81305 2.51177 1.56754 5.68541C0.64715 6.06391 0.00102724 6.94476 0.00102724 7.96928V10.5167C0.00102724 11.8851 1.15562 12.9988 2.57422 12.9988H3.56549C4.08012 12.9988 4.49718 12.5965 4.49718 12.1001V6.38593C4.49718 5.88952 4.08012 5.48724 3.56549 5.48724H3.46379C3.79969 3.40154 5.7247 1.79737 8.04314 1.79737C10.3616 1.79737 12.2876 3.40154 12.6225 5.48724H12.4355C11.9209 5.48724 11.5039 5.88952 11.5039 6.38593V12.1001C11.5039 12.4251 11.6836 12.7094 11.9517 12.867C11.3436 13.4367 10.3749 14.0877 9.00873 14.274C8.83828 14.1517 8.63152 14.0857 8.41911 14.0857H7.74011C7.19158 14.0857 6.74782 14.5147 6.74782 15.0429C6.74782 15.572 7.1926 16 7.74011 16H8.41911C8.71289 16 8.97689 15.8761 9.15871 15.68C11.7576 15.353 13.2378 13.7122 13.7822 12.973C15.0334 12.8056 16 11.7691 16 10.5177V7.96928C15.999 6.97845 15.3929 6.12435 14.5218 5.72703Z"></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
// Floating customer service button component
</script>

<style scoped lang="less">
.floating-service-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00e6e6 0%, #00d0d0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 230, 230, 0.4);
  transition: all 0.3s ease;
}

.floating-service-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 230, 230, 0.6);
}

.floating-service-btn svg {
  width: 28px;
  height: 28px;
}
</style>
