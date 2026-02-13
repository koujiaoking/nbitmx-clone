<template>
  <!-- Mobile View -->
  <div v-if="isMobile" class="address-manage-view mobile-view">
    <van-nav-bar
        title="錢包地址"
        left-arrow
        fixed
        placeholder
        @click-left="onClickLeft"
        class="mobile-navbar"
      >
        <template #right>
    <div class="add-btn text-[#40E0D0] text-sm px-3 py-1 bg-[#2a3036] rounded" @click="showAddPopup = true">添加</div>
  </template>
        </van-nav-bar>

    <div class="search-bar">
      <div class="search-input-wrap">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#84849f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 21L16.65 16.65" stroke="#84849f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input type="text" v-model="searchQuery" placeholder="搜尋貨幣、銀行卡號或備註名稱" class="search-input">
        <div class="eye-icon">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </div>
    </div>

    <div class="address-list">
      <div v-for="item in filteredAddresses" :key="item.key" class="address-card">
        <div class="card-left">
          <img :src="item.iconUrl" class="coin-icon" />
        </div>
        <div class="card-center">
          <div class="coin-info">
            <span class="coin-symbol">{{ item.crypto }}</span>
            <span class="network-tag">({{ item.chainShort }})</span>
          </div>
          <div class="address-text">{{ item.address }}</div>
        </div>
        <div class="card-right" @click="openActionSheet(item)">
          <div class="more-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="12" r="2" fill="#fff"/>
              <circle cx="12" cy="12" r="2" fill="#fff"/>
              <circle cx="19" cy="12" r="2" fill="#fff"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <van-action-sheet
      v-model:show="showActionSheet"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @select="onSelectAction"
      class="custom-action-sheet"
    />

    <van-popup
      v-model:show="showAddPopup"
      position="bottom"
      :style="{ height: '100%' }"
      class="add-address-popup"
    >
      <!-- Mobile Popup Content -->
      <div class="popup-header">
        <div class="left" @click="showAddPopup = false">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="title">添加地址</div>
        <div class="right"></div>
      </div>
      <div class="popup-content">
         <div class="form-group">
          <div class="label">加密貨幣</div>
          <div class="input-wrap select-wrap" @click="showCryptoSelector = true">
            <div class="selected-crypto" v-if="newAddress.crypto">
              <img :src="iconMapping[newAddress.crypto]" class="coin-icon-small" />
              <span>{{ newAddress.crypto }} - {{ chainMapping[newAddress.crypto] }}</span>
            </div>
             <div class="placeholder" v-else>選擇幣種</div>
             <div class="arrow-down">▼</div>
          </div>
        </div>
        <div class="form-group">
          <div class="label">提幣地址</div>
          <div class="input-wrap">
            <input type="text" v-model="newAddress.address" placeholder="輸入提幣地址" />
          </div>
        </div>
        <div class="form-group">
          <div class="label">備註</div>
          <div class="input-wrap">
            <input type="text" v-model="newAddress.note" placeholder="備註" />
          </div>
        </div>
        <div class="submit-btn-wrap">
            <button class="submit-btn" @click="handleConfirmAdd">提交</button>
        </div>
      </div>
      <!-- Nested Crypto Selector for Mobile -->
      <van-popup v-model:show="showCryptoSelector" position="bottom" round>
        <van-picker
          :columns="cryptoOptions"
          @confirm="onCryptoConfirm"
          @cancel="showCryptoSelector = false"
        />
      </van-popup>
    </van-popup>
    
  </div>

  <!-- PC View -->
  <div v-else class="vben-layout-content address-manage-view pc-view">
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
        <div class="search-wrapper">
          <a-input v-model:value="searchQuery" placeholder="搜尋貨幣、銀行卡號、備註" :allow-clear="true">
            <template #prefix>
              <SearchOutlined />
            </template>
          </a-input>
        </div>
      </div>
      <div class="table-wrap">
        <div class="table-head">
          <span class="white-color-text">管理常用地址</span>
          <div class="right">
            <a-button class="custom-add-btn" @click="openAddModal">新增提幣地址</a-button>
          </div>
        </div>
        <van-tabs v-model:active="activeTab" background="transparent" title-active-color="#ffffff" title-inactive-color="#84849f" line-width="70px" line-height="2px" color="#ffffff" shrink>
          <van-tab title="加密貨幣" name="crypto">
            <div class="h-4"></div>
          </van-tab>
        </van-tabs>
        <a-table
          :columns="addressColumns"
          :data-source="filteredAddresses"
          :pagination="{ pageSize: 10 }"
          :scroll="{ x: 1000 }"
          bordered
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'crypto'">
              <div class="crypto-cell">
                <img :src="record.iconUrl" :alt="record.crypto" />
                <span>{{ record.crypto }}</span>
              </div>
            </template>
            <template v-else-if="column.key === 'address'">
              <span class="address-text">{{ record.address }}</span>
            </template>
            <template v-else-if="column.key === 'action'">
              <a class="delete-link" @click="handleDelete(record)">
                <EllipsisOutlined class="text-xl" />
              </a>
            </template>
          </template>
        </a-table>
      </div>
    </div>

    <!-- PC Add Address Modal -->
    <a-modal
      v-model:open="showAddModal"
      title="新增提幣地址"
      :width="600"
      wrap-class-name="address-modal-wrap"
      @ok="handleConfirmAdd"
      @cancel="handleCancelAdd"
    >
      <div class="modal-content">
        <div class="form-item">
          <div class="form-label">加密貨幣</div>
          <a-select
            v-model:value="newAddress.crypto"
            placeholder="選擇貨幣"
            style="width: 100%"
            size="large"
            @change="handleCryptoChange"
          >
            <a-select-option v-for="opt in cryptoOptions" :key="opt.value" :value="opt.value">
              <div class="select-option">
                <span>{{ opt.text }}</span>
              </div>
            </a-select-option>
          </a-select>
        </div>
        <div class="form-item">
          <div class="form-label">提幣地址</div>
          <a-input
            v-model:value="newAddress.address"
            placeholder="請輸入錢包地址"
            size="large"
          />
        </div>
        <div class="form-item">
          <div class="form-label">設置標題</div>
          <a-input
            v-model:value="newAddress.note"
            placeholder="請輸入錢包標題"
            size="large"
          />
        </div>
      </div>
      <template #footer>
        <div class="custom-modal-footer">
          <button class="cancel-btn" @click="handleCancelAdd">取消</button>
          <button class="confirm-btn" @click="handleConfirmAdd">確定</button>
        </div>
      </template>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { showToast, showDialog } from 'vant'
