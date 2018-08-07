<template>
  <div>
    <div class="loading-item" v-if="loading" v-for="(n, index) in 5" :key="index">
      <span class="glow-checkbox" />
      <span class="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
    <div class="list-items" v-if="noTasks && !this.loading">
      <div class="wrapper-message">
        <span class="icon-check" />
        <div class="title-message">You have no tasks</div>
        <div class="subtitle-message">Sit back and relax</div>
      </div>
    </div>
    <div class="list-items" v-if="showTasks">
      <task v-for="(task, index) in tasksInOrder" :key="index" :task="task" 
        @archiveTask="$emit('archiveTask', $event)" @pinTask="$emit('pinTask', $event)"/>
    </div>
  </div>
</template>

<script>
import Task from "@/components/Task";
export default {
  name: "pure-task-list",
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
    },
    tasksInOrder() {
      return [
        ...this.tasks.filter(t => t.state === "TASK_PINNED"),
        ...this.tasks.filter(t => t.state !== "TASK_PINNED")
      ];
    }
  }
};
</script>
