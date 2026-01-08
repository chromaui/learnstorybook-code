import type { Meta, StoryObj } from '@storybook/angular';

import { fn } from 'storybook/test';

import { TaskComponent } from './task.component';

export const TaskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  events: {
    onArchiveTask: fn(),
    onPinTask: fn(),
  },
};

const meta: Meta<TaskComponent> = {
  title: 'Task',
  component: TaskComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...TaskData.events,
  },
};

export default meta;
type Story = StoryObj<TaskComponent>;

export const Default: Story = {
  args: {
    task: TaskData,
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args?.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args?.task,
      state: 'TASK_ARCHIVED',
    },
  },
};
