import React from 'react'
import {Link} from 'react-router-dom'
import './Item.css'

const EditItem = () => {
    return (
        <form className="addItemForm">
            <label>Item Name</label>
            <input type="text" placeholder="Item Name"></input>
            <div>
                <button type="submit">Add Item</button>
                <Link to="/" ><button>Cancel</button></Link>
            </div>
        </form>
    )
}

export default EditItem
