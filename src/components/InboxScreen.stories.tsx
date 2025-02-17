import type { Meta, StoryObj } from "@storybook/react";

import InboxScreen from "./InboxScreen";

import store from "../lib/store";

import { Provider } from "react-redux";

const meta = {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
} satisfies Meta<typeof InboxScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {};
