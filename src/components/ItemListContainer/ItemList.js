import React, {useState, useEffect} from 'react'
import {getProducts} from './../../products'
import {useParams} from  'react-router-dom'
import Item from './Item'


function ItemList() {

 
    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()


    useEffect(() => {
      if(categoriaId===undefined){
        getProducts()
        .then(resp => setProductos(resp))
      } else {
        getProducts()
        .then(resp => setProductos(resp.filter(pro => pro.categoria === categoriaId)))
      }

    
    }, [categoriaId])

    return (
        <>
           <Item productos={productos}/>
        </>
    )
}

export default ItemList
