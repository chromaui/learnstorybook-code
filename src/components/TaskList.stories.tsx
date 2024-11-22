import type { ReactElement } from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

import TaskList from "./TaskList";
import { State } from '../lib/store';
import { Task } from '../types';
import * as mocks from "../mocks/data";
import { expect, userEvent } from '@storybook/test';

// A super-simple mock of the state of the store
const defaultTaskboxState: State = {
  tasks: mocks.tasks,
  status: "idle",
  error: null,
};

// A super-simple mock of a redux store
const Mockstore = ({ taskboxState, children }: { taskboxState: State, children: ReactElement }) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: createSlice({
          name: "taskbox",
          initialState: taskboxState,
          reducers: {
            updateTaskState: (state, action) => {
              const { id, newTaskState } = action.payload;
              const task = state.tasks.findIndex((task) => task.id === id);
              if (task >= 0) {
                state.tasks[task].state = newTaskState;
              }
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

const meta = {
  component: TaskList,
  title: "TaskList",
  tags: ["autodocs"],
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
} satisfies Meta<typeof TaskList>
export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (story) => <Mockstore taskboxState={defaultTaskboxState}>{story()}</Mockstore>,
  ],
};

export const WithPinnedTasks: Story = {
  decorators: [
    (story) => {
      const pinnedtasks: Task[] = [
        ...defaultTaskboxState.tasks.slice(0, 5),
        { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
      ];

      return (
        <Mockstore
          taskboxState={{
            ...defaultTaskboxState,
            tasks: pinnedtasks,
          }}
        >
          {story()}
        </Mockstore>
      );
    },
  ],
};

export const Loading: Story = {
  decorators: [
    (story) => (
      <Mockstore
        taskboxState={{
          ...defaultTaskboxState,
          status: "loading",
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
};

export const Empty: Story = {
  decorators: [
    (story) => (
      <Mockstore
        taskboxState={{
          ...defaultTaskboxState,
          tasks: [],
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
};

export const TestPinBehavior: Story = {
  ...Default,
  play: async ({ canvas, step }) => {

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
  // hide the story from autodocs page as it's intended for test purposes only
  tags: ['!autodocs']
};