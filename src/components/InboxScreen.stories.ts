import type { Meta, StoryObj } from '@storybook/vue3-vite'

import InboxScreen from './InboxScreen.vue'

const meta = {
  component: InboxScreen,
  title: 'InboxScreen',
  tags: ['autodocs'],
} satisfies Meta<typeof InboxScreen>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Error: Story = {}
