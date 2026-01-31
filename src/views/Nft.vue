<template>
  <div class="nft-page">
    <!-- NFT Top Banner -->
    <div class="nft-top">
      <div class="ad-text">
        <div class="element">Buy NFT artwork</div>
        <div class="element">
          Come <span class="help">Help</span> All over the world <span class="child">Child</span>
        </div>
      </div>
      
      <div class="donate">
        <div class="title">Cumulative donation</div>
        <ul class="list">
          <li v-for="(stat, index) in donationStats" :key="index">
            <img :src="stat.icon" alt="">
            <div><span>{{ stat.value }}</span></div>
            <div class="desc">{{ stat.label }}</div>
          </li>
        </ul>
        <div class="donate-text">
          We promise to donate 30% of the proceeds from NFT sales to UNICEF for charity.
        </div>
      </div>
    </div>

    <!-- Hot NFTs -->
    <div class="max-w-1360px mx-auto px-4vw md:px-0 py-10">
      <h2 class="text-center text-white text-3xl font-bold mb-10">Hot</h2>
      
      <ul class="nft-grid">
        <li v-for="nft in hotNfts" :key="nft.id" class="nft-item">
          <img :src="nft.image" :alt="nft.name" class="nft-img">
          <div class="nft-content">
            <div class="nft-header">
              <span>{{ nft.name }}</span>
              <span class="ssr">SSR</span>
            </div>
            <div class="nft-collection">{{ nft.collection }}</div>
            <div class="nft-footer">
              <span class="price">{{ nft.price }} USDT</span>
              <span class="likes">❤️ {{ nft.likes }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- Creator Benefits -->
    <div class="max-w-1360px mx-auto px-4vw md:px-0 py-10">
      <h2 class="text-center text-white text-3xl font-bold mb-10">Creator Advantages</h2>
      
      <div class="advantage-grid">
        <div v-for="(advantage, index) in advantages" :key="index" class="advantage-item">
          <div class="advantage-title">{{ advantage.title }}</div>
          <div class="advantage-desc">{{ advantage.description }}</div>
        </div>
      </div>
    </div>

    <!-- CTA Banner -->
    <div class="nft-banner">
      <div class="nft-banner-title">Start Exchange NFT market trading journey</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const donationStats = ref([
  { value: '7,039', label: 'Trading Volume(Order)', icon: '/assets/mdonate1-B0Gb3XHw.png' },
  { value: '23,669,490', label: 'Transaction Amount USDT', icon: '/assets/mdonate2-DI2U5a94.png' },
  { value: '7,879', label: 'NFT Quantity(Piece)', icon: '/assets/mdonate3.png' },
  { value: '1,029,392', label: 'Profit Users', icon: '/assets/mdonate4-De6ECbWm.png' }
])

const hotNfts = ref([
  { id: 1, name: 'Alejandra Compton #3677', collection: 'ApeReunion', price: '235.45', likes: '23k', image: '/assets/wzgif-B4GXVa5S.gif' },
  { id: 2, name: 'Christopher Morgan #3539', collection: 'MGLAND', price: '105.566', likes: '49k', image: '/assets/wz1-kz3IOx3E.png' },
  { id: 3, name: 'Melissa Olson #4206', collection: 'OtherdeedforOtherside', price: '3070.84', likes: '16k', image: '/assets/wz2-CkFFbuxv.png' },
  { id: 4, name: 'Chad Haas #3069', collection: 'TheSanctumNeophytes', price: '17.9085', likes: '19k', image: '/assets/wz3-ZhriIokL.png' },
  { id: 5, name: 'Nancy Bass #3683', collection: 'TheSandbox', price: '1338.43', likes: '44k', image: '/assets/wz4.png' },
  { id: 6, name: 'Christopher Riley #3710', collection: 'WolfPupsOfficial', price: '4.71277', likes: '47k', image: '/assets/wz5-DG2FDnyb.png' }
])

const advantages = ref([
  {
    title: 'Official Support',
    description: 'Exchange_NFT Certified creators will have the opportunity to obtain official homeless support, including the display of works on the homepage of the official website.'
  },
  {
    title: 'Operation customization',
    description: 'Exchange_NFT Provide each certified creator with an exclusive operational support plan, including support for various online and offline operational activities.'
  },
  {
    title: 'Exclusive customer service',
    description: 'Exchange_NFT All certified creators can enjoy 7*24 Exclusive customer service to meet all your needs.'
  }
])
</script>

<style scoped>
.nft-page {
  min-height: 100vh;
  background: #000;
}

.nft-top {
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
  padding: 60px 20px;
  position: relative;
}

.ad-text {
  max-width: 600px;
  margin: 0 auto 40px;
  text-align: center;
}

.ad-text .element {
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}

.ad-text .help {
  color: #00e6e6;
}

.ad-text .child {
  color: #ff6b6b;
}

.donate {
  max-width: 1200px;
  margin: 0 auto;
}

.donate .title {
  text-align: center;
  font-size: 24px;
  color: #fff;
  margin-bottom: 30px;
}

.donate .list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
}

.donate .list li {
  text-align: center;
  min-width: 200px;
}

.donate .list li img {
  width: 70px;
  height: 70px;
  margin: -30px auto 10px;
}

.donate .list li span {
  font-size: 28px;
  font-weight: 700;
  color: #00e6e6;
}

.donate .list li .desc {
  color: #7a7a97;
  font-size: 14px;
  margin-top: 5px;
}

.donate-text {
  text-align: center;
  color: #888;
  font-size: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.nft-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 42px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nft-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #1a1a2e;
  transition: transform 0.3s;
}

.nft-item:hover {
  transform: translateY(-5px);
}

.nft-img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

.nft-content {
  padding: 20px;
}

.nft-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #fff;
}

.ssr {
  background: linear-gradient(90deg, #ff6b6b, #ee5a6f);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.nft-collection {
  color: #9999bc;
  font-size: 14px;
  margin-bottom: 12px;
}

.nft-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  color: #00e6e6;
  font-weight: 600;
}

.likes {
  color: #e14c4c;
}

.advantage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.advantage-item {
  background: #1a1a2e;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #2a2a4e;
}

.advantage-title {
  font-size: 24px;
  font-weight: 700;
  color: #00e6e6;
  margin-bottom: 15px;
}

.advantage-desc {
  color: #ccc;
  line-height: 1.6;
}

.nft-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 80px 20px;
  text-align: center;
  margin: 60px 0;
}

.nft-banner-title {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
}

@media (max-width: 768px) {
  .nft-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .ad-text .element {
    font-size: 24px;
  }
  
  .nft-banner-title {
    font-size: 24px;
  }
}
</style>
