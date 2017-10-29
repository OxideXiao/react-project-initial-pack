import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from './containers/routes';

render(
  <App />,
  document.getElementById('react-app')
);