<template>
  <PureTaskList :tasks="tasks" @archive-task="archiveTask" @pin-task="pinTask" />
</template>

<script>
import PureTaskList from './PureTaskList.vue';

import { computed } from 'vue';

import { useTaskStore } from '../store';

export default {
  components: { PureTaskList },
  name: 'TaskList',
  setup() {
    //👇 Creates a store instance
    const store = useTaskStore();

    //👇 Retrieves the tasks from the store's state auxiliary getter function
    const tasks = computed(() => store.getFilteredTasks);

    //👇 Dispatches the actions back to the store
    const archiveTask = (task) => store.archiveTask(task);
    const pinTask = (task) => store.pinTask(task);

    return {
      tasks,
      archiveTask,
      pinTask,
    };
  },
};
</script>
