<template>
  <div>
    <div v-if="isError" class="page lists-show">
      <div class="wrapper-message">
        <span class="icon-face-sad" />
        <p class="title-message">Oh no!</p>
        <p class="subtitle-message">Something went wrong</p>
      </div>
    </div>
    <div v-else class="page lists-show">
      <nav>
        <h1 class="title-page">Taskbox</h1>
      </nav>
      <TaskList />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

import { useTaskStore } from '../store'

import TaskList from './TaskList.vue'

//👇 Creates a store instance
const store = useTaskStore()
// 👇 Fetches tasks for the store
store.fetchTasks()

//👇 Retrieves the error from the store's state
const isError = computed(() => store.status === 'failed')
</script>
