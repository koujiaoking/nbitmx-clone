<template>
  <div class="placeholder-page">
    <div class="placeholder-content">
      <div class="icon">🚧</div>
      <h1>{{ title }}</h1>
      <p class="description">{{ description }}</p>
      <p class="note">This page is under construction</p>
      <router-link to="/" class="back-button">
        ← Back to Home
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const title = computed(() => {
  const titles: Record<string, string> = {
    '/recharge': 'Recharge',
    '/copy-trading': 'Copy Trading',
    '/assets': 'My Assets',
    '/withdraw': 'Withdraw',
    '/customer-service': 'Customer Service',
  }
  return titles[route.path] || 'Coming Soon'
})

const description = computed(() => {
  const descriptions: Record<string, string> = {
    '/recharge': 'Deposit funds to your account',
    '/copy-trading': 'Follow expert traders and copy their strategies',
    '/assets': 'Manage your cryptocurrency assets',
    '/withdraw': 'Withdraw funds from your account',
    '/customer-service': 'Get help from our support team',
  }
  return descriptions[route.path] || 'This feature is coming soon'
})
</script>

<style scoped>
.placeholder-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0c0c0f 0%, #1a1a2e 100%);
  padding: 20px;
}

.placeholder-content {
  text-align: center;
  max-width: 600px;
}

.icon {
  font-size: 80px;
  margin-bottom: 20px;
  animation: bounce 2s ease-in-out infinite;
}

h1 {
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  background: linear-gradient(90deg, #00f0ff, #00afff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description {
  font-size: 20px;
  color: #cbd9da;
  margin-bottom: 12px;
}

.note {
  font-size: 16px;
  color: #888;
  margin-bottom: 32px;
}

.back-button {
  display: inline-block;
  padding: 12px 32px;
  background: rgba(0, 240, 255, 0.1);
  border: 2px solid #00f0ff;
  border-radius: 99px;
  color: #00f0ff;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: #00f0ff;
  color: #000;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 240, 255, 0.3);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 768px) {
  .icon {
    font-size: 60px;
  }
  
  h1 {
    font-size: 32px;
  }
  
  .description {
    font-size: 16px;
  }
}
</style>
