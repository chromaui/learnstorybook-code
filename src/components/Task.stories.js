import Task from "./Task";
import { action } from "@storybook/addon-actions";

export default {
  title: "Task",
  component: Task,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onPinTask: action("pin-task"),
  onArchiveTask: action("archive-task"),
};

const Template = (args, { argTypes }) => ({
  components: { Task },
  props: Object.keys(argTypes),
  methods: actionsData,
  template:
    '<Task v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />',
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
