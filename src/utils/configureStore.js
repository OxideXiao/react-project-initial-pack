// lib
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware, { END } from 'redux-saga';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  return (rootReducer) => {
    const finalCreateStore = compose(
      applyMiddleware(
        sagaMiddleware,
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);
    const store = finalCreateStore(rootReducer, initialState);
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
  }
}