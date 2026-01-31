/**
 * WebSocket组合式函数
 * @description 提供WebSocket连接管理和实时行情数据订阅
 */
import { ref, onUnmounted } from 'vue'
import { WS_CONFIG } from '@/utils/config'

/** 行情数据类型 */
export interface TickerData {
  symbol: string
  price: number
  change: number
  high24h: number
  low24h: number
  volume24h: number
  timestamp: number
}

/** K线数据类型 */
export interface KlineData {
  time: number
  open: number
  high: number
  low: number
  close: number
  volume: number
}

/** 订单簿数据类型 */
export interface OrderBookData {
  asks: Array<{ price: number; amount: number }>
  bids: Array<{ price: number; amount: number }>
}

/** 成交数据类型 */
export interface TradeData {
  price: number
  amount: number
  side: 'buy' | 'sell'
  time: string
  timestamp: number
}

/**
 * WebSocket连接状态
 */
type ConnectionStatus = 'connecting' | 'connected' | 'disconnected' | 'error'

/**
 * 使用WebSocket进行实时数据订阅
 */
export function useWebSocket() {
  // ============================================
  // 状态
  // ============================================

  /** 连接状态 */
  const status = ref<ConnectionStatus>('disconnected')

  /** WebSocket实例 */
  let ws: WebSocket | null = null

  /** 重连次数 */
  let reconnectAttempts = 0

  /** 重连定时器 */
  let reconnectTimer: number | null = null

  /** 订阅的交易对 */
  const subscribedSymbols = ref<string[]>([])

  /** 实时行情数据 */
  const tickerData = ref<Map<string, TickerData>>(new Map())

  /** K线数据 */
  const klineData = ref<KlineData[]>([])

  /** 订单簿数据 */
  const orderBookData = ref<OrderBookData>({ asks: [], bids: [] })

  /** 最近成交数据 */
  const tradeData = ref<TradeData[]>([])

  // ============================================
  // 回调函数
  // ============================================

  /** 行情更新回调 */
  let onTickerUpdate: ((data: TickerData) => void) | null = null

  /** K线更新回调 */
  let onKlineUpdate: ((data: KlineData) => void) | null = null

  /** 订单簿更新回调 */
  let onOrderBookUpdate: ((data: OrderBookData) => void) | null = null

  /** 成交更新回调 */
  let onTradeUpdate: ((data: TradeData) => void) | null = null

  // ============================================
  // WebSocket连接管理
  // ============================================

  /**
   * 连接WebSocket
   */
  function connect() {
    if (ws && ws.readyState === WebSocket.OPEN) {
      return
    }

    status.value = 'connecting'

    try {
      ws = new WebSocket(WS_CONFIG.url)

      ws.onopen = () => {
        console.log('[WebSocket] 连接成功')
        status.value = 'connected'
        reconnectAttempts = 0

        // 重新订阅之前的频道
        subscribedSymbols.value.forEach(symbol => {
          subscribe(symbol)
        })
      }

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          handleMessage(data)
        } catch (e) {
          console.error('[WebSocket] 消息解析失败:', e)
        }
      }

      ws.onerror = (error) => {
        console.error('[WebSocket] 连接错误:', error)
        status.value = 'error'
      }

      ws.onclose = () => {
        console.log('[WebSocket] 连接关闭')
        status.value = 'disconnected'
        attemptReconnect()
      }
    } catch (e) {
      console.error('[WebSocket] 创建连接失败:', e)
      status.value = 'error'
    }
  }

  /**
   * 处理接收到的消息
   */
  function handleMessage(data: any) {
    switch (data.type) {
      case 'ticker':
        tickerData.value.set(data.symbol, data.data)
        onTickerUpdate?.(data.data)
        break
      case 'kline':
        klineData.value.push(data.data)
        onKlineUpdate?.(data.data)
        break
      case 'orderbook':
        orderBookData.value = data.data
        onOrderBookUpdate?.(data.data)
        break
      case 'trade':
        tradeData.value.unshift(data.data)
        onTradeUpdate?.(data.data)
        break
    }
  }

  /**
   * 尝试重连
   */
  function attemptReconnect() {
    if (reconnectAttempts >= WS_CONFIG.maxReconnectAttempts) {
      console.log('[WebSocket] 达到最大重连次数')
      return
    }

    reconnectAttempts++
    console.log(`[WebSocket] ${WS_CONFIG.reconnectInterval}ms 后尝试第 ${reconnectAttempts} 次重连`)

    reconnectTimer = setTimeout(() => {
      connect()
    }, WS_CONFIG.reconnectInterval) as unknown as number
  }

  /**
   * 订阅交易对
   */
  function subscribe(symbol: string) {
    if (!subscribedSymbols.value.includes(symbol)) {
      subscribedSymbols.value.push(symbol)
    }

    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        action: 'subscribe',
        channel: 'ticker',
        symbol,
      }))
    }
  }

  /**
   * 取消订阅
   */
  function unsubscribe(symbol: string) {
    const index = subscribedSymbols.value.indexOf(symbol)
    if (index > -1) {
      subscribedSymbols.value.splice(index, 1)
    }

    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        action: 'unsubscribe',
        channel: 'ticker',
        symbol,
      }))
    }
  }

  /**
   * 断开连接
   */
  function disconnect() {
    if (reconnectTimer) {
      clearTimeout(reconnectTimer)
      reconnectTimer = null
    }

    if (ws) {
      ws.close()
      ws = null
    }

    status.value = 'disconnected'
  }

  /**
   * 设置回调函数
   */
  function setCallbacks(callbacks: {
    onTicker?: (data: TickerData) => void
    onKline?: (data: KlineData) => void
    onOrderBook?: (data: OrderBookData) => void
    onTrade?: (data: TradeData) => void
  }) {
    if (callbacks.onTicker) onTickerUpdate = callbacks.onTicker
    if (callbacks.onKline) onKlineUpdate = callbacks.onKline
    if (callbacks.onOrderBook) onOrderBookUpdate = callbacks.onOrderBook
    if (callbacks.onTrade) onTradeUpdate = callbacks.onTrade
  }

  // 组件卸载时自动断开连接
  onUnmounted(() => {
    disconnect()
  })

  return {
    // 状态
    status,
    tickerData,
    klineData,
    orderBookData,
    tradeData,
    subscribedSymbols,

    // 方法
    connect,
    disconnect,
    subscribe,
    unsubscribe,
    setCallbacks,
  }
}
