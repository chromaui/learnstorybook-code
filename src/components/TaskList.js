import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';
import { connect } from 'react-redux';
import { archiveTask, pinTask, snoozeTask } from '../lib/redux';

export function PureTaskList({ tasks, onSnoozeTask, onPinTask, onArchiveTask }) {
  const events = {
    onSnoozeTask,
    onPinTask,
    onArchiveTask,
  };

  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map(task => <Task key={task.id} task={task} {...events} />)}
    </div>
  );
}

PureTaskList.propTypes = {
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onSnoozeTask: PropTypes.func.isRequired,
  onPinTask: PropTypes.func.isRequired,
  onArchiveTask: PropTypes.func.isRequired,
};

export default connect(
  ({ tasks }) => ({
    tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
  }),
  dispatch => ({
    onArchiveTask: id => dispatch(archiveTask(id)),
    onPinTask: id => dispatch(pinTask(id)),
    onSnoozeTask: id => dispatch(snoozeTask(id)),
  })
)(PureTaskList);
