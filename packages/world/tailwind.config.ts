import { type Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'

import theme from './tailwind.theme'

export default {
  theme,
  content: [
    'index.html',
    './src/**/*.{css,vue}',
  ],
  corePlugins: {
    // Comment out the next line if you want to use CSS reset from tailwind
    preflight: false,
  },
  plugins: [
    typography(),
  ],
  future: {
    // Uncomment the next line if you don't want generation of --tw-*-opacity variables
    // disableColorOpacityUtilitiesByDefault: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
} as Config
