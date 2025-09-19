import { useState,useEffect } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./APIrequest";
import { methods } from "underscore";


function List(){
    const [fruits, setFruits] = useState([]);
    const API_URL = "http://DEVARAs-MacBook-Air.local:3502/items";
    const [isLoading, setlLoading] = useState(true);
    const [fetchError, setError] = useState(null);

useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;
    const fetchItems = async () => {
        try{
            const response = await fetch(API_URL, {signal});
            if(!response.ok) throw Error('Did not recevied the data')
            const listItems = await response.json();
        const normalizedItems = listItems.map(item => ({
    ...item,
    id: Number(item.id)  // Convert string ID to number
}));
            setFruits(normalizedItems);
            setError(null);

        }catch(err){
            if (err.name !== 'AbortError') {
                setError(err.message);
            }
        }finally{
            setlLoading(false);
        }
    }

    const timer = setTimeout(() => {
        fetchItems()
    },2000)

    return () => {
        clearTimeout(timer);
        controller.abort();
    }
},[]);
    
const [newItem, setNewItem] = useState('');
const [search, setSearch] = useState('');


const setandsaveItems = (listItems) => {
    setFruits(listItems);
    localStorage.setItem('fruits',JSON.stringify(listItems));
}

const handleDelete = async (id) => {

    const listItems = fruits.filter((items) => items.id != id);
    setandsaveItems(listItems);

    

    const deleteOptions = {
        method: 'DELETE'
    }
    const url = `${API_URL}/${id}`;

    const result = await apiRequest(url,deleteOptions);

    if(result){
        setFruits(listItems);
    }
}

const addItem = async (newItem) => {
    const id = fruits.length ? fruits[fruits.length - 1].id + 1 : 1;
    
    // Create the new item object with the numeric ID.
    const newItemAdded = { id,  checked: false, name: newItem };
    
    // Optimistically update the local state to give the user instant feedback.
    const listItems = [...fruits, newItemAdded];
    setFruits(listItems);

    // Prepare the options for the POST request.
    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // Send the complete object, including the numeric ID you just created.
        body: JSON.stringify(newItemAdded)
    };

    // Make the API request and handle errors.
    const result = await apiRequest(API_URL, postOptions);
    if (result) {
        // If the request fails, revert the state and display an error.
        setFruits(fruits); 
        setError(result.message);
    }

}
const handleChange = async (id) => {
    const numericId = Number(id); // ensure id is number

    const updatedList = fruits.map(item =>
        item.id === numericId ? { ...item, checked: !item.checked } : item
    );

    setFruits(updatedList);

    const changedItem = updatedList.find(item => item.id === numericId);
    const updateOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ checked: changedItem.checked })
    };

    const reqUrl = `${API_URL}/${numericId}`;

    console.log("PATCH URL:", reqUrl); // Check exact URL
console.log("PATCH Body:", updateOptions.body); // Confirm payload


    try {
        const result = await apiRequest(reqUrl, updateOptions);
        if (result) {
            console.error("PATCH request failed:", result);
            setError(`Failed to update item ${numericId}: ${result}`);
        } else {
            console.log(`Item ${numericId} updated successfully`);
        }
    } catch (error) {
        console.error("Unexpected error in handleChange:", error);
        setError("Something went wrong. Please reload the app.");
    }
};




const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem('');
    

}
    return(
        <div>
            <SearchItem 
            search = {search}
            setSearch = {setSearch}
            />
        {isLoading && <p>Loading items..</p>}
        {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError && (<ul>
           {fruits.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
            <li key = {item.id}>
                <input type="checkbox"

                onChange={() => handleChange(item.id)}
                checked = {item.checked}/>
                <label >{item.name}</label>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
           ))}
        </ul>)
        }
        <AddItem  newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit={handleSubmit}
        />
        </div>

    )
}

export default List;