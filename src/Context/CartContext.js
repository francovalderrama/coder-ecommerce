import { createContext, useContext, useState, useEffect } from "react";
import { getFirestore } from '../servicios/firebaseService'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);


function CartContextProvider({children}) {

    const [cart, setCart] = useState([])
    
    const [productos, setProductos] = useState([])

    const [total, setTotal] = useState([])
    
    const[itemsAgregados, setItemsAgregados] = useState()

  

    useEffect(() => {
        const dbQuery = getFirestore()

        dbQuery.collection('items').get()
        .then(resp =>  setProductos(resp.docs.map(ite => ({...ite.data(), id:ite.id}))))
       
 
       
    }, [])

    console.log(productos)
    return(
        <CartContext.Provider
            value={{ cart, setCart, productos, total, setTotal, itemsAgregados, setItemsAgregados }}>
            {children}

        </CartContext.Provider>
  
    )
}
export default CartContextProvider
