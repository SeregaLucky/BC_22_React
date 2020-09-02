import {
  ADD_NAME_SUCCESS,
  DELETE_NAME_SUCCESS,
  GET_NAMES_SUCCESS,
} from './typesForm';
import { combineReducers } from 'redux';

const listNames = (state = [], { type, payload }) => {
  switch (type) {
    case GET_NAMES_SUCCESS:
      return payload.items;

    case ADD_NAME_SUCCESS:
      return [...state, payload];

    case DELETE_NAME_SUCCESS:
      return state.filter(item => item.id !== payload.id);

    default:
      return state;
  }
};

export default combineReducers({
  listNames,
});
