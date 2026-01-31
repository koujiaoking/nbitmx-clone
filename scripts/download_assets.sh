#!/bin/bash

# Asset Download Script for NBITMX Clone
# Downloads images, icons, and other assets from nbitmx.com

BASE_URL="https://nbitmx.com"
ASSET_DIR="src/assets/downloaded"

echo "Downloading assets from ${BASE_URL}..."

# Create directories
mkdir -p "${ASSET_DIR}/images"
mkdir -p "${ASSET_DIR}/icons"
mkdir -p "${ASSET_DIR}/videos"

# Download logo
echo "Downloading logo..."
curl -s "${BASE_URL}/logo.png" -o "${ASSET_DIR}/images/logo.png" 2>/dev/null || echo "Logo download failed"

# Download common images (you'll need to inspect the actual site for specific paths)
echo "Downloading images..."

# Download from /assets/ directory based on HTML inspection
curl -s "${BASE_URL}/assets/EventHall2-CXwcEozJ.svg" -o "${ASSET_DIR}/icons/EventHall2.svg" 2>/dev/null || echo "EventHall2 download failed"

# Try to download common asset types
for ext in jpg jpeg png webp svg; do
    echo "Searching for .${ext} files..."
    curl -s "${BASE_URL}/" | grep -oE "['\"]([^'\"]+\.${ext})['\"]" | sed "s/['\"]//g" | while read -r asset; do
        # Clean up asset path
        asset_path="${asset}"
        if [[ ! $asset_path =~ ^http ]]; then
            if [[ $asset_path =~ ^/ ]]; then
                asset_url="${BASE_URL}${asset_path}"
            else
                asset_url="${BASE_URL}/${asset_path}"
            fi
        else
            asset_url="${asset_path}"
        fi
        
        # Determine output directory based on extension
        if [[ $ext == "svg" ]]; then
            output_dir="${ASSET_DIR}/icons"
        else
            output_dir="${ASSET_DIR}/images"
        fi
        
        # Extract filename
        filename=$(basename "${asset_path}")
        output_file="${output_dir}/${filename}"
        
        echo "  Downloading: ${filename}"
        curl -s "${asset_url}" -o "${output_file}" 2>/dev/null || echo "  Failed: ${filename}"
    done
done

# Download videos
echo "Downloading videos..."
curl -s "${BASE_URL}/" | grep -oE "['\"]([^'\"]+\.mp4)['\"]" | sed "s/['\"]//g" | while read -r video; do
    video_url="${BASE_URL}${video}"
    filename=$(basename "${video}")
    echo "  Downloading: ${filename}"
    curl -s "${video_url}" -o "${ASSET_DIR}/videos/${filename}" 2>/dev/null || echo "  Failed: ${filename}"
done

echo "Asset download complete!"
echo "Downloaded assets are in: ${ASSET_DIR}"
ls -lh "${ASSET_DIR}"/*
