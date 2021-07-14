import React from "react";

import { PureInboxScreen } from "./InboxScreen";

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
