import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import HeroSection from './HeroSection'
import  { useCartContext } from './../../Context/CartContext';

function Home() {

    const{cart} = useCartContext();
    return (
        <>  
            <HeroSection/>
            <ItemListContainer title={"Nuestros productos"}/>
        </>
    )
}

export default Home
