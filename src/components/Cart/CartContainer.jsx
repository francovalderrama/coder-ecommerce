import React from 'react'
import CartDisplay from './CartDisplay'
import FinalizarCompra from './FinalizarCompra';
import {useCartContext} from '../../Context/CartContext'

function CartContainer() {
    const {cart} = useCartContext();
    
    return (
        <>
            <div className="cart-list">
                  <CartDisplay/> 
                </div>
                { cart.length > 0 &&
                <div className="finalizar-compra">
                 <FinalizarCompra/>
                 </div>
                 }
        </>
    )
}

export default CartContainer
