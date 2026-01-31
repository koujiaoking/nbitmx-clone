<template>
  <div class="home-footer">
    <div class="content">
      <div class="w-full">
        <!-- Logo -->
        <span class="flex items-center">
          <img src="/assets/images/logo-BoPZmP9n.png" alt="" class="h-60px w-auto">
        </span>

        <!-- Language Selector -->
        <LanguageSelector>
          <template #default="{ currentName }">
            <div class="lang cursor-pointer">
              <div class="iconfont">&#xe640;</div>
              <span>{{ currentName }}</span>
              <span class="iconfont">
                &#xe60a;
              </span>
            </div>
          </template>
        </LanguageSelector>

        <!-- Main Links Section -->
        <div class="flex">
          <!-- Link Lists -->
          <div class="list-base">
            <!-- Trading Market -->
            <div class="list">
              <div class="head">{{ $t('footer.tradingMarket') }}</div>
              <router-link to="/play/spot/trade" class="item">{{ $t('footer.spotTrading') }}</router-link>
              <router-link to="/play/ucontract/index" class="item">{{ $t('footer.contractTrading') }}</router-link>
              <router-link to="/copy-trading" class="item">{{ $t('footer.copyTrading') }}</router-link>
              <router-link to="/play/futures/trade" class="item">{{ $t('footer.optionsTrading') }}</router-link>
              <router-link to="/nft/index" class="item">{{ $t('footer.nftMarket') }}</router-link>
            </div>

            <!-- Asset Management -->
            <div class="list">
              <div class="head">{{ $t('footer.service') }}</div>
              <router-link to="/assets" class="item">{{ $t('footer.helpCenter') }}</router-link>
              <router-link to="/recharge" class="item">{{ $t('footer.announcements') }}</router-link>
              <router-link to="/withdraw" class="item">{{ $t('footer.customerService') }}</router-link>
              <router-link to="/assets" class="item">{{ $t('footer.submitTicket') }}</router-link>
              <router-link to="/assets" class="item">{{ $t('footer.tradingRules') }}</router-link>
            </div>

            <!-- Products -->
            <div class="list">
              <div class="head">{{ $t('footer.company') }}</div>
              <router-link to="/" class="item">{{ $t('footer.aboutUs') }}</router-link>
              <router-link to="/" class="item">{{ $t('footer.careers') }}</router-link>
              <router-link to="/" class="item">{{ $t('footer.blog') }}</router-link>
            </div>

            <!-- Support -->
            <div class="list">
              <div class="head">{{ $t('footer.resources') }}</div>
              <router-link to="/customer-service" class="item">{{ $t('footer.download') }}</router-link>
              <router-link to="/" class="item">{{ $t('footer.apiDoc') }}</router-link>
              <router-link to="/" class="item">{{ $t('footer.fees') }}</router-link>
            </div>

            <!-- Policy -->
            <div class="list">
              <div class="head">{{ $t('footer.company') }}</div>
              <router-link to="/" class="item">{{ $t('footer.terms') }}</router-link>
              <router-link to="/" class="item">{{ $t('footer.privacy') }}</router-link>
              <router-link to="/" class="item">{{ $t('footer.listing') }}</router-link>
            </div>
          </div>

          <!-- Right Column -->
          <div class="row-list">
            <span class="row mb-20x leading-20px">
              {{ $t('footer.copyright') }}
            </span>
            <span class="row">
              {{ $t('footer.riskWarning') }}
            </span>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="bottom">
        <div class="content-box">
          <div class="text">
            {{ $t('footer.riskWarning') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LanguageSelector from '@/components/LanguageSelector.vue'
</script>

<style scoped lang="less">
.home-footer {
  width: 100%;
  min-height: 596px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: rgb(11, 11, 14);
  font-size: 14px;
}

.home-footer .content {
  position: relative;
  z-index: 2;
  margin-left: auto;
  margin-right: auto;
  width: 1360px;
  min-height: 596px;
  padding-top: 110px;
}

.home-footer .content .list-base {
  position: relative;
  margin-right: 200px;
  display: flex;
  flex: 1 1 0%;
  flex-wrap: wrap;
  align-items: flex-start;
}

.home-footer .content .list-base .list {
  margin-top: 50px;
  margin-right: 10px;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
}

.home-footer .content .list-base .list .head {
  margin-bottom: 20px;
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  line-height: 26px;
}

.home-footer .content .list-base .list .item {
  margin-bottom: 14px;
  min-height: 20px;
  cursor: pointer;
  font-size: 15px;
  color: rgb(136, 136, 136);
  font-weight: 500;
  line-height: 20px;
}

.home-footer .content .list-base .list .item:hover {
  color: rgb(255, 255, 255);
}

.home-footer .content .row-list {
  width: 530px;
  display: flex;
  flex-direction: column;
}

.home-footer .content .row-list .row {
  width: 100%;
  text-align: right;
  color: rgb(136, 136, 136);
  line-height: 26px;
}

.home-footer .content .row-list .row a {
  color: rgb(136, 136, 136);
}

.home-footer .content .bottom {
  border-top: 1px solid #252731;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
}

.home-footer .content .bottom .content-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.home-footer .content .bottom .content-box .text {
  user-select: text;
  font-size: 14px;
  color: rgb(136, 136, 136);
}

.lang {
  border: 1px solid #2c2c3e;
  position: relative;
  margin-top: 30px;
  width: 160px;
  height: 46px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-around;
  border-radius: 99px;
  background-color: rgb(11, 11, 14);
  color: rgb(255, 255, 255);
}
</style>

