<template>
<div class="assets-view w-1360px mx-auto pt-30px">
  <div data-v-0d18b85f="" class="cm-tabs-container mb-30px">
    <van-tabs v-model:active="activeTab" background="transparent" title-active-color="#ffffff" title-inactive-color="#84849f" line-width="88px" line-height="2px" color="#ffffff">
        <van-tab title="資產總覽" name="overview">
             <div class="assets-page" data-v-b1dc6f08>
                <!-- Section 1: Balance & Chart -->
                <div class="section-1" data-v-b1dc6f08>
                    <h3>
                        <span class="white-color-text">總資產估值</span>
                        <div class="svg-container">
                             <!-- Eye Icon Placeholder -->
                             <span class="text-[#84849f] ml-2 cursor-pointer">👁</span>
                         </div>
                    </h3>
                    <div class="top-info" data-v-b1dc6f08>
                        <div class="left-con" data-v-b1dc6f08>
                            <span class="balance" data-v-b1dc6f08>0.000000</span>
                            <span class="unit" data-v-b1dc6f08>USDT</span>
                            <span class="today" data-v-b1dc6f08>
                                ≈ $0.00
                                <span class="benefit" data-v-b1dc6f08>+0.00%</span>
                            </span>
                        </div>
                        <div class="right-con" data-v-b1dc6f08>
                             <div class="operate-btn active" data-v-b1dc6f08>充值</div>
                             <div class="operate-btn" data-v-b1dc6f08>提幣</div>
                             <div class="operate-btn" data-v-b1dc6f08>劃轉</div>
                        </div>
                    </div>
                    
                    <div class="chart-title" data-v-b1dc6f08>
                        <div class="left-con" data-v-b1dc6f08>資產趨勢</div>
                        <div class="right-con" data-v-b1dc6f08>
                            <div class="active" data-v-b1dc6f08>近7日</div>
                            <div data-v-b1dc6f08>近30日</div>
                        </div>
                    </div>
                    
                    <div class="trend-chart cm-empty" data-v-b1dc6f08>
                        <!-- Chart Placeholder -->
                        <div class="w-full h-full flex items-center justify-center text-gray-500">
                             Chart Area
                        </div>
                    </div>
                </div>

                <!-- Section 2: Composition -->
                <div class="section-2" data-v-b1dc6f08>
                    <div class="data" data-v-b1dc6f08>
                        <div class="data-left" data-v-b1dc6f08>
                            <h3 data-v-b1dc6f08>資產分佈</h3>
                            <div class="ring-chart" data-v-b1dc6f08>
                                <!-- Ring Chart Placeholder -->
                                <div class="w-full h-full rounded-full border-4 border-gray-700"></div>
                            </div>
                        </div>
                        <div class="data-right" data-v-2d37d748>
                             <div class="titles" data-v-2d37d748>
                                 <div class="column1" data-v-2d37d748>賬戶</div>
                                 <div class="column2" data-v-2d37d748>資產</div>
                                 <div class="column3" data-v-2d37d748>佔比</div>
                                 <div class="column4" data-v-2d37d748>操作</div>
                             </div>
                             <!-- List Items Placeholder -->
                             <div class="item item-coin" data-v-2d37d748>
                                 <div class="column1" data-v-2d37d748><span class="dot" data-v-2d37d748></span>現貨</div>
                                 <div class="column2" data-v-2d37d748>0.00 USDT</div>
                                 <div class="column3" data-v-2d37d748>0%</div>
                                 <div class="column5" data-v-2d37d748>...</div>
                             </div>
                        </div>
                    </div>
                </div>
             </div>
        </van-tab>
        <van-tab title="現貨賬戶" name="spot">
            <div class="p-10 text-center text-gray-500">Coming Soon</div>
        </van-tab>
        <van-tab title="期權賬戶" name="option">
            <div class="p-10 text-center text-gray-500">Coming Soon</div>
        </van-tab>
        <van-tab title="合約賬戶" name="contract">
            <div class="p-10 text-center text-gray-500">Coming Soon</div>
        </van-tab>
        <van-tab title="訂單中心" name="order">
            <div class="p-10 text-center text-gray-500">Coming Soon</div>
        </van-tab>
        <van-tab title="劃轉" name="transfer">
            <div class="p-10 text-center text-gray-500">Coming Soon</div>
        </van-tab>
        <van-tab title="閃兌" name="flash">
            <div class="p-10 text-center text-gray-500">Coming Soon</div>
        </van-tab>
    </van-tabs>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('overview')
</script>

<style scoped>
.assets-view {
    box-sizing: border-box !important;
}

/* Imported from assets.css */
.section-3[data-v-a7954142] {
    width: 490px;
    height: 892px;
    padding: 20px 0!important;
    box-sizing: border-box;
    float: right;
    overflow: hidden;
    display: flex;
    flex-direction: column
}

.section-3 .bottom[data-v-a7954142] {
    height: 16px;
    line-height: 16px;
    text-align: center;
    cursor: pointer;
    margin-top: 10px
}

