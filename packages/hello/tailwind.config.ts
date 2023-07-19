import { type Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'

import theme from './tailwind.theme'

export default {
  theme,
  content: [
    './src/**/*.{css,vue}',
  ],
  plugins: [
    typography(),
  ],
  future: {
    // disableColorOpacityUtilitiesByDefault: true,
    // respectDefaultRingColorOpacity: true,
  },
  experimental: {
    // optimizeUniversalDefaults: true,
  },
} as Config
