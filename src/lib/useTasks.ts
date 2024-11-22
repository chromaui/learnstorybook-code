import { useState, useEffect } from 'react'
import { Task } from '../types'

export type UseTasksPayload = {
  tasks: Task[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error?: string | null
  updateTaskState: (id: string, newTaskState: Task['state']) => void
}

export function useTasks(): UseTasksPayload {
  const [tasks, setTasks] = useState<Task[]>([])
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'succeeded' | 'failed'
  >('idle')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTasks = async () => {
      setStatus('loading')
      setError(null)

      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos?userId=1'
        )
        const data: Array<{ id: number; title: string; completed: boolean }> =
          await response.json()

        const formattedTasks: Task[] = data.map((task) => ({
          id: `${task.id}`,
          title: task.title,
          state: task.completed ? 'TASK_ARCHIVED' : 'TASK_INBOX',
        }))

        setTasks(formattedTasks)
        setStatus('succeeded')
      } catch (e) {
        setError('Something went wrong')
        setStatus('failed')
      }
    }

    fetchTasks()
  }, [])

  const updateTaskState = (id: string, newTaskState: Task['state']) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, state: newTaskState } : task
      )
    )
  }

  return { tasks, status, error, updateTaskState }
}