.blue-color-text[data-v-a7954142] {
    background: linear-gradient(90deg,#9bb8f0,#6491e9 49.79%,#556dea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

.no-data[data-v-a7954142] {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--font-color3-pc, #84849f)
}

.data-right[data-v-2d37d748] {
    width: 570px;
    height: 327px;
    text-align: center
}

.data-right .titles[data-v-2d37d748] {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    color: #5e5e7a;
    font-size: 12px
}

.data-right .item[data-v-2d37d748] {
    height: 80px;
    border-bottom: 1px solid var(--border-color, #2c2c3e);
    background: var(--content-bg, #1f1f2f);
    display: flex;
    align-items: center;
    font-size: 16px
}

.data-right .item .column1 .dot[data-v-2d37d748] {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px
}

.data-right .item .column5[data-v-2d37d748] {
    position: relative;
    font-size: 26px;
    cursor: pointer
}

.data-right .item-coin .column1[data-v-2d37d748] {
    background: radial-gradient(102.27% 102.27% at 83.82% 87.06%,#f09464,#f7be94 .01%,#f09464);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

.data-right .item-coin .column1 .dot[data-v-2d37d748] {
    background: linear-gradient(90deg,#f09464 49.79%,#d37442)
}

.data-right .column1[data-v-2d37d748] { width: 20% }
.data-right .column2[data-v-2d37d748] { width: 30% }
.data-right .column3[data-v-2d37d748] { width: 25% }
.data-right .column4[data-v-2d37d748] { width: 20% }
.data-right .column5[data-v-2d37d748] { width: 15% }


.assets-page[data-v-b1dc6f08] {
    width: 1360px;
    position: relative;
    margin: 0 auto;
    background-color: var(--content-bg, #1f1f2f);
    padding-top: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap; /* Added for section breaking */
}

/* White color text */
.white-color-text[data-v-b1dc6f08] {
    color: #fff;
    font-size: 18px
}

.section-1[data-v-b1dc6f08] {
    width: 830px;
    height: 513px;
    margin-bottom: 30px;
    box-sizing: border-box;
    overflow: hidden
}

.section-1 h3[data-v-b1dc6f08] {
    display: flex;
    align-items: center
}

.section-1 .top-info[data-v-b1dc6f08] {
    display: flex;
    justify-content: space-between;
    align-items: center
}

.section-1 .top-info .left-con .balance[data-v-b1dc6f08] {
    font-size: 24px;
    margin-right: 10px;
    color: white;
}

.section-1 .top-info .left-con .unit[data-v-b1dc6f08] {
    margin-right: 10px;
    color: white;
}

.section-1 .top-info .left-con .today[data-v-b1dc6f08] {
    color: var(--font-color3-pc, #84849f);
    font-size: 16px
}

.section-1 .top-info .right-con[data-v-b1dc6f08] {
    display: flex;
    justify-content: space-between
}

.section-1 .top-info .right-con .operate-btn[data-v-b1dc6f08] {
    width: 100px;
    height: 40px;
    line-height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99px;
    border: 1px solid #84849f;
    margin-left: 10px;
    background: var(--content-bg, #1f1f2f);
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    color: #84849f;
}

.section-1 .top-info .right-con .operate-btn.active[data-v-b1dc6f08] {
    background: var(--btn-bg, #00f0ff);
    color: var(--font-color-btn, #000);
    border: 1px solid #6491e9
}

.section-1 .chart-title[data-v-b1dc6f08] {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px
}

.section-1 .chart-title .left-con[data-v-b1dc6f08] {
    font-size: 16px;
    color: white;
}

.section-1 .chart-title .right-con[data-v-b1dc6f08] {
    display: flex
}

.section-1 .chart-title .right-con>div[data-v-b1dc6f08] {
    padding: 3px 12px;
    text-align: center;
    border-radius: 99px;
    border: 1px solid #84849f;
    background: #1f1f2f;
    margin-left: 6px;
    color: var(--font-color3-pc);
    cursor: pointer
}

.section-1 .chart-title .right-con>div.active[data-v-b1dc6f08] {
    border-color: #fff;
    color: #fff
}

.section-1 .trend-chart[data-v-b1dc6f08] {
    width: 100%;
    height: 340px;
    border: 1px dashed #333; /* Visual placeholder boundary */
    margin-top: 20px;
}

.section-2[data-v-b1dc6f08] {
    width: 830px;
    height: 350px;
    box-sizing: border-box
}

.section-2 .data[data-v-b1dc6f08] {
    display: flex;
    align-items: center
}

.section-2 .data-left[data-v-b1dc6f08] {
    flex: none;
    display: flex;
    flex-direction: column;
    width: 170px;
    height: 320px;
    margin-right: 30px
}

.section-2 .data-left h3[data-v-b1dc6f08] {
    height: 30px;
    line-height: 30px;
    margin-bottom: 74px;
    color: white;
}

.section-2 .data-left .ring-chart[data-v-b1dc6f08] {
    width: 170px;
    height: 170px
}

/* Adjustments for van-tabs */
:deep(.van-tabs__nav) {
    background: transparent !important;
}
:deep(.van-tab) {
    font-size: 18px;
    color: #84849f;
}
:deep(.van-tab--active) {
    color: #fff;
}
:deep(.van-tabs__line) {
    background-color: #fff;
}
</style>
