import type { Preview } from "@storybook/react-vite";

import { initialize, mswLoader } from "msw-storybook-addon";

import "../src/index.css";

// Registers the msw addon
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
