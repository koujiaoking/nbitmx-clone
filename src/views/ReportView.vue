<template>
  <div class="report-page">
    <div class="report-container">
      <h1 class="page-title">訂單中心</h1>
      
      <a-tabs v-model:activeKey="activeTab" class="report-tabs">
        <!-- 充值記錄 Tab -->
        <a-tab-pane key="deposit" tab="充值記錄">
          <a-table
            :columns="depositColumns"
            :data-source="depositData"
            :pagination="{ pageSize: 10 }"
            :scroll="{ x: 1000 }"
            bordered
          />
        </a-tab-pane>

        <!-- 提幣記錄 Tab -->
        <a-tab-pane key="withdrawal" tab="提幣記錄">
          <a-table
            :columns="withdrawalColumns"
            :data-source="withdrawalData"
            :pagination="{ pageSize: 10 }"
            :scroll="{ x: 1000 }"
            bordered
          />
        </a-tab-pane>

        <!-- 期權交易 Tab -->
        <a-tab-pane key="options" tab="期權交易">
          <a-table
            :columns="optionsColumns"
            :data-source="optionsData"
            :pagination="{ pageSize: 10 }"
            :scroll="{ x: 1200 }"
            bordered
          />
        </a-tab-pane>

        <!-- 合約 Tab -->
        <a-tab-pane key="contracts" tab="合約">
          <a-table
            :columns="contractsColumns"
            :data-source="contractsData"
            :pagination="{ pageSize: 10 }"
            :scroll="{ x: 1400 }"
            bordered
          />
        </a-tab-pane>

        <!-- 現貨 Tab -->
        <a-tab-pane key="spot" tab="現貨">
          <a-table
            :columns="spotColumns"
            :data-source="spotData"
            :pagination="{ pageSize: 10 }"
            :scroll="{ x: 1200 }"
            bordered
          />
        </a-tab-pane>

        <!-- 跟單交易 Tab -->
        <a-tab-pane key="copyTrading" tab="跟單交易">
          <a-table
            :columns="copyTradingColumns"
            :data-source="copyTradingData"
            :pagination="{ pageSize: 10 }"
            :scroll="{ x: 1300 }"
            bordered
          />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('deposit')

// 充值記錄 Columns
const depositColumns = [
  { title: '時間', dataIndex: 'time', key: 'time', width: 180 },
  { title: '幣種', dataIndex: 'coin', key: 'coin', width: 100 },
  { title: '數量', dataIndex: 'amount', key: 'amount', width: 150 },
  { title: '地址', dataIndex: 'address', key: 'address', width: 300, ellipsis: true },
  { title: '狀態', dataIndex: 'status', key: 'status', width: 120 },
  { title: 'TxID', dataIndex: 'txid', key: 'txid', width: 300, ellipsis: true },
]

// 提幣記錄 Columns
const withdrawalColumns = [
  { title: '時間', dataIndex: 'time', key: 'time', width: 180 },
  { title: '幣種', dataIndex: 'coin', key: 'coin', width: 100 },
  { title: '數量', dataIndex: 'amount', key: 'amount', width: 150 },
  { title: '手續費', dataIndex: 'fee', key: 'fee', width: 120 },
  { title: '地址', dataIndex: 'address', key: 'address', width: 300, ellipsis: true },
  { title: '狀態', dataIndex: 'status', key: 'status', width: 120 },
  { title: 'TxID', dataIndex: 'txid', key: 'txid', width: 300, ellipsis: true },
]

// 期權交易 Columns
const optionsColumns = [
  { title: '時間', dataIndex: 'time', key: 'time', width: 180 },
  { title: '交易對', dataIndex: 'pair', key: 'pair', width: 120 },
  { title: '方向', dataIndex: 'direction', key: 'direction', width: 100 },
  { title: '行權價', dataIndex: 'strikePrice', key: 'strikePrice', width: 130 },
  { title: '到期時間', dataIndex: 'expiry', key: 'expiry', width: 180 },
  { title: '投入', dataIndex: 'investment', key: 'investment', width: 130 },
  { title: '收益', dataIndex: 'profit', key: 'profit', width: 130 },
  { title: '狀態', dataIndex: 'status', key: 'status', width: 120 },
]

// 合約 Columns
const contractsColumns = [
  { title: '時間', dataIndex: 'time', key: 'time', width: 180 },
  { title: '合約', dataIndex: 'contract', key: 'contract', width: 120 },
  { title: '方向', dataIndex: 'direction', key: 'direction', width: 100 },
  { title: '槓桿', dataIndex: 'leverage', key: 'leverage', width: 100 },
  { title: '開倉價', dataIndex: 'openPrice', key: 'openPrice', width: 130 },
  { title: '平倉價', dataIndex: 'closePrice', key: 'closePrice', width: 130 },
  { title: '數量', dataIndex: 'amount', key: 'amount', width: 130 },
  { title: '盈虧', dataIndex: 'pnl', key: 'pnl', width: 130 },
  { title: '手續費', dataIndex: 'fee', key: 'fee', width: 120 },
  { title: '狀態', dataIndex: 'status', key: 'status', width: 120 },
]

