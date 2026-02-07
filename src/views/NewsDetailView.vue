<template>
  <div class="news-detail-page bg-[#000] min-h-screen text-white font-sans">
    <div class="w-full h-[200px] lg:h-[300px] relative overflow-hidden">
      <main class="w-full lg:w-[1175px] h-full mx-auto flex flex-col justify-center relative z-10">
        <div class="lg:max-w-1/2 relative z-20">
          <h1 class="text-[26px] lg:text-[40px] mb-[17px] text-white px-[4vw] lg:px-0 line-clamp-2">Bitcoin meets gold in UK: 21Shares brings BOLD fund to London</h1>
          <p class="text-[12px] leading-[24px] lg:text-[14px] px-[4vw] lg:px-0 line-clamp-3">The 21Shares Bitcoin Gold ETP allocates two-thirds to gold and one-third to Bitcoin and trades in pounds sterling and dollars on the London Stock Exchange.</p>
        </div>
        <img class="absolute z-10 w-auto h-full bottom-0 right-0 hidden lg:block" src="@/assets/images/news-bg.png" alt="News background" loading="lazy">
        <img class="absolute z-10 w-[300px] h-auto bottom-0 left-0 hidden lg:block" src="@/assets/images/bgImg2.png" alt="Background image 2" loading="lazy">
        <img class="absolute z-10 w-[300px] h-auto top-0 left-[440px] hidden lg:block" src="@/assets/images/bgImg3.png" alt="Background image 3" loading="lazy">
      </main>
      <img class="absolute z-0 w-auto h-full top-0 right-0" src="@/assets/images/bgImg1.png" alt="Background image 1" loading="lazy">
    </div>

    <div class="w-full max-w-[1360px] mx-auto min-h-[500px] lg:py-[40px] py-[20px] box-border px-[4vw]">
      <div class="mb-[50px] md:block hidden">
        <router-link to="/news" class="text-white text-[18px] flex items-center hover:text-[#00f0ff] transition-colors">
          <van-icon name="arrow-left" size="14px" />
          <span class="ml-[8px]">News List</span>
        </router-link>
      </div>

      <div class="flex items-center mb-[15px]">
        <img class="w-[42px] h-[42px] rounded-full mr-[9px] inline-block object-cover" src="https://images.cointelegraph.com/cdn-cgi/image/f=auto,onerror=redirect,w=1728,q=90/https://s3.cointelegraph.com/uploads/2026-01/019bb6e7-2b57-7ad1-a08d-3f23842f4cbe.jpg">
        <span class="">
          <span class="font-400 text-[12px] text-[#888] block">2026-01-13 09:31:04</span>
        </span>
        <div class="flex items-center h-[24px] mb-[10px] ml-[20px]">
          <img class="w-[24px] h-[24px] mr-[8px] align-middle inline-block" src="@/assets/images/like.svg" alt="like">
          <span class="mr-[24px] box-border">331</span>
          <img class="w-[24px] h-[24px] mr-[8px] align-middle inline-block" src="@/assets/images/look.svg" alt="view">
          <span class="mr-[24px] box-border">4719</span>
        </div>
      </div>

      <h1 class="text-center text-white text-[22px] lg:text-[28px] lg:my-[30px] my-[20px]">Bitcoin meets gold in UK: 21Shares brings BOLD fund to London</h1>
      
      <div class="g-content-html text-[#e1e1e1] leading-relaxed">
        <p class="mb-4">21Shares, a major global exchange-traded product (ETP) provider, has expanded access to its investment product that combines exposure to Bitcoin and gold.</p>
        <p class="mb-4">The 21Shares Bitcoin Gold ETP (BOLD), which tracks both Bitcoin (<a href="https://cointelegraph.com/bitcoin-price" class="text-blue-400 hover:text-blue-300">BTC</a>) and gold, debuted trading on the London Stock Exchange (LSE) on Tuesday, <a href="#" class="text-blue-400 hover:text-blue-300" target="_blank">according</a> to an announcement.</p>
        <p class="mb-4">“Now that retail investors in the UK have access to crypto ETPs, 21Shares is dedicated to delivering a wider selection of innovative regulated products,” 21Shares CEO Russell Barlow said.</p>
        <p class="mb-4">The LSE rollout comes years after <a href="#" class="text-blue-400 hover:text-blue-300">21Shares debuted BOLD on SIX Swiss Exchange</a> in April 2022. The company has since listed the product on major European exchanges, including Deutsche Boerse Xetra, Euronext Amsterdam, Euronext Paris and Nasdaq Stockholm.</p>
        
        <h2 class="text-xl font-bold mt-8 mb-4">BOLD asset allocation: Two-thirds in gold and one-third in Bitcoin</h2>
        <p class="mb-4">Developed in partnership with investment research platform ByteTree Asset Management, BOLD is 100% physically backed by its underlying assets and allocates the majority of its assets to gold.</p>
        <p class="mb-4">As of Monday, the 21Shares Bitcoin Gold ETP holds 65.85% gold, valued at $4,604.10 per ounce, and 34.15% Bitcoin, priced at $90,806 at the time of writing, according to the fund’s data.</p>
        
        <figure class="my-8">
          <img src="https://s3.cointelegraph.com/uploads/2026-01/019bb727-b405-755e-a18a-9cd49dbbbd5b.png" alt="Underlying assets" class="w-full rounded-lg">
          <figcaption class="text-center text-sm text-gray-400 mt-2"><em>Underlying assets in the 21Shares Bitcoin Gold (BOLD) ETP. Source: 21Shares</em></figcaption>
        </figure>

        <p class="mb-4">“By allocating equal risk to both assets, BOLD offers a balanced approach for investors seeking to hedge against inflation,” the fund’s description said, citing gold’s long-standing role as an inflation hedge and Bitcoin’s growing reputation as “digital gold.”</p>
        <p class="mb-4">“Bitcoin and gold are increasingly seen as complementary assets in a world of persistent inflation and monetary uncertainty,” said Charles Morris, ByteTree founder and chief investment officer.</p>
        <p class="mb-4">He noted in a post on X that the fund has begun trading on the LSE under the ticker “BOLD” in British pounds sterling and “BOLU” in US dollars.</p>

        <figure class="my-8">
          <img src="https://s3.cointelegraph.com/uploads/2026-01/019bb727-b6cc-73a5-8c99-e04c58e5682b.png" alt="Exchanges trading BOLD" class="w-full rounded-lg">
          <figcaption class="text-center text-sm text-gray-400 mt-2"><em>Exchanges trading the 21Shares BOLD ETP, local ticker and currency. Source: 21Shares</em></figcaption>
        </figure>

        <p class="mb-4">The 21Shares BOLD ETP has a net asset value of $50.30, with total assets under management of $40.2 million, and an annual management fee of 0.65% covering custody, administration and ongoing operation.</p>
        <p class="mb-4"><em><strong>Related: </strong></em><a href="#" class="text-blue-400 hover:text-blue-300"><em><strong>Crypto enters round 2 of institutional adoption, led by Morgan Stanley: Binance</strong></em></a></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Logic for dynamic loading based on ID can be added here
</script>

<style scoped lang="less">
.g-content-html h2 {
  color: #fff;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.g-content-html a {
  color: #00f0ff;
}
</style>
