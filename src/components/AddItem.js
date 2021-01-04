import React,{useState, useContext} from 'react'
import {Link,useHistory,userHistory} from 'react-router-dom'
import './Item.css'
import {GlobalContext} from '../Context/GlobalState'
import {v4 as uuid} from 'uuid';

const AddItem = () => {
    const [name, setName]=useState('');
    const {addItem} =useContext(GlobalContext)
    const history = useHistory();
    const onSubmit = () =>{
        const newItem= {
            id:uuid(),
            name
        }
        addItem(newItem);
        history.push("/");
    }
    const onChange=(e)=>{
        setName(e.target.value)
    }
    return (
        <form className="addItemForm" onSubmit={onSubmit}>
            <label>Item Name</label>
            <input type="text" value={name} onChange={onChange} placeholder="Item Name"></input>
            <div>
                <button type="submit">Add Item</button>
                <Link to="/" ><button>Cancel</button></Link>
            </div>
        </form>
    )
}

export default AddItem
