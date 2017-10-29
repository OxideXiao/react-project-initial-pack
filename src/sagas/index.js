// lib
import { fork } from 'redux-saga/effects';

// watcher
import testComponentWatcher from './testComponent';

function* rootSaga() {
  yield [
    fork(testComponentWatcher),
  ]
}

export default rootSaga;