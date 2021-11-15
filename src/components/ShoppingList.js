import React from 'react';
import Item from './Item';
import { useState } from 'react';

function ShoppingList({ items }) {
  const [filter, setFilter] = useState('All');

  const filterItems = e => {
    const newFilter = e.target.value;
    setFilter(newFilter);
  };

  const itemsToRender = (() => {
    if (filter === 'All') return [...items];
    else {
      return items.filter(item => {
        return item.category === filter;
      });
    }
  })();

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterItems}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToRender.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
