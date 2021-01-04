import React from 'react'
import {Link} from 'react-router-dom'
import AddIcon from '@material-ui/icons/AddCircle';
import './Home.css'
const Heading = () => {
    return (
        <div className="heading">
            <p>ITEM  LIST</p>
            <Link to="/add"><AddIcon className="iconLink"/></Link>
        </div>
    )
}

export default Heading
