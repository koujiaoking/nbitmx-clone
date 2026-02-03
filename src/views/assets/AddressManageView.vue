<template>
<div class="vben-layout-content address-manage-view">
  <div class="assets-address">
    <div class="top-head">
      <span class="white-color-text">
        <span>錢包地址</span>
        <span>
          <div class="eye-toggle">
            <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
              <path fill="#fff" d="M6.439 17.245L9.222 14.462C9.039 14.016 8.938 13.528 8.938 13C8.938 10.766 10.766 8.938 13 8.938C13.528 8.938 14.016 9.039 14.462 9.222L16.555 7.13C15.417 6.723 14.219 6.5 13 6.5C8.734 6.5 4.631 9.202 3.25 13C3.859 14.666 4.997 16.128 6.439 17.245Z"></path>
              <path fill="#fff" d="M10.564 13V13.122L13.123 10.562H13.002C11.661 10.562 10.564 11.659 10.564 13ZM19.562 8.755L23.706 4.611L22.548 3.453L3.414 22.588L4.572 23.745L9.467 18.85C10.596 19.28 11.794 19.5 13.002 19.5C17.247 19.5 21.391 16.798 22.772 13C22.162 11.334 21.005 9.872 19.562 8.755ZM13.002 17.062C12.494 17.062 11.986 16.961 11.539 16.778L12.9 15.417H13.022C14.362 15.417 15.459 14.32 15.459 12.98V12.858L16.82 11.497C16.962 11.984 17.064 12.492 17.064 13C17.064 15.234 15.236 17.062 13.002 17.062Z"></path>
            </svg>
          </div>
        </span>
      </span>
      <div class="input-wrap">
        <div class="svg-container svg-img" style="fill: rgb(94, 94, 122);">
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.473 13.527L12 11.073C12.96 9.876 13.425 8.357 13.299 6.828C13.173 5.298 12.466 3.875 11.324 2.851C10.181 1.827 8.689 1.28 7.155 1.322C5.621 1.364 4.162 1.992 3.077 3.077C1.992 4.162 1.364 5.621 1.322 7.155C1.28 8.689 1.827 10.181 2.851 11.324C3.875 12.466 5.298 13.173 6.827 13.299C8.357 13.425 9.876 12.96 11.073 12L13.527 14.453C13.589 14.516 13.662 14.565 13.744 14.599C13.825 14.633 13.912 14.65 14 14.65C14.088 14.65 14.175 14.633 14.256 14.599C14.338 14.565 14.411 14.516 14.473 14.453C14.593 14.329 14.661 14.163 14.661 13.99C14.661 13.817 14.593 13.651 14.473 13.527ZM7.333 12C6.41 12 5.508 11.726 4.741 11.213C3.973 10.701 3.375 9.972 3.022 9.119C2.669 8.266 2.576 7.328 2.756 6.423C2.936 5.518 3.381 4.686 4.033 4.033C4.686 3.381 5.518 2.936 6.423 2.756C7.328 2.576 8.266 2.669 9.119 3.022C9.972 3.375 10.701 3.973 11.213 4.741C11.726 5.508 12 6.41 12 7.333C12 8.571 11.508 9.758 10.633 10.633C9.758 11.508 8.571 12 7.333 12Z"></path>
          </svg>
        </div>
        <van-field
          v-model="searchQuery"
          placeholder="搜尋貨幣、銀行卡號、備註"
          class="search-input"
        />
      </div>
    </div>
    <div class="table-wrap">
      <div class="table-head">
        <span class="white-color-text">管理常用地址</span>
        <div class="right">
          <div class="btn">新增提幣地址</div>
        </div>
      </div>
      <van-tabs v-model:active="activeTab" background="transparent" title-active-color="#ffffff" title-inactive-color="#84849f" line-width="70px" line-height="2px" color="#ffffff">
        <van-tab title="加密貨幣" name="crypto">
          <div class="h-4"></div>
        </van-tab>
      </van-tabs>
      <div class="data-list">
        <div class="titles">
          <div class="column column0">加密貨幣</div>
          <div class="column column1">轉帳網路</div>
          <div class="column column2">地址</div>
          <div class="column column3">備註</div>
          <div class="column column4">操作</div>
        </div>
        <div class="list-wrap">
          <div class="text-gray-500 text-center py-10">暫無數據</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('crypto')
const searchQuery = ref('')
</script>

<style scoped>
/* === Base Variables === */
:root {
  --font-color-main: #fff;
  --font-color3-pc: #84849f;
  --btn-bg: #00f0ff;
  --font-color-btn: #000;
  --content-bg: #1f1f2f;
  --data-bg18: #2c2c3e;
  --data-bg19: #3c3c4e;
  --data-bg7: #3a3a4e;
  --border-color: #2c2c3e;
}

.address-manage-view {
  box-sizing: border-box !important;
}

