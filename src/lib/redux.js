// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from 'redux';

export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
  SNOOZE_TASK: 'SNOOZE_TASK',
};

export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = id => ({ type: actions.PIN_TASK, id });
export const snoozeTask = id => ({ type: actions.SNOOZE_TASK, id });

function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map(
        task => (task.id === action.id ? { ...task, state: taskState } : task)
      ),
    };
  };
}

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer('TASK_ARCHIVED')(state, action);
    case actions.PIN_TASK:
      return taskStateReducer('TASK_PINNED')(state, action);
    case actions.SNOOZE_TASK:
      return taskStateReducer('TASK_SNOOZED')(state, action);
    default:
      return state;
  }
};

const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

export default createStore(reducer, { tasks: defaultTasks });
