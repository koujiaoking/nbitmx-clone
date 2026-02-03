<template>
  <div class="charity-page bg-[#0A0A0F] min-h-screen text-white font-sans">
    
    <main>
      <!-- Hero Section -->
      <div class="box-border! py-[10px] px-[20px] min-h-[700px] text-white flex items-center w-full container-box">
        <div class="box-border! lg:w-[1360px] mx-auto h-full flex flex-col justify-center text-[60px]">
          <div class="mb-[20px]">WEB3</div>
          <div data-v-e1a1792a="" class="flex items-center stroke-#f7931a text-60px" style="text-shadow: rgb(247, 147, 26) 0px 0px 5px;">
            {{ $t('charity.mainTitle') }}
          </div>
          <p class="mt-[20px] text-[20px] text-[#e3e3e3]">
            {{ $t('charity.description') }}
          </p>
          <div class="mt-[40px]">
            <div class="my-[10px] mx-0">
              <h1 class="text-[20px] text-[#adadad]">{{ $t('charity.totalBeneficiaries') }}</h1>
              <h2 class="text-[46px] text-[#00AFD9] font-bold">422801</h2>
            </div>
            <div class="my-[10px] mx-0">
              <h1 class="text-[20px] text-[#adadad]">{{ $t('charity.donationAmount') }}</h1>
              <h2 class="text-[46px] text-[#027B96] font-bold">$62.48M</h2>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-[1360px] mx-auto">
        <!-- Feature Cards -->
        <div class="mt-[50px] flex flex-wrap items-stretch justify-center">
          <div v-for="(feature, index) in features" :key="index"
            class="box-border! flex w-full max-w-[430px] min-h-[170px] bg-[#1A1B23] rounded-lg mb-[15px] mx-[10px] lg:mb-[30px] p-[20px] lg:py-[38px]">
            <div class="fade-in-right">
              <div class="flex items-center mb-2">
                <img class="w-[56px] h-[56px] mr-[6px]" :src="feature.icon">
                <span class="text-lg font-bold">{{ feature.title }}</span>
              </div>
              <span class="block text-[14px] lg:text-[16px] text-gray-400 leading-[24px]">
                {{ feature.desc }}
              </span>
            </div>
          </div>
        </div>

        <!-- Assistance Needed -->
        <div class="px-[4vw] box-border!">
          <h1 class="color-white text-[16px] font-extrabold my-[20px] md:hidden flex items-center">
            <img class="w-[3vw] h-[3vw] mr-[1vw]" src="@/assets/images/logo.png" alt=""> <!-- Placeholder icon -->
            {{ $t('charity.assistanceNeeded') }}
          </h1>
          
          <div class="flex flex-wrap items-stretch w-full gap-[20px]">
            <div v-for="(project, index) in projects" :key="index" 
              class="rounded-lg bg-[#1A1B23] w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-14px)] overflow-hidden">
              <div class="relative">
                <img :src="project.image" :alt="project.title" class="w-full h-[210px] object-cover">
                
                <div class="flex items-center box-border! rounded-20px mt-[10px]" v-if="project.status">
                  <span class="text-14px h-34px lh-34px flex items-center justify-center rounded-25px color-white px-20px ml-10px" :class="project.statusClass">{{ project.status }}</span>
                </div>

              </div>
              
              <div class="px-[15px] py-[10px] md:py-[20px]">
                <div class="text-[20px] truncate font-bold text-white">{{ project.title }}</div>
                <div class="text-[14px] mt-[12px] mb-[19px] line-clamp-3 text-[#888] font-medium h-[60px]">
                  {{ project.desc }}
                </div>
                
                <!-- Progress Bar -->
                <template v-if="project.isProgress">
                   <div class="h-[12px] rounded-[40px] overflow-hidden mb-[10px] w-full bg-black">
                    <div class="h-full rounded-[40px] bg-[#00f0ff]" :style="{ width: project.progress + '%' }"></div>
                   </div>
                   <div class="flex items-center justify-between flex-wrap">
                      <span class="text-[13px] w-[32%] text-left text-[#888]">{{ $t('charity.fundraisingProgress') }}</span>
                      <div class="w-[68%] flex justify-end items-center text-[12px]">
                        <span class="mr-[5px] text-[#00f0ff]">{{ $t('charity.participants') }}</span> {{ project.participants }}
                        <span class="ml-[15px] mr-[5px] text-[#00f0ff]">$</span> {{ project.raised }}
                      </div>
                   </div>
                </template>

                <!-- Finished State -->
                <template v-else>
                  <div class="bg-black rounded-[20px] gap-[10px] py-[10px] px-[15px] text-[12px]">
                    <div class="flex justify-between mb-1">
                      <span class="text-[#888]">{{ $t('charity.numberOfParticipants') }}</span> 
                      <span class="text-white">{{ project.participants }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-[#888]">{{ $t('charity.totalFundsRaised') }}</span> 
                      <p class="text-white"><span class="text-[#00f0ff]">$</span> {{ project.raised }}</p>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>

        <!-- Partnerships -->
        <div class="px-[4vw] md:px-0 mt-10">
           <h1 class="text-white text-[16px] font-extrabold my-[20px] md:hidden">{{ $t('charity.partnerships') }}</h1>
           <div class="flex items-center md:justify-center pb-[20px] mb-[50px] md:mt-[40px] md:mb-[100px] w-full overflow-auto gap-6 hide-scrollbar">
             <div class="h-[80px] bg-[#0E0F18] flex items-center justify-center rounded px-4">
                <img src="@/assets/images/link1.png" class="h-[40px] lg:h-[50px] w-auto">
             </div>
             <div class="h-[80px] bg-[#0E0F18] flex items-center justify-center rounded px-4">
                <img src="@/assets/images/link2.png" class="h-[40px] lg:h-[50px] w-auto">
             </div>
             <div class="h-[80px] bg-[#0E0F18] flex items-center justify-center rounded px-4">
                <img src="@/assets/images/link3.png" class="h-[40px] lg:h-[50px] w-auto">
             </div>
             <div class="h-[80px] bg-[#0E0F18] flex items-center justify-center rounded px-4">
                <img src="@/assets/images/link4.png" class="h-[40px] lg:h-[50px] w-auto">
             </div>
           </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Import assets
import iconTransparency from '@/assets/images/dv1.svg'
import iconMiddlemen from '@/assets/images/dv2.svg'
import iconSmart from '@/assets/images/dv3.svg'
import iconCommunity from '@/assets/images/dv4.svg'
import iconGlobal from '@/assets/images/dv5.svg'

import imgCharity1 from '@/assets/images/charity1.png'
import imgCharity2 from '@/assets/images/charity2.png'
import imgCharity3 from '@/assets/images/charity3.png'
import imgCharity4 from '@/assets/images/charity4.png'
import imgCharity5 from '@/assets/images/charity1.png'
import imgCharity6 from '@/assets/images/charity2.png'
import imgCharity7 from '@/assets/images/charity3.png'
import imgCharity8 from '@/assets/images/charity4.png'
import imgCharity9 from '@/assets/images/charity1.png'
import imgCharity10 from '@/assets/images/charity2.png'
import imgCharity11 from '@/assets/images/charity11.png'
import imgCharity12 from '@/assets/images/charity12.png'
import imgCharity13 from '@/assets/images/charity13.png'
import imgCharity14 from '@/assets/images/charity14.png'
import imgCharity15 from '@/assets/images/charity15.png'

const features = computed(() => [
  {
    title: t('charity.feature1Title'),
    icon: iconTransparency,
    desc: t('charity.feature1Desc')
  },
  {
    title: t('charity.feature2Title'),
    icon: iconMiddlemen,
    desc: t('charity.feature2Desc')
  },
  {
    title: t('charity.feature3Title'),
    icon: iconSmart,
    desc: t('charity.feature3Desc')
  },
  {
    title: t('charity.feature4Title'),
    icon: iconCommunity,
    desc: t('charity.feature4Desc')
  },
  {
    title: t('charity.feature5Title'),
    icon: iconGlobal,
    desc: t('charity.feature5Desc')
  }
])

const projects = computed(() => [
  {
    title: 'Humanity First Project for Refugees',
    image: imgCharity1,
    status: t('charity.fundraisingEnded'),
    statusClass: 'bg-[#33333a]',
    desc: 'Binance Charity Foundation joins forces with Mercy Corps...',
    participants: '23,359',
    raised: '3,911,000',
    isProgress: false
  },
  {
    title: 'Beirut Explosion Relief',
    image: imgCharity2,
    status: t('charity.fundraisingEnded'),
    statusClass: 'bg-[#33333a]',
    desc: 'We stand with you, Lebanon',
    participants: '237',
    raised: '96,260',
    isProgress: false
  },
  {
    title: 'Empower Bududa',
    image: imgCharity3,
    status: t('charity.fundraisingEnded'),
    statusClass: 'bg-[#33333a]',
    desc: 'Save the landslide disaster victims in Uganda',
    participants: '279',
    raised: '37,900',
    isProgress: false
  },
  {
    title: 'Emergency appeal: Haiti Earthquake Relief',
    image: imgCharity4,
    status: t('charity.inProgress'),
    statusClass: 'bg-[#00a609]',
    desc: 'Join our efforts in sending much needed relief funds to Haiti in the wake of a devastating earthquake.',
    participants: '23,359',
    raised: '39,110,000',
    isProgress: true,
    progress: 54.7
  },
  {
    title: 'Horn of Africa',
    image: imgCharity5,
    status: t('charity.inProgress'),
    statusClass: 'bg-[#00a609]',
    desc: 'Join us and UNICEF on Giving Tuesday to support children and families across the Horn of Africa',
    participants: '408',
    raised: '1,001,400',
    isProgress: true,
    progress: 94
  },
  {
    title: '2018-19 L-Istrina Campaign',
    image: imgCharity6,
    status: t('charity.inProgress'),
    statusClass: 'bg-[#00a609]',
    desc: 'The Malta Community Chest Foundation seeks crypto donation to support its work that providing financial, material and professional support...',
    participants: '6,758',
    raised: '26,600',
    isProgress: true,
    progress: 12.5
  },
  {
    title: 'Web3 Education for All',
    image: imgCharity7,
    status: t('charity.inProgress'),
    statusClass: 'bg-[#00a609]',
    desc: 'The future of blockchain is in education.',
    participants: '4,032',
    raised: '35,800',
    isProgress: true,
    progress: 35.8
  },
  {
    title: 'Libya Floods - Emergency Appeal',
    image: imgCharity8,
    status: t('charity.fundraisingEnded'),
    statusClass: 'bg-[#33333a]',
    desc: 'Providing Emergency Relief to People in Libya',
    participants: '32',
    raised: '37,976',
    isProgress: false
  },
  {
    title: 'Morocco Earthquake Emergency Appeal',
    image: imgCharity9,
    status: t('charity.fundraisingEnded'),
    statusClass: 'bg-[#33333a]',
    desc: 'Providing Emergency Relief to People in Morocco',
    participants: '43',
    raised: '3,020',
    isProgress: false
  },
  {
    title: 'Pink Care Token Project for Period Poverty',
    image: imgCharity10,
    status: t('charity.inProgress'),
    statusClass: 'bg-[#00a609]',
    desc: 'Bring dignity and decency to girls by donating sanitary pads to them',
    participants: '2,912',
    raised: '105,840',
    isProgress: true,
    progress: 21.1
  },
  {
    title: 'ALS \'Voice your love\'',
    image: imgCharity11,
    status: t('charity.inProgress'),
    statusClass: 'bg-[#00a609]',
    desc: 'Raise awareness for ALS and one of its many debilitating symptoms: losing the ability to speak.',
    participants: '37',
    raised: '6,510',
    isProgress: true,
    progress: 65.1
  },
  {
    title: 'Protect Our Planet',
    image: imgCharity12,
    status: t('charity.inProgress'),
    statusClass: 'bg-[#00a609]',
    desc: 'Join us to tackle climate change, restore habitats and oceans, and protect endangered wildlife.',
    participants: '2,313',
    raised: '24,000',
    isProgress: true,
    progress: 23.9
  },
  {
    title: 'Lunch for Children - Rainland Category',
    image: imgCharity13,
    status: t('charity.fundraisingEnded'),
    statusClass: 'bg-[#33333a]',
    desc: 'By simply providing lunch, we can give children a chance at securing the education they need...',
    participants: '1,534',
    raised: '18,190',
    isProgress: false
  },
  {
    title: 'Lunch for Children',
    image: imgCharity14,
    status: t('charity.inProgress'),
    statusClass: 'bg-[#00a609]',
    desc: 'By providing a nutritious lunch, we can help give children a chance at securing the education they need...',
    participants: '1,123',
    raised: '191,140',
    isProgress: true,
    progress: 19.1
  },
  {
    title: 'Lunch for Children - Rayyan Islamic',
    image: imgCharity15,
    status: t('charity.inProgress'),
    statusClass: 'bg-[#00a609]',
    desc: 'By providing a nutritious lunch, we can help give children a chance at securing the education they need...',
    participants: '325',
    raised: '23,250',
    isProgress: true,
    progress: 92.7
  }
])
</script>

<style scoped>
/* Container background matching the provided PC background image if available, else dark */
.charity-page .container-box {
  background: url('@/assets/images/pc-bg18.png') no-repeat center top;
  background-color: #0A0A0F;
  background-size: cover;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
