import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Home from './Home.jsx';

import TestComponent from './TestComponent';

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="home" component={TestComponent}/>
        </Route>
      </Router>
    );
  };
}