import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import {FaCartArrowDown} from 'react-icons/fa'

const ContadorContainer = styled.div `
    width:100%;
    display:flex;
    justify-content: left;
    align-items:center;
    height:auto;
    margin:0;
    padding:0;
    transition:0.3s;
    margin:10px 0;
    flex-wrap:wrap;

    button{
        background:none;
        border:none;
        padding:10px;
        cursor:pointer;
        transition:all 0.3s ease;

        &:hover{
            transform:translateY(-3px);
            transition:all 0.3s ease;|
        }
    }

`

const AñadirCarrito = styled.button `
    width:100%;
    display:block;
    text-align:left;
    

`

const CountContainer = styled.div `
    display:flex;
    justify-content: center;;
    width:100px;
    align-items: center;;
    border:2px solid #262626;
    border-radius:30px;

    p {
        font-size:20px;
    }
    
    button{
        margin:0 10px;
        font-size:1.1em;
    }
`





export default function ItemCount() {

    const [contador, setContador] = useState(1);

    function sumaClick() {
         setContador(contador + 1 )
    }
    function restaClick() {
        if(contador > 1){
        setContador(contador -1);
    }
    }

    function addToCart(params) {
        alert("Haz agregado" + contador+ "Items")
    }

    
    return (
        <>  
           <ContadorContainer className="prueba">
                <CountContainer>
                    <button onClick={restaClick}>-</button>
                    <p>{contador}</p> 
                    <button onClick={sumaClick}>+</button>
                </CountContainer>
                <AñadirCarrito onClick={addToCart} >Añadir al Carrito <FaCartArrowDown/></AñadirCarrito>
            </ContadorContainer>
        </>
    )
}
