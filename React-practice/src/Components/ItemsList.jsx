import React from 'react'

import LineItem from './LineItem';
const ItemsList = ({items, handleCheck, handleDelete}) => {
  return (
    <div>
            <ul className='flex flex-col '>
                {items.map((item) => (
                    <LineItem 
                    key={item.id}
                    item = {item}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}/>
                ))}
            </ul>
        </div>
  )
}

export default ItemsList