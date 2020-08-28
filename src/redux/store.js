import { createStore } from 'redux';

import counterReducer from './counterReducer';

// const reducer = (state = null, action) => state;

export const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
