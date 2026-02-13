# 现货/期权/合约账户左侧实现说明

根据您提供的DOM结构，tab内容应该这样实现：

```vue
<!-- Spot Tab - 现货账户 -->
<div class="assets-page tab-content" v-if="activeTab === 'spot'">
  <div class="left-section no-vw hasdata">
    <!-- 标题+眼睛图标 -->
    <h3 class="white-color-text">
      現貨帳戶估值
      <div class="eye-toggle">
        <svg width="26" height="26" viewBox="0 0 26 26">
          <path fill="#fff" d="M13 6.5C8.73438 6.5 4.63125 9.20156..."/>
        </svg>
      </div>
    </h3>
    
    <!--  余额区域 -->
    <div class="top-info">
      <div class="left-con">
        <span class="balance white-color-text">$0.00</span>
        <span class="unit">USD</span>
      </div>
      <div class="right-con">
        <div class="operate-btn">
          <div class="svg-container"><svg>...</svg></div>
          <span class="name">跟單</span>
        </div>
        <div class="operate-btn" :class="{ active: spotFilter === 'settled' }">
          <div class="svg-container"><svg>...</svg></div>
          <span class="name">已結算訂單</span>
        </div>
        <div class="operate-btn">交易記錄</div>
      </div>
    </div>
    
    <!-- 搜索区域 -->
    <div class="search-wrap">
      <div class="input-wrap">
        <div class="svg-container svg-img"><svg>...</svg></div>
        <input placeholder="搜尋幣種" v-model="searchQuery">
      </div>
      <div class="svg-checkbox hand">
        <svg>...</svg>
        <span>隱藏金額< 1USD的幣種</span>
      </div>
    </div>
    
    <!-- 数据列表 - 不使用 a-table -->
    <div class="data-list">
      <div class="titles">
        <div class="column1">加密貨幣</div>
        <div class="column2">餘額</div>
        <div class="column3">占比</div>
        <div class="column4">凍結</div>
        <div class="column5">操作</div>
      </div>
      <div class="list-wrap">
        <div class="item" v-for="asset in spotAssets" :key="asset.key">
          <div class="column1">
            <img :src="asset.iconUrl" :alt="asset.symbol">
            <div>
              <div>{{ asset.symbol }}</div>
              <div class="brief">{{ asset.name }}</div>
            </div>
          </div>
          <div class="column2">
            <div>{{ asset.balance }}</div>
            <div>$ {{ asset.usdValue }}</div>
          </div>
          <div class="column3">{{ asset.percentage }}</div>
          <div class="column4">{{ asset.frozen }}</div>
          <div class="column5">
            <button class="transfer-btn">劃轉</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 右侧资产动态 -->
  <AssetActivity account-type="spot" />
</div>
```

## 关键样式

```less
.left-section {
  width: 830px;
  height: 892px;
  border-radius: 12px;
  border: 2px solid #2c2c3e;
  padding: 20px 30px;
  
  h3 {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 18px;
    
    .eye-toggle {
      margin-left: 5px;
      cursor: pointer;
    }
  }
  
  .top-info {
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #2c2c3e;
    
    .left-con {
      .balance {
        font-size: 24px;
        margin-right: 10px;
        color: #fff;
      }
      .unit {
        color: #84849f;
      }
    }
    
    .right-con {
      display: flex;
      gap: 10px;
      
      .operate-btn {
        padding: 0 20px;
        height: 40px;
        display: flex;
        align-items: center;
        border-radius: 99px;
        border: 1px solid #84849f;
        cursor: pointer;
        
        &.active {
          background: linear-gradient(90deg, #6491e9, #556dea);
          border-color: #556dea;
          color: #fff;
        }
      }
    }
  }
  
  .search-wrap {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .input-wrap {
      width: 400px;
      height: 32px;
      position: relative;
      
      input {
        width: 100%;
        height: 100%;
        padding-left: 30px;
        border-radius: 6px;
        border: 1px solid #2c2c3e;
        background: transparent;
        color: #fff;
      }
      
      .svg-img {
        position: absolute;
        left: 10px;
        top: 8px;
        z-index: 10;
      }
    }
  }
  
  .data-list {
    margin-top: 20px;
    
    .titles {
      display: flex;
      color: #5e5e7a;
      font-size: 12px;
      padding: 12px 0;
      border-bottom: 1px solid #2c2c3e;
    }
    
    .list-wrap {
      .item {
        display: flex;
        align-items: center;
        padding: 16px 0;
        border-bottom: 1px solid #2c2c3e;
        
        &:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .column1 {
          width: 30%;
          display: flex;
          align-items: center;
          gap: 12px;
          
          img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
          }
          
          .brief {
            font-size: 12px;
            color: #84849f;
          }
        }
        
        .column2 { width: 25%; }
        .column3 { width: 15%; }
        .column4 { width: 15%; }
        .column5 { width: 15%; }
        
        .transfer-btn {
          padding: 6px 16px;
          border-radius: 4px;
          border: none;
          background: linear-gradient(90deg, #6491e9, #556dea);
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
```

我将在下一步实现完整的代码。
