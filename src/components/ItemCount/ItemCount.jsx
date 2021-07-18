import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'


const ContadorContainer = styled.div `
    width:200px;
    position: absolute;
    top:150px;
    left:50%;
    display:flex;
    justify-content: center;
    align-items:center;
    transform: translateX(-50%);
`





export default function ItemCount() {

    const [contador, setContador] = useState(1);

    function sumaClick() {
         setContador(contador + 1 )
    }
    function restaClick() {
        setContador(contador -1);
    }

    function addToCart(params) {
        alert("Haz agregado" + contador+ "Items")
    }

    
    return (
        <>  
           <ContadorContainer>
            <button onClick={restaClick}>-</button>
            <h1>{contador}</h1> 
            <button onClick={sumaClick}>+</button>
            <button onClick={addToCart}>Add to Cart</button>
            </ContadorContainer>
        </>
    )
}
