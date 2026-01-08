import type { TaskData } from './types'

/* A simple Pinia store/actions implementation.
 * A true app would be more complex and separated into different files.
 */
import { defineStore } from 'pinia'

interface TaskBoxState {
  tasks: TaskData[]
  status: 'idle' | 'loading' | 'failed' | 'succeeded'
  error: string | null
}

/*
 * The store is created here.
 * You can read more about Pinia defineStore in the docs:
 * https://pinia.vuejs.org/core-concepts/
 */
export const useTaskStore = defineStore('taskbox', {
  state: (): TaskBoxState => ({
    tasks: [],
    status: 'idle',
    error: null,
  }),
  actions: {
    archiveTask(id: string) {
      const task = this.tasks.find((task) => task.id === id)
      if (task) {
        task.state = 'TASK_ARCHIVED'
      }
    },
    pinTask(id: string) {
      const task = this.tasks.find((task) => task.id === id)
      if (task) {
        task.state = 'TASK_PINNED'
      }
    },
    async fetchTasks() {
      this.status = 'loading'
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
        const data = await response.json()
        const result = data
          .map((task: { id: number; title: string; completed: boolean }) => ({
            id: `${task.id}`,
            title: task.title,
            state: task.completed ? 'TASK_ARCHIVED' : 'TASK_INBOX',
          }))
          .filter((task: TaskData) => task.state === 'TASK_INBOX' || task.state === 'TASK_PINNED')
        this.tasks = result
        this.status = 'succeeded'
      } catch (error) {
        if (error && typeof error === 'object' && 'message' in error) {
          this.error = (error as Error).message
        } else {
          this.error = String(error)
        }
        this.status = 'failed'
      }
    },
  },
  getters: {
    getFilteredTasks: (state) => {
      const filteredTasks = state.tasks.filter(
        (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
      )
      return filteredTasks
    },
  },
})