import { useDevice } from '@/composables/useDevice'
import { EllipsisOutlined, SearchOutlined } from '@ant-design/icons-vue'
import AppHeader from '@/components/mobile/AppHeader.vue'
const router = useRouter()
const { isMobile } = useDevice()

// Common State
const searchQuery = ref('')
const activeTab = ref('crypto')
const newAddress = ref({
  crypto: '',
  address: '',
  note: ''
})

// Mobile Specific State
const showActionSheet = ref(false)
const showAddPopup = ref(false)
const showCryptoSelector = ref(false)
const selectedAddress = ref<any>(null)

// PC Specific State
const showAddModal = ref(false)

// Mock Data
const addressData = ref([
 {
    key: '1',
    crypto: 'USDT',
    chain: 'Tron (TRC20)',
    chainShort: 'USDT-ERC', 
    address: '123123123123123',
    note: '',
    iconUrl: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0998f55db750c4170b786f51659698f5a.png',
  },
  {
    key: '2',
    crypto: 'USDT',
    chain: 'Tron (TRC20)',
    chainShort: 'USDT-ERC',
    address: '123123123123123',
    note: '',
    iconUrl: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0998f55db750c4170b786f51659698f5a.png',
  },
   {
    key: '3',
    crypto: 'USDT',
    chain: 'Tron (TRC20)',
    chainShort: 'USDT-ERC',
    address: '123123123123123',
    note: '',
    iconUrl: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0998f55db750c4170b786f51659698f5a.png',
  }
])

// Mappings
const chainMapping: Record<string, string> = {
  BTC: 'Bitcoin',
  ETH: 'Ethereum (ERC20)',
  USDT: 'Tron (TRC20)',
  SOL: 'Solana',
  DOGE: 'Dogecoin',
}

const iconMapping: Record<string, string> = {
  BTC: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0b96195d4f367459fbaac66fd39462aa1.png',
  ETH: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0680cf64887f44f3fa7a8b55e243b7597.png',
  USDT: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0998f55db750c4170b786f51659698f5a.png',
  SOL: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0dce5c5137d3f4803b8a8606140150057.png',
  DOGE: 'https://obobs-res.oss-cn-hongkong.aliyuncs.com/echo2.0409f9e843ec74da198ed062120b08f4d.png',
}

const cryptoOptions = [
    { text: 'USDT - Tron (TRC20)', value: 'USDT' },
    { text: 'BTC - Bitcoin', value: 'BTC' },
    { text: 'ETH - Ethereum (ERC20)', value: 'ETH' },
    { text: 'SOL - Solana', value: 'SOL' },
    { text: 'DOGE - Dogecoin', value: 'DOGE' },
]

// Back Button Logic
const onClickLeft = () => {
  router.back()
}

