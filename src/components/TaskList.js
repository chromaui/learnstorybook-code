import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

function TaskList({ tasks, onSnoozeTask, onPinTask, onArchiveTask }) {
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

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onSnoozeTask: PropTypes.func.isRequired,
  onPinTask: PropTypes.func.isRequired,
  onArchiveTask: PropTypes.func.isRequired,
};

export default TaskList;
