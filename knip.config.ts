import { defineConfig } from 'knip/config'

export default defineConfig({
  entry: [
    'lib/**/*',
    'src/**/*',
    '*.config.*',
  ],
})
