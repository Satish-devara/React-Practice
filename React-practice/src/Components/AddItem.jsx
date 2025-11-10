import React from 'react'
import { FaPlus } from 'react-icons/fa'
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form
            className='addForm p-2 m-2 flex flex-row justify-between'
            onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="addItem">Add item</label>
            <input
                autoFocus
                id='addItem'
                type="text"
                placeholder='add item'
                required
                className='rounded-l'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />

            <button type='submit'
                aria-label='Add item'
                className='cursor-pointer bg-green-500 w-9 h-9 flex justify-center items-center rounded-l'
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem