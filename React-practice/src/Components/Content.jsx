

import ItemsList from './ItemsList';
const Content = ({items, handleCheck, handleDelete}) => {

  return (
    <main>
        {items.length ? (
        <ItemsList 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />
        ) :(
            <p>no items to show</p>
        )}
    </main>
        
  )
}

export default Content