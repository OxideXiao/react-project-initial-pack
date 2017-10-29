import { takeEvery, put, call } from 'redux-saga/effects';

// action type
import {
  TEST_ACTION_ACTION_TYPE_LIST,
  testActionSolve,
  testActionReject,
} from '../../actions/testAction';

// util

/**
 * ***************** workers **************
 */
function* getTestData({ type, ...payload }) {
  try {
    const response = yield call((url, payload) => {
      console.log('fetching', url, payload);
    }, 'www.test.com', {...payload});
    yield put(testActionSolve(response));
  } catch (error) {
    yield put(testActionReject(error));
  }
}

/**
 * **************** watcher ***************
 */
function* testWatcher() {
  yield [
    takeEvery(TEST_ACTION_ACTION_TYPE_LIST.PENDING, getTestData),
  ];
}

export default testWatcher;