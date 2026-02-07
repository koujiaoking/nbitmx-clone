<template>
  <div class="app_loading_spinner">
    <svg width="100%" height="100%">
      <text text-anchor="middle" x="50%" y="50%" class="app-loading_text app-loading_text-1">
        Nbitmx
      </text>
      <text text-anchor="middle" x="50%" y="50%" class="app-loading_text app-loading_text-2">
        Nbitmx
      </text>
      <text text-anchor="middle" x="50%" y="50%" class="app-loading_text app-loading_text-3">
        Nbitmx
      </text>
      <text text-anchor="middle" x="50%" y="50%" class="app-loading_text app-loading_text-4">
        Nbitmx
      </text>
    </svg>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
.app_loading_spinner {
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: #0c0c0f;
  }

  .app-loading_text {
    font-size: 17vw;
    font-weight: 700;
    text-transform: uppercase;
    fill: none;
    stroke-width: .5vw;
    stroke-dasharray: 90 310;
    animation: stroke 6s infinite linear
  }

  .app-loading_text-1 {
    stroke: #3cefff;
    text-shadow: 0 0 1vw #3cefff;
    animation-delay: -1.5s
  }

  .app-loading_text-2 {
    stroke: #F7931A;
    text-shadow: 0 0 1vw #f7931a;
    animation-delay: -3s
  }

  .app-loading_text-3 {
    stroke: #00D77C;
    text-shadow: 0 0 1vw #00d77c;
    animation-delay: -4.5s
  }

  .app-loading_text-4 {
    stroke: #DB4242;
    text-shadow: 0 0 1vw #db4242;
    animation-delay: -6s
  }

  @media screen and (min-width: 768px) {
    .app-loading_text {
      font-size: 64px;
      stroke-width: 2px;
    }
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
</style>
