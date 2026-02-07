<template>
<div class="assets-page w-1360px mx-auto pt-30px">
  <!-- Tab Navigation -->
  <div class="cm-tabs-container">
    <div class="cm-tabs-nav">
      <div class="cm-tabs-start-line">
        <span 
          v-for="(tab, index) in tabs" 
          :key="tab.key"
          :class="['cm-tab', { active: activeTab === tab.key }]"
          @click="activeTab = tab.key"
          style="font-size: 18px; line-height: 50px;"
        >
          {{ tab.label }}
        </span>
        <div class="slider" :style="sliderStyle"></div>
      </div>
    </div>
  </div>
  
  <!-- Tab Content -->
  <div class="assets-content" v-if="activeTab === 'overview'">
    <!-- Left Section: 資產總估值 + Chart + 資產分布 -->
    <section class="section-1 no-vw">
      <div class="top-info">
        <div class="left-con">
          <h3 class="white-color-text">
            資產總估值
            <div class="svg-container showmoney">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99985 6.75C7.75706 6.75 6.74985 7.75721 6.74985 9C6.74985 10.2428 7.75706 11.25 8.99985 11.25C10.2426 11.25 11.2498 10.2428 11.2498 9C11.2498 7.75721 10.2426 6.75 8.99985 6.75Z"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 9C3.05707 6.27164 5.77227 4.5 9 4.5C12.2277 4.5 14.9429 6.27164 15.75 9C14.9429 11.7284 12.2277 13.5 9 13.5C5.77227 13.5 3.05707 11.7284 2.25 9ZM9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"/>
              </svg>
            </div>
          </h3>
          <div class="balance-row">
            <span class="balance">$0.00</span>
            <span class="unit">USD</span>
          </div>
        </div>
        <div class="right-con">
          <div class="operate-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1V15M1 8H15" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span class="name">充值</span>
          </div>
          <div class="operate-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H13M8 3L13 8L8 13" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span class="name">提幣</span>
          </div>
          <div class="operate-btn active">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 2L12 6M4 10L8 14L12 10" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span class="name">劃轉</span>
          </div>
          <div class="operate-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8H14M6 4L2 8L6 12M10 4L14 8L10 12" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span class="name">閃兌</span>
          </div>
        </div>
      </div>
      
      <div class="chart-title">
        <div class="left-con">資產走勢</div>
        <div class="right-con">
          <div :class="{ active: chartPeriod === '24h' }" @click="chartPeriod = '24h'">24時</div>
          <div :class="{ active: chartPeriod === '7d' }" @click="chartPeriod = '7d'">7天</div>
          <div :class="{ active: chartPeriod === '30d' }" @click="chartPeriod = '30d'">30天</div>
          <div :class="{ active: chartPeriod === '365d' }" @click="chartPeriod = '365d'">365天</div>
        </div>
      </div>
      
      <div class="trend-chart">
        <!-- Chart placeholder -->
        <div class="chart-placeholder">
          <div class="chart-point" style="top: 50%; left: 50%;">
            <div class="point-dot"></div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section-2 no-vw">
      <div class="data">
        <div class="data-left">
          <h3 class="white-color-text">資產分布</h3>
          <div class="ring-chart">
            <!-- Donut Chart Placeholder -->
            <svg viewBox="0 0 170 170" class="donut-chart">
              <circle cx="85" cy="85" r="60" fill="none" stroke="#f09464" stroke-width="20" stroke-dasharray="126 252" stroke-dashoffset="0"/>
              <circle cx="85" cy="85" r="60" fill="none" stroke="#6dd2f8" stroke-width="20" stroke-dasharray="63 315" stroke-dashoffset="-126"/>
              <circle cx="85" cy="85" r="60" fill="none" stroke="#d18bd7" stroke-width="20" stroke-dasharray="189 189" stroke-dashoffset="-189"/>
            </svg>
          </div>
        </div>
        <div class="data-right">
          <div class="titles">
            <div class="column1"></div>
            <div class="column2">賬戶餘額</div>
            <div class="column2">幣種數量</div>
            <div class="column3">今日盈虧</div>
            <div class="column4">占比</div>
            <div class="column5"></div>
          </div>
          <div class="item item-coin">
            <div class="column1"><span class="dot"></span>現貨賬戶</div>
            <div class="column2">$0.000</div>
            <div class="column2">0</div>
            <div class="column3 flat">0.0000%</div>
            <div class="column4">...</div>
          </div>
          <div class="item item-contract">
            <div class="column1"><span class="dot"></span>期權賬戶</div>
            <div class="column2">$0.000</div>
            <div class="column2">0</div>
            <div class="column3 flat">0.0000%</div>
            <div class="column4">...</div>
          </div>
          <div class="item item-cft">
            <div class="column1"><span class="dot"></span>合約賬戶</div>
            <div class="column2">$0.000</div>
            <div class="column2">0</div>
            <div class="column3 flat">0.0000%</div>
            <div class="column4">...</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Right Section: 資產動態 -->
    <section class="section-3 no-vw">
      <h3 class="white-color-text title-row">資產動態</h3>
      <div class="no-data">
        暫無數據
      </div>
      <div class="bottom">
        <span class="blue-color-text">查看更多</span>
      </div>
    </section>
  </div>
  
  <!-- Other Tab Placeholders -->
  <div class="tab-placeholder" v-else>
    <div class="placeholder-content">
      {{ currentTabLabel }} - 即將推出
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const tabs = [
  { key: 'overview', label: '資產總覽' },
  { key: 'spot', label: '現貨賬戶' },
  { key: 'option', label: '期權賬戶' },
  { key: 'contract', label: '合約賬戶' },
  { key: 'orders', label: '訂單中心' },
  { key: 'transfer', label: '劃轉' },
  { key: 'flash', label: '閃兌' },
]

