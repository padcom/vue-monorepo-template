import { defineConfig } from 'vitest/config'

import { viteLibConfig } from '../../vite.default'
import pkg from './package.json'

export default defineConfig(viteLibConfig(pkg))
