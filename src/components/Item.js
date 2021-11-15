import React from 'react';
import { useState } from 'react';

function Item({ name, category }) {
  const [status, setStatus] = useState(false);

  const addToCart = e => {
    setStatus(!status);
    // e.currentTarget.className = status ? 'in-cart' : '';
  };

  return (
    <li className={status ? 'in-cart' : ''} onClick={addToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