const activeTab = ref('overview')
const chartPeriod = ref('365d')

const currentTabLabel = computed(() => {
  const tab = tabs.find(t => t.key === activeTab.value)
  return tab ? tab.label : ''
})

const sliderStyle = computed(() => {
  const index = tabs.findIndex(t => t.key === activeTab.value)
  return {
    width: '88px',
    left: `${index * 88}px`,
    transition: '0.3s',
    opacity: 1,
    backgroundColor: 'rgb(255, 255, 255)'
  }
})
</script>

<style scoped lang="less">
.assets-page {
  width: 1360px;
  position: relative;
  margin: 0 auto;
  background-color: #1f1f2f;
  padding-top: 30px;
  box-sizing: border-box;
}

/* === Tab Navigation === */
.cm-tabs-container {
  margin-bottom: 30px;
}

.cm-tabs-nav {
  position: relative;
}

.cm-tabs-start-line {
  display: flex;
  position: relative;
}

.cm-tab {
  padding: 0 20px;
  cursor: pointer;
  color: #84849f;
  transition: color 0.3s;
  white-space: nowrap;
}

.cm-tab.active {
  color: #fff;
}

.slider {
  position: absolute;
  bottom: 0;
  height: 2px;
  background: #fff;
}

/* === Assets Content Grid === */
.assets-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

section.no-vw {
  border-radius: 12px;
  border: 2px solid #2c2c3e;
  padding: 20px 30px;
  box-sizing: border-box;
}

/* === Section 1: Balance + Chart === */
.section-1 {
  width: 830px;
  height: 513px;
  margin-bottom: 30px;
  overflow: hidden;
}

