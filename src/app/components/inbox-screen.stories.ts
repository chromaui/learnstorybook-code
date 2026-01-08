import type { Meta, StoryObj } from '@storybook/angular';

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
