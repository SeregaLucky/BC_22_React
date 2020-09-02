import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNameThunk } from '../redux/form/operationsForm';

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
    addName: name => dispatch(addNameThunk(name)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
