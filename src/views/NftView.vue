<template>
  <main class="nft-page">
    <div class="nft-top">
      <div class="donate">
        <div class="title hidden lg:block">{{ $t('nft.cumulativeDonation') }}</div>
        <ul class="list">
          <li cv-animate-on-scroll="'animate__fadeInBottom'" style="view-transition-name: none;"><img
              src="@/assets/images/mdonate1.png" class="w-70px h-70px -mt-30px">
            <div><span>7,039</span></div>
            <div class="color-[#7a7a97]">{{ $t('nft.tradingVolume') }}</div>
          </li>
          <li cv-animate-on-scroll="'animate__fadeInBottom'" style="view-transition-name: none;"><img
              src="@/assets/images/mdonate2.png" class="w-70px h-70px -mt-30px">
            <div><span>23,669,490</span></div>
            <div class="color-[#7a7a97]">{{ $t('nft.transactionAmount') }}</div>
          </li>
          <li cv-animate-on-scroll="'animate__fadeInBottom'" style="view-transition-name: none;"><img
              src="@/assets/images/mdonate3.png"
              class="w-70px h-70px -mt-30px">
            <div><span>7,879</span></div>
            <div class="color-[#7a7a97]">{{ $t('nft.nftQuantity') }}</div>
          </li>
          <li cv-animate-on-scroll="'animate__fadeInBottom'" style="view-transition-name: none;"><img
              src="@/assets/images/mdonate4.png" class="w-70px h-70px -mt-30px">
            <div><span>1,029,392</span></div>
            <div class="color-[#7a7a97]">{{ $t('nft.profitUsers') }}</div>
          </li>
        </ul>
        <div class="text-20px fw-400 color-[#888] mt-50px hidden lg:block"> {{ $t('nft.promise') }} </div>
        <div class="hidden lg:block mt-35px"><img src="@/assets/images/mdonate-bar.svg"></div>
      </div>
      <div class="right-con" @click="showVideo = true">
          <img src="@/assets/images/icon-play.svg" class="md:w-20px md:h-20px w-15px h-15px">
          <span class="ml-5px text-white">PLAY</span>
      </div>
    </div>

    <!-- Video Modal -->
    <div v-if="showVideo" class="video-modal-overlay" @click.self="showVideo = false">
      <div class="video-modal-container">
        <button class="close-btn" @click="showVideo = false">×</button>
        <video controls autoplay class="video-player">
          <!-- <source src="@/assets/images/b.mp4" type="video/mp4"> -->
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="max-w-1360px mx-auto px-4vw box-border md:px-0">
      <div class="color-white text-center font-bold text-3xl mt-15 mb-10" v-animate-on-scroll="'animate__fadeInLeft'"
        style="view-transition-name: none;"> {{ $t('nft.hot') }} </div>
      <ul class="p-0 m-0 list-none flex flex-wrap md:gap-42px gap-24px">
        <li class="hot-item"><img class="nft-img" src="@/assets/images/wzgif.gif"
            alt="Alejandra Compton #3677">
          <div class="content absolute left-0 right-0 bottom-0 px-10px md:p-20px text-12px md:text-16px">
            <div class="hidden md:flex justify-between"><span class="left">Alejandra
                Compton #3677</span><span class="right"><span class="ssr">SSR</span></span></div>
            <div class="mt-8px md:my-8px color-[#9999bc] flex items-center">ApeReunion 
                 <img src="@/assets/images/creator-1.svg" class="ml-1 w-14px h-14px">
            </div>
            <div class="flex justify-between"><span class="flex items-center">
                <img src="@/assets/icons/usdt.png" class="mr-6px w-16px h-16px"> 235.45</span><span class="right">
                    <img src="@/assets/images/like-red.svg" class="w-18px h-16px"> 23k</span>
            </div>
          </div>
        </li>
        <li class="hot-item"><img class="nft-img" src="@/assets/images/wz1.png"
            alt="Christopher Morgan #3539">
          <div class="content absolute left-0 right-0 bottom-0 px-10px md:p-20px text-12px md:text-16px">
            <div class="hidden md:flex justify-between"><span class="left">Christopher Morgan #3539</span><span class="right"><span
                  class="ssr">SSR</span></span></div>
            <div class="mt-8px md:my-8px color-[#9999bc] flex items-center">MGLAND <img
                src="@/assets/images/creator-1.svg" class="ml-1 w-14px h-14px">
            </div>
            <div class="flex justify-between"><span class="flex items-center"><img
                   src="@/assets/icons/usdt.png" class="mr-6px w-16px h-16px"> 105.566</span><span class="right"><img
                  src="@/assets/images/like-red.svg" class="w-18px h-16px"> 49k</span>
            </div>
          </div>
        </li>
        <li class="hot-item"><img class="nft-img" src="@/assets/images/wz2.png"
            alt="Melissa Olson #4206">
          <div class="content absolute left-0 right-0 bottom-0 px-10px md:p-20px text-12px md:text-16px">
            <div class="hidden md:flex justify-between"><span class="left">Melissa
                Olson #4206</span><span class="right"><span class="ssr">SSR</span></span></div>
            <div class="mt-8px md:my-8px color-[#9999bc] flex items-center">OtherdeedforOtherside <img
                src="@/assets/images/creator-1.svg" class="ml-1 w-14px h-14px">
            </div>
            <div class="flex justify-between"><span class="flex items-center"><img
                   src="@/assets/icons/usdt.png" class="mr-6px w-16px h-16px"> 3070.84</span><span class="right"><img
                  src="@/assets/images/like-red.svg" class="w-18px h-16px"> 16k</span>
            </div>
          </div>
        </li>
        <li class="hot-item"><img class="nft-img" src="@/assets/images/wz3.png"
            alt="Chad Haas #3069">
          <div class="content absolute left-0 right-0 bottom-0 px-10px md:p-20px text-12px md:text-16px">
            <div class="hidden md:flex justify-between"><span class="left">Chad Haas
                #3069</span><span class="right"><span class="ssr">SSR</span></span>
            </div>
            <div class="mt-8px md:my-8px color-[#9999bc] flex items-center">TheSanctumNeophytes <img
                 src="@/assets/images/creator-1.svg" class="ml-1 w-14px h-14px">
            </div>
            <div class="flex justify-between"><span class="flex items-center"><img
                   src="@/assets/icons/usdt.png" class="mr-6px w-16px h-16px"> 17.9085</span><span class="right"><img
                  src="@/assets/images/like-red.svg" class="w-18px h-16px"> 19k</span>
            </div>
          </div>
        </li>
        <li class="hot-item"><img class="nft-img"
            src="@/assets/images/wz4.png"
            alt="Nancy Bass #3683">
          <div class="content absolute left-0 right-0 bottom-0 px-10px md:p-20px text-12px md:text-16px">
            <div class="hidden md:flex justify-between"><span class="left">Nancy
                Bass #3683</span><span class="right"><span class="ssr">SSR</span></span></div>
            <div class="mt-8px md:my-8px color-[#9999bc] flex items-center">TheSandbox <img
                src="@/assets/images/creator-1.svg" class="ml-1 w-14px h-14px">
            </div>
            <div class="flex justify-between"><span class="flex items-center"><img
                   src="@/assets/icons/usdt.png" class="mr-6px w-16px h-16px"> 1338.43</span><span class="right"><img
                  src="@/assets/images/like-red.svg" class="w-18px h-16px"> 44k</span>
            </div>
          </div>
        </li>
        <li class="hot-item"><img class="nft-img" src="@/assets/images/wz5.png"
            alt="Christopher Riley #3710">
          <div class="content absolute left-0 right-0 bottom-0 px-10px md:p-20px text-12px md:text-16px">
            <div class="hidden md:flex justify-between"><span class="left">Christopher Riley #3710</span><span class="right"><span
                  class="ssr">SSR</span></span></div>
            <div class="mt-8px md:my-8px color-[#9999bc] flex items-center">WolfPupsOfficial <img
                src="@/assets/images/creator-1.svg" class="ml-1 w-14px h-14px">
            </div>
            <div class="flex justify-between"><span class="flex items-center"><img
                   src="@/assets/icons/usdt.png" class="mr-6px w-16px h-16px"> 4.71277</span><span class="right"><img
                  src="@/assets/images/like-red.svg" class="w-18px h-16px"> 47k</span>
            </div>
          </div>
        </li>
        <li class="hot-item"><img class="nft-img" src="@/assets/images/wz6.png"
            alt="Tyler Jones #3970">
          <div class="content absolute left-0 right-0 bottom-0 px-10px md:p-20px text-12px md:text-16px">
            <div class="hidden md:flex justify-between"><span class="left">Tyler
                Jones #3970</span><span class="right"><span class="ssr">SSR</span></span></div>
            <div class="mt-8px md:my-8px color-[#9999bc] flex items-center">KEEPOFFTHEGRASS <img
                src="@/assets/images/creator-1.svg" class="ml-1 w-14px h-14px">
            </div>
            <div class="flex justify-between"><span class="flex items-center"><img
                   src="@/assets/icons/usdt.png" class="mr-6px w-16px h-16px"> 56.5533</span><span class="right"><img
                  src="@/assets/images/like-red.svg" class="w-18px h-16px"> 44k</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="fitwidth-wrap">
        <div class="nftauthor">
          <div class="nftauthor-title" v-animate-on-scroll="'animate__fadeInTop'" style="view-transition-name: none;"><span
              class="title white-color-text">{{ $t('nft.featuredCreator') }}</span><span
              class="top10">{{ $t('nft.top10') }}</span></div>
          <ul class="author-list">
            <li class="author-item">
              <div class="sort sort1">1.</div><img class="head-img"
                src="@/assets/images/wzgif.gif" alt="ApeReunion">
              <div class="name">ApeReunion</div>
              <div class="articles">3,677 Works</div><button
                class="view-article">{{ $t('nft.viewPortfolio') }}</button>
            </li>
            <li class="author-item">
              <div class="sort sort2">2.</div><img class="head-img"
                src="@/assets/images/wz1.png" alt="MGLAND">
              <div class="name">MGLAND</div>
              <div class="articles">3,539 Works</div><button
                class="view-article">{{ $t('nft.viewPortfolio') }}</button>
            </li>
            <li class="author-item">
              <div class="sort sort3">3.</div><img class="head-img"
                src="@/assets/images/wz2.png" alt="OtherdeedforOtherside">
              <div class="name">OtherdeedforOtherside</div>
              <div class="articles">4,206 Works</div><button
                class="view-article">{{ $t('nft.viewPortfolio') }}</button>
            </li>
            <li class="author-item">
              <div class="sort sort4">4.</div><img class="head-img"
                src="@/assets/images/wz3.png" alt="TheSanctumNeophytes">
              <div class="name">TheSanctumNeophytes</div>
              <div class="articles">3,069 Works</div><button
                class="view-article">{{ $t('nft.viewPortfolio') }}</button>
            </li>
            <li class="author-item">
              <div class="sort sort5">5.</div><img class="head-img"
                src="@/assets/images/wz4.png"
                alt="TheSandbox">
              <div class="name">TheSandbox</div>
              <div class="articles">3,683 Works</div><button
                class="view-article">{{ $t('nft.viewPortfolio') }}</button>
            </li>
            <li class="author-item">
              <div class="sort sort6">6.</div><img class="head-img"
                src="@/assets/images/wz5.png" alt="WolfPupsOfficial">
              <div class="name">WolfPupsOfficial</div>
              <div class="articles">3,710 Works</div><button
                class="view-article">{{ $t('nft.viewPortfolio') }}</button>
            </li>
            <li class="author-item">
              <div class="sort sort7">7.</div><img class="head-img"
                src="@/assets/images/wz6.png" alt="KEEPOFFTHEGRASS">
              <div class="name">KEEPOFFTHEGRASS</div>
              <div class="articles">3,970 Works</div><button
                class="view-article">{{ $t('nft.viewPortfolio') }}</button>
            </li>
            <li class="author-item">
              <div class="sort sort8">8.</div><img class="head-img"
                src="@/assets/images/wz7.png" alt="AIORBIT">
              <div class="name">AIORBIT</div>
              <div class="articles">4,687 Works</div><button
                class="view-article">{{ $t('nft.viewPortfolio') }}</button>
            </li>
            <li class="author-item">
              <div class="sort sort9">9.</div><img class="head-img"
                src="@/assets/images/wz8.gif" alt="BitcoinPunks">
              <div class="name">BitcoinPunks</div>
              <div class="articles">4,947 Works</div><button
                class="view-article">{{ $t('nft.viewPortfolio') }}</button>
            </li>
            <li class="author-item">
              <div class="sort sort10">10.</div><img class="head-img"
                src="@/assets/images/wz1.png" alt="CUBE">
              <div class="name">CUBE</div>
              <div class="articles">3,046 Works</div><button
                class="view-article">{{ $t('nft.viewPortfolio') }}</button>
            </li>
          </ul>
        </div>
      </div>
      <h2 class="color-white mt-15 text-center md:text-46px text-18px" v-animate-on-scroll="'animate__fadeInRight'"
        style="view-transition-name: none;"> {{ $t('nft.yieldOutput') }} </h2>
      <div class="mt-8 px-13px">
        <div class="flex text-14px"><span class="column addr color-[#888]">{{ $t('nft.userAddress') }}</span><span class="column name color-[#888]">{{ $t('nft.nftName') }}</span><span
            class="column amount color-[#888]">{{ $t('nft.revenue') }}</span></div>
        <div class="h-480px mt-40px overflow-hidden">
          <ul class="table-body">
            <li class="flex items-center b-b-1px b-b-solid b-b-[#12141e] py-15px md:text-20px"><span
                class="column addr">0xb6352ea....4fb0e58</span><span
                class="column name">#49663</span><span class="column amount">8133.55 <i
                  class="icon-unit-t"></i></span></li>
            <li class="flex items-center b-b-1px b-b-solid b-b-[#12141e] py-15px md:text-20px"><span
                class="column addr">0xc3f5e95....8bd5405</span><span
                class="column name">#976347</span><span class="column amount">1104.43 <i
                  class="icon-unit-t"></i></span></li>
            <li class="flex items-center b-b-1px b-b-solid b-b-[#12141e] py-15px md:text-20px"><span
                class="column addr">0xbd3f368....6dd5473</span><span
                class="column name">#999045</span><span class="column amount">2088.47 <i
                  class="icon-unit-t"></i></span></li>
            <li class="flex items-center b-b-1px b-b-solid b-b-[#12141e] py-15px md:text-20px"><span
                class="column addr">0xd7e1236....876a3b2</span><span
                class="column name">#5982</span><span class="column amount">1163.7 <i
                  class="icon-unit-t"></i></span></li>
            <li class="flex items-center b-b-1px b-b-solid b-b-[#12141e] py-15px md:text-20px"><span
                class="column addr">0xbc3a2cf....7cb0652</span><span
                class="column name">#8047</span><span class="column amount">2600.92 <i
                  class="icon-unit-t"></i></span></li>
            <li class="flex items-center b-b-1px b-b-solid b-b-[#12141e] py-15px md:text-20px"><span
                class="column addr">0x4d3e255....9e525bc</span><span
                class="column name">#9530</span><span class="column amount">2641.96 <i
                  class="icon-unit-t"></i></span></li>
            <li class="flex items-center b-b-1px b-b-solid b-b-[#12141e] py-15px md:text-20px"><span
                class="column addr">0xe589b09....1f5cb5a</span><span
                class="column name">#226783194</span><span class="column amount">8473.31 <i
                  class="icon-unit-t"></i></span></li>
            <li class="flex items-center b-b-1px b-b-solid b-b-[#12141e] py-15px md:text-20px"><span
                class="column addr">0xdc1adb5....de5efb5</span><span
                class="column name">#208819498</span><span class="column amount">9574.93 <i
                  class="icon-unit-t"></i></span></li>
            <li class="flex items-center b-b-1px b-b-solid b-b-[#12141e] py-15px md:text-20px"><span
                class="column addr">0x20b741e....07dcd24</span><span
                class="column name">#9647</span><span class="column amount">8199.76 <i
                  class="icon-unit-t"></i></span></li>
            <li class="flex items-center b-b-1px b-b-solid b-b-[#12141e] py-15px md:text-20px"><span
                class="column addr">0x879130a....1a642b2</span><span
                class="column name">#164276</span><span class="column amount">4966.70 <i
                  class="icon-unit-t"></i></span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="be-author">
      <div class="be-author-title white-color-text" v-animate-on-scroll="'animate__fadeInTop'" style="view-transition-name: none;">
        {{ $t('nft.becomeCreator') }} </div>
      <div class="be-author-title-sub" v-animate-on-scroll="'animate__fadeInTop'" style="view-transition-name: none;"> {{ $t('nft.lookingForward') }} </div>
      <div class="advantage-wrap" v-animate-on-scroll="'animate__fadeInBottom'" style="view-transition-name: none;">
        <div class="advantage-list">
          <div class="advantage-item">
            <div class="top"><span>{{ $t('nft.advantage1Title') }}</span><img
                src="@/assets/images/creator-2.svg"
                alt="Unique logo"></div>
            <div class="bottom">{{ $t('nft.advantage1Desc') }}</div>
          </div>
          <div class="advantage-item">
            <div class="top"><span>{{ $t('nft.advantage2Title') }}</span><img
                src="@/assets/images/advantage2-dark.svg" alt="Traffic exposure"></div>
            <div class="bottom">{{ $t('nft.advantage2Desc') }}</div>
          </div>
          <div class="advantage-item">
            <div class="top"><span>{{ $t('nft.advantage3Title') }}</span><img
                src="@/assets/images/creator-3.svg"
                alt="Operation customization"></div>
            <div class="bottom">{{ $t('nft.advantage3Desc') }}</div>
          </div>
          <div class="advantage-item">
            <div class="top"><span>{{ $t('nft.advantage4Title') }}</span><img
                src="@/assets/images/creator-4.svg"
                alt="Exclusive customer service"></div>
            <div class="bottom">{{ $t('nft.advantage4Desc') }}</div>
          </div>
        </div>
      </div>
      <div class="nft-banner" v-animate-on-scroll="'animate__fadeInBottom'" style="view-transition-name: none;">
        <div class="nft-banner-title white-color-text"> {{ $t('nft.startJourney') }}
        </div>
        <div class="cm-empty"></div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showVideo = ref(false);
