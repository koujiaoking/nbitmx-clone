/**
 * 应用入口文件
 * @description 初始化Vue应用并注册所有插件
 */
import { createApp } from 'vue'
import './styles/index.less'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import i18n from './locales/i18n'

// 导入UnoCSS
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

// 导入 Animate.css
import 'animate.css'

// 导入虚拟滚动
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

// 导入Vant样式
import 'vant/lib/index.css'
import { Swipe, SwipeItem, Collapse, CollapseItem, Icon } from 'vant'

// 导入Vue Query
import { VueQueryPlugin } from '@tanstack/vue-query'

// 导入Wagmi配置
import { WagmiPlugin } from '@wagmi/vue'
import { wagmiConfig } from './config/web3'

// 导入自定义指令
import animateOnScroll from './directives/animateOnScroll'
import copy from './directives/copy'

/**
 * 创建Vue应用实例
 */
const app = createApp(App)

// 注册全局指令
app.directive('animate-on-scroll', animateOnScroll)
app.directive('copy', copy)

// 注册Pinia状态管理
app.use(pinia)

// 注册路由
app.use(router)

// 注册虚拟滚动
app.use(VueVirtualScroller)

// 注册国际化
app.use(i18n)

// 注册Vant组件
app.use(Swipe)
app.use(SwipeItem)
app.use(Collapse)
app.use(CollapseItem)
app.use(Icon)

// 注册Vue Query (Web3依赖)
app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  },
})

// 注册Wagmi (Web3钱包连接)
app.use(WagmiPlugin, { config: wagmiConfig })

// 挂载应用
app.mount('#app')
