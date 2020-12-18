<template>
  <div id="app">
    <task-list />
  </div>
</template>

<script>
import store from "./store";
import TaskList from "./components/TaskList.vue";

export default {
  name: "app",
  store,
  components: {
    TaskList
  }
};
</script>
<style>
@import "./index.css";
</style>