</script>

<style scoped lang="less">
.video-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000c;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;}

.video-modal-container {
    position: relative;
    width: 80%;
    max-width: 900px;}

.video-player {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 0 20px #00000080;}

.close-btn {
    position: absolute;
    top: -40px;
    right: 0;
    background: transparent;
    color: #fff;
    border: none;
    font-size: 24px;
    cursor: pointer;}

@media screen and (min-width: 992px) {
    .nft-top {
        background: url(@/assets/images/wtopbg.png) no-repeat center center/cover;    }
}

.nft-top {
    font-family: PingFang SC;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    font-size: 14px;}

@media (min-width: 1024px) {
    .nft-top {
        height: 816px;
        min-width: 1440px;    }
}

.right-con {
    transition-duration: .3s;
    animation: pulse 2s infinite;
    position: absolute;
    display: flex;
    cursor: pointer;
    align-items: center;
    left: calc(50% - 20px);
    top: calc(50% + 15px);
    z-index: 10;
}

@media (min-width: 768px) {
    .right-con {
        left: calc(50% + 205px);
        top: 248px;    }
}

@keyframes pulse {
    0% {
        transform: scale(1);    }

    50% {
        transform: scale(1.3);    }

    to {
        transform: scale(1);    }
}

.ad-text {
    width: 1000px;
    height: 180px;
    font-size: 60px;
    color: #fff;
    position: absolute;
    left: calc(50% - 675px);
    top: 186px;}


.ad-text .help {
    color: #0e111a;
    background: linear-gradient(to right, #b6c9ef, #9bb8f0 29%, #6491e9 70%, #556dea);}

.ad-text .child {
    color: #779eeb;}

.donate {
    bottom: 70px;
    left: calc(50% - 675px);}

@media (min-width: 768px) {
    .donate {
        position: absolute;
        width: 600px;    }
}

.donate .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    background: linear-gradient(90deg, #9bb8f0, #6491e9 49.79%, #556dea);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;}

.donate .list {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    row-gap: 35px;
    text-align: center;}

@media (min-width: 768px) {
    .donate .list {
        margin-top: 60px;
        width: 624px;
        row-gap: 0;    }
}

.donate .list li {
    min-height: 90px;
    border-radius: 12px;
    padding-bottom: 5px;
    --un-text-opacity: 1;
    color: rgb(255 255 255 / var(--un-text-opacity));
    width: calc(50% - 10px);}

@media (min-width: 768px) {
    .donate .list li {
        width: 150px;    }
}

.donate .list li:nth-child(1) {
    background: #0e1f1880;}

.donate .list li:nth-child(2) {
    background: #271f1980;}

.donate .list li:nth-child(3) {
    background: #1b142d80;}

.donate .list li:nth-child(4) {
    background: #27172080;}

.hot-item {
    border-radius: 12px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    background-color: var(--data-bg9);
    transition: transform .3s;
    aspect-ratio: 1/1;
    width: calc(50% - 12px);}

@media (min-width: 768px) {
    .hot-item {
        width: calc(33% - 24px);
        max-width: 300px;    }
}

.hot-item:hover {
    transform: scale(1.02);}

.hot-item:hover .nft-img {
    transform: scale(1.1);}

.hot-item .nft-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .5s;}

.hot-item .content {
    background: #0009;
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    color: #fff;}

.hot-item .content .right {
    display: flex;
    width: 28px;
    height: 28px;
    padding: 3px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: linear-gradient(133deg, #9494944a, #2d2d2d42);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);}

.hot-item .content .right .ssr {
    background: linear-gradient(136deg, red 16.15%, #ff90cc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;}

.fitwidth-wrap {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 20px;}

.nftauthor {
    width: 100%;
    font-family: PingFang SC, sans-serif;}

.nftauthor-title {
    text-align: center;
    font-size: clamp(32px, 4vw, 46px);
    height: 60px;
    line-height: 60px;
    margin: 70px 0 30px;}

.top10 {
    margin-left: 8px;
    font-size: .65em;
    background: linear-gradient(180deg, #a5201b, #e74c47 48.23%, #f8db41);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;}

.author-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    gap: 30px 50px;
    margin-top: 50px;
    padding: 0;
    list-style: none;}

.author-item {
    display: flex;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid var(--border-color);
    background: #0c0c1d03;
    font-size: 16px;}

.sort {
    width: 30px;
    text-align: center;
    font-weight: 700;}

.sort1 {
    color: #f7d41a;}

.sort2 {
    color: #a0b3f5;}

.sort3 {
    color: #c56118;}

.head-img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    margin: 0 20px;
    object-fit: cover;}

.name {
    flex: 1;
    min-width: 0;
    margin: 0 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;}

.articles {
    width: 120px;
    margin: 0 20px;
    color: #7a7a97;
    text-align: right;}

.view-article {
    min-width: 120px;
    height: 36px;
    padding: 0 20px;
    border-radius: 99px;
    border: 1px solid #84849F;
    background: var(--content-bg);
    cursor: pointer;
    font: inherit;
    transition: all .3s ease;}

.view-article:hover {
    background: var(--btn-bg);
    color: var(--font-color-btn);
    border-color: transparent;}

@media (max-width: 768px) {
    .author-list {
        grid-template-columns: 1fr;    }

    .author-item {
        width: 100%;
        margin-right: 0;    }
}

.column {
    flex: 1;}

.column.addr {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--font-color3-pc);}

.column.name {
    text-align: center;
    color: var(--font-color-main);}

.column.amount {
    display: flex;
    justify-content: flex-end;
    color: var(--font-color-main);}

.table-body {
    animation: scroll-up 20s linear infinite;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    width: 100%;}

@keyframes scroll-up {
    0% {
        transform: translateY(0);    }

    to {
        transform: translateY(-50%);    }
}

.be-author {
    font-family: PingFang SC, sans-serif;
    padding: 0 20px;
    box-sizing: border-box;
    width: 100%;
    font-style: normal;
    font-weight: 400;}

.be-author-title {
    text-align: center;
    font-size: 46px;
    line-height: 60px;
    margin: 70px 0 0;}

.be-author-title-sub {
    text-align: center;
    font-size: 24px;
    margin: 30px 0;
    color: var(--font-color-secondary);}

.be-author .advantage-wrap {
    margin-top: 100px;
    padding-top: 50px;
    padding-bottom: 150px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(@/assets/images/becomebg.png);}

.be-author .advantage-wrap .advantage-list {
    gap: 20px;
    width: 1360px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;}

.be-author .advantage-wrap .advantage-list .advantage-item {
    width: 320px;
    min-height: 320px;
    padding: 30px 20px;
    border-radius: 12px;
    box-shadow: inset 0 0 7px 1px #3c4f80b3;
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(90deg, #6491e9 50%, #556dea);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 2px solid var(--data-bg18);
    box-shadow: 0 0 7px 1px #3c4f80b3 inset;}

.be-author .advantage-wrap .advantage-list .advantage-item .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;}

.be-author .advantage-wrap .advantage-list .advantage-item .top span {
    -webkit-text-fill-color: initial !important;
    color: #3c4f80b3 !important;}

.be-author .advantage-wrap .advantage-list .advantage-item .bottom {
    -webkit-text-fill-color: initial !important;
    color: #dedeee !important;
    font-size: 18px;
    line-height: 26px;}

.be-author .nft-banner {
    margin: 90px auto 0;
    max-width: 1360px;}

.be-author .nft-banner-title {
    text-align: center;
    font-size: 46px;
    line-height: 60px;
    margin-bottom: 50px;}
@media (max-width: 768px) {
    .fitwidth-wrap,
    .be-author {
        display: none;
    }
}
</style>
