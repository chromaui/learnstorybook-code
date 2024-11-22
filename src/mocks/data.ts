import { Task } from '../types'

export const task: Task = {
  id: '1',
  title: 'Learn more about Storybook',
  state: 'TASK_INBOX',
}

export const tasks: Task[] = [
  { ...task, id: '1', title: 'Learn more about Storybook' },
  { ...task, id: '2', title: 'Go to the gym' },
  { ...task, id: '3', title: 'Schedule annual health check-up' },
  { ...task, id: '4', title: 'Organize workspace and declutter' },
  { ...task, id: '5', title: 'Clean the house' },
  { ...task, id: '6', title: 'Prepare presentation slides for Monday' },
]
