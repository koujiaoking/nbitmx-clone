<template>
  <div class="web3-box">
    <div class="flex justify-center">
      <a-segmented class="tabs-group" v-model:value="value" block :options="data" />
    </div>
    <div class="web3-item" v-if="value == 0">
      <MarketOverview />
    </div>
    <!-- 美股 -->
    <div class="web3-item web" v-if="value == 1">
      <GIframe src="https://www.tradingview-widget.com/embed-widget/market-overview/?locale=zh_TW#%7B%22colorTheme%22%3A%22dark%22%2C%22dateRange%22%3A%221M%22%2C%22showChart%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Atrue%2C%22showSymbolLogo%22%3Atrue%2C%22showFloatingTooltip%22%3Afalse%2C%22plotLineColorGrowing%22%3A%22rgba(0%2C%20240%2C%20255)%22%2C%22plotLineColorFalling%22%3A%22rgba(0%2C%20240%2C%20255)%22%2C%22gridLineColor%22%3A%22rgba(240%2C%20243%2C%20250%2C%200)%22%2C%22scaleFontColor%22%3A%22%23DBDBDB%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(0%2C%20240%2C%20255%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(0%2C%20240%2C%20255%2C%200.12)%22%2C%22belowLineFillColorGrowingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22belowLineFillColorFallingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22symbolActiveColor%22%3A%22rgba(0%2C%20240%2C%20255%2C%200.12)%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22nbitmx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22market-overview%22%2C%22page-uri%22%3A%22nbitmx.com%2F%22%7D" />
    </div>
    <!-- 期權 -->
    <div class="web3-item web" v-if="value == 2">
      <GIframe src="https://www.tradingview-widget.com/embed-widget/market-quotes/?locale=zh_TW#%7B%22colorTheme%22%3A%22dark%22%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Afalse%2C%22showSymbolLogo%22%3Atrue%2C%22backgroundColor%22%3A%22%23000000%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22symbolsGroups%22%3A%5B%7B%22name%22%3A%22Forex%22%2C%22symbols%22%3A%5B%7B%22name%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22displayName%22%3A%22S%26P%20500%20Index%22%7D%2C%7B%22name%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22displayName%22%3A%22US%20100%20Cash%20CFD%22%7D%2C%7B%22name%22%3A%22FOREXCOM%3ADJI%22%2C%22displayName%22%3A%22Dow%20Jones%20Industrial%20Average%20Index%22%7D%2C%7B%22name%22%3A%22INDEX%3ANKY%22%2C%22displayName%22%3A%22Japan%20225%22%7D%2C%7B%22name%22%3A%22INDEX%3ADEU40%22%2C%22displayName%22%3A%22DAX%20Index%22%7D%2C%7B%22name%22%3A%22FOREXCOM%3AUKXGBP%22%2C%22displayName%22%3A%22FTSE%20100%20Index%22%7D%5D%7D%5D%2C%22utm_source%22%3A%22nbitmx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22market-quotes%22%2C%22page-uri%22%3A%22nbitmx.com%2F%22%7D" />
    </div>

    <div class="web3-item" v-if="value == 3">
      <MarketOverview />
    </div>
    
    <div class="web3-item" v-if="value == 4">
      <MarketOverview />
    </div>

    <!-- 重金属 -->
    <div class="web3-item web" v-if="value == 5">
      <GIframe src="https://www.tradingview-widget.com/embed-widget/market-overview/?locale=zh_TW#%7B%22colorTheme%22%3A%22dark%22%2C%22dateRange%22%3A%2212M%22%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Atrue%2C%22showFloatingTooltip%22%3Afalse%2C%22plotLineColorGrowing%22%3A%22rgba(0%2C%20240%2C%20255)%22%2C%22plotLineColorFalling%22%3A%22rgba(0%2C%20240%2C%20255)%22%2C%22gridLineColor%22%3A%22rgba(240%2C%20243%2C%20250%2C%200)%22%2C%22scaleFontColor%22%3A%22%23DBDBDB%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(0%2C%20240%2C%20255%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(0%2C%20240%2C%20255%2C%200.12)%22%2C%22belowLineFillColorGrowingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22belowLineFillColorFallingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22symbolActiveColor%22%3A%22rgba(0%2C%20240%2C%20255%2C%200.12)%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Precious%20metals%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22TVC%3AGOLD%22%2C%22d%22%3A%22%22%2C%22logoid%22%3A%22metal%2Fgold%22%2C%22currency-logoid%22%3A%22country%2FUS%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3AXAUUSD%22%2C%22d%22%3A%22%22%2C%22logoid%22%3A%22metal%2Fgold%22%2C%22currency-logoid%22%3A%22country%2FUS%22%7D%2C%7B%22s%22%3A%22OANDA%3AXAGUSD%22%2C%22d%22%3A%22%22%2C%22logoid%22%3A%22metal%2Fsilver%22%2C%22currency-logoid%22%3A%22country%2FUS%22%7D%2C%7B%22s%22%3A%22CAPITALCOM%3ASILVER%22%2C%22d%22%3A%22%22%2C%22logoid%22%3A%22metal%2Fsilver%22%2C%22currency-logoid%22%3A%22country%2FUS%22%7D%5D%7D%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22showSymbolLogo%22%3Atrue%2C%22showChart%22%3Atrue%2C%22utm_source%22%3A%22nbitmx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22market-overview%22%2C%22page-uri%22%3A%22nbitmx.com%2F%22%7D" />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
const data = [
  { label: 'Web3', value: 0 },
  { label: '美股', value: 1 },
  { label: '期權', value: 2 },
  { label: '現貨', value: 3 },
  { label: '永續合約', value: 4 },
  { label: '重金屬', value: 5 },
]
</script>
<style lang="less" scoped>
.ant-segmented.tabs-group {
    margin: 0 auto 10px;
    border: 1px solid #333;
    background-color: transparent;
    min-width: 345px;
    max-width: 100%;
    height: 56px;
    padding: 5px;
    border-radius: 9999px;
    box-sizing: border-box !important;
    :deep(.ant-segmented-group > div) {
      background: linear-gradient(90deg,#00e3ff,#089);
      border-radius: 100px
    }
    :deep(.ant-segmented-item) {
      line-height: 1!important;
      width: 165px;
      height: 46px !important;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      background-color: transparent;
      font-size: 18px;
      --un-text-opacity: 1;
      color: rgb(255 255 255 / var(--un-text-opacity));
      box-sizing: border-box !important;
      &:hover {
        color: #fff;
        &:after {
          background-color: rgba(255, 255, 255, 0.06);
        }
      } 
    }
    :deep(.ant-segmented-thumb) {
       height: 38px !important;
    }
    :deep(.ant-segmented-item-selected) {
      background: linear-gradient(90deg,#00e3ff,#089);
      --un-text-opacity: 1;
      box-sizing: border-box !important;
      height: 46px !important;
      color: rgb(0 0 0 / var(--un-text-opacity)) !important;
      --un-shadow: 0 0 var(--un-shadow-color, rgb(0 0 0 / 0));
      box-shadow: var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)
    }
}
.web3-item {
  &.web {
    width: 100%;
    height: 600px;
    padding-top: 20px;
    border: 1px solid #333;
    border-radius: 6px;
  }
}

</style>