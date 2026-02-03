<template>
  <div class="chart-area w-full h-full bg-[#12141E] relative">
    <div class="tradingview-widget-container w-full h-full">
      <iframe scrolling="no" allowtransparency="true" frameborder="0" :src="iframeSrc" style="user-select: none; box-sizing: border-box; display: block; height: 100%; width: 100%;"></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  symbol: {
    type: String,
    default: 'BINANCE:BTCUSDT'
  },
  pageUri: {
    type: String,
    default: 'nbitmx.com/play/currency/trade'
  }
})

// Construct URL with proper symbol
const iframeSrc = computed(() => {
  const config = {
    allow_symbol_change: true,
    details: false,
    hide_side_toolbar: false,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: "15",
    save_image: true,
    style: "1",
    symbol: props.symbol,
    theme: "dark",
    timezone: "America/New_York",
    backgroundColor: "rgba(0,0,0,0.2)",
    gridColor: "rgba(99,99,99,0.3)",
    watchlist: [],
    withdateranges: true,
    range: "YTD",
    compareSymbols: [],
    show_popup_button: true,
    popup_height: "650",
    popup_width: "1000",
    studies: [],
    autosize: true,
    width: "100%",
    height: "100%",
    utm_source: "nbitmx.com",
    utm_medium: "widget",
    utm_campaign: "advanced-chart",
    "page-uri": props.pageUri
  }
  
  const hash = encodeURIComponent(JSON.stringify(config))
  return `https://www.tradingview-widget.com/embed-widget/advanced-chart/?locale=en#${hash}`
})
</script>
