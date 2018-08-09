<template>
  <div id="app">
    <inbox-screen/>
  </div>
</template>

<script>
import store from "./store";
import InboxScreen from "@/containers/InboxScreen.vue";
import "../src/index.css";

export default {
  name: "app",
  store,
  components: {
    InboxScreen
  }
};
</script>
