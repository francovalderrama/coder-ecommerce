import React from 'react'
import styled from 'styled-components'
import ItemCount from '../ItemCount/ItemCount'
import ContadorContainer from '../ItemCount/ItemCount'
import products from '../../products.js'





const ItemsContainer = styled.div`
    width:100%;
    display:flex;

    flex-wrap: wrap;

`
const ProductContainer = styled.div `
    width:24.7%;
    height:250px;
    border:1px solid #dadada;
    display:flex;
    justify-content: center;
    align-items:center;
    transition:0.3s;
    text-align: center;
    position: relative;
    cursor:pointer;

    @media screen and (max-width:768px){
        width:100%;
    }

    &:hover{
        background:#dadada;
        transition:0.3s;
    }

    &:hover .prueba {
       opacity:1;
       transition: 0.3s;
        z-index:100;
    }

`

const Products=()=>{
    return (
        <>
        
            {
                products.map(product => (
                    <ProductContainer style={{
                        backgroundImage: `url("https://via.placeholder.com/500")` 
                    }}>
                        <p>{product.titulo}<br/>${product.price}</p> 

                        <ItemCount/>
                    </ProductContainer>
                ))
            }          
      
      </>
    )
}





export default function ItemListContainer() {

    return (
        <ItemsContainer>
            <Products></Products>

        </ItemsContainer>
    )
}
