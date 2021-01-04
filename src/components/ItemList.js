import React from 'react'
import './Home.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom'

const ItemList = () => {
    return (
        <div className="itemBlock">
            <h2>Item Name</h2>
            <div>
                <Link to="/edit"><EditIcon/></Link>
                <DeleteIcon/>
            </div>
        </div>
    )
}

export default ItemList
