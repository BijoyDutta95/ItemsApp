import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import AddIcon from '@material-ui/icons/AddCircle';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import {GlobalContext} from '../Context/GlobalState'

import './Home.css'
const Heading = () => {
    const {removeAll} =useContext(GlobalContext);

    const deleteAllItems = () =>{
        removeAll();
    }

    return (
        <div className="heading">
            <p>ITEM  LIST</p>
            <div>
                <Link to="/add"><AddIcon className="iconLink" title="Add New Item"/></Link>
                <DeleteSweepIcon className="iconLink" title="Delete Entire List" onClick={deleteAllItems}/>
            </div>
        </div>
    )
}

export default Heading
