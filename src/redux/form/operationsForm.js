import { getAllNamesAPI } from '../../api/api';
import {
  getNamesSuccessAC,
  getNamesStartAC,
  getNamesErrorAC,
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

export const addNameThunk = id => dispatch => {
  //
};

export const deleteNameThunk = id => dispatch => {
  //
};
