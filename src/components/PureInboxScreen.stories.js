import PureInboxScreen from "./PureInboxScreen.vue";

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
