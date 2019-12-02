import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'react-chromatic/storybook-addon';

import '../src/index.css';

configure(requireContext('../src/components', true, /\.stories\.js$/), module);
