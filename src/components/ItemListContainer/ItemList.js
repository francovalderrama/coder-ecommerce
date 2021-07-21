import React, {useState, useEffect} from 'react'
import {getProducts} from './../../products'
import Item from './Item'


function ItemList() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
      getProducts()
      .then(resp => setProductos(resp))
    }, [])

    return (
        <>
           <Item productos={productos}/>
        </>
    )
}

export default ItemList
