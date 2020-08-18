import React from 'react';

const List = ({ list }) => {
  return (
    list.length > 0 && (
      <ul>
        {list.map(item => (
          <li key={item.title}>
            <h2>{item.title}</h2>
            <img src={item.urlToImage} width={200} />
          </li>
        ))}
      </ul>
    )
  );
};

export default List;
