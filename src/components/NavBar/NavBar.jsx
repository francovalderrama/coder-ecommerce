import styled from 'styled-components'
import {Link as LinkR, Link as LinkS} from 'react-router-dom'
import {FaBars, FaShoppingBag} from 'react-icons/fa'
import { useCartContext } from './../../Context/CartContext';


const Nav = styled.nav`
    background:black;
    width:100%;
    height:80px;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: fixed;
    left:0;
    top:0;;
    z-index:999;
    `

const NavBarContainer = styled.div `
    width:80%;
    display: flex;
    justify-content:space-between;
`

const NavLogo = styled(LinkR)`
    color:white;
    text-decoration: none;
    font-weight:600;
    display: flex;
    align-items:center;

`

const MobileIcons = styled.div`
    color:white;
    width:60px;
    display:none;
    font-size:22px;
    cursor:pointer;
    position: relative;;
    @media screen and (max-width:768px) {
        display:flex;
         justify-content: space-between;
    }
`

const NavMenu = styled.ul`
    width:30%;
    display: flex;
    justify-content: center;

    
    @media screen and (max-width:768px){
        display:none;
    }

`

const NavItem = styled.li`
    list-style-type:none;
    padding:8px 13px;
    transition: 0.3s ease;
    font-weight:500;
    &:hover{
        border-bottom:3px solid white;
        transition: 0.3s ease;
    }


`

const NavLinks = styled(LinkS)`
    color:white;
    text-decoration:none;
    font-weight:00;
    
`
const NavIcons = styled.div`
    color:white;
    display:flex;
    position: relative;
    align-items: center;;

    @media screen and (max-width:768px){
        display:none;
    }
`
const CartWidget = styled(FaShoppingBag)`

`



function NavBar({ toggle }) {
    const{cart, itemsAgregados, setItemsAgregados} = useCartContext();


    setItemsAgregados(cart.map( prod => prod.quantity).reduce((acc, el) => acc + el,0 ))

        return (
        <>
            <Nav className="nav">
                <NavBarContainer>
                    <NavLogo to='/'>
                       Nike
                    </NavLogo>

                    <MobileIcons className="mobileicocns">
                        <FaBars  onClick={toggle}/>
                        <NavLinks exact to="/cart">
                            <CartWidget/>
                            <div className="cart-length-mobile"><p>{itemsAgregados}</p></div>
                        </NavLinks>
                    </MobileIcons>

                    <NavMenu>
                            <NavItem>
                             <NavLinks exact to='/categorias/jordan'>Jordan</NavLinks>
                        </NavItem>
                        <NavItem>
                             <NavLinks exact to='/categorias/running'>Running</NavLinks>
                             
                        </NavItem>
                     </NavMenu>

                     <NavIcons>
                         <NavLinks exact to="/cart">
                            <FaShoppingBag/>
                            <div className="cart-length"><p>{itemsAgregados}</p></div>
                            </NavLinks>
                     </NavIcons>
                    

                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar

