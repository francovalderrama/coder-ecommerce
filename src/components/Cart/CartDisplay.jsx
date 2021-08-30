import React from 'react'
import {FaTrashAlt, FaRegSadCry} from 'react-icons/fa'
import {useCartContext} from '../../Context/CartContext'
import {Link} from 'react-router-dom'

function CartDisplay() {
    const {cart, setCart} = useCartContext();
    
    function borrarProducto(id){
        const newCart =[...cart]
        setCart(newCart.filter(prod => prod.producto.id !== id))

    }
    return (
        <>
            {cart.length > 0 ? <h3 className="cart-title">Resumen de tu compra</h3> :
             <h3 className="cart-title-none">No hay productos <FaRegSadCry/> <Link exact to="/" className="cart-seguir">Seguir Comprando</Link>
             </h3>} 
            {cart.length > 0 && cart.map(
                product => <div className="list-product">
                    <div>
                        <img alt=""  src={product.producto.image} className="img-producto"></img>
                    </div>
                    <div>
                        <h4>{product.producto.nombre}</h4>
                        <h3>${product.producto.price}</h3>
                    </div>
                    <div>
                    <h3><span>Cantidad</span><br/>{product.quantity}</h3>
                    </div>
                    <div><h3><span>Total</span><br/>${product.producto.price * product.quantity}</h3></div>
                    <div><FaTrashAlt className="borrar-icon" onClick={() => borrarProducto(product.producto.id)} /> </div>
                    </div>
            )} 


      
        </>
    )
}

export default CartDisplay
