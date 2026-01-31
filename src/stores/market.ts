/**
 * 行情数据Store
 * @description 管理加密货币行情数据
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { TradingPair, PlatformStats, AIStrategy } from '@/types'
import { getMarketTickers, getPlatformStats, getAIStrategies } from '@/api'

export const useMarketStore = defineStore('market', () => {
  // ============================================
  // 状态
  // ============================================

  /** 交易对列表 */
  const tickers = ref<TradingPair[]>([])

  /** 平台统计数据 */
  const platformStats = ref<PlatformStats | null>(null)

  /** AI策略列表 */
  const aiStrategies = ref<AIStrategy[]>([])

  /** 是否正在加载 */
  const loading = ref(false)

  // ============================================
  // 方法
  // ============================================

  /**
   * 获取所有交易对行情
   */
  async function fetchTickers() {
    loading.value = true
    try {
      tickers.value = await getMarketTickers()
    } catch (error) {
      console.error('Fetch tickers failed:', error)
    } finally {
      loading.value = false
    }
  }

  /**
   * 获取平台统计数据
   */
  async function fetchPlatformStats() {
    try {
      platformStats.value = await getPlatformStats()
    } catch (error) {
      console.error('Fetch platform stats failed:', error)
    }
  }

  /**
   * 获取AI策略列表
   */
  async function fetchAIStrategies() {
    try {
      aiStrategies.value = await getAIStrategies()
    } catch (error) {
      console.error('Fetch AI strategies failed:', error)
    }
  }

  /**
   * 初始化所有行情数据
   */
  async function initMarketData() {
    await Promise.all([
      fetchTickers(),
      fetchPlatformStats(),
      fetchAIStrategies(),
    ])
  }

  return {
    tickers,
    platformStats,
    aiStrategies,
    loading,
    fetchTickers,
    fetchPlatformStats,
    fetchAIStrategies,
    initMarketData,
  }
})
