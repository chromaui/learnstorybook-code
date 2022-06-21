import { app } from "@storybook/vue3";

import { createStore } from "vuex";

import PureInboxScreen from "./PureInboxScreen.vue";

import { action } from "@storybook/addon-actions";
import * as TaskListStories from "./PureTaskList.stories";

const store = createStore({
  state: {
    tasks: TaskListStories.Default.args.tasks,
    status: "idle",
    error: null,
  },
  mutations: {
    ARCHIVE_TASK(state, id) {
      state.tasks.find((task) => task.id === id).state = "TASK_ARCHIVED";
    },
    PIN_TASK(state, id) {
      state.tasks.find((task) => task.id === id).state = "TASK_PINNED";
    },
  },
  actions: {
    pinTask(context, id) {
      action("pin-task")(id);
    },
    archiveTask(context, id) {
      action("archive-task")(id);
    },
  },
});

+app.use(store);

app.use(store);

export default {
  component: PureInboxScreen,
  title: "PureInboxScreen",
};
const Template = (args) => ({
  components: { PureInboxScreen },
  setup() {
    return {
      args,
    };
  },
  template: '<PureInboxScreen v-bind="args" />',
});
export const Default = Template.bind({});
export const Error = Template.bind({});
Error.args = { error: true };
