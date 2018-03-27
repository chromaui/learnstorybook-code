import React from 'react';
import TaskList from './TaskList';

import { connect } from 'react-redux';
import { archiveTask, pinTask, snoozeTask } from '../lib/redux';

function InboxScreen({ tasks, onSnoozeTask, onArchiveTask, onPinTask }) {
  const events = { onSnoozeTask, onPinTask, onArchiveTask };

  return <TaskList tasks={tasks} {...events} />;
}

export default connect(
  ({ tasks }) => ({
    tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
  }),
  dispatch => ({
    onArchiveTask: id => dispatch(archiveTask(id)),
    onPinTask: id => dispatch(pinTask(id)),
    onSnoozeTask: id => dispatch(snoozeTask(id)),
  })
)(InboxScreen);
