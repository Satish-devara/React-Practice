

function SearchItem({search, setSearch}){

    return(
        <form 
        className="searchForm"
        onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search"
            >search</label>

            <input type="text" 
            id="search" 
            placeholder="searchitems" 
            role="searchbox"
            value = {search}
            aria-label="Search Items"
            onChange={(e) => setSearch(e.target.value)}/>

        </form>
    )
}

export default SearchItem