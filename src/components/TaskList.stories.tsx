import type { Meta, StoryObj } from "@storybook/react-vite";

import TaskList from "./TaskList";

import * as TaskStories from "./Task.stories";

const meta = {
  component: TaskList,
  title: "TaskList",
  decorators: [(story) => <div style={{ margin: "3rem" }}>{story()}</div>],
  tags: ["autodocs"],
  args: {
    ...TaskStories.ActionsData,
  },
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.tsx.
    tasks: [
      { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
      { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
      { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
      { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
      { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
      { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
    ],
  },
};

export const WithPinnedTasks: Story = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
    ],
  },
};

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  },
};
