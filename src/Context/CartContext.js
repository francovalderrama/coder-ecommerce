import { createContext, useContext, useState, useEffect } from "react";
import {getProducts} from '../products'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);


function CartContextProvider({children}) {

    const [cart, setCart] = useState([])
    
    const [productos, setProductos] = useState([])

    useEffect(() => {
  
        getProducts()
        .then(resp => setProductos(resp))
       
    }, [])

    console.log(cart)
    return(
        <CartContext.Provider
            value={{ cart, setCart, productos }}>
            {children}

        </CartContext.Provider>
  
    )
}
export default CartContextProvider
