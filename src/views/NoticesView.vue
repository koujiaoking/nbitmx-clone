<template>
  <div class="notices-page bg-[#0A0A0F] min-h-screen text-white font-sans pt-[56px]">
    
    <!-- Detail View -->
    <div v-if="showDetail" class="notice-detail-container">
       <div class="notice-page">
          <div class="page-header">
             <i class="van-badge__wrapper van-icon van-icon-down rotate-90 cursor-pointer" style="font-size: 20px;" @click="goBack"></i>
             <p>首页公告</p>
          </div>
          <div class="color-white">
             <div>歡迎造訪BitCoTyrax，您的數位資產交易平台</div>
          </div>
       </div>
    </div>

    <!-- List View -->
    <div v-else class="mx-auto box-border max-w-1360px px-4vw lg:px-0">
       <div class="color-white flex gap-10px lg:gap-20px lg:py-40px">
         <ul class="w-100px lg:w-200px lg:my-50px">
           <li
             class="b-b-1px b-b-solid b-b-[#333] py-15px flex items-center justify-center text-center cursor-pointer hover:bg-dark-800"
             :class="activeTab === 'system' ? 'color-[#00f0ff]' : ''"
             @click="activeTab = 'system'">
             系統公告
           </li>
           <li
             class="b-b-1px b-b-solid b-b-[#333] py-15px flex items-center justify-center text-center cursor-pointer hover:bg-dark-800"
             :class="activeTab === 'platform' ? 'color-[#00f0ff]' : ''"
             @click="activeTab = 'platform'">
             平臺公告
           </li>
         </ul>
         <div class="b-l-1px b-l-solid b-l-[#333] pl-10px lg:pl-20px box-border flex-1">
           <ul>
             <li v-for="item in listItems" :key="item.id" class="p-20px b-b-1px b-b-solid b-b-[#333] cursor-pointer hover:bg-dark-800" @click="goToDetail(item.id)">
               <span>{{ item.title }}</span>
             </li>
           </ul>
         </div>
       </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const activeTab = ref('system')

const showDetail = computed(() => !!route.query.id)

const listItems = computed(() => {
  // Replicating the items from notice.html but making them dynamic for the list
  return [
    { id: 85, title: '關於我們' },
    { id: 86, title: '服務條款' },
    { id: 87, title: '隱私協議' },
    { id: 88, title: '反洗錢協議' }
  ]
})

const goToDetail = (id: number) => {
  router.push({ path: '/notices', query: { id, type: 'platform' } })
}

const goBack = () => {
  router.push('/notices')
}
</script>

<style scoped lang="less">
@media screen and (min-width: 992px) {
    .notice-page {
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
        width: 1350px;
        padding-bottom: 50px;
    }

    .page-header {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 30px 20px;
        --un-text-opacity: 1;
        color: rgb(255 255 255 / var(--un-text-opacity));
    }

    .page-header p {
        font-size: 20px;
    }
}

@media screen and (max-width: 992px) {
    .notice-page {
        box-sizing: border-box;
        width: 100%;
        padding-left: 3.2vw;
        padding-right: 3.2vw;
        padding-bottom: 10vw;
    }
    
    .page-header {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 20px 0;
        color: white;
    }
}
</style>
