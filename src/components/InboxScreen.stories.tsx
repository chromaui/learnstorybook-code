import { Meta, StoryObj } from '@storybook/react'
import { HttpResponse, http, delay } from 'msw'
import { Provider } from 'react-redux'

import store from '../lib/store'
import InboxScreen from './InboxScreen'
import { MockedState } from './TaskList.stories'

import {
  userEvent,
  waitFor,
  within,
  waitForElementToBeRemoved,
} from '@storybook/test'

const meta = {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} satisfies Meta<typeof InboxScreen>
export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(
          'https://jsonplaceholder.typicode.com/todos',
          () => {
            return HttpResponse.json(MockedState.tasks)
          }
        ),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'))
    // Waits for the component to be updated based on the store
    await waitFor(async () => {
      // Simulates pinning the first task
      await userEvent.click(canvas.getByLabelText('pinTask-1'))
      // Simulates pinning the third task
      await userEvent.click(canvas.getByLabelText('pinTask-3'))
    })
  },
}

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/todos', () => {
          return HttpResponse.json({}, { status: 500 })
        }),
      ],
    },
  },
}

export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/todos', async () => {
          await delay('infinite')
        }),
      ],
    },
  },
}
