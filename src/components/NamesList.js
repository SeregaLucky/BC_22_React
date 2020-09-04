import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NamesListItem from './NamesListItem';
import { getNamesThunk } from '../redux/form/operationsForm';
import { getListNames } from '../redux/form/selectorsForm';

const NamesList = ({ list, getAllNames }) => {
  console.log(list);

  useEffect(() => {
    getAllNames();
  }, []);

  return (
    <ul>
      {list.map(({ id, name }) => (
        <NamesListItem key={id} id={id} name={name} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  // console.log(state)
  return {
    list: getListNames(state),
  };
};

const mapDispatchToProps = dispatch => {
  // console.log(state)
  return {
    getAllNames: () => dispatch(getNamesThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NamesList);