// 現貨 Columns
const spotColumns = [
  { title: '時間', dataIndex: 'time', key: 'time', width: 180 },
  { title: '交易對', dataIndex: 'pair', key: 'pair', width: 120 },
  { title: '方向', dataIndex: 'direction', key: 'direction', width: 100 },
  { title: '價格', dataIndex: 'price', key: 'price', width: 130 },
  { title: '數量', dataIndex: 'amount', key: 'amount', width: 130 },
  { title: '總額', dataIndex: 'total', key: 'total', width: 130 },
  { title: '手續費', dataIndex: 'fee', key: 'fee', width: 120 },
  { title: '狀態', dataIndex: 'status', key: 'status', width: 120 },
]

// 跟單交易 Columns
const copyTradingColumns = [
  { title: '時間', dataIndex: 'time', key: 'time', width: 180 },
  { title: '交易員', dataIndex: 'trader', key: 'trader', width: 150 },
  { title: '交易對', dataIndex: 'pair', key: 'pair', width: 120 },
  { title: '方向', dataIndex: 'direction', key: 'direction', width: 100 },
  { title: '開倉價', dataIndex: 'openPrice', key: 'openPrice', width: 130 },
  { title: '平倉價', dataIndex: 'closePrice', key: 'closePrice', width: 130 },
  { title: '數量', dataIndex: 'amount', key: 'amount', width: 130 },
  { title: '盈虧', dataIndex: 'pnl', key: 'pnl', width: 130 },
  { title: '狀態', dataIndex: 'status', key: 'status', width: 120 },
]

// Mock Data - 充值記錄
const depositData = ref([
  {
    key: '1',
    time: '2024-01-15 14:23:45',
    coin: 'USDT',
    amount: '1,000.00',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb5',
    status: '已完成',
    txid: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
  },
  {
    key: '2',
    time: '2024-01-14 10:15:22',
    coin: 'BTC',
    amount: '0.05',
    address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    status: '已完成',
    txid: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
  },
  {
    key: '3',
    time: '2024-01-13 16:45:30',
    coin: 'ETH',
    amount: '2.5',
    address: '0x8Ba1f109551bD432803012645Ac136ddd64DBA72',
    status: '處理中',
    txid: '0x9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba',
  },
])

// Mock Data - 提幣記錄
const withdrawalData = ref([
  {
    key: '1',
    time: '2024-01-15 09:30:12',
    coin: 'USDT',
    amount: '500.00',
    fee: '1.00',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb5',
    status: '已完成',
    txid: '0xdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abc',
  },
  {
    key: '2',
    time: '2024-01-14 15:20:45',
    coin: 'BTC',
    amount: '0.02',
    fee: '0.0001',
    address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    status: '已完成',
    txid: '0xcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890ab',
  },
  {
    key: '3',
    time: '2024-01-13 11:10:20',
    coin: 'ETH',
    amount: '1.0',
    fee: '0.005',
    address: '0x8Ba1f109551bD432803012645Ac136ddd64DBA72',
    status: '審核中',
    txid: '-',
  },
])

// Mock Data - 期權交易
const optionsData = ref([
  {
    key: '1',
    time: '2024-01-15 14:00:00',
    pair: 'BTC/USDT',
    direction: '看漲',
    strikePrice: '45,000',
    expiry: '2024-01-15 18:00:00',
    investment: '100.00',
    profit: '+85.00',
    status: '已結算',
  },
  {
    key: '2',
    time: '2024-01-15 12:30:00',
    pair: 'ETH/USDT',
    direction: '看跌',
    strikePrice: '2,500',
    expiry: '2024-01-15 16:00:00',
    investment: '200.00',
    profit: '-200.00',
    status: '已結算',
  },
  {
    key: '3',
    time: '2024-01-15 10:15:00',
    pair: 'BTC/USDT',
    direction: '看漲',
    strikePrice: '44,500',
    expiry: '2024-01-15 20:00:00',
    investment: '150.00',
    profit: '-',
    status: '進行中',
  },
])

// Mock Data - 合約
const contractsData = ref([
  {
    key: '1',
    time: '2024-01-15 14:25:30',
    contract: 'BTCUSDT',
    direction: '買入',
    leverage: '10x',
    openPrice: '44,500',
    closePrice: '45,200',
    amount: '0.5',
    pnl: '+350.00',
    fee: '2.25',
    status: '已平倉',
  },
  {
    key: '2',
    time: '2024-01-15 11:15:20',
    contract: 'ETHUSDT',
    direction: '賣出',
    leverage: '20x',
    openPrice: '2,520',
    closePrice: '2,480',
    amount: '2.0',
    pnl: '+1,600.00',
    fee: '5.04',
    status: '已平倉',
  },
  {
    key: '3',
    time: '2024-01-15 09:30:00',
    contract: 'BNBUSDT',
    direction: '買入',
    leverage: '5x',
    openPrice: '320',
    closePrice: '-',
    amount: '10',
    pnl: '-85.00',
    fee: '0.80',
    status: '持倉中',
  },
])

