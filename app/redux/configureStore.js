import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware';
import { apiMiddleware as api } from 'redux-api-middleware';

export default function configureStore (initialState, rootReducer) {
  const middleware = applyMiddleware(thunk, promiseMiddleware(), api)
  let createStoreWithMiddleware

  if (process.env.NODE_ENV === 'development') {
    createStoreWithMiddleware = compose(
      middleware,
      require('./utils/DevTools').default.instrument()
    )
  }
  else {
    createStoreWithMiddleware = compose(
      middleware
    )
  }

  const store = createStoreWithMiddleware(createStore)(
    rootReducer, initialState
  );

  if (module.hot) {
    module.hot.accept('./root', () => {
      // const nextRootReducer = require('../reducers');
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
