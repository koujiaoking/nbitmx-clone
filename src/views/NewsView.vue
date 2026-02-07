<template>
  <div class="news-page bg-[#000] min-h-screen text-white font-sans pb-10">
    <!-- Hero Section -->
    <div class="w-full h-[200px] lg:h-[300px] relative overflow-hidden">
      <main class="w-full lg:w-[1175px] h-full mx-auto flex flex-col justify-center relative z-10">
        <div class="lg:max-w-1/2 relative z-20">
          <h1 class="text-[26px] lg:text-[40px] mb-[17px] text-white px-[4vw] lg:px-0 line-clamp-2">{{ $t('news.title') }}</h1>
          <p class="text-[12px] leading-[24px] lg:text-[14px] px-[4vw] lg:px-0 line-clamp-3">
            {{ $t('news.desc') }}
          </p>
        </div>
        <img class="absolute z-10 w-auto h-full bottom-0 right-0 hidden lg:block" src="@/assets/images/news-bg.png" alt="News background" loading="lazy">
        <img class="absolute z-10 w-[300px] h-auto bottom-0 left-0 hidden lg:block" src="@/assets/images/bgImg2.png" alt="Background image 2" loading="lazy">
        <img class="absolute z-10 w-[300px] h-auto top-0 left-[440px] hidden lg:block" src="@/assets/images/bgImg3.png" alt="Background image 3" loading="lazy">
      </main>
      <img class="absolute z-0 w-auto h-full top-0 right-0" src="@/assets/images/bgImg1.png" alt="Background image 1" loading="lazy">
    </div>

    <!-- News Grid -->
    <div class="min-h-[500px] lg:pt-[40px] pt-[20px] pb-[50px] box-border">
      <ul class="w-full max-w-[1360px] mx-auto flex flex-wrap items-stretch lg:gap-[20px] gap-[10px] lg:px-0 px-[4vw] box-border">
        <div v-for="(news, index) in newsList" :key="index"
             @click="goToDetail(news.id)"
             class="w-full sm:w-[calc(50%-10px)] md:w-[calc(33%-10px)] rounded-[12px] bg-[#252731] hover:bg-[#2c2c3e] p-[20px] text-white flex flex-col box-border! cursor-pointer transition-colors duration-200">
          <div class="flex items-center mb-[15px] w-full">
            <img class="w-[42px] h-[42px] rounded-full mr-[9px] inline-block object-cover" :src="news.avatar">
            <div class="w-[calc(100%-50px)] h-[44px]">
              <span class="font-600 text-[16px] w-full inline-block truncate">{{ news.title }}</span>
              <span class="font-400 text-[12px] text-[#888]">{{ news.date }}</span>
            </div>
          </div>
          <h4 class="p-0 my-[5px] text-[14px] text-white mb-[7px] font-600 line-clamp-2 h-[42px]">{{ news.desc }}</h4>
          <img class="rounded-[8px] w-full h-[160px] mb-[10px] object-cover" :alt="news.title" :src="news.avatar">
          <div class="flex items-center h-[24px] text-[#878C90]">
            <img class="w-[24px] h-[24px] mr-[8px] align-middle inline-block" src="@/assets/images/like.svg" alt="like">
            <span class="mr-[24px] box-border">{{ news.likes }}</span>
            <img class="w-[24px] h-[24px] mr-[8px] align-middle inline-block" src="@/assets/images/look.svg" alt="view">
            <span class="mr-[24px] box-border">{{ news.views }}</span>
          </div>
        </div>
        
        <button class="my-[30px] mx-auto border-none bg-transparent text-[#00f0ff] text-[16px] font-600 cursor-pointer w-full text-center hover:opacity-80 transition-opacity">{{ $t('news.viewMore') }}</button>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const newsList = [
  {
    id: 1,
    title: 'Bitcoin meets gold in UK: 21Shares brings BOLD fund to London',
    date: '2026-01-13 09:31:04',
    desc: 'The 21Shares Bitcoin Gold ETP allocates two-thirds to gold and one-third to Bitcoin and trades in pounds sterling and dollars on the London Stock Exchange.',
    avatar: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb6e7-2b57-7ad1-a08d-3f23842f4cbe.jpg',
    likes: 331,
    views: 4719,
  },
  {
    id: 2,
    title: 'BNB Chain targets ‘around one second’ finality with Fermi hard fork',
    date: '2026-01-13 09:31:04',
    desc: 'BNB Chain’s Fermi hard fork goes live on Wednesday, cutting BSC block times from 0.75 seconds to 0.45 seconds and tightening fast-finality rules.',
    avatar: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb647-2109-776c-9511-15c445a1dae4.jpg',
    likes: 54,
    views: 2667,
  },
  {
    id: 3,
    title: 'Here’s what happened in crypto today',
    date: '2026-01-13 09:31:04',
    desc: 'Need to know what happened in crypto today? Here is the latest news on daily trends and events impacting Bitcoin price, blockchain, DeFi, NFTs, Web3 and crypto regulation.',
    avatar: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2025-06/01979423-ef8e-7c60-b937-b9ddf75fe8ad',
    likes: 256,
    views: 1890,
  },
  {
    id: 4,
    title: 'World central banks rally behind Powell, stress Fed independence',
    date: '2026-01-13 09:31:04',
    desc: 'Crypto experts say political pressure on the US Federal Reserve could drive volatility, but also shift flows toward Bitcoin and gold in the long run.',
    avatar: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb775-0b04-7fdb-9990-a2468404e645.jpg',
    likes: 112,
    views: 2059,
  },
  {
    id: 5,
    title: 'Franklin Templeton adapts money market funds for US stablecoin rules',
    date: '2026-01-13 09:31:04',
    desc: 'Franklin Templeton is amending institutional money market funds to support stablecoin reserves and onchain cash use without launching new crypto-native products.',
    avatar: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb70b-be1b-7f27-8066-f6eb4955c2c9.jpg',
    likes: 158,
    views: 4680,
  },
  {
    id: 6,
    title: 'Ingenico taps WalletConnect to support stablecoin payments at checkout',
    date: '2026-01-13 09:31:04',
    desc: 'By integrating WalletConnect Pay, Ingenico is testing whether stablecoins can function as a practical alternative to card networks in everyday commerce.',
    avatar: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb145-18cb-7ffc-8584-ea6d82997823.jpg',
    likes: 360,
    views: 677,
  },
  {
    id: 7,
    title: 'Monero climbs to new high of $687 as crypto surveillance tightens',
    date: '2026-01-13 09:31:04',
    desc: 'Tightening KYC regulations and growing scrutiny on the digital economy are triggering more investor demand for privacy-preserving digital assets like Monero.',
    avatar: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb79c-b4c0-7650-bfd8-41aceb552603.jpg',
    likes: 406,
    views: 1747,
  },
  {
    id: 8,
    title: 'CZ’s YZi Labs invests in trading terminal as DeFi execution takes priority',
    date: '2026-01-13 09:31:04',
    desc: 'The eight-figure investment in Genius Trading highlights how execution-focused tools are gaining relevance as crypto trading activity spreads across blockchains.',
    avatar: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb7ff-e5e6-70ec-8af2-7f713adaa524.jpg',
    likes: 67,
    views: 3911,
  },
  {
    id: 9,
    title: 'Polygon strikes $250M deal for Coinme and Sequence in stablecoin payments push',
    date: '2026-01-13 09:31:04',
    desc: 'Polygon Labs CEO Marc Boiron told Cointelegraph that the acquisitions position the network as a regulated payments platform built to move stablecoins onchain at scale.',
    avatar: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb7e7-b74a-771d-8b6b-b88022fb3941.jpg',
    likes: 404,
    views: 4762,
  },
  {
    id: 10,
    title: 'Crypto funds bleed $454M in outflows as Fed rate-cut hopes fade',
    date: '2026-01-12 09:31:01',
    desc: 'Bitcoin led with $405 million of outflows last week, with the US shedding $569 million, as several altcoins and European funds posted modest inflows.',
    avatar: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb1d0-ef6e-754d-b5f3-f49bc585601f.jpg',
    likes: 293,
    views: 1276,
  },
  {
    id: 11,
    title: 'Dubai free zone shifts crypto token vetting to licensed companies',
    date: '2026-01-12 09:31:01',
    desc: 'DFSA’s new company-led suitability model and AML expectations may make it difficult for licensed entities to justify supporting privacy-focused assets.',
    avatar: 'https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb1ce-7edd-7348-b006-51dc479985b1.jpg',
    likes: 395,
    views: 2251,
  },
];

const goToDetail = (id: number) => {
  router.push(`/news/details/${id}`);
};
</script>

<style scoped lang="less">
/* No specific scoped styles needed as Tailwind classes handle most styling */
</style>
