/**
 * Web3 钱包连接组合式函数
 * @description 提供钱包连接、断开、账户状态等功能
 */
import { ref, computed, onMounted } from 'vue'
import { useAccount, useDisconnect, useBalance } from '@wagmi/vue'
import { formatUnits } from 'viem'
import { appKit } from '@/config/web3'

/**
 * 使用 Web3 钱包
 * @description 封装 WalletConnect 的钱包连接逻辑
 */
export function useWeb3Wallet() {
  // ============================================
  // Wagmi Hooks - 账户和余额管理
  // ============================================

  /**
   * 获取当前连接的账户信息
   * @property address - 钱包地址
   * @property isConnected - 是否已连接
   * @property chainId - 当前链ID
   */
  const { address, isConnected, chainId } = useAccount()

  /**
   * 获取账户余额
   */
  const { data: balance } = useBalance({
    address: address.value,
  })

  /**
   * 断开钱包连接
   */
  const { disconnect } = useDisconnect()

  // ============================================
  // 状态管理
  // ============================================

  /**
   * Modal 是否打开
   */
  const isModalOpen = ref(false)

  // ============================================
  // 计算属性
  // ============================================

  /**
   * 格式化的钱包地址
   * @description 显示格式: 0x1234...5678
   */
  const formattedAddress = computed(() => {
    if (!address.value) return ''
    return `${address.value.slice(0, 6)}...${address.value.slice(-4)}`
  })

  /**
   * 格式化的余额
   * @description 保留4位小数
   */
  const formattedBalance = computed(() => {
    if (!balance.value) return '0'
    // 使用 formatUnits 将 bigint 转换为可读的字符串格式
    const formatted = formatUnits(balance.value.value, balance.value.decimals)
    return Number(formatted).toFixed(4)
  })

  // ============================================
  // 方法
  // ============================================

  /**
   * 打开钱包连接 Modal
   */
  function openModal() {
    appKit.open()
  }

  /**
   * 打开网络选择 Modal
   */
  function openNetworkModal() {
    appKit.open({ view: 'Networks' })
  }

  /**
   * 断开钱包连接
   */
  function disconnectWallet() {
    disconnect()
  }

  // ============================================
  // 生命周期
  // ============================================

  onMounted(() => {
    // 监听 Modal 状态变化
    appKit.subscribeState((state) => {
      isModalOpen.value = state.open
    })
  })

  return {
    // 状态
    address,              // 钱包地址
    isConnected,          // 是否已连接
    chainId,              // 当前链ID
    balance,              // 账户余额
    isModalOpen,          // Modal 是否打开

    // 计算属性
    formattedAddress,     // 格式化的地址
    formattedBalance,     // 格式化的余额

    // 方法
    openModal,            // 打开连接 Modal
    openNetworkModal,     // 打开网络选择 Modal
    disconnectWallet,     // 断开连接
  }
}
