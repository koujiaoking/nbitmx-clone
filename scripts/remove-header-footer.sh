#!/bin/bash

# Script to remove AppHeader and AppFooter from all view components

files=(
  "src/views/index.vue"
  "src/views/NftView.vue"
  "src/views/CharityView.vue"
  "src/views/FollowView.vue"
  "src/views/NewsView.vue"
  "src/views/QuotesView.vue"
  "src/views/NoticesView.vue"
  "src/views/CustomerServiceView.vue"
  "src/views/Web3View.vue"
  "src/views/assets/AssetsView.vue"
  "src/views/assets/WithdrawView.vue"
  "src/views/assets/RechargeView.vue"
  "src/views/assets/AddressManageView.vue"
  "src/views/trade/SpotTradeView.vue"
  "src/views/trade/FuturesTradeView.vue"
  "src/views/trade/UContractView.vue"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
    
    # Remove AppHeader component from template
    sed -i.bak '/<AppHeader \/>/d' "$file"
    
    # Remove AppFooter component from template  
    sed -i.bak '/<AppFooter \/>/d' "$file"
    
    # Remove AppHeader import
    sed -i.bak "/import AppHeader from '@\/components\/AppHeader.vue'/d" "$file"
    
    # Remove AppFooter import
    sed -i.bak "/import AppFooter from '@\/components\/AppFooter.vue'/d" "$file"
    
    # Clean up backup files
    rm -f "$file.bak"
    
    echo "✓ Cleaned $file"
  else
    echo "✗ File not found: $file"
  fi
done

echo ""
echo "✅ All files processed successfully!"
