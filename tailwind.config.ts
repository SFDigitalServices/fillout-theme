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
       * displayed in an embedded iframe. Fillout adds `overflow-y-hidden` to
       * #form-step-widgets-container (the ancestor of the nav bar and questions)
       * when `fillout-embed-dynamic-resize=true` is in the URL.
       *
       * ⚠️ This is fragile, but it's the only hook we have for now!
       */
      addVariant('embedded', '#form-step-widgets-container.overflow-y-hidden &')
    })
  ]
} satisfies Config
