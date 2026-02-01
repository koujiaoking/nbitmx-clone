/**
 * Vite 配置文件
 * @description 配置Vue3项目的构建和开发服务器
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),

    // 自动导入 Vue API 和 I18n
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          'vue-i18n': ['useI18n'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),

    // 自动导入组件
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
      dts: 'src/components.d.ts',
    }),
  ],

  // 路径别名配置
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  // 开发服务器配置
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: false,
  },

  // CSS预处理器配置
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "@/styles/variables.less";`,
      },
    },
  },

  // 构建配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-core': ['vue', 'vue-router', 'pinia', 'vue-i18n'],
          'ui-libs': ['ant-design-vue', 'vant'],
          'web3-libs': ['viem', '@wagmi/vue'],
          'web3-appkit': ['@reown/appkit', '@reown/appkit-adapter-wagmi'],
        },
      },
    },
  },
})
