import React from 'react'
import styled from 'styled-components'

const ItemsContainer = styled.div`
    width:100%;
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;

`
const ProductContainer = styled.div `
    width:24%;
    height:250px;
    border:1px solid #dadada;
    display:flex;
    justify-content: center;
    align-items:center;
    transition:0.3s;
    text-align: center;

    @media screen and (max-width:768px){
        width:100%;
    }

    &:hover{
        background:#dadada;
        transition:0.3s;
    }

`

const Products=({title,price})=>{
    return (
        <>
        <ProductContainer>
            <p>{title}<br/>{price}</p>
        </ProductContainer>
      </>
    )
}





export default function ItemListContainer() {
    return (
        <ItemsContainer>
            <Products title="Producto 1" price="$500"></Products>
            <Products title="Producto 2" price="$600"></Products>
            <Products title="Producto 3" price="$200"></Products>
            <Products title="Producto 4" price="$100"></Products>

        </ItemsContainer>
    )
}
