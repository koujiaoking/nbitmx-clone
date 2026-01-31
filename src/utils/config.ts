/**
 * 全局配置文件
 * @description 定义API域名、环境配置等全局配置项
 */

/**
 * 环境类型
 */
type Environment = 'development' | 'production' | 'test'

/**
 * 获取当前环境
 */
export const ENV: Environment = (import.meta.env.MODE as Environment) || 'development'

/**
 * API基础URL配置
 * @description 可以通过修改此配置快速切换后端域名
 */
export const API_CONFIG = {
  /** 开发环境API地址 */
  development: 'http://localhost:3000/api',
  /** 生产环境API地址 */
  production: 'https://api.nbitmx.com/api',
  /** 测试环境API地址 */
  test: 'https://test-api.nbitmx.com/api',
} as const

/**
 * 获取当前环境的API基础URL
 */
export const API_BASE_URL: string = API_CONFIG[ENV]

/**
 * 请求超时时间(毫秒)
 */
export const REQUEST_TIMEOUT = 30000

/**
 * 静态资源CDN配置
 */
export const ASSETS_CONFIG = {
  /** 图片CDN地址 */
  imageCDN: 'https://ext.same-assets.com/358789190',
  /** 视频CDN地址 */
  videoCDN: 'https://ext.same-assets.com/358789190',
} as const

/**
 * 分页默认配置
 */
export const PAGINATION_CONFIG = {
  /** 默认页码 */
  defaultPage: 1,
  /** 默认每页条数 */
  defaultPageSize: 10,
  /** 每页条数选项 */
  pageSizeOptions: [10, 20, 50, 100],
} as const

/**
 * WebSocket配置
 */
export const WS_CONFIG = {
  /** WebSocket地址 */
  url: ENV === 'production'
    ? 'wss://ws.nbitmx.com'
    : 'ws://localhost:3001',
  /** 重连间隔(毫秒) */
  reconnectInterval: 3000,
  /** 最大重连次数 */
  maxReconnectAttempts: 5,
} as const
