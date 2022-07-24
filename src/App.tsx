import { useState } from 'react';
import './App.css';
import { faker } from '@faker-js/faker';

type ListItem = {
  name: string;
  id: number;
};

function App() {
  const [items, setItems] = useState<ListItem[]>([]);

  const appendNewItem = () => {
    setItems((i) => [
      ...i,
      { name: faker.lorem.sentence(), id: Math.random() },
    ]);
  };

  return (
    <div className="App">
      <button onClick={appendNewItem}>Add Item</button>
      <div className="list">
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              padding: '0.5rem',
              margin: '0.25rem',
              border: '2px solid black',
              borderRadius: '0.5rem',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {item.name}
            <button
              onClick={() => {
                setItems((i) => i.filter((c) => c.id !== item.id));
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
