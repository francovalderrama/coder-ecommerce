import React from 'react'
import styled from 'styled-components'
import ItemList from './ItemList'




const ItemsContainer = styled.div`
    width:100%;
       display:flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media screen and (min-width:968px) {
        display:flex;
        justify-content:flex-start;
    }


`



export default function ItemListContainer(props) {

    return (
        <ItemsContainer className="catalog-container">
            <h3 className="title">{props.title}</h3>
            <ItemList/>
        </ItemsContainer>
    )
}









