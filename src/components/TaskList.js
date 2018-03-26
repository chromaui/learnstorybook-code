import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

function TaskList({ tasks, onSnoozeTask, onPinTask, onArchiveTask }) {
  const events = {
    onSnoozeTask,
    onPinTask,
    onArchiveTask,
  };

  return (
    <div className="list-items">
      {tasks.map(task => <Task key={task.id} task={task} {...events} />)}
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
