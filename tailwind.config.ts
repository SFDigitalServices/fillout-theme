import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import theme from './tailwind.theme'

export default {
  /**
   * There is no markup to target! @apply rules will inline the CSS as needed.
   */
  content: [],
  theme: theme as unknown as Config['theme'],
  plugins: [
    // eslint-disable-next-line @typescript-eslint/unbound-method
    plugin(({ addVariant }) => {
      /**
       * Use `embedded:<class>` to apply styles to an element *only* when it's
       * displayed in an embedded iframe. The `div:has(...) &` hack allows us to
       * target elements outside of #question-alignment-container.
       *
       * ⚠️ This is fragile, but it's the only hook we have for now!
       */
      addVariant('embedded', 'div:has(#question-alignment-container.justify-start) &')
    })
  ]
} satisfies Config
