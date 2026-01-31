import type { Directive } from 'vue'

/**
 * 滚动到元素时触发动画的指令
 * 使用 IntersectionObserver 监听元素是否进入视口
 * 每个元素只触发一次动画
 * 
 * @example
 * <div v-animate-on-scroll="'animate__fadeIn'">Content</div>
 * <div v-animate-on-scroll="'animate__slideInUp'">Content</div>
 */
const animateOnScroll: Directive<HTMLElement, string> = {
  mounted(el: HTMLElement, binding) {
    const className = binding.value || 'animate__fadeIn'

    // 确保元素有 animate__animated 基础类
    if (!el.classList.contains('animate__animated')) {
      el.classList.add('animate__animated')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) {
          // 元素进入视口，添加动画类
          el.classList.add(className)

          // 动画完成后取消观察（只执行一次）
          observer.unobserve(el)
        }
      },
      {
        threshold: 0.1, // 元素进入视口10%时触发
        rootMargin: '0px 0px -50px 0px' // 底部偏移，让动画更早触发
      }
    )

    observer.observe(el)
  },

  unmounted(el: HTMLElement) {
    // 组件卸载时移除可能的 observer（虽然已经 unobserve 了，但保险起见）
    // IntersectionObserver 会自动清理
  }
}

export default animateOnScroll
