/* eslint-env node */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-extra-parens */
/* eslint-disable jsdoc/valid-types */
/* eslint-disable complexity */
import path from 'node:path'
import svg from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import i18n from '@intlify/unplugin-vue-i18n/vite'
import eslint from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'
import nesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export const viteVueDefaults = (
  /** @type import('vitest/config').UserConfigExport */
  config = {},
) => () => ({
  ...config,
  plugins: [
    svg({
      defaultImport: 'component',
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-'),
        },
      },
    }),
    i18n(),
    eslint({
      lintOnStart: false,
    }),
    ...(config?.plugins || []),
  ],
  css: {
    ...config.css,
    postcss: {
      ...config.css?.postcss,
      plugins: [
        nesting(),
        tailwindcss(),
        autoprefixer(),
        ...(config.css?.postcss?.plugins || []),
      ],
    },
  },
  test: {
    ...config.test,
    environment: 'jsdom',
    coverage: {
      enabled: true,
      reporter: config.test?.coverage?.reporter || ['text', 'lcov'],
      ...config.test?.coverage,
    },
  },
})

export const viteAppConfig = (
  packageJson,
  /** @type import('vitest/config').UserConfigExport */
  config = {},
) => context => viteVueDefaults({
  ...config,
  plugins: [
    ...(config?.plugins || []),
  ],
  resolve: {
    ...config?.resolve,
    alias: {
      '@': path.join(process.cwd(), 'src'),
      ...(config?.resolve?.alias || []),
    },
  },
  test: {
    setupFiles: [
      '../vitest.setup.js',
    ],
  },
})(context)

export const viteLibConfig = (
  packageJson,
  /** @type import('vitest/config').UserConfigExport */
  config = {},
) => context => viteVueDefaults({
  ...config,
  plugins: [
    dts({ insertTypesEntry: true, rollupTypes: true, logLevel: 'error' }),
    ...(config?.plugins || []),
  ],
  build: {
    ...config?.build,
    lib: {
      ...config?.build?.lib,
      entry: './index.ts',
      name: packageJson.name.split('/').at(-1),
    },
    sourcemap: true,
    rollupOptions: {
      ...config?.build?.rollupOptions,
      external: [
        ...Object.keys(packageJson.dependencies || []),
        ...Object.keys(packageJson.peerDependencies || []),
        ...(config?.build?.rollupOptions?.external || []),
      ],
    },
  },
  test: {
    setupFiles: [
      './vitest.setup.js',
    ],
  },
})(context)
