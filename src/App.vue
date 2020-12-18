<template>
  <div id="app">
    <InboxScreen />
  </div>
</template>

<script>
import store from "./store";
import InboxScreen from "./components/InboxScreen.vue";
export default {
  name: "app",
  store,
  components: {
    InboxScreen,
  },
};
</script>

<style>
@import "./index.css";
</style>
