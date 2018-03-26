import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

export function createTask(attrs) {
  return {
    id: Math.round(Math.random() * 1000000).toString(),
    title: 'Test Task',
    subtitle: 'on Test Board',
    url: 'http://test.url',
    state: 'TASK_INBOX',
    updatedAt: Date.now(),
    ...attrs,
  };
}

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
  onUpdateTaskTitle: action('onUpdateTaskTitle'),
};

storiesOf('Task', module)
  .addDecorator(story => (
    <div className="list-items" style={{ background: 'white' }}>
      {story()}
    </div>
  ))
  .add('inbox task', () => <Task task={createTask({ state: 'TASK_INBOX' })} {...actions} />)
  .add('snoozed task', () => <Task task={createTask({ state: 'TASK_SNOOZED' })} {...actions} />)
  .add('pinned task', () => <Task task={createTask({ state: 'TASK_PINNED' })} {...actions} />)
  .add('archived task', () => <Task task={createTask({ state: 'TASK_ARCHIVED' })} {...actions} />);
