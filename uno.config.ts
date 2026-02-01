/**
 * UnoCSS Configuration
 * @description Custom theme configuration for crypto trading platform
 */
import { defineConfig, presetUno, presetAttributify, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    // Disabled presetIcons temporarily - icons will be added locally later
    // presetIcons({
    //   scale: 1.2,
    //   warn: false,
    //   cdn: 'https://esm.sh/',
    // }),
    presetTypography(),
    // Removed presetWebFonts to avoid timeout errors
    // Use local fonts or CDN link in index.html instead
  ],
  theme: {
    colors: {
      // Primary color - Cyan/Teal
      primary: {
        DEFAULT: '#00D4AA',
        50: '#E6FFF9',
        100: '#CCFFF3',
        200: '#99FFE6',
        300: '#66FFD9',
        400: '#33FFCD',
        500: '#00D4AA',
        600: '#00B894',
        700: '#009A7A',
        800: '#007C63',
        900: '#005E4B',
      },
      // Dark backgrounds
      dark: {
        DEFAULT: '#0A0A0A',
        50: '#1A1A1A',
        100: '#151515',
        200: '#121212',
        300: '#0F0F0F',
        400: '#0C0C0C',
        500: '#0A0A0A',
        600: '#080808',
        700: '#050505',
        800: '#030303',
        900: '#000000',
      },
      // Accent colors
      accent: {
        cyan: '#00E5FF',
        purple: '#A855F7',
        orange: '#FF9500',
        green: '#00c853',
        red: '#ff5252',
      },
      // NBITMX Specific
      nbit: {
        cyan: '#00F0FF', // Neon Cyan found in assets
        gold: '#F7931A', // Bitcoin Gold
        navy: '#0A0A0F', // Deep Navy Background
        black: '#000000',
        card: '#181A20',
        gray: '#848E9C',
        green: '#0ECB81',
        red: '#F6465D',
      }
    },
    breakpoints: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  shortcuts: {
    'btn': 'px-4 py-2 rounded-full font-bold transition-all duration-300 cursor-pointer flex items-center justify-center',
    'btn-primary': 'btn bg-nbit-cyan text-black hover:bg-[#00D1EB] hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]',
    'btn-outline': 'btn border border-white/20 hover:border-white text-white',
    'card': 'bg-[#181a20] rounded-xl p-6',
  },
  rules: [
    // Custom animation rules
    ['animate-fade-in', { animation: 'fadeIn 0.5s ease-in-out' }],
    ['animate-slide-up', { animation: 'slideUp 0.5s ease-out' }],
    ['animate-slide-down', { animation: 'slideDown 0.3s ease-out' }],
    ['animate-fade-in-up', { animation: 'fadeInUp 0.8s ease-out forwards' }],
    ['animate-pulse-slow', { animation: 'pulse 3s infinite' }],
  ],
  safelist: [],
  preflights: [
    {
      getCSS: () => `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `,
    },
  ],
})
