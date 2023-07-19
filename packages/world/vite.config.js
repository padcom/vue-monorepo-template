import { defineConfig } from 'vitest/config'

import { viteAppConfig } from '../../vite.default'
import pkg from './package.json'

export default defineConfig(viteAppConfig(pkg, {
  server: {
    port: 5174,
  },
})())
