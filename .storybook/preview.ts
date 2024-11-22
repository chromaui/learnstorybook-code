import type { Preview } from '@storybook/react'
import '../src/index.css'

// Registers the msw addon
import { initialize, mswLoader } from 'msw-storybook-addon'

// Initialize MSW
initialize({
  quiet: true,
  onUnhandledRequest(request, print) {
    const url = new URL(request.url)

    // Provide meaningful default to have fewer unhandled request warnings.
    if (/(\/node_modules\/|\.((t|j)sx?)|\.woff$)/.test(url.pathname)) {
      return
    }

    print.warning()
  },
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
}

export default preview
