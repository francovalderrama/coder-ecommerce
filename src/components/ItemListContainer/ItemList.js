import React, {useState, useEffect} from 'react'
import {getProducts} from './../../products'
import {useParams} from  'react-router-dom'
import Item from './Item'


function ItemList() {

  const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([])

    const { categoriaId } = useParams()


    useEffect(() => {
      if(categoriaId===undefined){
        getProducts()
        .then(resp => {
          setProductos(resp)
          setLoading(false)
        })
      } else {
        getProducts()
        .then(resp => { setProductos(resp.filter(pro => pro.categoria === categoriaId))
          setLoading(false)
        })
      }

    }, [categoriaId])

    return (
        <>

        {loading === true ? <h1>Cargando...</h1> : <Item productos={productos}/> 
        }
        
        </>
    )
}

export default ItemList
