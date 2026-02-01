/**
 * Web3 Wallet 配置文件
 * @description 配置 WalletConnect (Reown AppKit) 的初始化参数
 */
import { createAppKit } from '@reown/appkit/vue'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, polygon, bsc } from '@reown/appkit/networks'

/**
 * Reown Cloud Project ID
 * @link https://cloud.reown.com
 */
export const REOWN_PROJECT_ID = '919bbd210a1185e45bd3d958ab0a1087'

/**
 * 支持的网络列表
 * @description 包含主流的EVM兼容链: 以太坊主网、Arbitrum、Polygon、BSC
 */
export const SUPPORTED_NETWORKS = [
  mainnet,    // 以太坊主网
  arbitrum,   // Arbitrum Layer 2
  polygon,    // Polygon (Matic)
  bsc,        // Binance Smart Chain
]

/**
 * Wagmi 适配器配置
 * @description 用于连接 Wagmi 和 WalletConnect
 */
export const wagmiAdapter = new WagmiAdapter({
  projectId: REOWN_PROJECT_ID,
  networks: SUPPORTED_NETWORKS,
})

/**
 * WalletConnect Modal 元数据
 * @description 在钱包连接界面显示的应用信息
 */
export const walletMetadata = {
  name: 'NBITMX',
  description: 'Professional Virtual Currency Trading Platform',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://nbitmx.com',
  icons: ['https://nbitmx.com/favicon.ico']
}

/**
 * 创建并配置 AppKit 实例
 * @description 初始化 WalletConnect Modal，配置项目ID、支持的网络和元数据
 */
export const appKit = createAppKit({
  // Wagmi 适配器
  adapters: [wagmiAdapter],

  // Reown Cloud 项目ID (原 WalletConnect Cloud)
  projectId: REOWN_PROJECT_ID,

  // 支持的区块链网络 (使用类型断言解决类型兼容性)
  networks: SUPPORTED_NETWORKS as any,

  // 应用元数据
  metadata: walletMetadata,

  // 功能配置
  features: {
    analytics: true,     // 启用分析
  },

  // 主题配置
  themeMode: 'dark',     // 默认暗色主题
  themeVariables: {
    '--w3m-accent': '#3b82f6',  // 主色调
  }
})

/**
 * 导出 Wagmi 配置
 * @description 供 Vue Query 和 Wagmi 使用
 */
export const wagmiConfig = wagmiAdapter.wagmiConfig
