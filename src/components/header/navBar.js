import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "./rose.png";
import Cart from "./CartWidget";

function NavBar() {
  return (
    <header>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="index.html">
          <img src={logo} id="brand" alt="Logo de la muralla Rose" />
          Trost Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="linkdivs">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ropa</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Accesorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Coleccionables
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Manga</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Cart />
      </Navbar>
    </header>
  );
}

export default NavBar;
