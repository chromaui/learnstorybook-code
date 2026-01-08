import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { fn } from 'storybook/test'

import Task from './Task.vue'

export const TaskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX' as 'TASK_INBOX' | 'TASK_ARCHIVED' | 'TASK_PINNED',
  events: {
    onArchiveTask: fn(),
    onPinTask: fn(),
  },
}

const meta = {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...TaskData.events,
  },
} satisfies Meta<typeof Task>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    task: TaskData,
  },
}

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
}

export const Archived: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
}