// Computed
const filteredAddresses = computed(() => {
  if (!searchQuery.value) return addressData.value
  const query = searchQuery.value.toLowerCase()
  return addressData.value.filter(item => 
    item.crypto.toLowerCase().includes(query) || 
    item.address.toLowerCase().includes(query) ||
    item.note.toLowerCase().includes(query)
  )
})

// PC Table Columns
const addressColumns = [
  { title: '加密貨幣', dataIndex: 'crypto', key: 'crypto', width: 150 },
  { title: '轉帳網路', dataIndex: 'chain', key: 'chain', width: 150 },
  { title: '地址', dataIndex: 'address', key: 'address', width: 400, ellipsis: true },
  { title: '備註', dataIndex: 'note', key: 'note', width: 200 },
  { title: '操作', key: 'action', width: 120, align: 'center' as const },
]

// Common Logic
const handleConfirmAdd = () => {
    if (!newAddress.value.crypto || !newAddress.value.address) {
        showToast('請填寫完整信息');
        return;
    }
    const newItem = {
        key: String(Date.now()),
        crypto: newAddress.value.crypto,
        chain: chainMapping[newAddress.value.crypto] || '',
        chainShort: `${newAddress.value.crypto}-ERC`, 
        address: newAddress.value.address,
        note: newAddress.value.note,
        iconUrl: iconMapping[newAddress.value.crypto] || ''
    }
    addressData.value.push(newItem);
    
    // Reset and Close
    handleCancelAdd();
    showToast('添加成功');
}

const handleCancelAdd = () => {
  newAddress.value = { crypto: '', address: '', note: '' }
  showAddPopup.value = false
  showAddModal.value = false
}

// Mobile Specific Logic
const actions = [{ name: '刪除', color: '#ee0a24' }]

const openActionSheet = (item: any) => {
  selectedAddress.value = item
  showActionSheet.value = true
}

const onSelectAction = (action: any) => {
  if (action.name === '刪除' && selectedAddress.value) {
    addressData.value = addressData.value.filter(item => item.key !== selectedAddress.value.key)
    showToast('刪除成功')
  }
  showActionSheet.value = false
}

const onCryptoConfirm = (item: any) => {
    newAddress.value.crypto = item.value;
    showCryptoSelector.value = false;
}

// PC Specific Logic
const openAddModal = () => {
  showAddModal.value = true
}

const handleCryptoChange = (val: any) => {
  newAddress.value.crypto = val as string
}

const handleDelete = (record: any) => {
  showDialog({
    title: '確認刪除',
    message: '確定要刪除該地址嗎？',
    showCancelButton: true
  })
    .then(() => {
      addressData.value = addressData.value.filter(item => item.key !== record.key)
      showToast('刪除成功')
    })
    .catch(() => {
      // cancel
    })
}
</script>

<style scoped lang="less">
/* Shared Mobile/PC Variables */
:root {
  --font-color-main: #fff;
  --border-color: #2c2c3e;
}

// Mobile Styles
.address-manage-view.mobile-view {
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  padding-bottom: 20px;
  
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    height: 44px;
    background-color: #000;
    position: sticky;
    top: 0;
    z-index: 10;
    
    .title {
      font-size: 16px;
      font-weight: 500;
    }
    
    .add-btn {
      background: #2a3036;
      color: #40E0D0;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 14px;
    }
  }

  /* Search Bar */
  .search-bar {
    padding: 10px 16px;
    
    .search-input-wrap {
      background: #12131e;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 8px 12px;
      border: 1px solid #2c2c3e;
      
      .search-icon {
        margin-right: 8px;
      }
      
      .search-input {
        flex: 1;
        background: transparent;
        border: none;
        color: #fff;
        font-size: 14px;
        outline: none;
        
        &::placeholder {
          color: #5d5d6d;
        }
      }
      
      .eye-icon {
          margin-left: 8px;
      }
    }
  }

  /* Address List */
  .address-list {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .address-card {
    background: #161725;
    border-radius: 12px;
    border: 1px solid #2a2a3a;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    
    .card-left {
      .coin-icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }
    
    .card-center {
      flex: 1;
      overflow: hidden;
      
      .coin-info {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 4px;
        
        .coin-symbol {
          color: #4b679b;
          font-weight: 500;
          font-size: 15px;
        }
        
        .network-tag {
          color: #5d5d6d;
          font-size: 13px;
        }
      }
      
      .address-text {
        color: #fff;
        font-size: 15px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: monospace;
      }
    }
    
    .card-right {
      padding: 4px;
    }
  }
  
  /* Popup Styles */
  .add-address-popup {
    background-color: #0b0c15 !important;
  }

  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #1f1f2f;
    
     .title {
         font-size: 17px;
         font-weight: 500;
         color: #fff;
     }
     
     .left, .right {
         width: 24px;
     }
  }

  .popup-content {
    padding: 20px 16px;
    background-color: #0b0c15;
    height: calc(100% - 60px); 
  }

  .form-group {
      margin-bottom: 24px;
      
      .label {
          font-size: 15px;
          color: #fff;
          margin-bottom: 12px;
      }
      
      .input-wrap {
          background: #161725;
          border-radius: 8px;
          padding: 12px;
          
          input {
              width: 100%;
              background: transparent;
              border: none;
              color: #fff;
              font-size: 15px;
              outline: none;
               &::placeholder {
                  color: #555;
              }
          }
      }
      
      .select-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          
          .selected-crypto {
              display: flex;
              align-items: center;
              gap: 8px;
              
              .coin-icon-small {
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
              }
          }
          
          .placeholder {
              color: #555;
          }
          
          .arrow-down {
              color: #555;
              font-size: 12px;
          }
      }
  }

  .submit-btn-wrap {
      margin-top: 40px;
      
      .submit-btn {
          width: 100%;
          height: 48px;
          background: #00f0ff; // Cyan
          border: none;
          border-radius: 24px;
          color: #000;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
      }
  }
}

