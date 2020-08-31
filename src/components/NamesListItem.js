import React from 'react';
import { deleteNameAC } from '../redux/form/actionsForm';
import { connect } from 'react-redux';

const NamesListItem = ({ id, name, remove }) => {
  console.log('RENDER ITEM');

  const removeItem = () => remove(id);

  return (
    <li>
      <p>{name}</p>

      <button type="button" onClick={removeItem}>
        Delete
      </button>
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  // console.log(state)
  return {
    remove: id => dispatch(deleteNameAC(id)),
  };
};

export default connect(null, mapDispatchToProps)(NamesListItem);
