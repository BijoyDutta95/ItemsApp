import React from 'react'
import Footer from './Footer'
import Heading from './Heading'
import ItemList from './ItemList'

const Home = () => {
    return (
        <div className="homeMain">
            <Heading/>
            <ItemList/>    
            <Footer/>      
        </div>
    )
}

export default Home