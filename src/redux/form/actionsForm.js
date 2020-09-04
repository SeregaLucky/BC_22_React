import {
  ADD_NAME_START,
  ADD_NAME_SUCCESS,
  ADD_NAME_ERROR,
  DELETE_NAME_START,
  DELETE_NAME_SUCCESS,
  DELETE_NAME_ERROR,
  GET_NAMES_START,
  GET_NAMES_SUCCESS,
  GET_NAMES_ERROR,
} from './typesForm';

/* GET ALL */
export const getNamesStartAC = () => ({
  type: GET_NAMES_START,
});
export const getNamesSuccessAC = items => ({
  type: GET_NAMES_SUCCESS,
  payload: { items: items },
});
export const getNamesErrorAC = error => ({
  type: GET_NAMES_ERROR,
  payload: { error: error },
});

/* ADD */
export const addNameStartAC = () => ({
  type: ADD_NAME_START,
});
export const addNameSuccessAC = item => ({
  type: ADD_NAME_SUCCESS,
  payload: { item: item },
});
export const addNameErrorAC = error => ({
  type: ADD_NAME_ERROR,
  payload: { error: error },
});

/* DELETE */
export const deleteNameStartAC = () => ({
  type: DELETE_NAME_START,
});
export const deleteNameSuccessAC = id => ({
  type: DELETE_NAME_SUCCESS,
  payload: { id },
});
export const deleteNameErrorAC = error => ({
  type: DELETE_NAME_ERROR,
  payload: { error: error },
});
