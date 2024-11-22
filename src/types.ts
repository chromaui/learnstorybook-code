export type Task = {
  id: string
  title: string
  state: 'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED'
}
