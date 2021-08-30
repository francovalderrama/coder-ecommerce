import React from 'react'
import { useState } from 'react';
import {getFirestore} from '../../servicios/firebaseService'
import {useCartContext} from '../../Context/CartContext'
import {Link} from 'react-router-dom'

function FinalizarCompra() {
    const {cart, total, setFinalizado, setOrdenHecha} = useCartContext();
    const [buyer, setBuyer] = useState(initialState);
    const [valid, setValid] = useState(null);



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
        if(buyer.nombre !== "" && buyer.email !== "" && buyer.telefono !=="" && buyer.email === buyer.confirma){
            setValid(true)
        }
        console.log(buyer)

    }
    // console.log(buyer)

    function enviarCompra(e){
        e.preventDefault()
        if(valid === true){
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
        } else{ 
            setValid(false)
        }

     
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
               <input type="email" placeholder="Confirma tu email" name="confirma" value={buyer.confirma}></input>
               <input type="tel" placeholder="Teléfono" name="telefono" value={buyer.telefono}/>
               {valid === false ? <p className="error">Tienes que rellenar el formulario</p> : <p></p>  }
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
    confirma:'',
    telefono:''

}