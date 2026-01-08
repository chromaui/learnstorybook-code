<template>
  <PureTaskList :tasks="tasks" @archive-task="archiveTask" @pin-task="pinTask" />
</template>

<script lang="ts" setup>
import PureTaskList from './PureTaskList.vue'

import { computed } from 'vue'

import { useTaskStore } from '../store'

const taskStore = useTaskStore()
//👇 Creates a store instance
const store = useTaskStore()

//👇 Retrieves the tasks from the store's state auxiliary getter function
const tasks = computed(() => store.getFilteredTasks)

//👇 Dispatches the actions back to the store
const archiveTask = (task: string) => store.archiveTask(task)
const pinTask = (task: string) => store.pinTask(task)
</script>
