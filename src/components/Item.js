// Item.js
import React from 'react';

const Item = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: {item.price}</p>
    </div>
  );
};

export default Item;