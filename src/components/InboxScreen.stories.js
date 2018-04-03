import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureInboxScreen } from './InboxScreen';

storiesOf('InboxScreen', module)
  .add('default', () => <PureInboxScreen />)
  .add('error', () => <PureInboxScreen error="Something" />);
