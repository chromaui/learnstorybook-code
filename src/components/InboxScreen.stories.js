import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import InboxScreen, { PureInboxScreen } from './InboxScreen';
import { defaultTasks } from './TaskList.stories';

export default {
  Component: InboxScreen,
  title: 'InboxScreen',
  decorators: [story => <Provider store={store}>{story()}</Provider>],
};

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: defaultTasks,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />;
