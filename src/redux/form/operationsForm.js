import { getAllNamesAPI, addNameAPI } from '../../api/api';
import {
  getNamesSuccessAC,
  getNamesStartAC,
  getNamesErrorAC,
  addNameStartAC,
  addNameSuccessAC,
  addNameErrorAC,
} from './actionsForm';

export const getNamesThunk = () => async dispatch => {
  dispatch(getNamesStartAC());

  try {
    const { data } = await getAllNamesAPI();
    dispatch(getNamesSuccessAC(data));
  } catch (error) {
    dispatch(getNamesErrorAC(error));
  }
};

export const addNameThunk = name => async dispatch => {
  dispatch(addNameStartAC());

  try {
    const { data } = await addNameAPI(name);
    dispatch(addNameSuccessAC(data));
  } catch (error) {
    dispatch(addNameErrorAC(error));
  }
};

export const deleteNameThunk = id => dispatch => {
  //
};
