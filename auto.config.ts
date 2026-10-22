import type { AutoRc } from 'auto'
import type { INpmConfig } from '@auto-it/npm'
import type { ConventionalCommitsOptions } from '@auto-it/conventional-commits'

export default {
  plugins: [
    ['npm', {
      forcePublish: false
    } satisfies INpmConfig],
    ['conventional-commits', {
      // TODO
    } satisfies ConventionalCommitsOptions]
  ]
} satisfies AutoRc
