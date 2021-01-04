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
            {items.length>0 ? (
                <>
                    {items.map(item => (
                        <div className="singleItem" key={item.id} >
                            <p>{item.name}</p>
                            <div>
                                <Link to={`/edit/${item.id}`}><EditIcon className="editLink"/></Link>
                                <DeleteIcon onClick={()=>removeItem(item.id)}/>
                            </div>
                        </div>
                    ))}
                </>
            ) :(
                <h4>Empty List</h4>
            )}
            
            
        </div>
    )
}

export default ItemList
