import React from 'react';
import TaskList from './TaskList';

function InboxScreen({ tasks, onSnoozeTask, onArchiveTask, onPinTask }) {
  const events = { onSnoozeTask, onPinTask, onArchiveTask };

  return (
    <div style={{ background: 'white' }}>
      <TaskList tasks={tasks} {...events} />
    </div>
  );
}

export default InboxScreen;
