# Web3 钱包集成说明

本项目已集成 WalletConnect (Reown AppKit) 用于Web3钱包连接。

## 🎯 已完成的功能

### 1. 移除Mock功能
- ✅ 删除 `src/mock` 文件夹及所有mock数据
- ✅ 移除 `mockjs` 和 `@types/mockjs` 依赖
- ✅ 清理 `useWebSocket.ts` 中的mock数据生成逻辑
- ✅ 移除 `config.ts` 中的 `ENABLE_MOCK` 配置

### 2. 安装Web3依赖
已安装以下依赖包：
```bash
@reown/appkit                    # WalletConnect Modal UI
@reown/appkit-adapter-wagmi      # Wagmi适配器
@tanstack/vue-query              # Vue Query (Wagmi依赖)
@wagmi/vue                       # Vue Wagmi Hooks
viem                             # 以太坊工具库
```

### 3. Web3配置文件
📁 **src/config/web3.ts**
- 项目ID: `919bbd210a1185e45bd3d958ab0a1087`
- 支持的网络:
  - ✅ Ethereum (以太坊主网)
  - ✅ Arbitrum
  - ✅ Polygon
  - ✅ BSC (Binance Smart Chain)

### 4. 组合式函数
📁 **src/composables/useWeb3Wallet.ts**

提供以下功能：
- `isConnected` - 钱包连接状态
- `address` - 钱包地址
- `chainId` - 当前链ID
- `balance` - 账户余额
- `formattedAddress` - 格式化的地址 (0x1234...5678)
- `formattedBalance` - 格式化的余额
- `openModal()` - 打开连接Modal
- `openNetworkModal()` - 打开网络选择Modal
- `disconnectWallet()` - 断开钱包连接

### 5. UI组件
📁 **src/components/WalletConnect.vue**

钱包连接按钮组件，支持：
- 未连接状态：显示"连接钱包"按钮
- 已连接状态：显示网络、余额和地址
- 响应式设计，支持移动端

## 🚀 使用方法

### 在组件中使用

```vue
<template>
  <div>
    <!-- 方式1: 直接使用WalletConnect组件 -->
    <WalletConnect />
    
    <!-- 方式2: 使用useWeb3Wallet获取更多控制 -->
    <div v-if="isConnected">
      <p>地址: {{ formattedAddress }}</p>
      <p>余额: {{ formattedBalance }} ETH</p>
      <p>网络: Chain {{ chainId }}</p>
      <button @click="disconnectWallet">断开连接</button>
    </div>
    <button v-else @click="openModal">连接钱包</button>
  </div>
</template>

<script setup lang="ts">
import WalletConnect from '@/components/WalletConnect.vue'
import { useWeb3Wallet } from '@/composables/useWeb3Wallet'

const {
  isConnected,
  formattedAddress,
  formattedBalance,
  chainId,
  openModal,
  disconnectWallet
} = useWeb3Wallet()
</script>
```

### 获取账户信息

```typescript
import { useAccount, useBalance } from '@wagmi/vue'

// 获取账户信息
const { address, isConnected } = useAccount()

// 获取余额
const { data: balance } = useBalance({
  address: address.value
})
```

### 发送交易

```typescript
import { useSendTransaction } from '@wagmi/vue'
import { parseEther } from 'viem'

const { sendTransaction } = useSendTransaction()

// 发送交易
await sendTransaction({
  to: '0x...',
  value: parseEther('0.01')
})
```

## 📝 配置说明

### 修改支持的网络

编辑 `src/config/web3.ts`:

```typescript
import { mainnet, sepolia, polygon } from '@reown/appkit/networks'

export const SUPPORTED_NETWORKS = [
  mainnet,
  sepolia,  // 测试网
  polygon,
]
```

### 修改主题

编辑 `src/config/web3.ts`:

```typescript
export const appKit = createAppKit({
  // ...
  themeMode: 'light',  // 或 'dark'
  themeVariables: {
    '--w3m-accent': '#ff0000',  // 修改主色调
  }
})
```

## 🔗 相关链接

- [Reown Cloud (项目管理)](https://cloud.reown.com)
- [Reown AppKit 文档](https://docs.reown.com/appkit)
- [Wagmi 文档](https://wagmi.sh)
- [Viem 文档](https://viem.sh)

## ⚠️ 注意事项

1. **项目ID**: 当前使用的是测试项目ID，生产环境请使用自己的项目ID
2. **网络配置**: 根据实际需求选择支持的网络
3. **安全性**: 不要在前端代码中存储私钥或敏感信息
4. **错误处理**: 建议添加try-catch处理交易错误

## 🎨 自定义样式

WalletConnect组件使用了scoped样式，可以通过修改 `src/components/WalletConnect.vue` 中的样式来自定义外观。

主要CSS类：
- `.connect-button` - 连接按钮
- `.wallet-info` - 钱包信息容器
- `.network-button` - 网络切换按钮
- `.account-button` - 账户信息按钮
