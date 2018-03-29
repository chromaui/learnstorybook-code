import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureTaskList } from './TaskList';
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
  .add('default', () => <PureTaskList tasks={defaultTasks} {...actions} />)
  .add('w/ pinned tasks', () => <PureTaskList tasks={withPinnedTasks} {...actions} />)
  .add('loading', () => <PureTaskList loading {...actions} />)
  .add('empty', () => <PureTaskList tasks={[]} {...actions} />);
