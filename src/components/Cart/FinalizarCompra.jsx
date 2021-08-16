import React from 'react'
import { useState } from 'react';
import {getFirestore} from '../../servicios/firebaseService'
import {useCartContext} from '../../Context/CartContext'
import {Link} from 'react-router-dom'

function FinalizarCompra() {
    const {cart, total, setFinalizado, setOrdenHecha} = useCartContext();
    const [buyer, setBuyer] = useState(initialState);



    const order = {
        buyer: buyer,
        order: cart,
        date:new Date(),
        total: total}


    function cambioFormulario(e){
        setBuyer({
            ...buyer,
            [e.target.name] : e.target.value
        })

    }
    // console.log(buyer)

    function enviarCompra(e){

        e.preventDefault()
        const db = getFirestore();
        db.collection('order').add(order)
        .then(resp => setOrdenHecha({
            id: resp.id,
            order: cart,
            buyer: buyer        
        }))
        .then(setFinalizado(true))
        .catch(err => console.log(err))
        .finally(()=>{console.log("compra hecha")})

    }

    return (
        <div className="">
            
            <h3 className="cart-title">Finaliza tu compra</h3>

            <form className="finalizar-form"
               onSubmit={enviarCompra}
               onChange={cambioFormulario}
            >
  
               <input type="text" placeholder="Nombre" name="nombre" value={buyer.nombre}/>
               <input type="email" placeholder="Email" name="email" value={buyer.email}/>
               <input type="tel" placeholder="Teléfono" name="telefono" value={buyer.telefono}/>
               {cart.length > 0 && <div className="total-wraper"><h3>Total: ${total}</h3></div> }
                <button className="comprar" onClick={enviarCompra}>Finalizar Compra</button>
            </form>
            <Link exact to="/" className="cart-seguir">Seguir Comprando</Link>
                
        </div>
    )
}

export default FinalizarCompra

const initialState = {
    nombre:'',
    email:'',
    telefono:''
}