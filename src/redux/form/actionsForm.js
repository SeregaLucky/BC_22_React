import { ADD_NAME, DELETE_NAME } from './typesForm';
import { v4 as uuidv4 } from 'uuid';

export const addNameAC = name => {
  return {
    type: ADD_NAME,
    payload: {
      name,
      id: uuidv4(),
    },
  };
};

export const deleteNameAC = id => {
  return {
    type: DELETE_NAME,
    payload: {
      id,
    },
  };
};
