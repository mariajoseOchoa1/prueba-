import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Button from "../Button"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #075985;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/" className="hover:no-underline">Inicio</NavItem>
      <NavItem to="/soluciones" className="hover:no-underline">Soluciones</NavItem>
      <NavItem to="/productos" className="hover:no-underline">Productos</NavItem>
      <NavItem to="/servicios" className="hover:no-underline">Servicios</NavItem>
      
      <NavItem to="/Contact" className="hover:no-underline">Contáctenos</NavItem>
      
      <Button className="rounded transition duration-300 ease-in-out bg-primary-lighter shadow-md hover:bg-primary-lighter hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none" size="sm" >Comuníquese con un asesor</Button>
    </>
  )
}

export default NavbarLinks