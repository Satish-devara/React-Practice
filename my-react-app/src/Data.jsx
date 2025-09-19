import ListItem from "./ListItem"
function Data({items}){

    return(
        <div>
            <ul>
                {items.map((item) => (
                    <ListItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
}

export default Data