.vben-layout-content {
    position: relative;
    flex: 1 1 auto;
    min-height: 0
}

.assets-address {
  width: 1360px;
  margin: 0 auto;
  padding-top: 30px;
}

/* === Top Head === */
.white-color-text {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 36px
}

.white-color-text span {
  margin-right: 10px
}

.white-color-text span:nth-child(2) {
  margin-top: 3px
}

.top-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px
}

.top-head .input-wrap {
  width: 300px;
  height: 32px;
  position: relative;
  display: flex;
  align-items: center;
}

.top-head .input-wrap .svg-img {
  font-size: 16px;
  color: #5e5e7a;
  position: absolute;
  left: 10px;
  z-index: 10
}

.top-head .input-wrap input {
  flex: 1;
  height: 32px;
  border-radius: 12px;
  border: 1px solid var(--data-bg18);
  background: var(--content-bg);
  padding-left: 30px;
  font-size: 14px
}

/* === Table Wrap === */
.table-wrap {
  max-height: 1014px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: 2px solid #2c2c3e;
  padding: 20px
}

.table-wrap .table-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px
}

.table-wrap .table-head .right {
  width: 180px;
  text-align: center;
  font-size: 14px;
  color: #84849f
}

.table-wrap .table-head .right .btn {
  margin-left: 5px;
  padding: 3px 8px;
  border-radius: 16px;
  border: 1px solid #84849f;
  cursor: pointer
}

.table-wrap .table-head .right .btn:hover {
  opacity: .8
}

.table-wrap .table-head .check-wrap {
  display: flex;
  align-items: center
}

.table-wrap .table-head .check-wrap > span {
  margin-left: 5px
}

/* === Data List === */
.data-list {
  width: 100%;
  height: 650px;
  margin-top: 30px;
  text-align: center
}

.data-list .titles {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #5e5e7a;
  font-size: 12px
}

.data-list .list-wrap {
  height: 630px;
  overflow-y: auto
}

.data-list .item {
  height: 80px;
  border-bottom: 1px solid var(--border-color);
  background: var(--content-bg);
  display: flex;
  align-items: center;
  font-size: 14px
}

.data-list .column {
  text-align: center
}

.data-list .column0 {
  width: 15%;
  text-align: left;
  display: flex;
  align-items: center
}

.data-list .column0 img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 5px
}

.data-list .column1 {
  width: 15%
}

.data-list .column2 {
  width: 55%
}

.data-list .column3 {
  width: 15%
}

.data-list .column4 {
  width: 15%;
  text-align: right;
  cursor: pointer;
  position: relative
}

.data-list .column4 i {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #bbb;
  margin-left: 3px
}

.data-list .column4 .sub-list {
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 9;
  width: 96px;
  background: var(--data-bg18);
  box-shadow: 1px 2px 6px #0000007d;
  border-radius: 4px;
  border: 1px solid var(--data-bg19);
  display: flex;
  flex-direction: column;
  transition: all .3s;
  padding: 10px 0;
  opacity: 0;
  visibility: hidden;
  color: #9090ad;
  height: auto;
  font-size: 14px
}

.data-list .column4 .sub-list .sub-title {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 24px;
  text-align: center;
  cursor: pointer;
  color: var(--font-color-main)
}

.data-list .column4 .sub-list .sub-title:hover {
  background: var(--data-bg7)
}

.data-list .column4:hover > .sub-list {
  opacity: 1;
  top: 30px;
  visibility: visible
}

/* === Button Group (for modals) === */
.content {
  padding: 5px 20px
}

.btn-group {
  box-sizing: border-box !important;
  margin-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between
}

.btn-group button {
  border: 0;
  outline: none;
  width: 170px;
  height: 50px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 99px
}

.btn-group button:nth-of-type(1) {
  background: var(--data-bg7)
}

.btn-group button:nth-of-type(2) {
  background: var(--btn-bg);
  color: var(--font-color-btn)
}

/* van-field styling */
:deep(.van-field) {
  background: var(--content-bg);
  border: 1px solid var(--data-bg18);
  border-radius: 12px;
  padding-left: 30px;
}
:deep(.van-field__control) {
  color: #fff;
}
.search-input {
  flex: 1;
  height: 32px;
}

/* van-tabs styling */
:deep(.van-tabs__nav) {
  background: transparent !important;
}
:deep(.van-tab) {
  font-size: 16px;
}

/* === Responsive === */
@media (max-width: 768px) {
  .assets-address {
    width: 100%;
    padding: 15px;
  }
  
  .top-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .top-head .input-wrap {
    width: 100%;
  }
  
  .table-wrap {
    padding: 15px;
  }
  
  .table-wrap .table-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .data-list {
    height: auto;
    overflow-x: auto;
  }
  
  .data-list .titles,
  .data-list .item {
    min-width: 600px;
  }
}
</style>
