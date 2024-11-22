import { Meta, StoryObj } from '@storybook/react'
import { HttpResponse, http, delay } from 'msw'
import { Provider } from 'react-redux'
import MockDate from 'mockdate'

import store from '../lib/store'
import InboxScreen from './InboxScreen'
import * as mocks from '../mocks/data'

import {
  userEvent,
  waitFor,
  within,
  waitForElementToBeRemoved,
} from '@storybook/test'
import { getFormattedDate } from '#utils/date.mock.ts'

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
            return HttpResponse.json(mocks.tasks)
          }
        ),
      ],
    },
  },
}

export const PinnedTasks: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'))
    // Waits for the component to be updated based on the store
    await waitFor(async () => {
      // Simulates pinning the first task
      await userEvent.click(canvas.getByLabelText('Pin Learn more about Storybook'))
      // Simulates pinning the third task
      await userEvent.click(canvas.getByLabelText('Pin Schedule annual health check-up'))
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

export const MockedDateWithModuleMocking: Story = {
  ...Default,
  beforeEach: async () => {
    getFormattedDate.mockReturnValue('August 23, 1993')
  }
}

export const MockedDateWithDateMocking: Story = {
  ...Default,
  beforeEach: async () => {
    MockDate.set('2000-01-01T12:24:02Z')
  }
}
