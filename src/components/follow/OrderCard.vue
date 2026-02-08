<template>
  <div class="follow-order">
    <div class="coin">
      <img class="icon mr-5px" :src="`https://bitcotyrax.oss-ap-southeast-1.aliyuncs.com/coin_icon/${order.coin}.png`" />
      <span>{{ order.coin }}</span>
      <span class="ml-15px green">{{ order.leverage }} </span>
    </div>
    <p class="order-title"><span>買入價</span><span>殖利率</span></p>
    <p class="order-desc">
      <span>{{ order.price }}</span>
      <span :class="parseFloat(order.rate) >= 0 ? 'green' : 'red'">{{ order.rate }}</span>
    </p>
    <p class="order-title"><span>持倉方向</span><span>投入額</span></p>
    <p class="order-desc">
      <span :class="order.direction === 'Long' || order.direction === '做多' ? 'font-win' : 'font-lose'">
        {{ order.direction === 'Long' ? '做多' : '做空' }}
      </span>
      <span>{{ order.amount }}</span>
    </p>
    <p class="order-title"><span>開始時間</span></p>
    <p class="order-desc order-time">
      <span class="time">{{ showHistory ? order.start : order.time }}</span>
      <template v-if="showHistory">
        <span>→</span>
        <span class="time-end">{{ order.end }}</span>
      </template>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  order: {
    key: number
    coin: string
    price: string
    amount: string
    rate: string
    leverage: string
    direction: string
    time?: string
    start?: string
    end?: string
  }
  showHistory?: boolean
}>()
</script>

<style scoped lang="less">
.follow-order {
  border: 1px solid var(--border-color1, #3c3e53);
  margin: 2.6vw 3.2vw;
  border-radius: 4vw;
  padding-left: 2.6vw;
  padding-right: 2.6vw;
  padding-top: 3.7vw;
}

.follow-order .coin {
  position: relative;
  margin-bottom: 2.6vw;
  display: flex;
  align-items: center;
}

.follow-order .coin .icon {
  width: 5.3vw;
  height: 5.3vw;
  border-radius: 9999px;
}

.follow-order .order-title {
  margin-bottom: 2.6vw;
  display: flex;
  justify-content: space-between;
  font-size: 3.3vw;
  --un-text-opacity: 1;
  color: rgb(173 173 173 / var(--un-text-opacity));
}

.follow-order .order-desc {
  color: var(--font-color-main);
  margin-bottom: 2.6vw;
  display: flex;
  justify-content: space-between;
  font-size: 3.7vw;
}

.follow-order .order-time .time,
.follow-order .order-time .time-end {
  flex: 1;
}

.follow-order .order-time .time-end {
  text-align: right;
}

.follow-order .green {
  color: #0ff;
}

.follow-order .red {
  color: #eb5757;
}

.follow-order .font-win {
  color: var(--font-win, #0ff);
}

.follow-order .font-lose {
  color: var(--font-lose, #eb5757);
}
</style>
