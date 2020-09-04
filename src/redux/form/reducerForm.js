import {
  ADD_NAME_SUCCESS,
  DELETE_NAME_SUCCESS,
  GET_NAMES_SUCCESS,
  GET_NAMES_ERROR,
  GET_NAMES_START,
  ADD_NAME_ERROR,
  DELETE_NAME_ERROR,
  ADD_NAME_START,
  DELETE_NAME_START,
} from './typesForm';
import { combineReducers } from 'redux';

const listNames = (state = [], { type, payload }) => {
  switch (type) {
    case GET_NAMES_SUCCESS:
      return payload.items;

    case ADD_NAME_SUCCESS:
      return [...state, payload.item];

    case DELETE_NAME_SUCCESS:
      return state.filter(item => item.id !== payload.id);

    default:
      return state;
  }
};

const loading = (state = false, { type, payload }) => {
  switch (type) {
    case GET_NAMES_START:
    case ADD_NAME_START:
    case DELETE_NAME_START:
      return true;

    case GET_NAMES_SUCCESS:
    case GET_NAMES_ERROR:
    case ADD_NAME_SUCCESS:
    case ADD_NAME_ERROR:
    case DELETE_NAME_SUCCESS:
    case DELETE_NAME_ERROR:
      return false;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case GET_NAMES_ERROR:
    case ADD_NAME_ERROR:
    case DELETE_NAME_ERROR:
      return payload.error;

    case GET_NAMES_START:
    case ADD_NAME_START:
    case DELETE_NAME_START:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  listNames,
  loading,
  error,
});
