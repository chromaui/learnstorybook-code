import type { Preview } from '@storybook/angular';

import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

import { initialize, mswLoader } from 'msw-storybook-addon';

setCompodocJson(docJson);

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
