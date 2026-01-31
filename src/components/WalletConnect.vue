<template>
  <div class="wallet-connect">
    <!-- 未连接状态: 显示连接按钮 -->
    <button
      v-if="!isConnected"
      @click="openModal"
      class="connect-button"
    >
      <span class="icon">🔗</span>
      <span>连接钱包</span>
    </button>

    <!-- 已连接状态: 显示账户信息 -->
    <div v-else class="wallet-info">
      <!-- 网络切换按钮 -->
      <button
        @click="openNetworkModal"
        class="network-button"
        :title="`Chain ID: ${chainId}`"
      >
        <span class="network-indicator"></span>
        <span>{{ getNetworkName(chainId) }}</span>
      </button>

      <!-- 账户信息按钮 -->
      <button
        @click="openModal"
        class="account-button"
      >
        <!-- 余额显示 -->
        <span class="balance">{{ formattedBalance }} ETH</span>
        <!-- 地址显示 -->
        <span class="address">{{ formattedAddress }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 钱包连接组件
 * @description 显示钱包连接按钮和账户信息
 */
import { useWeb3Wallet } from '@/composables/useWeb3Wallet'

// ============================================
// 使用 Web3 钱包
// ============================================

const {
  isConnected,          // 是否已连接
  chainId,              // 当前链ID
  formattedAddress,     // 格式化的地址
  formattedBalance,     // 格式化的余额
  openModal,            // 打开连接Modal
  openNetworkModal,     // 打开网络选择Modal
} = useWeb3Wallet()

// ============================================
// 工具方法
// ============================================

/**
 * 根据链ID获取网络名称
 * @param id - 链ID
 */
function getNetworkName(id: number | undefined): string {
  if (!id) return 'Unknown'
  
  const networks: Record<number, string> = {
    1: 'Ethereum',      // 以太坊主网
    42161: 'Arbitrum',  // Arbitrum
    137: 'Polygon',     // Polygon
    56: 'BSC',          // Binance Smart Chain
  }
  
  return networks[id] || `Chain ${id}`
}
</script>

<style scoped>
/**
 * 钱包连接容器
 */
.wallet-connect {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/**
 * 连接按钮 - 未连接状态
 */
.connect-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.connect-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}

.connect-button:active {
  transform: translateY(0);
}

.connect-button .icon {
  font-size: 1.125rem;
}

/**
 * 钱包信息容器 - 已连接状态
 */
.wallet-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/**
 * 网络切换按钮
 */
.network-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 0.5rem;
  color: #3b82f6;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.network-button:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.5);
}

/**
 * 网络指示器 - 绿色圆点
 */
.network-indicator {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/**
 * 账户信息按钮
 */
.account-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  color: white;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.account-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

/**
 * 余额显示
 */
.balance {
  font-weight: 600;
  color: #10b981;
}

/**
 * 地址显示
 */
.address {
  font-family: 'Monaco', 'Menlo', monospace;
  color: rgba(255, 255, 255, 0.7);
}

/**
 * 响应式设计 - 移动端
 */
@media (max-width: 640px) {
  .wallet-info {
    flex-direction: column;
    align-items: stretch;
  }
  
  .network-button,
  .account-button {
    width: 100%;
    justify-content: center;
  }
  
  .balance {
    display: none;
  }
}
</style>
