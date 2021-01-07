import React, {useContext} from 'react'
import './Home.css'
import {GlobalContext} from '../Context/GlobalState'


const Footer = () => {
    const {deleteSelected} =useContext(GlobalContext);

    return (
        <div className="footer">
            <button className="footerButton" onClick={()=>deleteSelected()}>Delele Selected</button>
        </div>
    )
}

export default Footer