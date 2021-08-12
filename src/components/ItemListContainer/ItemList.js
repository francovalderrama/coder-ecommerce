import React, {useState, useEffect} from 'react'
import {getProducts} from './../../products'
import {useParams} from  'react-router-dom'
import Item from './Item'
import { getFirestore } from '../../servicios/firebaseService'

function ItemList() {

  const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {
         const dbQuery = getFirestore()
  
         if(categoriaId === undefined){
            dbQuery.collection('items').get()
            .then(resp =>  setProductos(resp.docs.map(ite => ({...ite.data(), id: ite.id}))))
            setLoading(false)
         } else{
            dbQuery.collection('items').where('categoria', '==', categoriaId).get()
            .then(resp =>  setProductos(resp.docs.map(ite => ({...ite.data(), id: ite.id}))))
            setLoading(false)
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
