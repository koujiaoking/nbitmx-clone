#!/usr/bin/env node

/**
 * Download Homepage Assets Script
 * Downloads all images, videos, and icons referenced in the origin HTML files
 */

import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://nbitmx.com';

// Asset URLs extracted from origin HTML files
const ASSETS = {
  images: [
    '/assets/logo-BoPZmP9n.png',
    '/assets/home-banner-1-DgYWOFJC.png',
    '/assets/home-banner-2-BQGyoEtY.png',
    '/assets/5bf2ec646dc04ff6a9df9a19c24745cc-BZ5pyhBv.png',
    '/assets/liquid-metal-CQSltuuD.gif',
    '/assets/ai-logo-52GP66oM.png',
    '/assets/ai-logo2-FsDoIj_I.gif',
    '/assets/ai-logo2-BzERyjnn.png',
    '/assets/img005-3sGTYIlD.png',
    '/assets/img008-DGKVmDxD.png',
    '/assets/user-avatar-JIBFGvBO.png',
    '/assets/nft-icon-kScI2Bu1.svg',
    '/assets/nft-1-_K3Dez7N.png',
    '/assets/nft-2-Bidcm4Hl.png',
    '/assets/nft-3-DTTE9tVe.png',
    '/assets/nft-4-BtmWgRar.png',
    '/assets/charity-1-C3tZi8vJ.png',
    '/assets/partners-FqY_vTlj.png',
    '/assets/tw-DSVFgK6H.svg',
    '/assets/pt-BHWqNMZD.svg',
  ],
  videos: [
    '/video/home-banner.mp4',
  ],
};

const OUTPUT_DIRS = {
  images: path.join(__dirname, '../public/assets/images'),
  videos: path.join(__dirname, '../public/assets/videos'),
};

/**
 * Create output directories if they don't exist
 */
function createDirectories() {
  Object.values(OUTPUT_DIRS).forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`✓ Created directory: ${dir}`);
    }
  });
}

/**
 * Download a single file
 */
function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;
    const client = fullUrl.startsWith('https') ? https : http;

    console.log(`→ Downloading: ${fullUrl}`);

    const file = fs.createWriteStream(outputPath);

    client.get(fullUrl, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(outputPath);
        return downloadFile(response.headers.location, outputPath)
          .then(resolve)
          .catch(reject);
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(outputPath);
        return reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(outputPath)}`);
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
      }
      reject(err);
    });
  });
}

/**
 * Download all assets
 */
async function downloadAllAssets() {
  console.log('Starting asset download...\n');

  createDirectories();

  let successCount = 0;
  let failCount = 0;

  // Download images
  console.log('\n📸 Downloading images...');
  for (const assetPath of ASSETS.images) {
    const filename = path.basename(assetPath);
    const outputPath = path.join(OUTPUT_DIRS.images, filename);

    try {
      await downloadFile(assetPath, outputPath);
      successCount++;
    } catch (error) {
      console.error(`✗ Failed to download ${filename}: ${error.message}`);
      failCount++;
    }
  }

  // Download videos
  console.log('\n🎥 Downloading videos...');
  for (const assetPath of ASSETS.videos) {
    const filename = path.basename(assetPath);
    const outputPath = path.join(OUTPUT_DIRS.videos, filename);

    try {
      await downloadFile(assetPath, outputPath);
      successCount++;
    } catch (error) {
      console.error(`✗ Failed to download ${filename}: ${error.message}`);
      failCount++;
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log(`✓ Successfully downloaded: ${successCount} files`);
  if (failCount > 0) {
    console.log(`✗ Failed: ${failCount} files`);
  }
  console.log('='.repeat(50));

  return { successCount, failCount };
}

// Run the script
downloadAllAssets()
  .then(({ failCount }) => {
    process.exit(failCount > 0 ? 1 : 0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