// Mock Data - 現貨
const spotData = ref([
  {
    key: '1',
    time: '2024-01-15 15:30:45',
    pair: 'BTC/USDT',
    direction: '買入',
    price: '44,850',
    amount: '0.1',
    total: '4,485.00',
    fee: '4.49',
    status: '已成交',
  },
  {
    key: '2',
    time: '2024-01-15 13:20:30',
    pair: 'ETH/USDT',
    direction: '賣出',
    price: '2,505',
    amount: '1.5',
    total: '3,757.50',
    fee: '3.76',
    status: '已成交',
  },
  {
    key: '3',
    time: '2024-01-15 10:45:15',
    pair: 'BNB/USDT',
    direction: '買入',
    price: '315',
    amount: '5',
    total: '1,575.00',
    fee: '1.58',
    status: '已成交',
  },
])

// Mock Data - 跟單交易
const copyTradingData = ref([
  {
    key: '1',
    time: '2024-01-15 14:30:00',
    trader: 'CryptoMaster',
    pair: 'BTC/USDT',
    direction: '買入',
    openPrice: '44,600',
    closePrice: '45,100',
    amount: '0.2',
    pnl: '+100.00',
    status: '已平倉',
  },
  {
    key: '2',
    time: '2024-01-15 11:00:00',
    trader: 'TraderPro',
    pair: 'ETH/USDT',
    direction: '賣出',
    openPrice: '2,530',
    closePrice: '2,490',
    amount: '3.0',
    pnl: '+120.00',
    status: '已平倉',
  },
  {
    key: '3',
    time: '2024-01-15 09:15:00',
    trader: 'SignalKing',
    pair: 'BNB/USDT',
    direction: '買入',
    openPrice: '318',
    closePrice: '-',
    amount: '8',
    pnl: '-48.00',
    status: '跟單中',
  },
])
</script>

<style scoped lang="less">
.report-page {
  min-height: 100vh;
  background: var(--bg-color-main);
  padding: 84px 20px 20px;
}

.report-container {
  max-width: 1400px;
  margin: 0 auto;
  background: var(--content-bg);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: 28px;
  font-weight: 600;
  color: var(--font-color);
  margin-bottom: 24px;
}

.report-tabs {
  :deep(.ant-tabs-nav) {
    margin-bottom: 20px;
  }

  :deep(.ant-tabs-tab) {
    font-size: 16px;
    font-weight: 500;
    color: #84849f;
    padding: 12px 20px;
  }

  :deep(.ant-tabs-tab-active) {
    color: var(--primary-color);
  }

  :deep(.ant-tabs-ink-bar) {
    background: var(--primary-color);
  }

  :deep(.ant-table) {
    background: transparent;
    color: var(--font-color);
  }

  :deep(.ant-table-thead > tr > th) {
    background: var(--data-bg18);
    color: #84849f;
    font-weight: 600;
    border-bottom: 2px solid var(--border-color);
    padding: 12px 16px;
  }

  :deep(.ant-table-tbody > tr > td) {
    background: var(--content-bg);
    color: var(--font-color);
    border-bottom: 1px solid var(--border-color);
    padding: 12px 16px;
  }

  :deep(.ant-table-tbody > tr:hover > td) {
    background: rgba(255, 255, 255, 0.05);
  }

  :deep(.ant-pagination) {
    .ant-pagination-item {
      background: var(--content-bg);
      border-color: var(--border-color);
      
      a {
        color: var(--font-color);
      }

      &:hover {
        border-color: var(--primary-color);
        
        a {
          color: var(--primary-color);
        }
      }
    }

    .ant-pagination-item-active {
      background: var(--primary-color);
      border-color: var(--primary-color);
      
      a {
        color: #fff;
      }
    }

    .ant-pagination-prev,
    .ant-pagination-next {
      .ant-pagination-item-link {
        background: var(--content-bg);
        border-color: var(--border-color);
        color: var(--font-color);

        &:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }
      }
    }
  }

  :deep(.ant-table-placeholder) {
    background: var(--content-bg);
    
    .ant-empty-description {
      color: #84849f;
    }
  }
}

@media (max-width: 768px) {
  .report-page {
    padding: 60px 10px 10px;
  }

  .report-container {
    padding: 20px 15px;
  }

  .page-title {
    font-size: 22px;
    margin-bottom: 16px;
  }

  .report-tabs {
    :deep(.ant-tabs-tab) {
      font-size: 14px;
      padding: 10px 12px;
    }
  }
}
</style>
