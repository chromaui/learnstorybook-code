import type { Meta, StoryObj } from '@storybook/angular';

import { waitFor, waitForElementToBeRemoved } from 'storybook/test';

import { http, HttpResponse } from 'msw';

import { InboxScreenComponent } from './inbox-screen.component';

import * as PureTaskListStories from './pure-task-list.stories';

const meta: Meta<InboxScreenComponent> = {
  component: InboxScreenComponent,
  title: 'InboxScreen',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InboxScreenComponent>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
          return HttpResponse.json(PureTaskListStories.TaskListData);
        }),
      ],
    },
  },
  play: async ({ canvas, userEvent }: any) => {
    await waitForElementToBeRemoved(await canvas.findByTestId('empty'));
    await waitFor(async () => {
      await userEvent.click(canvas.getByLabelText('pinTask-1'));
      await userEvent.click(canvas.getByLabelText('pinTask-3'));
    });
  },
};

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
};
