import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  /**
   * There is no markup to target! @apply rules will inline the CSS as needed.
   */
  content: [],
  plugins: [
    plugin((tw) => {
      /**
       * Use `embedded:<class>` to apply styles to an element *only* when it's
       * displayed in an embedded iframe. The `div:has(...) &` hack allows us to
       * target elements outside of #question-alignment-container.
       *
       * ⚠️ This is fragile, but it's the only hook we have for now!
       */
      tw.addVariant('embedded', 'div:has(#question-alignment-container.justify-start) &')
    })
  ]
} satisfies Config
