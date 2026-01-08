import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { waitFor, waitForElementToBeRemoved } from 'storybook/test'

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
  play: async ({ canvas, userEvent }: any) => {
    await waitForElementToBeRemoved(await canvas.findByTestId('empty'))
    await waitFor(async () => {
      await userEvent.click(canvas.getByLabelText('pinTask-1'))
      await userEvent.click(canvas.getByLabelText('pinTask-3'))
    })
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
