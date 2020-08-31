import { ADD_NAME, DELETE_NAME } from './typesForm';
import { combineReducers } from 'redux';

const listNames = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_NAME:
      return [...state, payload];

    case DELETE_NAME:
      return state.filter(item => item.id !== payload.id);

    default:
      return state;
  }
};

export default combineReducers({
  listNames,
});
