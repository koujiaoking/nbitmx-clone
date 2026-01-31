#!/bin/bash
mkdir -p src/assets/images
mkdir -p src/assets/icons

# 1. Logo
curl -L -o src/assets/images/logo.png https://nbitmx.com/logo.png

# 2. Main CSS/JS for reference
curl -L -o src/assets/reference.css https://nbitmx.com/assets/index-Cm3-f2W-.css

# 3. Simulate "Starry Globe"
curl -L -o src/assets/images/globe-bg.mp4 "https://cdn.pixabay.com/video/2019/04/20/22908-331666497_large.mp4"

# 4. Crypto Icons
curl -L -o src/assets/icons/btc.png https://s2.coinmarketcap.com/static/img/coins/64x64/1.png
curl -L -o src/assets/icons/eth.png https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png
curl -L -o src/assets/icons/sol.png https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png
curl -L -o src/assets/icons/usdt.png https://s2.coinmarketcap.com/static/img/coins/64x64/825.png

echo "Assets downloaded successfully."
