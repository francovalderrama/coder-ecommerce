
import {useCartContext} from '../../Context/CartContext'
import CartContainer from './CartContainer';
import {useState} from 'react'
import CompraRealizada from './CompraRealizada';


export default function Cart() {
    const {cart, total, setTotal, setCart, finalizar, setFinalizar, finalizado} = useCartContext();



   //Setiando el total
    setTotal(cart.map( prod => prod.producto.price * prod.quantity).reduce((acc, el) => acc + el,0 ))
    return (
        <>  
            <div className="cart-container">
                { !finalizado ? <CartContainer/>  : <CompraRealizada/>}
            </div>
        </>
    )
}
