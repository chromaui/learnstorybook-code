<template>
  <div>
    <div class="list-items" v-if="loading"> loading </div>
    <div class="list-items" v-if="noTasks && !this.loading">empty </div>
    <div class="list-items" v-if="showTasks">
      <task v-for="(task, index) in tasks" :key="index" :task="task" 
        @archiveTask="$emit('archiveTask', $event)" @pinTask="$emit('pinTask', $event)"/>
    </div>
  </div>
</template>

<script>
import Task from "@/components/Task";
export default {
  name: "task-list",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    tasks: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Task
  },
  computed: {
    noTasks() {
      return this.tasks.length === 0;
    },
    showTasks() {
      return !this.loading && !this.noTasks;
    }
  }
};
</script>
