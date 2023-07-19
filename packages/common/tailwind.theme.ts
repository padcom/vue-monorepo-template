import type { ThemeConfig } from 'tailwindcss/types/config'

const theme: Partial<ThemeConfig & { extend: Partial<ThemeConfig> }> = {
  // Add overrides to the default theme here
  // https://tailwindcss.com/docs/theme#overriding-the-default-theme

  // Add additional theme configuration here
  // https://tailwindcss.com/docs/theme#extending-the-default-theme
  extend: {
  },
}

export default theme
