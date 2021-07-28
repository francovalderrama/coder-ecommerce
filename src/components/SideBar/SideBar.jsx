import React from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-router-dom'

const SideBarContainer = styled.aside `
    position:fixed;
    top:0;
    left:0;
    z-index:999;
    width:100%;
    height:100%;
    background:black;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    transition:0.4s ease;
`

const CloseIcon = styled(FaTimes)`
    color:white;
    font-size:2em;
    cursor: pointer;
`

const Icon = styled.div `
    position: absolute;
    top:16px;
    right:16px;
`
const SideBarWrapper = styled.div `
    display:flex;
    width:100%;
    height:100%;
    justify-content: center;
    align-items:center;
`
const SideBarMenu = styled.div `
    width:100%;
    justify-content:center;
    text-align:center;
    align-items: center;
`
const SideBarLink = styled(LinkS) `
    color:white;
    font-size:24px;
    margin:13px 0;
    display: block;
    text-decoration:none;
`
function SideBar({isOpen, toggle}) {
    return (
        <>
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/">
                    Nike
                    </SideBarLink>
                    <SideBarLink to="/">
                        Inicio
                    </SideBarLink>
                    <SideBarLink to="/categorias/jordan">
                        Jordan
                    </SideBarLink>
                    <SideBarLink to="/categorias/running">
                        Running
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>

        </SideBarContainer>
        </>
    )
}

export default SideBar
