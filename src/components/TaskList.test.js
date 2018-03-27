import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';

it('renders when empty', () => {
  const div = document.createElement('div');
  const events = { onSnoozeTask: jest.fn(), onPinTask: jest.fn(), onArchiveTask: jest.fn() };
  ReactDOM.render(<TaskList tasks={[]} {...events} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
