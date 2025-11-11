

import ItemsList from './ItemsList';
const Content = ({items, handleCheck, handleDelete}) => {

  return (
    <>
        {items.length ? (
        <ItemsList 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />
        ) :(
            <p>no items to show</p>
        )}
    </>
        
  )
}

export default Content