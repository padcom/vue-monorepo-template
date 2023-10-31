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
    preflight: false,
  },
  plugins: [
    typography(),
  ],
  future: {
    // disableColorOpacityUtilitiesByDefault: true,
    // respectDefaultRingColorOpacity: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
} as Config
