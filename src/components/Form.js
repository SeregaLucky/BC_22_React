import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNameAC } from '../redux/form/actionsForm';

const Form = ({ addName }) => {
  // state = {
  //   valueName: ''
  // };

  const [valueName, setValueName] = useState('');

  const changeName = e => setValueName(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    addName(valueName);

    setValueName('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={valueName} onChange={changeName} />
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addName: name => dispatch(addNameAC(name)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
