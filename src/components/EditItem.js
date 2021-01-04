import React,{useState, useContext, useEffect} from 'react'
import {Link,useHistory,userHistory} from 'react-router-dom'
import './Item.css'
import {GlobalContext} from '../Context/GlobalState'

const EditItem = (props) => {

    const [selectedItem, setSelectedItem]=useState({
        id: '',
        name: ''
    });
    const {items, editItem} =useContext(GlobalContext)
    const history = useHistory();
    const currentItemID=props.match.params.id;

    useEffect(()=>{
        const itemId=currentItemID;
        const selectedItem= items.find(item => item.id === itemId)
        setSelectedItem(selectedItem)
    }, [currentItemID, items])
    const onSubmit = () =>{
        editItem(selectedItem)
        history.push("/");
    }
    const onChange=(e)=>{
        setSelectedItem({...selectedItem,[e.target.name]:e.target.value})
    }

    return (
        <div className="editItemBlock">
            <h3>EDIT ITEM</h3>
            <form className="addItemForm" onSubmit={onSubmit}>
                <label>Item Name</label>
                <input type="text" name="name" value={selectedItem.name} onChange={onChange} placeholder="Item Name"></input>
                <div className="editButtons">
                    <Link to="/" ><button className="cancelButton">Cancel</button></Link>
                    <button type="submit" className="submitButton">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditItem
