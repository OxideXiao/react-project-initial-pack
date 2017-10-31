import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Home from './Home.jsx';

import TestComponent from './TestComponent';

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="home" component={Home}>
          <IndexRoute onEnter={() => browserHistory.push('home/test')}/>
          <Route path="test" component={TestComponent}/>
        </Route>
      </Router>
    );
  };
}