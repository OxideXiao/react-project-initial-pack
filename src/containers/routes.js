import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Home from './Home.jsx';

import TestComponent from './TestComponent/index.jsx';

export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}>
          <Route path="home" component={TestComponent}/>
        </Route>
      </Router>
    );
  };
}