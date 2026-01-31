/**
 * 类型定义入口文件
 * @description 定义项目中使用的所有TypeScript接口和类型
 */

// ============================================
// API响应类型
// ============================================

/**
 * 通用API响应结构
 * @template T - 响应数据类型
 */
export interface ApiResponse<T> {
  /** 响应状态码 */
  code: number
  /** 响应消息 */
  message: string
  /** 响应数据 */
  data: T
  /** 请求是否成功 */
  success: boolean
}

/**
 * 分页请求参数
 */
export interface PaginationParams {
  /** 当前页码 */
  page: number
  /** 每页条数 */
  pageSize: number
}

/**
 * 分页响应数据
 * @template T - 列表项类型
 */
export interface PaginationResponse<T> {
  /** 数据列表 */
  list: T[]
  /** 总条数 */
  total: number
  /** 当前页码 */
  page: number
  /** 每页条数 */
  pageSize: number
  /** 总页数 */
  totalPages: number
}

// ============================================
// 加密货币相关类型
// ============================================

/**
 * 加密货币信息
 */
export interface CryptoCurrency {
  /** 币种ID */
  id: string
  /** 币种符号 */
  symbol: string
  /** 币种名称 */
  name: string
  /** 币种图标URL */
  icon: string
  /** 当前价格(USDT) */
  price: number
  /** 24小时涨跌幅(百分比) */
  change24h: number
  /** 24小时最高价 */
  high24h: number
  /** 24小时最低价 */
  low24h: number
  /** 24小时成交量 */
  volume24h: number
  /** 市值 */
  marketCap: number
}

/**
 * 交易对信息
 */
export interface TradingPair {
  /** 交易对符号 */
  symbol: string
  /** 基础货币 */
  baseAsset: string
  /** 报价货币 */
  quoteAsset: string
  /** 最新价格 */
  lastPrice: number
  /** 24小时涨跌幅 */
  priceChangePercent: number
  /** 24小时成交量 */
  volume: number
  /** 基础货币图标 */
  baseAssetIcon: string
}

// ============================================
// AI量化策略相关类型
// ============================================

/**
 * AI量化策略
 */
export interface AIStrategy {
  /** 策略ID */
  id: string
  /** 策略名称 */
  name: string
  /** 涉及的币种图标列表 */
  coinIcons: string[]
  /** 最大收益率 */
  maxYield: number
  /** 参与人数 */
  participants: number
  /** 策略状态 */
  status: 'active' | 'paused' | 'ended'
}

// ============================================
// 投资组合相关类型
// ============================================

/**
 * 投资组合
 */
export interface Portfolio {
  /** 组合ID */
  id: string
  /** 排名 */
  rank: number
  /** 涉及的币种 */
  coins: string[]
  /** 币种图标列表 */
  coinIcons: string[]
  /** 年化收益率 */
  apr: number
  /** 运行时间(天) */
  runningDays: number
}

// ============================================
// 新闻资讯相关类型
// ============================================

/**
 * 新闻文章
 */
export interface NewsArticle {
  /** 文章ID */
  id: string
  /** 文章标题 */
  title: string
  /** 文章摘要 */
  summary: string
  /** 封面图片URL */
  coverImage: string
  /** 发布时间 */
  publishTime: string
  /** 评论数 */
  comments: number
  /** 浏览量 */
  views: number
  /** 文章来源 */
  source?: string
}

// ============================================
// NFT相关类型
// ============================================

/**
 * NFT信息
 */
export interface NFTItem {
  /** NFT ID */
  id: string
  /** NFT名称 */
  name: string
  /** NFT图片URL */
  image: string
  /** NFT描述 */
  description?: string
  /** 价格 */
  price?: number
  /** 创作者 */
  creator?: string
}

// ============================================
// 用户相关类型
// ============================================

/**
 * 用户信息
 */
export interface UserInfo {
  /** 用户ID */
  id: string
  /** 用户名 */
  username: string
  /** 邮箱 */
  email: string
  /** 头像URL */
  avatar?: string
  /** 是否已实名认证 */
  isVerified: boolean
  /** 注册时间 */
  createdAt: string
}

// ============================================
// 导航菜单类型
// ============================================

/**
 * 导航菜单项
 */
export interface MenuItem {
  /** 菜单ID */
  id: string
  /** 菜单名称(i18n key) */
  label: string
  /** 菜单路径 */
  path?: string
  /** 菜单图标 */
  icon?: string
  /** 子菜单 */
  children?: MenuItem[]
  /** 是否外链 */
  external?: boolean
  /** 菜单描述 */
  description?: string
}

// ============================================
// 轮播图类型
// ============================================

/**
 * 轮播图项
 */
export interface BannerItem {
  /** 轮播图ID */
  id: string
  /** 图片URL */
  image: string
  /** 标题 */
  title?: string
  /** 链接 */
  link?: string
}

// ============================================
// 常见问题类型
// ============================================

/**
 * FAQ问答项
 */
export interface FAQItem {
  /** 问题ID */
  id: string
  /** 问题标题 */
  question: string
  /** 问题答案 */
  answer: string
  /** 是否展开 */
  isExpanded?: boolean
}

// ============================================
// 合作伙伴类型
// ============================================

/**
 * 合作伙伴信息
 */
export interface Partner {
  /** 合作伙伴ID */
  id: string
  /** 名称 */
  name: string
  /** Logo URL */
  logo: string
  /** 官网链接 */
  website?: string
}

// ============================================
// 慈善相关类型
// ============================================

/**
 * 慈善统计数据
 */
export interface CharityStats {
  /** 慈善捐款总额(USDT) */
  totalDonation: string
  /** 24小时交易额(USDT) */
  turnover24h: string
  /** 代币数量 */
  tokens: string
  /** 市场数量 */
  marketPlaces: string
}

// ============================================
// 平台统计类型
// ============================================

/**
 * 平台统计数据
 */
export interface PlatformStats {
  /** 24小时交易量 */
  tradingVolume24h: string
  /** 加密货币种类 */
  cryptoTypes: number
  /** 注册用户数 */
  registeredUsers: string
  /** 客户数量 */
  clients: string
  /** 支持国家数 */
  countriesSupported: number
  /** 季度交易量 */
  quarterlyVolume: string
}
