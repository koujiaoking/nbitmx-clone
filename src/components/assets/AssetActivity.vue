<template>
  <section class="asset-activity">
    <h3 class="white-color-text title-row">資產動態</h3>
    <div class="activity-content">
      <a-table 
        :columns="activityColumns" 
        :data-source="currentActivityData" 
        :pagination="false"
        :scroll="{ y: 720 }"
        size="small"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'type'">
            <span :class="record.typeClass">{{ record.type }}</span>
          </template>
          <template v-if="column.key === 'amount'">
            <span :class="record.amountClass">{{ record.amount }}</span>
          </template>
          <template v-if="column.key === 'status'">
            <span :class="record.statusClass">{{ record.status }}</span>
          </template>
        </template>
      </a-table>
    </div>
    <div class="bottom">
      <span class="blue-color-text">查看更多</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  accountType?: 'overview' | 'spot' | 'option' | 'contract'
}

const props = withDefaults(defineProps<Props>(), {
  accountType: 'overview'
})

const activityColumns = [
  {
    title: '時間',
    dataIndex: 'time',
    key: 'time',
    width: 120,
  },
  {
    title: '類型',
    dataIndex: 'type',
    key: 'type',
    width: 80,
  },
  {
    title: '金額',
    dataIndex: 'amount',
    key: 'amount',
    width: 100,
  },
  {
    title: '狀態',
    dataIndex: 'status',
    key: 'status',
    width: 80,
  },
]

