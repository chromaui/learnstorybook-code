<template>
  <div class="list-items">
    <template v-if="loading">
      loading
    </template>
    <template v-else-if="isEmpty">
      empty
    </template>
    <template v-else>
      <Task
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        v-on="$listeners"
      />
    </template>
  </div>
</template>

<script>
import Task from "./Task";
export default {
  name: "TaskList",
  components: { Task },
  props: {
    tasks: { type: Array, required: true, default: () => [] },
    loading: { type: Boolean, default: false }
  },
  computed: {
    isEmpty() {
      return this.tasks.length === 0;
    }
  }
};
</script>
