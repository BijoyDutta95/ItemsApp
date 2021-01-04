import React, {useContext} from 'react'
import './Home.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom'
import {GlobalContext} from '../Context/GlobalState'

const ItemList = () => {

    const {items , removeItem} = useContext(GlobalContext);
    console.log(items);

    return (
        <div className="itemBlock">
            {items.map(item => (
                <div className="singleItem">
                    <h2>{item.name}</h2>
                    <div>
                        <Link to={`/edit/${item.id}`}><EditIcon/></Link>
                        <DeleteIcon onClick={()=>removeItem(item.id)}/>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default ItemList
