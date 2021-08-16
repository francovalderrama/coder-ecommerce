import { createContext, useContext, useState, useEffect } from "react";
import { getFirestore } from '../servicios/firebaseService'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);


function CartContextProvider({children}) {

    const [cart, setCart] = useState([])
    
    const [productos, setProductos] = useState([])

    const [total, setTotal] = useState([])
    
    const[itemsAgregados, setItemsAgregados] = useState()

    const [ordenHecha, setOrdenHecha] = useState({})
    const [finalizado, setFinalizado] = useState(false)

  

    useEffect(() => {
        const dbQuery = getFirestore()

        dbQuery.collection('items').get()
        .then(resp =>  setProductos(resp.docs.map(ite => ({...ite.data(), id:ite.id}))))
       
 
       
    }, [])

    return(
        <CartContext.Provider
            value={{ cart, setCart, productos, total, setTotal, itemsAgregados, setItemsAgregados, finalizado, setFinalizado, ordenHecha, setOrdenHecha }}>
            {children}

        </CartContext.Provider>
  
    )
}
export default CartContextProvider
