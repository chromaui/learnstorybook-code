import Vue from "vue";
import Vuex from "vuex";
import PureInboxScreen from "./PureInboxScreen.vue";
import { action } from "@storybook/addon-actions";
import * as TaskListStories from "./PureTaskList.stories";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: TaskListStories.Default.args.tasks
  },
  actions: {
    pinTask(context, id) {
      action("pin-task")(id);
    },
    archiveTask(context, id) {
      action("archive-task")(id);
    }
  }
});

export default {
  title: "PureInboxScreen",
  component: PureInboxScreen,
  excludeStories: /.*store$/
};

const Template = (args, { argTypes }) => ({
  components: { PureInboxScreen },
  props: Object.keys(argTypes),
  template: '<PureInboxScreen v-bind="$props" />',
  store
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = { error: true };
