import React from 'react';
import { useState } from 'react';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';

function App() {
  let [appClass, setAppClass] = useState(false);

  return (
    <div className={appClass ? 'App dark' : 'App light'}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setAppClass(!appClass)}>
          {appClass ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
