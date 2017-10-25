import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Home from './containers/home.jsx';

render(
  <Home />,
  document.getElementById('react-app')
);