.section-1 h3 {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.section-1 h3 .svg-container {
  cursor: pointer;
  margin-left: 5px;
  fill: #fff;
}

.section-1 .top-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-1 .top-info .left-con {
  position: relative;
}

.section-1 .top-info .left-con .balance-row {
  margin-top: 10px;
}

.section-1 .top-info .left-con .balance {
  font-size: 24px;
  margin-right: 10px;
  color: #fff;
}

.section-1 .top-info .left-con .unit {
  margin-right: 10px;
  color: #84849f;
}

.section-1 .top-info .right-con {
  display: flex;
  justify-content: space-between;
}

.section-1 .top-info .right-con .operate-btn {
  width: 100px;
  height: 40px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  border: 1px solid #84849f;
  margin-left: 10px;
  background: #1f1f2f;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  color: #fff;
}

.section-1 .top-info .right-con .operate-btn .name {
  margin-left: 5px;
}

.section-1 .top-info .right-con .operate-btn.active {
  background: linear-gradient(90deg, #6491e9 49.79%, #556dea);
  color: #000;
  border-color: #556dea;
}

.section-1 .chart-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
}

.section-1 .chart-title .left-con {
  font-size: 16px;
  color: #fff;
}

.section-1 .chart-title .right-con {
  display: flex;
}

.section-1 .chart-title .right-con > div {
  padding: 3px 12px;
  text-align: center;
  border-radius: 99px;
  border: 1px solid #84849f;
  background: #1f1f2f;
  margin-left: 6px;
  color: #84849f;
  cursor: pointer;
}

.section-1 .chart-title .right-con > div.active {
  border-color: #fff;
  color: #fff;
}

.section-1 .trend-chart {
  width: 100%;
  height: 340px;
  position: relative;
}

.chart-placeholder {
  width: 100%;
  height: 100%;
  position: relative;
  border-bottom: 1px solid #2c2c3e;
}

.chart-point {
  position: absolute;
}

.point-dot {
  width: 10px;
  height: 10px;
  background: #00f0ff;
  border-radius: 50%;
}

/* === Section 2: Asset Distribution === */
.section-2 {
  width: 830px;
  height: 350px;
  box-sizing: border-box;
}

.section-2 .data {
  display: flex;
  align-items: flex-start;
}

.section-2 .data-left {
  flex: none;
  display: flex;
  flex-direction: column;
  width: 170px;
  height: 320px;
  margin-right: 30px;
}

.section-2 .data-left h3 {
  height: 30px;
  line-height: 30px;
  margin-bottom: 30px;
}

.section-2 .data-left .ring-chart {
  width: 170px;
  height: 170px;
}

.donut-chart {
  width: 100%;
  height: 100%;
}

.section-2 .data-right {
  width: 570px;
  height: 327px;
  text-align: center;
}

.section-2 .data-right .titles {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  color: #5e5e7a;
  font-size: 12px;
}

.section-2 .data-right .item {
  height: 80px;
  border-bottom: 1px solid #2c2c3e;
  background: #1f1f2f;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
}

.section-2 .data-right .item .column1 .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

.section-2 .data-right .item-coin .column1 {
  background: radial-gradient(102.27% 102.27% at 83.82% 87.06%, #f09464, #f7be94 0.01%, #f09464);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-2 .data-right .item-coin .column1 .dot {
  background: linear-gradient(90deg, #f09464 49.79%, #d37442);
}

.section-2 .data-right .item-contract .column1 {
  background: radial-gradient(118.76% 101.38% at 0% 22.64%, #147ec7, #6dd2f8);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-2 .data-right .item-contract .column1 .dot {
  background: linear-gradient(90deg, #6dd2f8 49.79%, #147ec7);
}

.section-2 .data-right .item-cft .column1 {
  background: radial-gradient(45.13% 45.13% at 47.06% 6.18%, #d18bd7, #b164e2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-2 .data-right .item-cft .column1 .dot {
  background: linear-gradient(90deg, #d18bd7 49.79%, #b164e2);
}

.section-2 .data-right .column1 { width: 20%; text-align: left; }
.section-2 .data-right .column2 { width: 30%; }
.section-2 .data-right .column3 { width: 25%; }
.section-2 .data-right .column4 { width: 20%; }
.section-2 .data-right .column5 { width: 15%; }

.section-2 .data-right .item .column3.flat {
  color: #84849f;
}

/* === Section 3: Asset Activity === */
.section-3 {
  width: 490px;
  height: 892px;
  padding: 20px 0 !important;
  box-sizing: border-box;
  float: right;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.section-3 .title-row {
  padding: 0 20px;
  margin-bottom: 20px;
}

.section-3 .no-data {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #84849f;
}

.section-3 .bottom {
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

.white-color-text {
  color: #fff;
  font-size: 18px;
}

/* === Tab Placeholder === */
.tab-placeholder {
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-content {
  color: #84849f;
  font-size: 18px;
}

/* === Responsive === */
@media (max-width: 768px) {
  .assets-page {
    width: 100%;
    padding: 15px;
  }
  
  .cm-tabs-start-line {
    overflow-x: auto;
  }
  
  .assets-content {
    flex-direction: column;
  }
  
  .section-1,
  .section-2 {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .section-3 {
    width: 100%;
    float: none;
    height: auto;
  }
  
  .section-2 .data {
    flex-direction: column;
  }
  
  .section-2 .data-left,
  .section-2 .data-right {
    width: 100%;
  }
}
</style>
