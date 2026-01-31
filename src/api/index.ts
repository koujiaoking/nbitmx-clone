/**
 * API接口模块入口
 * @description 统一导出所有API接口
 */
import { get, post } from './request'
import type {
  TradingPair,
  AIStrategy,
  Portfolio,
  NewsArticle,
  NFTItem,
  BannerItem,
  PlatformStats,
  CharityStats,
  UserInfo,
  PaginationResponse
} from '@/types'

// ============================================
// 行情相关API
// ============================================

/**
 * 获取所有交易对行情
 * @path GET /api/market/tickers
 */
export const getMarketTickers = () => get<TradingPair[]>('/market/tickers')

/**
 * 获取单个交易对行情
 * @path GET /api/market/ticker/:symbol
 */
export const getMarketTicker = (symbol: string) => get<TradingPair>(`/market/ticker/${symbol}`)

/**
 * 获取平台统计数据
 * @path GET /api/market/stats
 */
export const getPlatformStats = () => get<PlatformStats>('/market/stats')

// ============================================
// AI量化策略API
// ============================================

/**
 * 获取AI量化策略列表
 * @path GET /api/ai/strategies
 */
export const getAIStrategies = () => get<AIStrategy[]>('/ai/strategies')

// ============================================
// 投资组合API
// ============================================

/**
 * 获取投资组合列表
 * @path GET /api/portfolio/list
 */
export const getPortfolioList = () => get<Portfolio[]>('/portfolio/list')

// ============================================
// 新闻资讯API
// ============================================

/**
 * 获取新闻列表
 * @path GET /api/news/list
 */
export const getNewsList = (params?: { page?: number; pageSize?: number }) =>
  get<PaginationResponse<NewsArticle>>('/news/list', params)

// ============================================
// NFT相关API
// ============================================

/**
 * 获取NFT列表
 * @path GET /api/nft/list
 */
export const getNFTList = () => get<NFTItem[]>('/nft/list')

// ============================================
// 轮播图API
// ============================================

/**
 * 获取轮播图列表
 * @path GET /api/banners
 */
export const getBanners = () => get<BannerItem[]>('/banners')

// ============================================
// 慈善相关API
// ============================================

/**
 * 获取慈善统计数据
 * @path GET /api/charity/stats
 */
export const getCharityStats = () => get<CharityStats>('/charity/stats')

// ============================================
// 用户相关API
// ============================================

/**
 * 用户登录
 * @path POST /api/user/login
 */
export const userLogin = (data: { email: string; password: string }) =>
  post<{ token: string; userInfo: UserInfo }>('/user/login', data)

/**
 * 用户注册
 * @path POST /api/user/register
 */
export const userRegister = (data: { email: string; password: string; username: string }) =>
  post<{ success: boolean }>('/user/register', data)

/**
 * 获取用户信息
 * @path GET /api/user/info
 */
export const getUserInfo = () => get<UserInfo>('/user/info')
