import React from 'react';

import TaskList, { PureTaskList } from './TaskList';
import { task, actions } from './Task.stories';

export default {
  Component: TaskList,
  title: 'TaskList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /^[a-z].*/,
};

export const defaultTasks = [
  { ...task, id: '1', title: 'Task 1' },
  { ...task, id: '2', title: 'Task 2' },
  { ...task, id: '3', title: 'Task 3' },
  { ...task, id: '4', title: 'Task 4' },
  { ...task, id: '5', title: 'Task 5' },
  { ...task, id: '6', title: 'Task 6' },
];

export const withPinnedTasks = [
  ...defaultTasks.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];

export const Default = () => <PureTaskList tasks={defaultTasks} {...actions} />;

export const WithPinned = () => <PureTaskList tasks={withPinnedTasks} {...actions} />;

export const Loading = () => <PureTaskList loading tasks={[]} {...actions} />;

export const Empty = () => <PureTaskList tasks={[]} {...actions} />;