// PC Styles
.address-manage-view.pc-view {
  .assets-address {
    width: 1360px;
    margin: 0 auto;
    padding-top: 30px;
  }
  
  .white-color-text {
    color: #fff;
    display: flex;
    align-items: center;
    line-height: 36px;
    span { margin-right: 10px; }
  }

  .top-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
  }
  
  .custom-search {
    width: 300px;
    
    :deep(.ant-input) {
      background-color: #12131e;
      border-color: #2c2c3e;
      color: #fff;
      height: 40px;
    }
    
    :deep(.ant-input-search-button) {
      background-color: #2c2c3e;
      border-color: #2c2c3e;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .table-wrap {
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 12px;
    border: 2px solid #2c2c3e;
    padding: 20px;

    .table-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
  
  .custom-add-btn {
    border: 2px solid #2c2c3e;
    border-radius: 8px;
    background: transparent !important;
    color: #fff !important;
    height: 38px;
    padding: 0 24px;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s;
    
    &:hover {
      border-color: #00f0ff !important;
      color: #00f0ff !important;
    }
  }
  
  .crypto-cell {
    display: flex;
    align-items: center;
    gap: 8px;
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }
  
  .address-text {
    font-family: monospace;
    font-size: 13px;
    color: #fff;
  }
}

// Global/Shared Style Overrides
:deep(.ant-table) {
  background: transparent;
  color: #fff;
}

:deep(.ant-table-thead > tr > th) {
  background: #2c2c3e; 
  color: #84849f;
  font-weight: 600;
  border-bottom: 2px solid #2c2c3e;
  padding: 12px 16px;
}

:deep(.ant-table-tbody > tr > td) {
  background: #1f1f2f;
  color: #fff;
  border-bottom: 1px solid #2c2c3e;
  padding: 12px 16px;
}

:deep(.ant-table-tbody > tr:hover > td) {
  background: rgba(255, 255, 255, 0.05) !important;
}

/* Modal Styling */
.modal-content {
  padding: 20px 0;
}
.form-item {
  margin-bottom: 24px;
}
.form-label {
  color: #fff;
  font-size: 14px;
  margin-bottom: 12px;
  font-weight: 500;
}
.modal-footer {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 10px 0;
}
/* Address Modal Dark Theme */
</style>

<style lang="less">
/* Global styles for the specialized modal */
.address-modal-wrap {
  .ant-modal-content {
    background-color: #1E2026 !important;
    padding: 0;
  }
  
  .ant-modal-header {
    background-color: #1E2026 !important;
    border-bottom: 1px solid #2B2F36 !important;
    padding: 16px 24px;
    border-radius: 8px 8px 0 0;
  }
  
  .ant-modal-title {
    color: #fff !important;
  }
  
  .ant-modal-close {
    color: #848E9C;
    &:hover { color: #fff; }
  }
  
  .ant-modal-body {
    background-color: #1E2026 !important;
    padding: 24px;
  }
  
  .ant-modal-footer {
    display: none; /* Hide default footer container if any */
  }
}

.custom-modal-footer {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
  
  button {
    width: 160px;
    height: 48px;
    border-radius: 24px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.9;
    }
  }
  
  .cancel-btn {
    background-color: #2B2F36;
    color: #fff;
  }
  
  .confirm-btn {
    background-color: #00F0FF;
    color: #000;
    font-weight: 500;
  }
}
</style>
