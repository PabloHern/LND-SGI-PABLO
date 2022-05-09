import {
  NavDropdown,
  Nav,
  Container,
  Navbar
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import React from "react";
import "./BSHeader.css";
export default function BSHeader() {
  return (
    <>
      <Navbar bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src="/img/LogoSabiosGuias.png"
              width="300"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />

          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className="link">
              <NavDropdown title="Menu" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/home">Inicio</NavDropdown.Item>
                <NavDropdown.Item href="/all-routes">Rutas</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}