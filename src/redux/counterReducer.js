/* TYPES */
const DEC = 'counter/DEC';
const INC = 'counter/INC';

/* ACTIONS */
export const dec = n => {
  return {
    type: DEC,
    payload: n, // {step: 1}
  };
};

export const inc = n => {
  return {
    type: INC,
    payload: n,
  };
};

/* REDUCER */
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case DEC:
      return state - 1;

    case INC:
      return state + 1;

    default:
      return state;
  }
};

export default counterReducer;
