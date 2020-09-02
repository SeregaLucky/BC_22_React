import React from 'react';
import { connect } from 'react-redux';
import { deleteNameThunk } from '../redux/form/operationsForm';

const NamesListItem = ({ name, remove }) => {
  console.log('RENDER ITEM');

  return (
    <li>
      <p>{name}</p>

      <button type="button" onClick={remove}>
        Delete
      </button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, { id }) => {
  // console.log(props);
  return {
    remove: () => dispatch(deleteNameThunk(id)),
  };
};

export default connect(null, mapDispatchToProps)(NamesListItem);
