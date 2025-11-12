import React from 'react'

const ListItem = ({item}) => {
  return (
    <li>
        {JSON.stringify(item, null, 2)}
    </li>
  )
}

export default ListItem