import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable for detecting device type and screen size
 * Returns reactive properties for device detection
 */
export function useDevice() {
  // Mobile breakpoint: 768px (matches common tablet/mobile breakpoint)
  const MOBILE_BREAKPOINT = 768

  // Reactive state
  const isMobile = ref(false)
  const isTablet = ref(false)
  const isDesktop = ref(false)
  const screenWidth = ref(0)
  const screenHeight = ref(0)

  // Update device type based on screen width
  const updateDeviceType = () => {
    screenWidth.value = window.innerWidth
    screenHeight.value = window.innerHeight

    if (screenWidth.value < MOBILE_BREAKPOINT) {
      isMobile.value = true
      isTablet.value = false
      isDesktop.value = false
    } else if (screenWidth.value >= MOBILE_BREAKPOINT && screenWidth.value < 1024) {
      isMobile.value = false
      isTablet.value = true
      isDesktop.value = false
    } else {
      isMobile.value = false
      isTablet.value = false
      isDesktop.value = true
    }
  }

  // Initialize on mount
  onMounted(() => {
    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)
  })

  // Cleanup on unmount
  onUnmounted(() => {
    window.removeEventListener('resize', updateDeviceType)
  })

  return {
    isMobile,
    isTablet,
    isDesktop,
    screenWidth,
    screenHeight
  }
}
