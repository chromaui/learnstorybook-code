import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/app/components/**/*.stories.ts'],
  addons: ['@storybook/addon-docs'],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};
export default config;
