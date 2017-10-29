// lib
import Immutable from 'immutable';

// action
import {
  TEST_ACTION_ACTION_TYPE_LIST,
} from '../../actions/testAction';

const initialState = Immutable.fromJS({
  testData: {
    isFetching: false,
    data: {},
    response: {},
    error: '',
    created: Date.now(),
  }
});

const testReducer = (state = initialState, action) => {
  const { type, response, error, ...args } = action;
  switch (type) {
    case TEST_ACTION_ACTION_TYPE_LIST.PENDING: {
      const fetchingState = Immutable.fromJS({
        isFetching: true,
        data: {
          ...args,
        },
        error: '',
      });
      return state.deleteIn(['testData', 'data']).mergeDeep({ testData: fetchingState });
    }
    case TEST_ACTION_ACTION_TYPE_LIST.SUCCESS: {
      const successState = Immutable.fromJS({
        isFetching: false,
        response: {
          ...response,
          testResponse: 'this is test'
        },
      });
      return state.deleteIn(['testData', 'response']).mergeDeep({ testData: successState });
    }
    case TEST_ACTION_ACTION_TYPE_LIST.FAILURE: {
      const failureState = Immutable.fromJS({
        isFetching: false,
        error,
      });
      return state.deleteIn(['testData', 'error']).mergeDeep({ testData: failureState });
    }
    default:
      return state;
  }
};

export default testReducer;