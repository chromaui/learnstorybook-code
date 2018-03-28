import React from 'react';
import { storiesOf } from '@storybook/react';

import TaskList from './TaskList';
import { createTask, actions } from './Task.stories';

export const defaultTasks = [
  createTask({ state: 'TASK_INBOX' }),
  createTask({ state: 'TASK_INBOX' }),
  createTask({ state: 'TASK_INBOX' }),
  createTask({ state: 'TASK_INBOX' }),
];

export const withPinnedTasks = [
  createTask({ state: 'TASK_PINNED' }),
  createTask({ state: 'TASK_INBOX' }),
  createTask({ state: 'TASK_INBOX' }),
  createTask({ title: 'Last task (pinned)', state: 'TASK_PINNED' }),
];

storiesOf('TaskList', module)
  .addDecorator(story => <div style={{ background: 'white' }}>{story()}</div>)
  .add('default', () => <TaskList tasks={defaultTasks} {...actions} />)
  .add('w/ pinned tasks', () => <TaskList tasks={withPinnedTasks} {...actions} />)
  .add('loading', () => <TaskList loading {...actions} />)
  .add('empty', () => <TaskList tasks={[]} {...actions} />);
