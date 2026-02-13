<template>
  <div class="follow-detail-page text-white w-full min-h-screen bg-[#0b0c15] pb-[50px]">
    <div class="max-w-[1351px] mx-auto pt-[10px]">
      
      <!-- Breadcrumb -->
      <div v-if="isDesktop" class="flex items-center text-[#888] select-none mb-4">
        <router-link to="/follow/index" class="text-[16px] text-[#888]">交易廣場</router-link>
        <span class="mx-[10px]"> &gt; </span>
        <span class="text-[#00F0FF] text-[16px]">CryptoMarshal</span>
      </div>

      <!-- Top Info Box - Desktop -->
      <div v-if="isDesktop" class="user_info_box show">
        <div class="item_top_left">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoMarshal" class="avatar">
          <div class="item_name">
            <div class="item_name_level">
              <span>CryptoMarshal</span>
              <span class="user_level">LV.8</span>
            </div>
            <div class="moreBox">
              <div class="item_name_total">Guiding you through Bitcoin's wild ride – from beginner to pro.</div>
            </div>
          </div>
          <div class="line_num hidden md:flex">
            <span>+12%</span>
            <span>+$9876541.66</span>
          </div>
          <div class="quota hidden md:flex">
            <div class="quota_line"><span>名額</span><span class="ma">669</span><span>/1000</span></div>
            <div class="quota_line"><span>近7天跟投人數</span><span class="ma">89</span></div>
          </div>
          <div class="quota hidden md:flex">
            <div class="quota_line"><span>勝率</span><span class="ma">92.17%</span></div>
            <div class="quota_line"><span>帶單規模</span><span class="ma">$2,962,963</span></div>
          </div>
        </div>
        <div class="flex items-center pr-4">
          <button class="follow_btn" @click="showFollowModal">跟單</button>
          <button class="back_btn" @click="$router.back()">返回</button>
        </div>
      </div>

      <!-- Top Info Box - Mobile -->
      <div v-if="isMobile" class="follow-box">
        <div class="top">
          <div class="user-info">
            <img class="avatar" src="https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoMarshal">
            <div class="user">
              <p class="name">CryptoMarshal <span class="level">LV.8</span></p>
              <div class="gray w-70vw -ml-10px">
                <!-- 自定义展开收起 -->
                <div 
                  class="description-wrapper"
                  :class="{ 'expanded': isDescExpanded }"
                  @click="isDescExpanded = !isDescExpanded"
                >
                  <p class="description-text">
                    Guiding you through Bitcoin's wild ride – from beginner to pro.
                  </p>
                  <!-- <svg 
                    class="expand-icon" 
                    :class="{ 'rotated': isDescExpanded }"
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12" 
                    fill="none"
                  >
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg> -->
                  <div class="expand-icon" 
                    :class="{ 'rotated': isDescExpanded }"><van-icon name="arrow-down" /></div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full h-[2px] bg-[#232437] relative top-[44px] z-0"></div>

      <!-- Tabs -->
      <div class="relative z-10">
        <van-tabs 
          v-model:active="activeTab" 
          shrink 
          background="transparent" 
          line-width="40px" 
          line-height="2px"
          color="#ffffff"
          title-active-color="#ffffff"
          title-inactive-color="#888888"
          :border="false"
        >
          <van-tab title="帶單表現" name="performance">
            <div :class="isMobile ? 'pt-6 px-[3.2vw] box-border text-white' : 'pt-6'">
              <!-- Charts Section - Desktop -->
              <ul v-if="isDesktop" class="list">
                <!-- Line Chart -->
                <li class="item">
                  <div class="title-content">
                    <div class="title">
                      <!-- SVG icon placeholder -->
                       <img src="@/assets/images/title-ai.png" />
                      <span>收益週表現</span>
                    </div>
                    <div class="filter-item">按收益金額</div>
                  </div>
                  <div ref="lineChartRef" class="w-full h-[220px]"></div>
                </li>

                <!-- Bar Chart -->
                <li class="item">
                  <div class="title-content">
                    <div class="title"><img src="@/assets/images/title-ai.png" /><span>殖利率</span></div>
                    <div class="filter-item">按收益率</div>
                  </div>
                  <div class="chat-day">
                    <p class="rate"></p>
                    <p class="day-list">
                      <span 
                        v-for="filter in timeFilters" 
                        :key="filter"
                        :class="{ active: activeTimeFilter === filter }"
                        @click="handleTimeFilterChange(filter)"
                      >
                        {{ filter }}
                      </span>
                    </p>
                  </div>
                  <div ref="barChartRef" class="w-full h-[200px]"></div>
                </li>

                <!-- Status -->
                <li class="item">
                  <div class="title-content">
                     <div class="title"><img src="@/assets/images/title-ai.png" /><span>帶單情況</span></div>
                  </div>
                  <div class="progress-bar">
                    <van-progress :percentage="92.17" stroke-width="10" track-color="#DB75FF" color="#3AFFCF" :show-pivot="false" />
                    <div class="count">
                      <p><span class="name">盈利天數</span><span class="green">318</span></p>
                      <p><span class="name">虧損天數</span><span class="red">27</span></p>
                    </div>
                  </div>
                  <div class="info-content">
                    <p><span class="name">勝率</span><span>92.17%</span></p>
                    <p><span class="name">年平均收益率</span><span>68%</span></p>
                    <p><span class="name">近7天跟投收益率</span><span>36%</span></p>
                  </div>
                </li>
              </ul>

              <!-- Charts Section - Mobile (Flat Layout) -->
              <div v-if="isMobile" class="flat-layout">
                <!-- Line Chart -->
                <div class="chart-section">
                  <div class="title-content">
                    <div class="title">
                       <img src="@/assets/images/title-ai.png" />
                      <span>收益週表現</span>
                    </div>
                    <div class="filter-item">按收益金額</div>
                  </div>
                  <div class="chart-container">
                    <div ref="lineChartRef" class="chart-canvas w-93vw h-66vw"></div>
                  </div>
                </div>

                <!-- Bar Chart -->
                <div class="chart-section">
                  <div class="title-content">
                    <div class="title"><img src="@/assets/images/title-ai.png" /><span>殖利率</span></div>
                    <div class="filter-item">按收益率</div>
                  </div>
                  <div class="chat-day">
                    <p class="rate"></p>
                    <p class="day-list">
                      <span 
                        v-for="filter in timeFilters" 
                        :key="filter"
                        :class="{ active: activeTimeFilter === filter }"
                        @click="handleTimeFilterChange(filter)"
                      >
                        {{ filter }}
                      </span>
                    </p>
                  </div>
                  <div class="chart-container">
                    <div ref="barChartRef" class="chart-canvas w-93vw h-66vw"></div>
                  </div>
                </div>

                <!-- Status -->
                <div class="chart-section">
                  <div class="title-content">
                     <div class="title"><img src="@/assets/images/title-ai.png" /><span>帶單情況</span></div>
                  </div>
                  <div class="progress-bar">
                    <van-progress :percentage="92.17" stroke-width="10" track-color="#DB75FF" color="#3AFFCF" :show-pivot="false" />
                    <div class="count">
                      <p><span class="name">盈利天數</span><span class="green">318</span></p>
                      <p><span class="name">虧損天數</span><span class="red">27</span></p>
                    </div>
                  </div>
                  <div class="info-content">
                    <p><span class="name">勝率</span><span>92.17%</span></p>
                    <p><span class="name">年平均收益率</span><span>68%</span></p>
                    <p><span class="name">近7天跟投收益率</span><span>36%</span></p>
                  </div>
                </div>
              </div>

              <!-- Info Boxes - Desktop -->
              <div v-if="isDesktop" class="info_box flex-col lg:flex-row">
                <div class="info_box_l">
                   <div class="title-content"><div class="title"><img src="@/assets/images/title-ai.png" /><span>領導團隊概覽</span></div></div>
                   <div class="info-content">
                      <p v-for="(val, label) in overviewStats" :key="label">
                        <span class="name">{{ label }}</span><span>{{ val }}</span>
                      </p>
                   </div>
                </div>
                <!-- Followers List -->
                <div class="info_box_r">
                  <div class="user_top">
                    <div class="title-content"><div class="title"><span>跟單用戶</span></div></div>
                    <div class="user_top_right">跟單人數 92</div>
                  </div>
                  <div class="follow-people">
                     <div class="people-item" v-for="i in 5" :key="i">
                        <img src="https://random-cat-assets-r2.hats-land.com/api/v1/images" class="avatar">
                        <div class="info">
                           <p class="name">0x900...b93e</p>
                           <div class="profit">
                              <span>跟投金額</span><span>9,737 USDT</span>
                           </div>
                           <div class="profit">
                              <span>跟單收益</span><span class="green">+2,875 USDT</span>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              <!-- Info Boxes - Mobile (Flat Layout) -->
              <div v-if="isMobile" class="flat-layout">
                <div class="chart-section">
                   <div class="title-content"><div class="title"><img src="@/assets/images/title-ai.png" /><span>領導團隊概覽</span></div></div>
                   <div class="info-content">
                      <p v-for="(val, label) in overviewStats" :key="label">
                        <span class="name">{{ label }}</span><span>{{ val }}</span>
                      </p>
                   </div>
                </div>
                
                <!-- Followers List - Mobile (按照領導團隊概覽样式) -->
                <div class="chart-section">
                  <div class="title-content">
                    <div class="title"><img src="@/assets/images/title-ai.png" /><span>跟單用戶</span></div>
                  </div>
                  <div class="info-content">
                     <p><span class="name">近7天跟投人數</span><span>168</span></p>
                     <p><span class="name">近7天跟投收益率</span><span>68%</span></p>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>

          <!-- Current Orders Tab -->
          <van-tab title="目前帶單" name="current">
            <!-- PC端表格 -->
            <div v-if="isDesktop" class="data-list-new">
              <a-table :dataSource="currentOrders" :columns="currentOrderColumns" :pagination="false" />
            </div>
            
            <!-- 移动端订单卡片 -->
            <div v-if="isMobile" class="mobile-orders">
              <div v-for="order in currentOrders" :key="order.key" class="follow-order">
                <div class="coin">
                  <img class="icon mr-5px" :src="`https://bitcotyrax.oss-ap-southeast-1.aliyuncs.com/coin_icon/${order.coin}.png`" />
                  <span>{{ order.coin }}</span>
                  <span class="ml-15px green">{{ order.leverage }} </span>
                </div>
                <p class="order-title"><span>買入價</span><span>殖利率</span></p>
                <p class="order-desc"><span>{{ order.price }}</span><span :class="parseFloat(order.rate) >= 0 ? 'green' : 'red'">{{ order.rate }}</span></p>
                <p class="order-title"><span>持倉方向</span><span>投入額</span></p>
                <p class="order-desc"><span :class="order.direction === 'Long' || order.direction === '做多' ? 'font-win' : 'font-lose'">{{ order.direction === 'Long' ? '做多' : '做空' }}</span><span>{{ order.amount }}</span></p>
                <p class="order-title"><span>開始時間</span></p>
                <p class="order-desc order-time"><span class="time">{{ order.time }}</span></p>
              </div>
            </div>
          </van-tab>

          <!-- History Orders Tab -->
          <van-tab title="歷史帶單" name="history">
            <!-- PC端表格 -->
            <div v-if="isDesktop" class="data-list-new">
              <a-table :dataSource="historyOrders" :columns="historyOrderColumns" :pagination="false" />
            </div>
            
            <!-- 移动端订单卡片 -->
            <div v-if="isMobile" class="mobile-orders">
              <div v-for="order in historyOrders" :key="order.key" class="follow-order">
                <div class="coin">
                  <img class="icon mr-5px" :src="`https://bitcotyrax.oss-ap-southeast-1.aliyuncs.com/coin_icon/${order.coin}.png`" />
                  <span>{{ order.coin }}</span>
                  <span class="ml-15px green">{{ order.leverage }} </span>
                </div>
                <p class="order-title"><span>買入價</span><span>殖利率</span></p>
                <p class="order-desc"><span>{{ order.price }}</span><span :class="parseFloat(order.rate) >= 0 ? 'green' : 'red'">{{ order.rate }}</span></p>
                <p class="order-title"><span>持倉方向</span><span>投入額</span></p>
                <p class="order-desc"><span :class="order.direction === 'Long' || order.direction === '做多' ? 'font-win' : 'font-lose'">{{ order.direction === 'Long' ? '做多' : '做空' }}</span><span>{{ order.amount }}</span></p>
                <p class="order-title"><span>開始時間</span><span>結束時間</span></p>
                <p class="order-desc order-time"><span class="time">{{ order.start }}</span><span>→</span><span class="time-end">{{ order.end }}</span></p>
              </div>
            </div>
          </van-tab>

          <!-- 移动端跟单者标签页 -->
          <van-tab v-if="isMobile" title="跟单者" name="followers">
            <div class="mobile-followers">
              <div v-for="follower in followers" :key="follower.id" class="people-item">
                <img class="avatar" :src="follower.avatar" />
                <div class="info">
                  <div class="name">{{ follower.name }}</div>
                  <div class="profit">
                    <span>跟單收益</span>
                    <span :class="follower.profit >= 0 ? 'green' : 'red'">{{ follower.profit >= 0 ? '+' : '' }}{{ follower.profit }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      
      <!-- Mobile Footer Button -->
      <div v-if="isMobile" class="footer">
        <button class="btn" @click="showFollowModal">跟單</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, shallowRef } from 'vue'
import * as echarts from 'echarts'
import { showModal } from '@/utils/showModal'
import FollowModal from '@/components/follow/FollowModal.vue'
import { useDevice } from '@/composables/useDevice'

const { isMobile, isDesktop } = useDevice()

const activeTab = ref('performance')
const isDescExpanded = ref(false)
const lineChartRef = ref<HTMLElement | null>(null)
const barChartRef = ref<HTMLElement | null>(null)
const barChartInstance = shallowRef<echarts.ECharts | null>(null)

const timeFilters = ['90日', '30日', '15日', '7日']
const activeTimeFilter = ref('90日')

const overviewStats = {
  '跟投天数': '2',
  '帶單天數': '345',
  '交易員帶單資產(USDT)': '9,876,541.66',
  '帶單規模': '2,962,963',
  '目前跟單用戶收益(USDT)': '474,074.08',
  '跟單人數': '669/1000',
  '分潤比例': '5%'
}

// Columns for Ant Design Table
const currentOrderColumns = [
  { title: 'Cryptocurrency', dataIndex: 'coin', align: 'center' },
  { title: 'Buy Price', dataIndex: 'price', align: 'center' },
  { title: 'Investment Amount', dataIndex: 'amount', align: 'center' },
  { title: 'Yield', dataIndex: 'rate', align: 'center' },
  { title: 'Leverage', dataIndex: 'leverage', align: 'center' },
  { title: 'Position Direction', dataIndex: 'direction', align: 'center' },
  { title: 'Start Time', dataIndex: 'time', align: 'center' }
] as any

const currentOrders = [
  { key: 1, coin: 'SOLUSDT', price: '105.2', amount: '104770.15', rate: '2.74%', leverage: '12', direction: 'Short', time: '2026-02-01 06:41:52' }
]

const historyOrderColumns = [
  { title: 'Cryptocurrency', dataIndex: 'coin', align: 'center' },
  { title: 'Buy/Short', dataIndex: 'price', align: 'center' },
  { title: 'Investment Amount', dataIndex: 'amount', align: 'center' },
  { title: 'Yield', dataIndex: 'rate', align: 'center' },
  { title: 'Leverage', dataIndex: 'leverage', align: 'center' },
  { title: 'Position Direction', dataIndex: 'direction', align: 'center' },
  { title: 'Start Time', dataIndex: 'start', align: 'center' },
  { title: 'End Time', dataIndex: 'end', align: 'center' },
] as any

const historyOrders = [
  { key: 1, coin: 'SOLUSDT', price: '125.04 / 127.25', amount: '158,157.97', rate: '8.84%', leverage: '5x', direction: 'Long', start: '2026-01-27 01:29:47', end: '2026-01-28 11:55:14' },
  { key: 2, coin: 'ETHUSDT', price: '3,006.66 / 3,028.52', amount: '51,809.64', rate: '14.54%', leverage: '20x', direction: 'Long', start: '2026-01-20 19:54:09', end: '2026-01-22 00:11:12' },
  { key: 3, coin: 'LTCUSDT', price: '74.49 / 71.12', amount: '43,997.5', rate: '45.24%', leverage: '10x', direction: 'Short', start: '2026-01-17 12:11:03', end: '2026-01-19 16:17:43' },
  { key: 4, coin: 'SOLUSDT', price: '139.7 / 142.06', amount: '59,912.92', rate: '8.45%', leverage: '5x', direction: 'Long', start: '2026-01-11 22:52:01', end: '2026-01-13 13:53:25' },
  { key: 5, coin: 'DOGEUSDT', price: '0.13971 / 0.13903', amount: '78,166.11', rate: '9.73%', leverage: '20x', direction: 'Short', start: '2026-01-11 10:49:35', end: '2026-01-13 05:43:00' },
  { key: 6, coin: 'XRPUSDT', price: '2.0955 / 2.0921', amount: '199,121.35', rate: '1.62%', leverage: '10x', direction: 'Short', start: '2026-01-10 00:01:05', end: '2026-01-11 08:36:53' },
  { key: 7, coin: 'LTCUSDT', price: '81.39 / 81.86', amount: '75,349.61', rate: '1.73%', leverage: '3x', direction: 'Long', start: '2026-01-07 19:36:04', end: '2026-01-09 05:50:27' },
  { key: 8, coin: 'SUIUSDT', price: '1.7041 / 1.9303', amount: '98,502.6', rate: '106.19%', leverage: '8x', direction: 'Long', start: '2026-01-05 02:20:37', end: '2026-01-07 08:08:58' },
  { key: 9, coin: 'LTCUSDT', price: '82.2 / 83.06', amount: '71,999.82', rate: '3.14%', leverage: '3x', direction: 'Long', start: '2026-01-04 05:32:53', end: '2026-01-06 07:22:38' },
  { key: 10, coin: 'BTCUSDT', price: '88,857.61 / 91,529.73', amount: '49,672.13', rate: '30.07%', leverage: '10x', direction: 'Long', start: '2026-01-02 06:52:22', end: '2026-01-04 22:18:42' },
]

// Followers data for mobile view
const followers = [
  { id: 1, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=User1', name: 'CryptoNinja', profit: 15.09 },
  { id: 2, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=User2', name: 'TraderPro', profit: 8.5 },
  { id: 3, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=User3', name: 'InvestorElite', profit: -2.3 },
  { id: 4, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=User4', name: 'CoinMaster', profit: 12.7 },
  { id: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=User5', name: 'BlockchainKing', profit: 20.1 },
]

onMounted(async () => {
    await nextTick()
    initCharts()
})

const showFollowModal = async () => {
  try {
    await showModal(FollowModal, {
      componentProps: {
        traderInfo: {
            name: 'CryptoMarshal',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoMarshal',
            level: 8,
            desc: 'Guiding you through Bitcoin’s wild ride – from beginner to pro.',
            roi: '+12%',
            pnl: '+$9876541.66',
            quota: '669/1000',
            followers7d: '89',
            winRate: '92.17%',
            assetSize: '$2,962,963'
        }
      },
      modalProps: {
        closeOnClickOverlay: true
      }
    })
    // Handle success (e.g. show toast, refresh data)
    console.log('Follow confirmed')
  } catch (e) {
    console.log('Follow cancelled')
  }
}

const handleTimeFilterChange = (filter: string) => {
    activeTimeFilter.value = filter
    updateBarChartData()
}

const updateBarChartData = () => {
    if (!barChartInstance.value) return

    // Mock data generation based on filter to show change
    let newData: number[] = []
    
    // Just generating some deterministic random-ish data based on filter
    switch(activeTimeFilter.value) {
        case '90日':
            newData = [50, 80, 78, 68]
            break
        case '30日':
            newData = [45, 60, 55, 72]
            break
        case '15日':
            newData = [30, 48, 42, 50]
            break
        case '7日':
            newData = [20, 35, 28, 40]
            break
        default:
            newData = [50, 80, 78, 68]
    }

    barChartInstance.value.setOption({
        series: [{
            data: newData
        }]
    })
}

const initCharts = () => {
    if (lineChartRef.value) {
        const chart = echarts.init(lineChartRef.value)
        chart.setOption({
            grid: { left: 40, right: 20, top: 20, bottom: 20 },
            xAxis: { 
                type: 'category', 
                show: false,
                boundaryGap: false 
            },
            yAxis: { 
                type: 'value', 
                splitLine: { show: true, lineStyle: { color: '#333', type: 'dashed' } },
                axisLabel: { color: '#888' }
            },
            series: [{
                data: [50, 78, 77, 68, 50, 70],
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: { color: '#00F0FF' },
                areaStyle: {
                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: 'rgba(0, 240, 255, 0.5)' },
                      { offset: 1, color: 'rgba(0, 240, 255, 0)' }
                   ])
                }
            }]
        })
    }

    if (barChartRef.value) {
        barChartInstance.value = echarts.init(barChartRef.value)
        barChartInstance.value.setOption({
            grid: { left: 40, right: 20, top: 20, bottom: 20 },
            xAxis: { 
                type: 'category', 
                data: ['90日', '30日', '15日', '7日'],
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { color: '#888' }
            },
            yAxis: { 
                type: 'value',
                splitLine: { show: true, lineStyle: { color: '#333', type: 'dashed' } },
                axisLabel: { color: '#888' }
            },
            series: [{
                data: [50, 80, 78, 68],
                type: 'bar',
                barWidth: '20%',
                itemStyle: { color: '#00F0FF' }
            }]
        })
    }
}
</script>

<style scoped lang="less">
/* Inline detail.css content */

.user_info_box {
    border: 1px solid #3c3e53;;
    margin-top: 10px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 9999px;}

.user_info_box .item_top_left {
    margin-left: 30px;
    display: flex;
    align-items: center;}

.user_info_box .item_top_left .avatar {
    width: 40px;
    height: 40px;
    border-radius: 9999px;}

.user_info_box .item_top_left .item_name {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;}

.user_info_box .item_top_left .item_name .item_name_level span:nth-child(1) {
    color: var(--font-color-main);
    font-size: 18px;}

.user_info_box .item_top_left .item_name .user_level {
    background: linear-gradient(270deg,#fcdf7b,#f9cd4e);
    margin-left: 6px;
    width: 33px;
    height: 18px;
    border-radius: 100px;
    padding: 1px 5px;
    --un-text-opacity: 1;
    color: rgb(160 115 0 / var(--un-text-opacity));
    font-weight: 600;}

.user_info_box .item_top_left .item_name .moreBox {
    display: flex;
    align-items: flex-end;}

.user_info_box .item_top_left .item_name .moreBox .item_name_total {
    height: 20px;
    overflow: hidden;
    font-size: 14px;
    --un-text-opacity: 1;
    color: rgb(136 136 136 / var(--un-text-opacity));}

.user_info_box .item_top_left .line_num {
    margin-left: 50px;
    display: flex;
    flex-direction: column;}

.user_info_box .item_top_left .line_num span:nth-child(1) {
    color: #0ff;
    font-family: Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;
    font-size: 24px;
    line-height: 1;}

.user_info_box .item_top_left .quota {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;}

.user_info_box .item_top_left .quota .quota_line {
    color: #888;}

.user_info_box .item_top_left .quota .quota_line span:nth-child(1) {
    margin-right: 10px;
    display: inline-block;
    text-align: right;}

.user_info_box .item_top_left .quota .quota_line .ma {
    color: #fff;}

.user_info_box .follow_btn {
    background: #00f0ff;
    color: #000;
    margin-right: 20px;
    width: 80px;
    height: 40px;
    cursor: pointer;
    border-radius: 9999px;}

.user_info_box .back_btn {
    color: #000;
    margin-right: 20px;
    min-width: 80px;
    height: 40px;
    cursor: pointer;
    border-radius: 9999px;
    --un-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--un-bg-opacity));}

.bar-chart,.smooth-line-chart {
    transition: all .3s ease-in-out;}

.list {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    padding-top: 30px;
    padding-bottom: 5px;
}

.list .item {
    border: 2px solid #252731;
    box-sizing: border-box !important;
    width: 430px;
    height: 300px;
    flex: none;
    border-radius: 8px;
    padding: 30px;}

.list .chat-day {
    display: flex;
    align-items: center;
    justify-content: space-between;}

.list .chat-day .day-list span {
    color: #fff;
    margin-right: 6px;
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    gap: 10px;
    padding: 4px 6px;}

.list .chat-day .day-list .active {
    border-radius: 6px;
    background: #00f0ff;
    color: #000;}

.list .progress-bar {
    margin-top: 15px;
    margin-bottom: 20px;}

.list .progress-bar .count {
    margin-top: 6px;
    display: flex;
    justify-content: space-between;}

.list .progress-bar .count .name {
    color: #adadad;}

.title-content {
    display: flex;
    justify-content: space-between;}

.title-content .title {
    color: var(--font-color-main);
    display: flex;
    align-items: center;
    font-size: 15px;}

.title-content .title img {
    margin-right: 5px;
    width: 12px;
    height: 12px;}

.title-content .filter-item {
    background: var(--data-bg-main);
    color: var(--font-color-main);
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 6px 10px;
    font-size: 12px;}

.info-content {
    margin-top: 10px;}

.info-content>p {
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;}

.info-content .name {
    --un-text-opacity: 1;
    color: rgb(173 173 173 / var(--un-text-opacity));
    text-decoration-line: underline;}

.gendan {
    margin-top: 20px;}

.info_box {
    margin-top: 30px;
    display: flex;
    gap: 30px;}

.info_box_l {
    border: 2px solid #252731;
    box-sizing: border-box !important;
    width: 430px;
    height: 420px;
    border-radius: 8px;
    padding: 30px;}

.info_box_r {
    border: 2px solid #252731;
    box-sizing: border-box !important;
    height: 420px;
    flex: 1 1 0%;
    border-radius: 8px;
    padding: 30px;}

.info_box_r .user_top {
    display: flex;
    justify-content: space-between;}

.info_box_r .user_top .user_top_right span {
    color: var(--font-win);}

.follow-people {
    margin-top: 10px;
    height: 340px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    overflow-y: auto;}

.people-item {
    box-sizing: border-box !important;
    height: 98px;
    width: 405px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    --un-bg-opacity: 1;
    background-color: rgb(26 27 36 / var(--un-bg-opacity));
    padding: 16px;}

.people-item .avatar {
    margin-right: 16px;
    width: 46px;
    height: 46px;
    border-radius: 9999px;}

.people-item .info {
    flex: 1;}

.people-item .profit {
    width: 100%;
    display: flex;
    justify-content: space-between;}

.people-item .profit span:first-child {
    color: #888;
}

.people-item .profit .green {
    color: #0ff;
}

.people-item .profit .red {
    color: #eb5757;}

.data-list-new {
    border: 2px solid #252731;
    margin-top: 30px;
    width: 100%;
    min-height: 550px;
    overflow: hidden;
    border-radius: 12px;
    background: var(--data-bg-main, #1A1B24);
}

// .data-list-new .ant-table,.data-list-new .ant-table-wrapper th,.data-list-new .ant-table-wrapper td {
//     background: transparent;
//     color: var(--font-color-main, #fff);
// }
// :deep(.ant-table) {
//     background: transparent;
// }

// /* 确保表头背景透明 */
// .data-list-new :deep(.ant-table-thead > tr > th) {
//     background: transparent;
//     border-bottom: 1px solid #030305;
//     color: #fff;
// }

// /* 确保表格行背景透明 */
// .data-list-new :deep(.ant-table-tbody > tr > td) {
//     background: transparent;
//     border-bottom: 1px solid #030305;
//     color: #fff;

// }

// /* hover效果 */
// .data-list-new :deep(.ant-table-tbody > tr:hover > td) {
//     background: transparent;
// }
// :deep(.ant-table-tbody > tr > td) {
//     border-bottom: 1px solid #030305 !important;
// }
// .data-list-new :deep(.ant-table-thead > tr > th:before) {
//     background-color: #030305 !important;
       
// }

/* 移动端订单卡片样式 */
.mobile-orders {
    padding: 0;
}

.follow-order {
    border: 1px solid var(--border-color1, #3c3e53);
    margin: 2.6vw 3.2vw;
    border-radius: 4vw;
    padding-left: 2.6vw;
    padding-right: 2.6vw;
    padding-top: 3.7vw;
}

.follow-order .coin {
    position: relative;
    margin-bottom: 2.6vw;
    display: flex;
    align-items: center;
}

.follow-order .coin .icon {
    width: 5.3vw;
    height: 5.3vw;
    border-radius: 9999px;
}

.follow-order .coin .share {
    position: absolute;
    right: 0;
    width: 4.8vw;
    height: 4.8vw;
    border-radius: 0;
}

.follow-order .order-title {
    margin-bottom: 2.6vw;
    display: flex;
    justify-content: space-between;
    font-size: 3.3vw;
    --un-text-opacity: 1;
    color: rgb(173 173 173 / var(--un-text-opacity));
}

.follow-order .order-desc {
    color: var(--font-color-main);
    margin-bottom: 2.6vw;
    display: flex;
    justify-content: space-between;
    font-size: 3.7vw;
}

.follow-order .order-time .time,
.follow-order .order-time .time-end {
    flex: 1;
}

.follow-order .order-time .time-end {
    text-align: right;
}

.follow-order .green {
    color: #0ff;
}

.follow-order .red {
    color: #eb5757;
}

.follow-order .font-win {
    color: var(--font-win, #0ff);
}

.follow-order .font-lose {
    color: var(--font-lose, #eb5757);
}

/* 移动端跟单者列表样式 */
.mobile-followers {
    padding: 0;
}

.mobile-followers .people-item {
    background: var(--data-bg36, #1A222B);
    border: 1px solid var(--border-color1, #3c3e53);
    margin: 2.6vw 3.2vw;
    box-sizing: border-box;
    height: 24.5vw;
    display: flex;
    align-items: center;
    border-radius: 4vw;
    padding: 4.2vw;
}

.mobile-followers .people-item .avatar {
    margin-right: 4vw;
    width: 12vw;
    height: 12vw;
    border-radius: 9999px;
}

.mobile-followers .people-item .info {
    flex: 1;
}

.mobile-followers .people-item .name {
    margin-bottom: 5px;
    color: var(--font-color-main, #fff);
}

.mobile-followers .people-item .profit {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.mobile-followers .people-item .profit span:first-child {
    color: var(--font-color3-pc, #888);
}

.mobile-followers .people-item .profit .green {
    color: var(--font-win, #0ff);
}

.mobile-followers .people-item .profit .red {
    color: #eb5757;
}

@media (max-width: 768px) {
.title-content {
    margin-top: 4.2vw;
    margin-bottom: 4.2vw;
    display: flex;
    justify-content: space-between;}

.title-content .title {
    color: var(--font-color-main);
    display: flex;
    align-items: center;
    font-size: 4vw;}

.title-content .title img {
    margin-right: 1vw;
    width: 3vw;
    height: 3vw;}

.title-content .filter-item {
    background: var(--data-bg-main);
    color: var(--font-color-main);
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 6px 10px;
    font-size: 4vw;}

.chat-day {
    display: flex;
    align-items: center;
    justify-content: space-between;}

.chat-day .day-list span {
    color: var(--font-color-main);
    margin-right: 2vw;
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    gap: 2vw;
    padding: 1vw 2vw;}

.chat-day .day-list .active {
    border-radius: 2vw;
    background: var(--btn-bg);
    color: var(--font-btn);}

.progress-bar {
    margin-top: 1vw;
    margin-bottom: 2vw;}

.progress-bar .count {
    margin-top: 2vw;
    display: flex;
    justify-content: space-between;}

.progress-bar .count .name {
    color: #adadad;}

.info-content {
    margin-top: 5vw;}

.info-content>p {
    margin-bottom: 2vw;
    display: flex;
    justify-content: space-between;}

.info-content .name {
    --un-text-opacity: 1;
    color: rgb(173 173 173 / var(--un-text-opacity));
    text-decoration-line: underline;}

.notice-bar {
    background: var(--data-bg-main);
    box-sizing: border-box !important;
    height: 12vw;
    display: flex;
    align-items: center;
    border-radius: 8vw;
    padding-left: 3vw;
    padding-right: 3vw;}

.notice-bar img {
    margin-right: 3vw;
    width: 7vw;
    height: 7vw;
    border-radius: 9999px;}

.green {
    color: #0ff;}

.follow-order {
    border: 1px solid #3c3e53;;
    margin: 2.6vw 3.2vw;
    border-radius: 4vw;
    padding-left: 2.6vw;
    padding-right: 2.6vw;
    padding-top: 3.7vw;}

.coin {
    position: relative;
    margin-bottom: 2.6vw;
    display: flex;
    align-items: center;}

.coin .icon {
    width: 5.3vw;
    height: 5.3vw;
    border-radius: 9999px;}

.coin .share {
    position: absolute;
    right: 0;
    width: 4.8vw;
    height: 4.8vw;
    border-radius: 0;}

.order-title {
    margin-bottom: 2.6vw;
    display: flex;
    justify-content: space-between;
    font-size: 3.3vw;
    --un-text-opacity: 1;
    color: rgb(173 173 173 / var(--un-text-opacity));}

.order-desc {
    color: var(--font-color-main);
    margin-bottom: 2.6vw;
    display: flex;
    justify-content: space-between;
    font-size: 3.7vw;}

.order-time .time,.order-time .time-end {
    flex: 1;}

.order-time .time-end {
    text-align: right;}

.green {
    color: #0ff;}

.follow-order {
    border: 1px solid #3c3e53;;
    margin: 2.6vw 3.2vw;
    border-radius: 4vw;
    padding-left: 2.6vw;
    padding-right: 2.6vw;
    padding-top: 3.7vw;}

.coin {
    position: relative;
    margin-bottom: 2.6vw;
    display: flex;
    align-items: center;}

.coin .icon {
    width: 5.3vw;
    height: 5.3vw;
    border-radius: 9999px;}

.coin .share {
    position: absolute;
    right: 0;
    width: 4.8vw;
    height: 4.8vw;
    border-radius: 0;}

.order-title {
    margin-bottom: 2.6vw;
    display: flex;
    justify-content: space-between;
    font-size: 3.3vw;
    --un-text-opacity: 1;
    color: rgb(173 173 173 / var(--un-text-opacity));}

.order-desc {
    color: var(--font-color-main);
    margin-bottom: 2.6vw;
    display: flex;
    justify-content: space-between;
    font-size: 3.7vw;}

.order-time .time,.order-time .time-end {
    flex: 1;}

.order-time .time-end {
    text-align: right;}

.green {
    color: #0ff;}

.people-item {
    background: var(--data-bg36);
    border: 1px solid #3c3e53;;
    margin-bottom: 2.6vw;
    box-sizing: border-box !important;
    height: 24.5vw;
    display: flex;
    align-items: center;
    border-radius: 4vw;
    padding: 4.2vw;
    width: auto;
}

.people-item .avatar {
    margin-right: 4vw;
    width: 12vw;
    height: 12vw;
    border-radius: 9999px;}

.people-item .info {
    flex: 1;}

.people-item .name {
    margin-bottom: 5px;}

.people-item .profit {
    width: 100%;
    display: flex;
    justify-content: space-between;}

.people-item .profit span:first-child {
    color: #888;
}

.people-item .profit .green {
    color: #0ff;
}

.people-item .profit .red {
    color: #eb5757;
}

.follow-box {
    margin: 3vw 3.2vw;
    box-sizing: border-box;
    border-radius: 4.8vw;
    --un-bg-opacity: 1;
    background-color: rgb(26 34 43 / var(--un-bg-opacity));
    padding: 4vw 5.6vw;}

.follow-box .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;}

.follow-box .top .user-info {
    display: flex;
    align-items: center;}

.follow-box .top .user-info .avatar {
    margin-right: 2vw;
    margin-top: 1vw;
    width: 60px;
    height: 60px;
    align-self: flex-start;
    border-radius: 9999px;}

.follow-box .top .user-info .user {
    flex: 1;}

.follow-box .top .user-info .user .name {
    font-size: 4.26667vw;
    color: var(--font-color-main);}

.follow-box .top .user-info .user .name .level {
    background: linear-gradient(270deg,#fcdf7b,#f9cd4e);
    border-radius: 2vw;
    padding: .5vw 1.3vw;
    font-size: 2.5vw;
    --un-text-opacity: 1;
    color: rgb(160 115 0 / var(--un-text-opacity));
    font-weight: 700;}

.follow-box .top .user-info .user .gray {
    color: #888;
}


/* 自定义展开收起样式 */
.description-wrapper {
    cursor: pointer;
    padding-right: 20px;
    display: flex;
}

.description-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 默认显示1行 */
    -webkit-box-orient: vertical;
    line-height: 1.5;
    transition: all 0.3s ease;
    color: #888;
    font-size: 2.9vw;
    margin: 0;
    flex: 1;
    min-height: 22px;
}

.description-wrapper.expanded .description-text {
    -webkit-line-clamp: unset; /* 展开时显示全部 */
}

.expand-icon {
    height: 22px;
    width: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
}

.expand-icon.rotated {
    transform: rotate(180deg);
}
.footer {
    --content-bg: #000;
    background: var(--content-bg);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    box-sizing: border-box;
    width: 100%;
    padding: 2.6vw 3.7vw 8vw;}

.footer .btn {
    --btn-bg: #00f0ff;
    --font-btn: #000;
    background: var(--btn-bg);
    color: var(--font-btn);
    height: 13vw;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2vw;
    border-style: none;
    font-size: 4vw;}

.footer-p {
    width: 100%;
    height: 8vw;}

.popup-content {
    max-height: 100vh;
    overflow: hidden;
    --un-bg-opacity: 1;
    background-color: rgb(18 20 30 / var(--un-bg-opacity));}

.submit_top {
    box-sizing: border-box;
    --un-bg-opacity: 1;
    background-color: rgb(26 27 36 / var(--un-bg-opacity));}

.submit_top .item_top_left {
    display: flex;
    align-items: center;}

.submit_top .item_top_left .avatar {
    width: 40px;
    height: 40px;
    border-radius: 9999px;}

.submit_top .item_top_left .item_name {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;}

.submit_top .item_top_left .item_name .item_name_level span:nth-child(1) {
    color: var(--font-color-main);
    font-size: 18px;}

.submit_top .item_top_left .item_name .user_level {
    background: linear-gradient(270deg,#fcdf7b,#f9cd4e);
    margin-left: 6px;
    width: 33px;
    height: 18px;
    border-radius: 100px;
    padding: 1px 5px;
    --un-text-opacity: 1;
    color: rgb(160 115 0 / var(--un-text-opacity));
    font-weight: 600;}

.submit_top .item_top_left .item_name .item_name_total {
    height: 20px;
    width: 70vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    --un-text-opacity: 1;
    color: rgb(136 136 136 / var(--un-text-opacity));}

.submit_top .item_top_left .line_num {
    margin-left: 50px;
    display: flex;
    flex-direction: column;}

.submit_top .item_top_left .line_num span:nth-child(1) {
    color: var(--font-win);
    font-family: Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;
    font-size: 24px;
    line-height: 1;}

.center-container .submit-money {
    border-radius: 8px;
    padding: 20px 12px;}

.center-container .submit-money .submit-title {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;}

.center-container .submit-money .submit-title .green {
    color: #0ff;
}

.center-container .submit-money .submit-input {
    border: 1px solid #3c3e53;;
    margin-bottom: 17px;
    box-sizing: border-box;
    border-radius: 9999px;
    padding: 10px 15px!important;}

.center-container .submit-money .submit-input .unit {
    color: var(--font-color-main);}

.center-container .submit-money .slider {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 15px;}

.center-container .submit-money .balance {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.center-container .submit-money .balance .green {
    color: #0ff;
}

.center-container .submit-money .balance .gray {
    color: #888;
}

.center-container .footer {
    margin-top: 30px;}

.center-container .footer button {
    background: var(--btn-bg);
    color: var(--font-btn);
    height: 50px;
    width: 100%;
    border-radius: 9999px;
    border-style: none;
    text-align: center;
    line-height: 50px;}

}

@media screen and (max-width: 992px) {
    .popup-content {
        width:100%
    }

    .submit_top {
        margin-left: 3vw;
        margin-right: 3vw;
        margin-top: 4vw;
        border-radius: 2vw;
        padding: 3vw 4vw;    }

    .submit_top .user_rate,.submit_top .des_title {
        display: none;    }

    .submit_top .submit_des {
        margin-top: 5vw;
        margin-bottom: 5vw;    }

    .center-container {
        padding: 2vw 3vw 10vw;
        min-height: 80vh;
        overflow-y: auto;    }
}

@media screen and (min-width: 992px) {
    .popup-content {
        width:800px
    }

    .submit_top {
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 30px;
        border-radius: 8px;
        padding: 20px 30px;    }

    .submit_top .user_rate {
        display: flex;
        padding-top: 15px;
        padding-bottom: 15px;    }

    .submit_top .user_rate .line_num {
        display: flex;
        flex: 1 1 0%;
        flex-direction: column;    }

    .submit_top .user_rate .line_num>span:nth-child(1) {
        color: var(--font-win);
        font-family: Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;
        font-size: 24px;
        line-height: 20px;    }

    .submit_top .user_rate .quota {
        margin-left: 10px;
        width: 100%;
        display: flex;
        flex: 1 1 0%;
        flex-direction: column;
        justify-content: center;    }

    .submit_top .user_rate .quota .quota_line {
        display: flex;
        --un-text-opacity: 1;
        color: rgb(136 136 136 / var(--un-text-opacity));    }

    .submit_top .user_rate .quota .quota_line span:nth-child(1) {
        margin-right: 10px;
        display: inline-block;
        text-align: right;    }

    .submit_top .user_rate .quota .quota_line .ma-span {
        color: #fff;    }

    .submit_top .des_title {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 15px;
        --un-text-opacity: 1;
        color: rgb(249 142 64 / var(--un-text-opacity));
        font-weight: 400;
        line-height: 15px;    }

    .center-container {
        padding: 30px 50px;
    }

    .center-container .submit-money {
        background: var(--data-bg-main);    }

    /* follow-box 样式 */
    .follow-box {
        margin: 3vw 3.2vw;
        box-sizing: border-box;
        border-radius: 4.8vw;
        --un-bg-opacity: 1;
        background-color: rgb(26 34 43 / var(--un-bg-opacity));
        padding: 4vw 5.6vw;
    }

    .follow-box .top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .follow-box .top .user-info {
        display: flex;
        align-items: center;
    }

    .follow-box .top .user-info .avatar {
        margin-right: 2vw;
        margin-top: 1vw;
        width: 60px;
        height: 60px;
        align-self: flex-start;
        border-radius: 9999px;
    }

    .follow-box .top .user-info .user {
        flex: 1;
    }

    .follow-box .top .user-info .user .name {
        font-size: 4.26667vw;
        color: var(--font-color-main);
    }

    .follow-box .top .user-info .user .name .level {
        background: linear-gradient(270deg, #fcdf7b, #f9cd4e);
        border-radius: 2vw;
        padding: 0.5vw 1.3vw;
        font-size: 2.5vw;
        --un-text-opacity: 1;
        color: rgb(160 115 0 / var(--un-text-opacity));
        font-weight: 700;
    }

    .follow-box .top .user-info .user .gray {
        color: var(--font-color3-pc);
    }

    /* 移动端平铺布局 */
    .flat-layout {
        display: flex;
        flex-direction: column;
        gap: 4vw;
        padding: 0 3.2vw;
    }

    .flat-layout .chart-section {
        background: var(--data-bg-main, #1A1B24);
        border-radius: 4vw;
        padding: 4vw;
    }

    .flat-layout .chart-container {
        width: 100%;
        height: auto;
        margin-top: 2vw;
    }

    .flat-layout .chart-canvas {
        width: 100%;
        height: 220px;
    }

    /* Footer按钮样式 */
    .footer {
        background: var(--content-bg, #0B0E11);
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 10;
        box-sizing: border-box;
        width: 100%;
        padding: 2.6vw 3.7vw 8vw;
    }

    .footer .btn {
        background: var(--btn-bg, #00F0FF);
        color: var(--font-btn, #000);
        height: 13vw;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2vw;
        border-style: none;
        font-size: 4vw;
        cursor: pointer;
    }
}
</style>