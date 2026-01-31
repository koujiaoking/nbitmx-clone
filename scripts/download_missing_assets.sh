#!/bin/bash

# Download missing background images and assets for NBITMX clone
# This script downloads assets referenced in CSS but not yet obtained

echo "🚀 Downloading missing assets for NBITMX clone..."

# Create directories
mkdir -p public/assets/images
mkdir -p src/assets/icons

BASE_URL="https://nbitmx.com"

# Download missing background images
echo "📥 Downloading background images..."

# Statistics section background
curl -L --max-time 30 -o public/assets/images/bg1.png "${BASE_URL}/assets/bg1-oRY_bVzD.png" 2>/dev/null || echo "⚠️  Failed to download bg1.png"

# NFT section background  
curl -L --max-time 30 -o public/assets/images/nft-bg.png "${BASE_URL}/assets/nft-bg-BXKR--BW.png" 2>/dev/null || echo "⚠️  Failed to download nft-bg.png"

# AI section backgrounds
curl -L --max-time 30 -o public/assets/images/ai-bg1.png "${BASE_URL}/assets/ai-bg1-oqC4Bu_4.png" 2>/dev/null || echo "⚠️  Failed to download ai-bg1.png"
curl -L --max-time 30 -o public/assets/images/ai-bg2.png "${BASE_URL}/assets/ai-bg2-COKrhXQQ.png" 2>/dev/null || echo "⚠️  Failed to download ai-bg2.png"

# Trends button background
curl -L --max-time 30 -o public/assets/images/trends-btn.png "${BASE_URL}/assets/trends-btn-D7rmkEl_.png" 2>/dev/null || echo "⚠️  Failed to download trends-btn.png"

# Charity section background
curl -L --max-time 30 -o public/assets/images/charity-bg.png "${BASE_URL}/assets/charity-bg-DnuQENdi.png" 2>/dev/null || echo "⚠️  Failed to download charity-bg.png"

# Border decoration
curl -L --max-time 30 -o public/assets/images/border.png "${BASE_URL}/assets/border-BWz2L3Pm.png" 2>/dev/null || echo "⚠️  Failed to download border.png"

# NFT background variant
curl -L --max-time 30 -o public/assets/images/nft-bg1.png "${BASE_URL}/assets/nft-bg1-Cb3BGXz8.png" 2>/dev/null || echo "⚠️  Failed to download nft-bg1.png"

echo ""
echo "📥 Downloading crypto icons (alternative source)..."

# Try alternative crypto icon sources
# Using cryptologos.cc as backup
CRYPTO_ICON_BASE="https://cryptologos.cc/logos"

curl -L --max-time 30 -o src/assets/icons/btc.png "${CRYPTO_ICON_BASE}/bitcoin-btc-logo.png?v=029" 2>/dev/null || \
  curl -L --max-time 30 -o src/assets/icons/btc.png "https://assets.coincap.io/assets/icons/btc@2x.png" 2>/dev/null || \
  echo "⚠️  Failed to download BTC icon"

curl -L --max-time 30 -o src/assets/icons/eth.png "${CRYPTO_ICON_BASE}/ethereum-eth-logo.png?v=029" 2>/dev/null || \
  curl -L --max-time 30 -o src/assets/icons/eth.png "https://assets.coincap.io/assets/icons/eth@2x.png" 2>/dev/null || \
  echo "⚠️  Failed to download ETH icon"

curl -L --max-time 30 -o src/assets/icons/sol.png "${CRYPTO_ICON_BASE}/solana-sol-logo.png?v=029" 2>/dev/null || \
  curl -L --max-time 30 -o src/assets/icons/sol.png "https://assets.coincap.io/assets/icons/sol@2x.png" 2>/dev/null || \
  echo "⚠️  Failed to download SOL icon"

curl -L --max-time 30 -o src/assets/icons/usdt.png "${CRYPTO_ICON_BASE}/tether-usdt-logo.png?v=029" 2>/dev/null || \
  curl -L --max-time 30 -o src/assets/icons/usdt.png "https://assets.coincap.io/assets/icons/usdt@2x.png" 2>/dev/null || \
  echo "⚠️  Failed to download USDT icon"

# Download additional commonly used crypto icons
curl -L --max-time 30 -o src/assets/icons/bnb.png "https://assets.coincap.io/assets/icons/bnb@2x.png" 2>/dev/null || echo "⚠️  Failed to download BNB icon"
curl -L --max-time 30 -o src/assets/icons/xrp.png "https://assets.coincap.io/assets/icons/xrp@2x.png" 2>/dev/null || echo "⚠️  Failed to download XRP icon"
curl -L --max-time 30 -o src/assets/icons/doge.png "https://assets.coincap.io/assets/icons/doge@2x.png" 2>/dev/null || echo "⚠️  Failed to download DOGE icon"
curl -L --max-time 30 -o src/assets/icons/ada.png "https://assets.coincap.io/assets/icons/ada@2x.png" 2>/dev/null || echo "⚠️  Failed to download ADA icon"

echo ""
echo "✅ Asset download complete!"
echo ""
echo "📊 Downloaded files:"
ls -lh public/assets/images/ | grep -E "bg|nft|ai|trends|charity|border" | tail -10
echo ""
ls -lh src/assets/icons/ | grep -E "png$" | tail -10
