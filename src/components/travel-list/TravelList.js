import React, { useState } from 'react'
import './travellist.css'
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

function TravelList() {

    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((items) => [...items, item])
    }

    function handleDelete(id) {
        setItems((items) => items.filter((item) => item.id !== id))
    }

    function handleToggle(id) {
        setItems((items) => items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
        ))
    }

    function handleClearList(){
        const confirm = window.confirm("Are you sure you want to delete all items")
        if(confirm) setItems([])
    }

    return (
        <div className='app'>
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList items={items} onDelete={handleDelete} onToggle={handleToggle} onClearList={handleClearList}/>
            <Stats items={items} />
        </div>
    )
}

export default TravelList