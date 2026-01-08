import type { Meta, StoryObj } from '@storybook/vue3-vite'

import TaskList from './TaskList.vue'

import * as TaskStories from './Task.stories'

export const TaskListData = [
  { ...TaskStories.TaskData, id: '1', title: 'Task 1' },
  { ...TaskStories.TaskData, id: '2', title: 'Task 2' },
  { ...TaskStories.TaskData, id: '3', title: 'Task 3' },
  { ...TaskStories.TaskData, id: '4', title: 'Task 4' },
  { ...TaskStories.TaskData, id: '5', title: 'Task 5' },
  { ...TaskStories.TaskData, id: '6', title: 'Task 6' },
]

const meta = {
  component: TaskList,
  title: 'TaskList',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  args: {
    ...TaskStories.TaskData.events,
  },
} satisfies Meta<typeof TaskList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: TaskListData,
  },
}

export const WithPinnedTasks: Story = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
  },
}

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true,
  },
}

export const Empty: Story = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  },
}
