import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { http, HttpResponse } from 'msw'

import InboxScreen from './InboxScreen.vue'

import * as PureTaskListStories from './PureTaskList.stories.ts'

const meta = {
  component: InboxScreen,
  title: 'InboxScreen',
  tags: ['autodocs'],
} satisfies Meta<typeof InboxScreen>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
          return HttpResponse.json(PureTaskListStories.TaskListData)
        }),
      ],
    },
  },
}

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
          return new HttpResponse(null, {
            status: 403,
          })
        }),
      ],
    },
  },
}