// Different mock data for different account types
const activityDataMap = {
  overview: [
    {
      key: '1',
      time: '2026-02-09 18:30',
      type: '充值',
      typeClass: 'text-green-400',
      amount: '+1000.00 USDT',
      amountClass: 'text-green-400',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '2',
      time: '2026-02-09 16:15',
      type: '提幣',
      typeClass: 'text-red-400',
      amount: '-500.00 USDT',
      amountClass: 'text-red-400',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '3',
      time: '2026-02-09 14:20',
      type: '劃轉',
      typeClass: 'text-blue-400',
      amount: '200.00 BTC',
      amountClass: 'text-white',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '4',
      time: '2026-02-09 12:45',
      type: '交易',
      typeClass: 'text-purple-400',
      amount: '+150.50 ETH',
      amountClass: 'text-green-400',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '5',
      time: '2026-02-09 10:30',
      type: '充值',
      typeClass: 'text-green-400',
      amount: '+2000.00 USDT',
      amountClass: 'text-green-400',
      status: '處理中',
      statusClass: 'text-yellow-400',
    },
    {
      key: '6',
      time: '2026-02-08 22:15',
      type: '提幣',
      typeClass: 'text-red-400',
      amount: '-0.5 BTC',
      amountClass: 'text-red-400',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '7',
      time: '2026-02-08 18:00',
      type: '交易',
      typeClass: 'text-purple-400',
      amount: '-50.00 ETH',
      amountClass: 'text-red-400',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '8',
      time: '2026-02-08 15:30',
      type: '劃轉',
      typeClass: 'text-blue-400',
      amount: '100.00 USDT',
      amountClass: 'text-white',
      status: '成功',
      statusClass: 'text-green-400',
    },
  ],
  spot: [
    {
      key: '1',
      time: '2026-02-09 20:15',
      type: '買入',
      typeClass: 'text-green-400',
      amount: '+2.5 BTC',
      amountClass: 'text-green-400',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '2',
      time: '2026-02-09 18:30',
      type: '賣出',
      typeClass: 'text-red-400',
      amount: '-100 SOL',
      amountClass: 'text-red-400',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '3',
      time: '2026-02-09 15:20',
      type: '買入',
      typeClass: 'text-green-400',
      amount: '+500 DOGE',
      amountClass: 'text-green-400',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '4',
      time: '2026-02-09 12:10',
      type: '劃轉入',
      typeClass: 'text-blue-400',
      amount: '+1000 USDT',
      amountClass: 'text-white',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '5',
      time: '2026-02-08 22:45',
      type: '賣出',
      typeClass: 'text-red-400',
      amount: '-5 ETH',
      amountClass: 'text-red-400',
      status: '成功',
      statusClass: 'text-green-400',
    },
  ],
  option: [
    {
      key: '1',
      time: '2026-02-09 19:30',
      type: '開倉',
      typeClass: 'text-green-400',
      amount: '500 USDT',
      amountClass: 'text-white',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '2',
      time: '2026-02-09 17:15',
      type: '平倉',
      typeClass: 'text-red-400',
      amount: '+350 USDT',
      amountClass: 'text-green-400',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '3',
      time: '2026-02-09 14:00',
      type: '劃轉入',
      typeClass: 'text-blue-400',
      amount: '+1000 USDT',
      amountClass: 'text-white',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '4',
      time: '2026-02-09 11:20',
      type: '開倉',
      typeClass: 'text-green-400',
      amount: '800 USDT',
      amountClass: 'text-white',
      status: '執行中',
      statusClass: 'text-yellow-400',
    },
    {
      key: '5',
      time: '2026-02-08 20:30',
      type: '平倉',
      typeClass: 'text-red-400',
      amount: '-150 USDT',
      amountClass: 'text-red-400',
      status: '成功',
      statusClass: 'text-green-400',
    },
  ],
  contract: [
    {
      key: '1',
      time: '2026-02-09 21:00',
      type: '開多',
      typeClass: 'text-green-400',
      amount: '1000 usdt',
      amountClass: 'text-white',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '2',
      time: '2026-02-09 19:30',
      type: '平倉',
      typeClass: 'text-red-400',
      amount: '+250 usdt',
      amountClass: 'text-green-400',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '3',
      time: '2026-02-09 16:15',
      type: '開空',
      typeClass: 'text-purple-400',
      amount: '500 usdt',
      amountClass: 'text-white',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '4',
      time: '2026-02-09 13:45',
      type: '充值',
      typeClass: 'text-blue-400',
      amount: '+2000 usdt',
      amountClass: 'text-white',
      status: '成功',
      statusClass: 'text-green-400',
    },
    {
      key: '5',
      time: '2026-02-09 10:20',
      type: '平倉',
      typeClass: 'text-red-400',
      amount: '-100 usdt',
      amountClass: 'text-red-400',
      status: '成功',
      statusClass: 'text-green-400',
    },
  ]
}

const currentActivityData = computed(() => {
  return activityDataMap[props.accountType] || activityDataMap.overview
})
</script>

<style scoped lang="less">
.asset-activity {
  width: 490px;
  height: 892px;
  padding: 20px 0 !important;
  box-sizing: border-box !important;
  border-radius: 12px;
  border: 2px solid #2c2c3e;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.title-row {
  padding: 0 20px;
  margin-bottom: 20px;
  color: #fff;
  font-size: 18px;
}

.activity-content {
  flex: 1;
  overflow: hidden;
}

.activity-content :deep(.ant-table) {
  background: transparent;
}

.activity-content :deep(.ant-table-thead > tr > th) {
  background: transparent;
  color: #5e5e7a;
  border-bottom: 1px solid #2c2c3e;
  font-size: 12px;
  padding: 12px 8px;
}

.activity-content :deep(.ant-table-tbody > tr > td) {
  background: transparent;
  border-bottom: 1px solid #2c2c3e;
  color: #fff;
  font-size: 14px;
  padding: 16px 8px;
}

.activity-content :deep(.ant-table-tbody > tr:hover > td) {
  background: rgba(255, 255, 255, 0.05);
}

.bottom {
  height: 16px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
}

.blue-color-text {
  background: linear-gradient(90deg, #9bb8f0, #6491e9 49.79%, #556dea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {
  .asset-activity {
    width: 100%;
    height: auto;
  }
}
</style>
