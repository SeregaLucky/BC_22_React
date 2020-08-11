import React from 'react';
import data from './data/data.json';
import ListItem from './component/ListItem/ListItem';

const App = () => {
  return (
    <>
      <h1>Title</h1>

      <p>111</p>

      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <img width={200} src={item.img} alt="" />
          </li>
        ))}
      </ul> */}

      <ul>
        {data.map(item => (
          // ListItem(item)
          <ListItem key={item.id} item={item} />
        ))}
      </ul>

      {[111, 222, 3333]}
    </>
  );
};

export default App;
