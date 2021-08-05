
import React from 'react'
import {Link} from 'react-router-dom'
import {useCartContext} from '../../Context/CartContext'
import Item from '../ItemListContainer/Item';


export default function Cart() {
    const {cart} = useCartContext();
    console.log(cart)
    


    return (
        <div>
            
            <div className="cart-list-container">
                <div>
                    <h3>Esto es lo que llevas</h3>
            {cart.length > 0 && cart.map(
                product => <div className="list-product">
                    <div>
                        <img src={product.buscaProducto.image} className="img-producto"></img>
                    </div>
                    <div>
                        <h4>{product.buscaProducto.slug}</h4>
                        <h3>${product.buscaProducto.price}</h3>
                    </div>
                    <div>
                    <h3><span>Cantidad</span><br/>{product.contador}</h3>
                    </div>
                    <div><h3><span>Total</span><br/>${product.buscaProducto.price * product.contador}</h3></div>
                    
                    </div>
            )} 
            
            {cart.length === 0 && <p>No hay productos en el carrito</p>}
            
            <button>Finalizar Compra</button>
            <Link exact to="/"><button>Seguir Comprando</button></Link>
            </div>
            </div>
        </div>
    )
}
