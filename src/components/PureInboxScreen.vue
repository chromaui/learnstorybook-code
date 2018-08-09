<template>
  <div>
    <div class="page lists-show" v-if="error">
      <div class="wrapper-message">
        <span class="icon-face-sad" />
        <div class="title-message">Oh no!</div>
        <div class="subtitle-message">Something went wrong</div>
      </div>
    </div>
    <div class="page lists-show" v-else>
      <nav>
        <h1 class="title-page">
          <span class="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <task-list/>
    </div>
  </div>
</template>

<script>
import TaskList from "@/containers/TaskList.vue";

export default {
  name: "pure-inbox-screen",
  props: {
    error: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TaskList
  }
};
</script>
