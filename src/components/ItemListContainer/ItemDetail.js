import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { getProduct } from '../../products';
import ItemCount from '../ItemCount/ItemCount';
import ItemListContainer from './ItemListContainer';

const ItemDetailContainer = styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    margin-top:25px;

`

const Container = styled.div `
    width:1080px;
    display:flex;

`
const ProductDetailImage = styled.img `
    src: url(${props => props.src});
    animation: show-up 0.6s ease;
    position: relative;
    width:50%;
    
    
    @keyframes show-up {
        from{
            opacity:0;
            left:-500px
        }
        to{
            left:0px;
            opacity:1;
        }
    }


`

const ProductDescription = styled.div `
padding:40px;
animation: show-left 0.6s ease;
position: relative;


h4{
    color:#262626;
    font-size:2em;
}

h3{
    margin-top:12px;
    font-size:2em;
}

a{
    text-decoration: none;;
}
a .categoria{
    color:darkblue;
    text-transform:capitalize ;
    margin:12px 0;
    text-decoration: none;
}

.titulo-corto{
    font-size:15px;
    font-weight:800;
}
 .descripcion{

}

@keyframes show-left{
    from{
        opacity:0;
        left:500px;
    }
    to {
        opacity:1;
        left:0;
    }
}

`


function ItemDetail() {
    
    const [detail, setDetail] = useState([]);
    const {productoNombre} = useParams()

    useEffect(() => {

           getProduct()
           .then(resp => setDetail(resp.filter(det => det.slug === productoNombre)))

    }, [])

    return (
        <>
        {detail.map(detalle =>(
            <ItemDetailContainer>
                <Container>
                    <ProductDetailImage src={detalle.image}/>
                    <ProductDescription>
                        <h4>{detalle.titulo}</h4>
                        <h3>${detalle.price}</h3>
                        <NavLink  to={`/categorias/${detalle.categoria}`}><p className="categoria">{detalle.categoria}</p></NavLink>
                        <p className="titulo-corto">Descripción</p>
                        <p className="descripcion">{detalle.descripcion}</p>
                        <ItemCount productID={detalle.id} productName={detalle.slug}/>
            </ProductDescription>
           
            </Container>
        </ItemDetailContainer>
        ))}
            
        </>
    )
}

export default ItemDetail
