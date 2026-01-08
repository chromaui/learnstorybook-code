import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@chromatic-com/storybook', '@storybook/addon-docs', '@storybook/addon-vitest'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  }
}
export default config
