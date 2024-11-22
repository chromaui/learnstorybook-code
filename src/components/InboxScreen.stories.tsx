import { Meta, StoryObj } from '@storybook/react'
import { HttpResponse, http, delay } from 'msw'
import MockDate from 'mockdate'

import InboxScreen from './InboxScreen'
import * as mocks from '../mocks/data'

import {
  userEvent,
  waitForElementToBeRemoved,
  expect,
} from '@storybook/test'
import { getFormattedDate } from '#utils/date.mock.ts'

const meta = {
  component: InboxScreen,
  title: 'InboxScreen',
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
  play: async ({ canvas, step }) => {
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'))

    await step('Ensure tasks are rendered in the initial order', async () => {
      const listItems = canvas.getAllByRole("listitem");
      await expect(listItems[0]).toHaveTextContent("Learn more about Storybook");
      await expect(listItems[1]).toHaveTextContent("Go to the gym");
    })

    await step('Pin "Go to the gym" task', async () => {
      // Pin Learn more about Storybook and verify it moves to the top
      const pinButton = canvas.getByLabelText("Pin Go to the gym");
      await userEvent.click(pinButton);
    });

    await step('Ensure tasks order is changed', async () => {
      const updatedListItems = canvas.getAllByRole("listitem");
      await expect(updatedListItems[0]).toHaveTextContent("Go to the gym");
      await expect(updatedListItems[1]).toHaveTextContent("Learn more about Storybook");
    });
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
