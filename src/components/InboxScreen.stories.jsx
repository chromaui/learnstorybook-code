import { HttpResponse, http, delay } from 'msw'
import { Provider } from 'react-redux'

import InboxScreen from './InboxScreen'
import store from '../lib/store'
import { MockedState } from './TaskList.stories'

import {
  userEvent,
  waitFor,
  within,
  waitForElementToBeRemoved,
} from '@storybook/test'

export default {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
}

export const Default = {
  parameters: {
    msw: {
      handlers: [
        http.get(
          'https://jsonplaceholder.typicode.com/todos?userId=1',
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
export const Error = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
          return HttpResponse.json({}, { status: 500 })
        }),
      ],
    },
  },
}
export const Loading = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/todos?userId=1', async () => {
          await delay('infinite')
        }),
      ],
    },
  },
}
