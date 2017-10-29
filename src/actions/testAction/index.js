// lib
import { createAction, createActionTypes } from '../../utils/dataFlow';

import {
  TEST_ACTION,
} from '../../constants/actionTypes';

export const TEST_ACTION_ACTION_TYPE_LIST = createActionTypes(TEST_ACTION);

export const testActionRequest = args => createAction(TEST_ACTION_ACTION_TYPE_LIST.PENDING, {
  testParam: args.testParam,
});
export const testActionSolve = response => createAction(TEST_ACTION_ACTION_TYPE_LIST.SUCCESS, {
  response
});
export const testActionReject = error => createAction(TEST_ACTION_ACTION_TYPE_LIST.FAILURE, {
  error
});