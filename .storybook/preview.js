import { setup } from '@storybook/vue3';
import { createPinia } from 'pinia';

import '../src/index.css';

//👇 Registers a global Pinia instance inside Storybook to be consumed by existing stories
setup((app) => {
  app.use(createPinia());
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
