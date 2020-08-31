import React from 'react';
import { connect } from 'react-redux';
import NamesListItem from './NamesListItem';

const NamesList = ({ list }) => {
  console.log(list);

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
    list: state.listNames,
  };
};

export default connect(mapStateToProps)(NamesList);
