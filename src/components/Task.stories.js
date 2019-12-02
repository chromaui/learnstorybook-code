import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Task from './Task';

export default {
  Component: Task,
  title: 'Task',
  decorators: [withKnobs],
  excludeStories: /^[a-z].*/,
};

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const Default = () => {
  return <Task task={object('task', { ...task })} {...actions} />;
};

export const Pinned = () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />;

export const Archived = () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />;

export const LongTitle = () => <Task task={{ ...task, title: longTitleString }} {...actions} />;
