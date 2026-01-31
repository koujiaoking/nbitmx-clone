/**
 * 响应式路由工具 - 在路由层面自动处理PC/H5组件加载
 * 使用 Vite 的 glob 导入来支持动态路径，并支持窗口大小改变时自动切换
 */
import type { Component } from 'vue'
import { defineAsyncComponent, h, defineComponent } from 'vue'
import { useDevice } from '@/composables/useDevice'

// 预加载所有可能的组件路径
const desktopModules = import.meta.glob('/src/views/**/desktop/index.vue')
const mobileModules = import.meta.glob('/src/views/**/mobile/index.vue')
const unifiedModules = import.meta.glob('/src/views/**/*.vue', {
  eager: false
})

/**
 * 创建响应式包装组件 - 支持窗口变化时自动切换
 */
function createResponsiveWrapper(basePath: string): Component {
  return defineComponent({
    name: 'ResponsiveWrapper',
    setup() {
      const { isDesktop } = useDevice()

      return () => {
        // 根据当前设备类型选择对应的模块集合
        const deviceFolder = isDesktop.value ? 'desktop' : 'mobile'
        const modulePath = basePath.replace('@', '/src') + `/${deviceFolder}/index.vue`
        const modules = isDesktop.value ? desktopModules : mobileModules
        const loader = modules[modulePath]

        if (!loader) {
          console.error(`${deviceFolder} component not found: ${modulePath}`)
          return h('div', { class: 'error-component' }, `Component not found: ${modulePath}`)
        }

        console.log(`[ResponsiveRoute] Rendering ${deviceFolder} component: ${modulePath}`)

        // 动态创建异步组件
        const AsyncComp = defineAsyncComponent(loader as any)
        return h(AsyncComp)
      }
    }
  })
}

/**
 * 创建响应式路由组件
 */
export function createResponsiveComponent(
  basePath: string,
  options: {
    responsive?: boolean
  } = {}
): Component {
  const { responsive = false } = options

  // 业务组件：直接加载统一组件
  if (!responsive) {
    const modulePath = basePath.replace('@', '/src') + '.vue'
    const loader = unifiedModules[modulePath]

    if (!loader) {
      console.error(`Component not found: ${modulePath}`)
      return defineAsyncComponent(() => Promise.reject(new Error(`Component not found: ${basePath}`)))
    }

    return defineAsyncComponent(loader as any)
  }

  // 响应式组件：返回包装组件，支持窗口变化时自动切换
  return createResponsiveWrapper(basePath)
}

/**
 * 简化路由配置
 */
export function defineRoute(path: string, name: string, componentPath: string, options: {
  title?: string
  responsive?: boolean
  hideFooter?: boolean
  [key: string]: any
} = {}) {
  const { title, responsive = false, hideFooter, ...otherMeta } = options

  return {
    path,
    name,
    component: createResponsiveComponent(componentPath, { responsive }),
    meta: {
      title: title || 'Nbitmx',
      hideFooter: hideFooter || false,
      responsive,
      ...otherMeta
    },
  }
}
