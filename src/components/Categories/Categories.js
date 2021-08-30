import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const CategoriesContainer = styled.div `
width:100%;
display: flex;


`

const CategoriesSideBar = styled.div `
width:300px;
display: flex;
justify-content: center;
margin-top:100px;

ul {
    width:80%;
}
li{
    width:100%;
    padding:8px 0;
    list-style-type: none;
}

li a {
    text-decoration: none;
    font-weight:500;
    color:black;
}
`
function Categories() {
    return (
        <>
            <CategoriesContainer className="CatContainer">
                <CategoriesSideBar>
                    <ul>
                        <li><h3>Categorías</h3></li>
                        <li><NavLink to="/categorias/jordan">Jordan</NavLink></li>
                        <li><NavLink to="/categorias/running">Running</NavLink></li>
                        <li><NavLink to="/categorias/futbol">Fútbol</NavLink></li>
                        <li><NavLink to="/categorias/basquetbol">Básquetbol</NavLink></li>
                    </ul>
                </CategoriesSideBar>

                <ItemListContainer/>

            </CategoriesContainer>
        </>
    )
}

export default Categories
