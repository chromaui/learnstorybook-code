import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent } from '@storybook/test';

import { UseTasksPayload } from '#lib/useTasks.ts';
import TaskList from "./TaskList";
import * as mocks from "../mocks/data";

const defaultTaskboxState: UseTasksPayload = {
  tasks: mocks.tasks,
  status: "idle",
  error: null,
  updateTaskState: fn()
};

const meta = {
  component: TaskList,
  title: "TaskList",
  tags: ["autodocs"],
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
} satisfies Meta<typeof TaskList>
export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...defaultTaskboxState,
  }
};

export const WithPinnedTasks: Story = {
  args: {
    ...Default.args,
    tasks: [
      ...defaultTaskboxState.tasks.slice(0, 5),
      { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
    ],
  }
};

export const Loading: Story = {
  args: {
    ...Default.args,
    status: "loading",
  }
};

export const Empty: Story = {
  args: {
    ...Default.args,
    tasks: [],
  }
};

export const TestPinBehavior: Story = {
  ...Default,
  play: async({ canvas, args }) => {
    await userEvent.click(canvas.getByLabelText('Pin Learn more about Storybook'))
    await expect(args.updateTaskState).toHaveBeenCalledWith(mocks.task.id, 'TASK_PINNED')

    await userEvent.click(canvas.getByLabelText('Archive Learn more about Storybook'))
    await expect(args.updateTaskState).toHaveBeenCalledWith(mocks.task.id, 'TASK_ARCHIVED')
  },
  // hide the story from autodocs page as it's intended for test purposes only
  tags: ['!autodocs']
}; 
