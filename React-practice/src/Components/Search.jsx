import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <form className='searchform grid grid-cols-2  gap-2 items-center'
    onSubmit={(e) => e.prevent.default}>
        <label htmlFor="search" className='row-span-1 col-span-1 self-center text-lg'>Search</label>
        <input type="text" 
        id='search' 
        placeholder='Search items'
        role='searhBox'
        value = {search}
        onChange={(e) => setSearch(e.target.value)}
        className='col-span-1 boder rounded-3xl'
        />
    </form> 
  )
}

export default Search