import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/vue";
import Vue from "vue";
import Vuex from "vuex";

import { defaultTaskList } from "./PureTaskList.stories";
import PureInboxScreen from "./PureInboxScreen.vue";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    tasks: defaultTaskList
  },
  actions: {
    pinTask(context, id) {
      action("pinTask")(id);
    },
    archiveTask(context, id) {
      action("archiveTask")(id);
    }
  }
});

storiesOf("PureInboxScreen", module)
  .add("default", () => {
    return {
      components: { PureInboxScreen },
      template: `<pure-inbox-screen/>`,
      store
    };
  })
  .add("error", () => {
    return {
      components: { PureInboxScreen },
      template: `<pure-inbox-screen :error="true"/>`
    };
  });
