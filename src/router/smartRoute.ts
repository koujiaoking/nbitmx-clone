/**
 * 智能路由解析器
 * 根据设备类型自动从 desktop 或 mobile 文件夹加载组件
 */
import { defineAsyncComponent, type Component } from 'vue'
import { useDevice } from '@/composables/useDevice'

export interface SmartRouteOptions {
  desktop: string  // desktop 组件路径
  mobile: string   // mobile 组件路径
}

/**
 * 创建智能路由组件
 * @param options 路由配置
 * @returns Vue 组件
 */
export function createSmartRoute(options: SmartRouteOptions): Component {
  return defineAsyncComponent(() => {
    const { isDesktop } = useDevice()

    // 根据设备类型动态导入组件
    const componentPath = isDesktop.value ? options.desktop : options.mobile

    return import(/* @vite-ignore */ componentPath)
  })
}

/**
 * 智能路由包装组件
 * 用于在模板中直接使用
 */
export function defineSmartRoute(desktopPath: string, mobilePath: string) {
  return {
    setup() {
      const { isDesktop } = useDevice()

      // 动态导入组件
      const DesktopComponent = defineAsyncComponent(
        () => import(/* @vite-ignore */ desktopPath)
      )
      const MobileComponent = defineAsyncComponent(
        () => import(/* @vite-ignore */ mobilePath)
      )

      return {
        isDesktop,
        DesktopComponent,
        MobileComponent,
      }
    },
    template: `
      <component :is="isDesktop ? DesktopComponent : MobileComponent" />
    `,
  }
}
