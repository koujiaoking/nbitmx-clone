/**
 * 路由配置文件
 * @description 定义应用的所有路由，自动处理PC/H5组件加载
 */
import { createRouter, createWebHistory } from 'vue-router'
import { defineRoute } from './responsiveRoute'

/**
 * 路由配置
 * responsive: true - 静态展示页，需要PC/H5分离 (如首页、NFT等)
 * responsive: false - 业务组件，统一实现 (如交易、钱包等)
 */
const routes = [
  // 静态展示页 - 需要响应式
  defineRoute('/', 'Index', '@/views/index', {
    title: 'Nbitmx - Crypto Exchange',
    responsive: true,  // 首页有 desktop/index.vue 和 mobile/index.vue
  }),

  defineRoute('/nft/index', 'NftIndex', '@/views/NftView', {
    title: 'NFT Marketplace | Nbitmx',
    responsive: false,
  }),

  // 展示类页面 - 可选响应式
  defineRoute('/follow', 'Follow', '@/views/FollowView', {
    title: 'Copy Trading | Nbitmx',
  }),
  defineRoute('/follow/index', 'FollowIndex', '@/views/FollowView', {
    title: 'Copy Trading | Nbitmx',
  }),

  defineRoute('/follow/my', 'MyFollow', '@/views/MyFollowView', {
    title: 'My Copy Trading | Nbitmx',
  }),



  defineRoute('/follow/detail/:id', 'FollowDetail', '@/views/FollowDetailView', {
    title: 'Trader Details | Nbitmx',
  }),

  defineRoute('/quotes', 'Quotes', '@/views/QuotesView', {
    title: 'Market Quotes | Nbitmx',
  }),

  defineRoute('/quotes/index', 'QuotesIndex', '@/views/QuotesView', {
    title: 'Market Quotes | Nbitmx',
  }),

  defineRoute('/news/index', 'NewsIndex', '@/views/NewsView', {
    title: 'NBITMX News | Crypto Industry Trends',
  }),

  defineRoute('/news', 'News', '@/views/NewsView', {
    title: 'NBITMX News | Crypto Industry Trends',
  }),

  defineRoute('/charity', 'Charity', '@/views/CharityView', {
    title: 'Charity | Nbitmx',
  }),

  defineRoute('/follow/index', 'CopyTrading', '@/views/FollowView', {
    title: 'Copy Trading | Nbitmx',
  }),

  defineRoute('/news', 'News', '@/views/NewsView', {
    title: 'NBITMX News | Crypto Industry Trends',
  }),

  defineRoute('/news/details/:id', 'NewsDetail', '@/views/NewsDetailView', {
    title: 'News Details | Nbitmx',
  }),

  defineRoute('/Charity/index', 'CharityIndex', '@/views/CharityView', {
    title: 'NBITMX Charity | Towards Good',
  }),

  defineRoute('/charity', 'Charity', '@/views/CharityView', {
    title: 'NBITMX Charity | Towards Good',
  }),

  defineRoute('/notices', 'Notices', '@/views/NoticesView', {
    title: 'Notices | Nbitmx',
  }),

  // 占位符页面 - 待开发功能
  defineRoute('/recharge', 'Recharge', '@/views/PlaceholderView', {
    title: 'Recharge | Nbitmx',
  }),


  defineRoute('/assets', 'AssetsPage', '@/views/PlaceholderView', {
    title: 'My Assets | Nbitmx',
  }),

  defineRoute('/withdraw', 'WithdrawPage', '@/views/PlaceholderView', {
    title: 'Withdraw | Nbitmx',
  }),

  defineRoute('/customer-service', 'CustomerServicePage', '@/views/PlaceholderView', {
    title: 'Customer Service | Nbitmx',
  }),

  // 业务组件 - 统一实现（不需要响应式）
  // 交易页面
  defineRoute('/play/futures/trade/:symbol?', 'FuturesTrade', '@/views/trade/FuturesTradeView', {
    title: 'Futures Trading | Nbitmx',
    hideFooter: true,
    responsive: false,  // 业务组件，统一实现
  }),

  defineRoute('/play/spot/trade/:symbol?', 'SpotTrade', '@/views/trade/SpotTradeView', {
    title: 'Spot Trading | Nbitmx',
    hideFooter: true,
    responsive: false,
  }),

  defineRoute('/play/currency/trade/:symbol?', 'CurrencyTrade', '@/views/trade/SpotTradeView', {
    title: 'Currency Trading | Nbitmx',
    hideFooter: true,
    responsive: false,
  }),

  defineRoute('/play/ucontract/index/:symbol?', 'UContract', '@/views/trade/UContractView', {
    title: 'U-Margined Contract | Nbitmx',
    hideFooter: true,
    responsive: false,
  }),

  // Web3
  defineRoute('/web3/index', 'Web3', '@/views/Web3View', {
    title: 'Web3 | Nbitmx',
    responsive: false,
  }),

  // 资产管理 - 业务组件，统一实现
  defineRoute('/assets/index', 'Assets', '@/views/assets/AssetsView', {
    title: 'Assets Management | Nbitmx',
    responsive: false,
  }),

  defineRoute('/assets/recharge', 'Recharge', '@/views/assets/RechargeView', {
    title: 'Recharge | Nbitmx',
    responsive: false,
  }),

  defineRoute('/assets/withdraw', 'Withdraw', '@/views/assets/WithdrawView', {
    title: 'Withdraw | Nbitmx',
    responsive: false,
  }),

  defineRoute('/assets/address', 'AddressManage', '@/views/assets/AddressManageView', {
    title: 'Address Management | Nbitmx',
    responsive: false,
  }),

  defineRoute('/assets/transfer', 'AssetsTransfer', '@/views/assets/TransferView', {
    title: 'Transfer | Nbitmx',
    responsive: false,
  }),

  // Reports
  defineRoute('/report/index', 'ReportIndex', '@/views/ReportView', {
    title: 'Order Center | Nbitmx',
    responsive: false,
  }),

  // Flash Exchange
  defineRoute('/play/flashExchange/index', 'FlashExchange', '@/views/FlashExchangeView', {
    title: 'Flash Exchange | Nbitmx',
    responsive: false,
  }),

  // 客服
  defineRoute('/customer/index', 'CustomerService', '@/views/CustomerServiceView', {
    title: 'Customer Service | Nbitmx',
    responsive: false,
  }),
]

/**
 * 创建路由实例
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

/**
 * 路由前置守卫
 */
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = (to.meta?.title as string) || 'Nbitmx'
  next()
})

export default router
