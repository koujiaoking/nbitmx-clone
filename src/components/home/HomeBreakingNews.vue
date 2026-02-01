<template>
  <div class="breaking-news-container w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(item, index) in newsList" 
        :key="index"
        class="news-card group"
      >
        <!-- Header -->
        <div class="flex items-center gap-[18px] mb-[15px]">
          <div class="w-10 h-10 rounded-full overflow-hidden border border-[#ffffff1a]">
            <img :src="item.avatar" class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col">
            <div class="text-white text-[14px] font-bold leading-tight line-clamp-1">{{ item.source }}: {{ item.title }}</div>
            <div class="text-[#848E9C] text-[12px] leading-tight mt-1">{{ item.time }}</div>
          </div>
        </div>

        <!-- Description -->
        <div class="text-white text-[14px] leading-relaxed line-clamp-2 h-[42px]">
          {{ item.desc }}
        </div>

        <!-- content Image -->
        <div class="w-full h-[250px] rounded-[8px] overflow-hidden mt-[10px] bg-[#14151a]">
           <img :src="item.image" class="w-full h-full object-cover" />
        </div>

        <!-- Footer -->
        <div class="flex items-center gap-4 text-[#848E9C] text-[13px] mt-[10px]">
           <div class="flex items-center gap-1.5">
              <img src="@/assets/images/like.svg" class="size-[20px]"> {{ item.views }}
           </div>
           <div class="flex items-center gap-1.5">
              <img src="@/assets/images/look.svg" class="size-[20px]"> {{ item.likes }}
           </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const newsList = ref([
  {
    source: 'VanEck',
    title: '監管明朗將使第一季度成為投資者的...',
    time: '2026-01-13 09:30:43',
    desc: 'VanEck預測，由於財政透明度和貨幣政策更加明朗，投資者在第一季度將更加自信，但比特幣在其中的作用仍然...',
    avatar: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb5d5-8651-732c-a800-e27445050ff9.jpg', 
    image: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb5d5-8651-732c-a800-e27445050ff9.jpg',
    views: '122',
    likes: '4840'
  },
  {
    source: '穩定幣平台VelaFi',
    title: '獲得2,000萬美元用於擴展跨...',
    time: '2026-01-13 09:30:43',
    desc: '這筆資金將支持在拉丁美洲、美國和亞洲擴展企業支付與結算服務。',
    avatar: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2025-09/01997344-6eed-7001-bf04-d478c4866870',
    image: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2025-09/01997344-6eed-7001-bf04-d478c4866870',
    views: '193',
    likes: '4361'
  },
  {
    source: '加密貨幣託管公司BitGo',
    title: '在美國IPO中尋求最多...',
    time: '2026-01-13 09:30:43',
    desc: 'BitGo計劃在IPO中融資高達2.01億美元，目標估值19.6億美元，託管資產超過900億美元，由美國頂級銀行主導此...',
    avatar: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb26b-343a-71dd-9d4f-3f5dd0d5e126.jpg',
    image: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb26b-343a-71dd-9d4f-3f5dd0d5e126.jpg',
    views: '355',
    likes: '1296'
  }
])
</script>

<style scoped lang="less">
.news-card {
  box-sizing: border-box !important;
  cursor: pointer;
  overflow: hidden;
  border-radius: 18px;
  --un-text-opacity: 1;
  color: rgb(255 255 255 / var(--un-text-opacity));
  transition-property: all;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .15s;
  transition-duration: .3s;

  &:hover {
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    border-color: rgba(255,255,255,0.05);
  }
}
@media (min-width: 992px) {
    .news-card {
        width:400px;
        --un-bg-opacity: 1;
        background-color: rgb(26 27 36 / var(--un-bg-opacity));
        padding: 16px 20px
    }

    .news-card:hover {
        --un-bg-opacity: 1;
        background-color: rgb(44 44 62 / var(--un-bg-opacity));
        --un-shadow: var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / .1));
        box-shadow: var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)
    }

    .card .new-img[data-v-81683583] {
        margin-top: 10px;
        width: 100%;
        height: 250px;
        border-radius: 8px;
        object-fit: cover
    }
}

@media (max-width: 992px) {
    .news-card {
        border:1px solid #3c3e53;
        --un-bg-opacity: 1;
        background-color: rgb(13 14 15 / var(--un-bg-opacity));
        padding: 4vw
    }

    .card .new-img[data-v-81683583] {
        margin-top: 2vw;
        width: 100%;
        height: 54vw;
        border-radius: 2vw;
        object-fit: cover
    }
}
</style>
