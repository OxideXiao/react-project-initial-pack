// lib
import { fork } from 'redux-saga/effects';

// watcher
import testWatcher from './testSaga';

/**
 * ************** watcher ****************
 */
function* testComponentWatcher() {
  yield [
    fork(testWatcher),
  ];
}

export default testComponentWatcher;