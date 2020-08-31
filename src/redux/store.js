import { createStore } from 'redux';
import listNames from './form/reducerForm';

export const store = createStore(
  listNames,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
