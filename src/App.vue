<template>
  <div id="app" :class="{ 'is-mobile': isMobile, 'is-desktop': isDesktop }">
    <!-- <AppLoadingSpinner /> -->
    <!-- PC Layout (Desktop) -->
    <template v-if="isDesktop">
      <!-- Desktop Header -->
      <AppHeader />
      
      <!-- Page Content -->
      <RouterView />
      
      <!-- Desktop Footer -->
      <AppFooter v-if="!hideFooter" />
      
      <!-- Floating Customer Service Button (Desktop) -->
      <FloatingServiceBtn />
    </template>
    
    <!-- H5 Layout (Mobile/Tablet) -->
    <template v-else>
      <!-- Mobile Header (simplified or hidden based on design) -->
      <AppHeader class="mobile-header" />
      
      <!-- Page Content -->
      <RouterView />
      
      <!-- Mobile Bottom Navigation Tab Bar -->
      <MobileTabBar />
      
      <!-- Mobile Footer (optional, usually hidden on mobile) -->
      <AppFooter v-if="!hideFooter && showMobileFooter" class="mobile-footer" />
      
      <!-- Floating Service Button (Mobile version) -->
      <FloatingServiceBtn class="mobile-service-btn" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDevice } from '@/composables/useDevice'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import MobileTabBar from '@/components/MobileTabBar.vue'
import FloatingServiceBtn from '@/components/FloatingServiceBtn.vue'

const route = useRoute()

// Device detection
const { isMobile, isTablet, isDesktop } = useDevice()

// Footer visibility logic
const hideFooter = computed(() => route.meta.hideFooter === true)

// Show footer on mobile only for specific pages (optional)
const showMobileFooter = computed(() => {
  // You can customize this logic based on your needs
  // For example, show footer on home page but hide on others
  return route.path === '/' 
})
</script>

<style>
/* Global styles */
#app {
  min-height: 100vh;
  background: #0d0d0f;
  color: #fff;
}

/* Desktop-specific adjustments */
#app.is-desktop {
  /* Desktop layout styles */
  max-width: 100vw;
  overflow-x: hidden;
}

/* Mobile-specific adjustments */
#app.is-mobile {
  /* Mobile layout styles */
  padding-bottom: 80px; /* Space for mobile tab bar */
  max-width: 100vw;
  overflow-x: hidden;
}

/* Mobile header modifications */
.mobile-header {
  /* Simplified mobile header styles */
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Mobile footer modifications */
.mobile-footer {
  /* Mobile footer styles */
  font-size: 14px;
  padding: 20px 16px;
}

/* Mobile service button positioning */
.mobile-service-btn {
  bottom: 100px; /* Above the tab bar */
}
</style>
