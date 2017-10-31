// lib
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// store
import configureStore from '../utils/configureStore';

// reducer
import { mainReducer } from '../reducers/main';

// saga
import rootSaga from '../sagas';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore()(mainReducer);
    this.store.runSaga(rootSaga);
  }

  render() {
    return (
      <Provider store={this.store}>
        {this.props.children}
      </Provider>
    );
  }
}