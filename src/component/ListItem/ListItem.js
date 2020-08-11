import React from 'react';

const ListItem = props => {
  console.log(props);
  return (
    <li>
      <h2>{props.item.name}</h2>
      <img width={200} src={props.item.img} alt="" />

      <ul>
        {props.item.numb.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  );
};

export default ListItem;
