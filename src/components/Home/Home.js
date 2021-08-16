import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import HeroSection from './HeroSection'

function Home() {

    return (
        <>  
            <HeroSection/>
            <ItemListContainer title={"Nuestros productos"}/>
        </>
    )
}

export default Home
