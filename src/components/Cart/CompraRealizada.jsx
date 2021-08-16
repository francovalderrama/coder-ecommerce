import React from 'react'
import {useCartContext} from '../../Context/CartContext'
import { FaRegSadCry} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function CompraRealizada() {

    const {cart, ordenHecha, total} = useCartContext();
    console.log(ordenHecha)

    return (
        <div>
            <h3>¡Muchas gracias su compra ha  sido realizada con exito!</h3>
            <p>El id de tu orden es <b>{ordenHecha.id}</b> </p>

            <br/>




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

                    </div>
            )} 
            <h4>El total de tu compra fue {total}</h4>
        </div>
    )
}

export default CompraRealizada
