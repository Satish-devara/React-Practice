import './App.css'
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import AddItem from './Components/AddItem';
import Search from './Components/Search';
import ItemsList from './Components/ItemsList';
import { useEffect, useState } from 'react';

function App() {
  const [items, setitems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items])

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setitems(listItems);

  }


  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setitems(listItems);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    const itemToAdd = {
      id: items.length + 1,
      checked: false,
      name: newItem
    }

    setitems([...items, itemToAdd]);

    setNewItem('');
  }

  return (
    <>
      <div>
        <Header />
        <Search
          search={search}
          setSearch={setSearch}
        />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <Content
          items={items.filter((item) => ((item.name).toLowerCase()).
            includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />

        <Footer />
      </div>
    </>
  )
}

export default App
