import { createSelector } from '@reduxjs/toolkit'

import { RootState } from './store'

export const selectTaskbox = (state: RootState) => state.taskbox

export const selectTasks = createSelector(
  [selectTaskbox],
  (state) => state.tasks
)

export const selectFilteredTasks = createSelector([selectTasks], (state) => {
  const tasksInOrder = [
    ...state.filter((t) => t.state === 'TASK_PINNED'),
    ...state.filter((t) => t.state !== 'TASK_PINNED'),
  ]
  const filteredTasks = tasksInOrder.filter(
    (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
  )
  return filteredTasks
})
