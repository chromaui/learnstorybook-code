<template>
  <div class="list-item">
    <label for="title" :aria-label="task.title">
      <input type="text" readonly :value="task.title" id="title" name="title" />
    </label>
  </div>
</template>

<script lang="ts" setup>
type TaskData = {
  id: string
  title: string
  state: 'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED'
}

type TaskProps = {
  task: TaskData
  onArchiveTask: (id: string) => void
  onPinTask: (id: string) => void
}
const props = withDefaults(defineProps<TaskProps>(), {
  task: { id: '', title: '', state: 'TASK_INBOX' },
})
</script>
