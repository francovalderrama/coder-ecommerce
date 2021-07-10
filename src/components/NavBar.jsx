import styled from 'styled-components'
import {Link as LinkR, Link as LinkS} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

const Nav = styled.nav`
    background:black;
    width:100%;
    height:80px;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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
    display:none;
    font-size:22px;
    @media screen and (max-width:768px) {
        display:block;
        color:white;
    }
`

const NavMenu = styled.ul`
    width:30%;
    display: flex;
    justify-content: space-between;

    
    @media screen and (max-width:768px){
        display:none;
    }

`

const NavItem = styled.li`
    list-style-type:none;
    padding:8px 13px;
    transition: 0.3s ease;
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

function NavBar({ toggle }) {


        return (
        <>
            <Nav className="nav">
                <NavBarContainer>
                    <NavLogo to='/'>
                        Printgao
                    </NavLogo>

                    <MobileIcons onClick={toggle}>
                        <FaBars/>
                    </MobileIcons>

                    <NavMenu>
                        <NavItem>
                             <NavLinks to='/' onClick={toggle}>Inicio</NavLinks>
                        </NavItem>
                        <NavItem>
                             <NavLinks to='tienda'>Tienda</NavLinks>
                        </NavItem>
                        <NavItem>
                             <NavLinks to='contacto'>Contacto</NavLinks>
                        </NavItem>
                     </NavMenu>
                    

                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar

