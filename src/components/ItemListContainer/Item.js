import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'

const ProductContainer = styled.div `
    width:23%;
    height:auto;
    border:1px solid #dadada;
    display:flex;
    justify-content: center;
    align-items:center;
    transition:0.3s;
    flex-wrap:wrap;
    text-align: center;
    position: relative;
    box-shadow:2px 2px 10px rgba(0,0,0,0.2);
    border-radius:10px;
    overflow:hidden;
    cursor:pointer;
    animation: show-in 0.6s ease;

    @keyframes show-in {
        from{
            opacity:0;
            top:-100px;
        }
        to{
            opacity:1;
            top:0;
        }
    }

    @media screen and (min-width:968px) {
        margin:0 8px;
        width:19%;
    }
    @media screen and (max-width:768px){
        width:45%;
        margin-top:13px;
    }

    @media screen and (min-width:768px) and (max-width:992px) {
        width:33%;
    }

    &:hover{
        background:#dadada;
        transition:0.3s;
        transform: translateY(-5px);
        box-shadow:2px 2px 15px rgba(0,0,0,0.2);
    }

    a {
        text-decoration:none;
        color:#262626;
    }

    /* &:hover .prueba {
       opacity:1;
       transition: 0.3s;
        z-index:100;
    } */
`

const ProductImage = styled.img`
width:100%;
height:200px;
src: url(${props => props.src});
object-fit:cover;
object-position: right;

`

const ProductData = styled.div `
padding:20px 0;

`

const Price = styled.h3 `
    margin-bottom:20px;
`

const ProductTitle = styled.h3`
font-weight:400;
margin:10px 0px;
`


function Item({productos=[]}) {

    return (
        <>

   
            {
                productos.map(product => (
           
                    <ProductContainer className="product-container">
                        <ProductImage src={product.image}/>
                        <ProductData>
                            <ProductTitle><NavLink to={`/productos/${product.slug}`}>{product.titulo}</NavLink></ProductTitle>
                           <Price> ${product.price} </Price>
                           <ItemCount/>
                        </ProductData>
                    </ProductContainer>

                ))
            }

        </>
    )
}

export default Item
