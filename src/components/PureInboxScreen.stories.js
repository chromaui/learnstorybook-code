import React from "react";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

import { PureInboxScreen } from "./InboxScreen";

import * as TaskListStories from "./TaskList.stories";

// A super-simple mock of a redux store
const Mockstore = configureStore({
  reducer: {
    tasks: createSlice({
      name: "tasks",
      initialState: TaskListStories.Default.args.tasks,
      reducers: {
        updateTaskState: (state, action) => {
          const { id, newTaskState } = action.payload;
          const task = state.findIndex((task) => task.id === id);
          if (task >= 0) {
            state[task].state = newTaskState;
          }
        },
      },
    }).reducer,
  },
});

export default {
  component: PureInboxScreen,
  decorators: [(story) => <Provider store={Mockstore}>{story()}</Provider>],
  title: "PureInboxScreen",
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
