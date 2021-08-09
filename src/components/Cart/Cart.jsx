
import React from 'react'
import {Link} from 'react-router-dom'
import {useCartContext} from '../../Context/CartContext'
import { useState } from 'react';
import {FaTrashAlt, FaRegSadCry} from 'react-icons/fa'


export default function Cart() {
    const {cart, total, setTotal, setCart} = useCartContext();

    function borrarProducto(id){
        const newCart =[...cart]
        setCart(newCart.filter(prod => prod.producto.id !== id))

    }

   //Setiando el total
    setTotal(cart.map( prod => prod.producto.price * prod.quantity).reduce((acc, el) => acc + el,0 ))
    return (
        <>
            
            <div className="cart-list-container">
                <div className="cart-list">
                    
           {cart.length > 0 ? <h3 className="cart-title">Esto es lo que llevas</h3> : <h3 className="cart-title">No hay productos <FaRegSadCry/></h3>}
            
            {cart.length > 0 && cart.map(
                product => <div className="list-product">
                    <div>
                        <img alt=""  src={product.producto.image} className="img-producto"></img>
                    </div>
                    <div>
                        <h4>{product.producto.slug}</h4>
                        <h3>${product.producto.price}</h3>
                    </div>
                    <div>
                    <h3><span>Cantidad</span><br/>{product.quantity}</h3>
                    </div>
                    <div><h3><span>Total</span><br/>${product.producto.price * product.quantity}</h3></div>
                    <div><FaTrashAlt className="borrar-icon" onClick={() => borrarProducto(product.producto.id)} /> </div>
                    </div>
            )} 
            
            

            <div className="cart-footer">
               {cart.length > 0 && <div className="total-wraper">Total: <h3>${total}</h3></div> }
                <div className="cart-buttons">
                    <Link exact to="/" className="cart-button">Seguir Comprando</Link>
                    {cart.length > 0 && <Link exact to="/" className="cart-button finalizar-compra">Finalizar compra</Link>}
                
                </div>
                
            </div>
            
            </div>
            </div>
        </>
    )
}
