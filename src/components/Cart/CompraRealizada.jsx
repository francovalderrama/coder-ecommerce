import React from 'react'
import {useCartContext} from '../../Context/CartContext'
function CompraRealizada() {

    const {ordenHecha, total,setCart, setFinalizado } = useCartContext();
    console.log(ordenHecha)
  
    function clearEverything(){
        setCart([])
        setFinalizado(false)
    }

    return (
        <div>
            <h3>¡Muchas gracias su compra ha  sido realizada con exito!</h3>
            <p>El id de tu orden es <b>{ordenHecha.id}</b> </p>

            <br/>




            <h4>El total de tu compra fue {total}</h4>
            <button onClick={clearEverything}>Comprar denuevo</button>
        </div>
    )
}

export default CompraRealizada
