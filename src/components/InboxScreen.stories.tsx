import type { Meta, StoryObj } from "@storybook/react";

import InboxScreen from "./InboxScreen";

import store from "../lib/store";

import { http, HttpResponse } from "msw";

import { MockedState } from "./TaskList.stories";

import { Provider } from "react-redux";

const meta = {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
} satisfies Meta<typeof InboxScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://jsonplaceholder.typicode.com/todos?userId=1", () => {
          return HttpResponse.json(MockedState.tasks);
        }),
      ],
    },
  },
};

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://jsonplaceholder.typicode.com/todos?userId=1", () => {
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
};
