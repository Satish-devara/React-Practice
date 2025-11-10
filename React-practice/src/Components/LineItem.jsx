import React from 'react'
import  { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li key={item.id} className='item flex flex-row p-2 m-2 justify-between' >
                        <input type="checkbox" 
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                        />
                        <label
                        onDoubleClick={() => handleCheck(item.id)}
                        >{item.name}</label>
                        <FaTrashAlt 
                        onClick={() => handleDelete(item.id)} 
                        role='button' 
                        tabIndex='0'
                        />
                    </li>
  )
}

export default LineItem