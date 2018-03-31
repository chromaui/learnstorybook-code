import { configure } from '@storybook/react';
import 'react-chromatic/storybook-addon';

import '../src/index.css';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
