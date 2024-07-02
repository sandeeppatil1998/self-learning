import React, {useState} from 'react'



function Form({ onAddItems }) {

    const [desc, setDesc] = useState("")
    const [quantity, setQuantity] = useState(1)


    function handleSubmit(e) {
        e.preventDefault();

        if (!desc) return;
        const newItem = { id: Date.now(), description: desc, quantity: quantity, packed: false }
        console.log(newItem);

        onAddItems(newItem);

        setQuantity(1);
        setDesc('');
    }

    return (
        <form className='add-form' onClick={handleSubmit}>
            <h3>What do ypu need for your trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>{num}</option>
                ))}
            </select>
            <input type='text' placeholder='Item...' value={desc} onChange={(e) => setDesc(e.target.value)} />
            <button>Add</button>
        </form>
    )
}

export default Form