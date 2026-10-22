import { defineConfig } from 'knip/config'

export default defineConfig({
  entry: [
    '*.config.*',
    'theme/**/*.css',
  ],
})
