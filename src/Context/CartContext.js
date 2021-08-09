import { createContext, useContext, useState, useEffect } from "react";
import {getProducts} from '../products'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);


function CartContextProvider({children}) {

    const [cart, setCart] = useState([])
    
    const [productos, setProductos] = useState([])

    const [total, setTotal] = useState([])
    
    const[itemsAgregados, setItemsAgregados] = useState()

  

    useEffect(() => {
  
        getProducts()
        .then(resp => setProductos(resp))
       
    }, [])


    return(
        <CartContext.Provider
            value={{ cart, setCart, productos, total, setTotal, itemsAgregados, setItemsAgregados }}>
            {children}

        </CartContext.Provider>
  
    )
}
export default CartContextProvider
