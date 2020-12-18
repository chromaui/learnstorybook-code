import PureInboxScreen from "./PureInboxScreen.vue";

export default {
  title: "PureInboxScreen",
  component: PureInboxScreen
};

const Template = (args, { argTypes }) => ({
  components: { PureInboxScreen },
  props: Object.keys(argTypes),
  template: '<PureInboxScreen v-bind="$props" />'
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = { error: true };
