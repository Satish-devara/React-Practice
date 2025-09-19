

function AddItem({newItem , setNewItem, handleSubmit},) {


    

    return(
<form className = "addform" onSubmit={handleSubmit}>
    <label htmlFor="additem">
        AddItem
    </label>
    <input 
    autoFocus
    id="addItem"
    type="text"
    placeholder="Add item"
    required
    value = {newItem}
    onChange={(e) => setNewItem(e.target.value)}/>

    <button
    type="submit"
    >add</button>
</form>
    )
}


export default AddItem;