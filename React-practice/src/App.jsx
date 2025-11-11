import './App.css'
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import AddItem from './Components/AddItem';
import Search from './Components/Search';
import { useEffect, useState } from 'react';
import apiRequest from './Components/Apirequest';

function App() {
  const API_URL = "http://DEVARAs-MacBook-Air.local:3500/items";

  const [items, setitems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not recive the expected data');
        const listitems = await response.json();
        setitems(listitems);
        setFetchError(null);
      }catch(err){
        setFetchError(err.message);

      }finally{
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000)
    
  }, [])    

  const handleCheck = async (id) => {
  const listItems = items.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item
  );
  setitems(listItems);

  const updatedItem = listItems.find((item) => item.id === id);

  const updateOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ checked: updatedItem.checked }),
  };

  const reqUrl = `${API_URL}/${id}`;
  const result = await apiRequest(reqUrl, updateOptions);

  if (result) {
    setFetchError(result);
  }
};


  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setitems(listItems);

    const deleteOptions = { method: 'DELETE'  };
    
  const reqUrl = `${API_URL}/${id}`;
  const result = await apiRequest(reqUrl, deleteOptions);

  if (result) {
    setFetchError(result);
  }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem) return;
    const itemToAdd = {
      id: items.length + 1,
      checked: false,
      name: newItem
    }

    setitems([...items, itemToAdd]);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemToAdd)
    }

    const result = await apiRequest(API_URL,postOptions);
    if(result) setFetchError(result);

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
        <main>
          {isLoading && <p>is loading.....</p>}
          {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter((item) => ((item.name).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
