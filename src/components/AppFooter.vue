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
              <router-link to="/quotes" class="item">{{ $t('footer.quotes') }}</router-link>
              <router-link to="/play/futures/trade" class="item">{{ $t('footer.options') }}</router-link>
              <router-link to="/play/spot/trade" class="item">{{ $t('footer.spot') }}</router-link>
              <router-link to="/play/ucontract/index" class="item">{{ $t('footer.perpetual') }}</router-link>
            </div>

            <!-- Asset Management -->
            <div class="list">
              <div class="head">{{ $t('footer.assetManagement') }}</div>
              <router-link to="/assets/index?tab=asset_overview" class="item">{{ $t('footer.myAssets') }}</router-link>
              <router-link to="/assets/recharge" class="item">{{ $t('footer.deposit') }}</router-link>
              <router-link to="/assets/withdraw" class="item">{{ $t('footer.withdraw') }}</router-link>
              <router-link to="/assets/index?tab=transfer" class="item">{{ $t('footer.transfer') }}</router-link>
              <router-link to="/assets/index?tab=orders" class="item">{{ $t('footer.orderCenter') }}</router-link>
            </div>

            <!-- Products -->
            <div class="list">
              <div class="head">{{ $t('footer.products') }}</div>
              <router-link to="/customer/index" class="item">{{ $t('footer.inviteRewards') }}</router-link>
              <router-link to="/web3/index" class="item">{{ $t('footer.financialManagement') }}</router-link>
            </div>

            <!-- Support -->
            <div class="list">
              <div class="head">{{ $t('footer.support') }}</div>
              <router-link to="/" class="item">{{ $t('footer.onlineSupport') }}</router-link>
              <router-link to="/" class="item">{{ $t('footer.aboutUs') }}</router-link>
            </div>

            <!-- Policy -->
            <div class="list">
              <div class="head">{{ $t('footer.policy') }}</div>
              <router-link to="/" class="item">{{ $t('footer.terms') }}</router-link>
              <router-link to="/" class="item">{{ $t('footer.privacy') }}</router-link>
              <router-link to="/" class="item">{{ $t('footer.aml') }}</router-link>
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
  background-color: #0b0b0e;
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

