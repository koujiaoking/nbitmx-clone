<template>
  <button class="g-btn-animation" @click="emit('click')">
    <span>{{ text }}</span>
    <div class="iconfont">&#xe631;</div>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  text?: string
}>(), {
  text: '',
})

const emit = defineEmits(['click'])

</script>

<style scoped lang="less">
.g-btn-animation {
    border: 1px solid #333;
    position: relative;
    min-width: 200px;
    height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 60px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 24px;
    --un-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--un-bg-opacity));
    font-size: 18px;
    --un-text-opacity: 1;
    box-sizing: border-box;
    color: rgb(255 255 255 / var(--un-text-opacity));
}
.g-btn-animation:hover:before {
    width: 100%
}

.g-btn-animation:hover .iconfont {
    transform: translate(10px)
}

.g-btn-animation span {
    z-index: 1
}

.g-btn-animation .iconfont {
    transition: all .2s;
    z-index: 0;
    margin-left: 15px
}

.g-btn-animation:before {
    content: "";
    background: linear-gradient(90deg,#00e3ff,#089);
    transition: all .2s;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 0;
    height: 100%;
    border-radius: 24px
}
</style>
