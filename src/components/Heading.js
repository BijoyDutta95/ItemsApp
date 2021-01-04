import React from 'react'
import {Link} from 'react-router-dom'
import AddIcon from '@material-ui/icons/AddCircle';
import './Home.css'
const Heading = () => {
    return (
        <div className="heading">
            <h2>My Items</h2>
            <Link to="/add"><AddIcon/></Link>
        </div>
    )
}

export default Heading
