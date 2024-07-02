import React, {useState} from 'react'
import Item from './Item';


function PackingList({ items, onDelete, onToggle, onClearList }) {

    const[sortBy, setSortBy] = useState('input');
    let sortedItems;
    
    if(sortBy === "input") sortedItems = items;

    if(sortBy === "description") sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));

    if(sortBy === "packed") sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));
    
    return (
        <div className='list'>
            <ul>
                {sortedItems.map((item) => (
                    <Item item={item} key={item.id} onDelete={onDelete} onToggle={onToggle} />
                ))}
            </ul>

            <div className='actions'>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by desc</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear List</button>
            </div>
        </div>
    )
}


export default PackingList