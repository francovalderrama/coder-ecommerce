import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import {FaCartArrowDown, FaArrowRight} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import {useCartContext} from '../../Context/CartContext'

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

const FinalizarBtn = styled.button `

    animation: show-in 0.6s ease;
    position:relative;
    @keyframes show-in {
        from{left:-150; opacity:0;}
        to{left:0; opacity:1;}
    }

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





export default function ItemCount({productID, productName}) {
    const {cart, setCart, productos } = useCartContext();

    const [contador, setContador] = useState(1);
    const [added, setAdded] = useState(false);
    

    function sumaClick() {
         setContador(contador + 1 )
    }
    function restaClick() {
        if(contador > 1){
        setContador(contador -1);
    }
    }




    function addToCart(id) {
        setAdded(!added)
        const newCart = [...cart]
        const productoAgregado = productos.find(producto => producto.id === id);
        const estaEnElCart = cart.findIndex(cartItem =>  cartItem.producto.id === productoAgregado.id)
   
        if(estaEnElCart !== -1){
          newCart[estaEnElCart].quantity = newCart[estaEnElCart].quantity + contador;

          //Para actualizar el número del cart widget cuando se vuelva agregar el mismo item.
          setCart(newCart)

        }else{

        setCart([
            ...newCart,
        {producto: productoAgregado,
        quantity: contador}
    ])

    

}

console.log(cart)
    
    }



    const addedToCart = () => {
        return (
            <>
        <FinalizarBtn>
            <NavLink to="/cart">Finalizar Compra <FaArrowRight/></NavLink>
        </FinalizarBtn>
        </>
        )
        
    }

    const Inputs = () => {
        return (
            <>
             <CountContainer>
                    <button onClick={restaClick}>-</button>
                    <p>{contador}</p> 
                    <button onClick={sumaClick}>+</button>
                </CountContainer>
                <AñadirCarrito onClick={() => addToCart(productID)}>Añadir al Carrito <FaCartArrowDown/></AñadirCarrito>
                </>
                )
    }

    const CountVariant = added === false ? Inputs : addedToCart;
    return (
        <>  
           <ContadorContainer className="prueba">
                <CountVariant></CountVariant>
            </ContadorContainer>
        </>
    )
}
