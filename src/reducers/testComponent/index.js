// lib
import { combineReducers } from 'redux';

// reducer
import testReducer from './testReducer';

const testComponent = combineReducers({
  testReducer,
});

export default testComponent;