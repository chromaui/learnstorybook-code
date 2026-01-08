import type { Meta, StoryObj } from '@storybook/angular';

import { InboxScreenComponent } from './inbox-screen.component';

const meta: Meta<InboxScreenComponent> = {
  component: InboxScreenComponent,
  title: 'InboxScreen',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InboxScreenComponent>;

export const Default: Story = {};

export const Error: Story = {};
