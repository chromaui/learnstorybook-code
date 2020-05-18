import React from 'react';
import { AddonPanel } from '@storybook/components';
import { addons, types } from '@storybook/addons';

addons.register('my/design-addon', () => {
  addons.add('design-addon/panel', {
    title: 'assets',
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        implement
      </AddonPanel>
    ),
  });
});
