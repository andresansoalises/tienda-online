import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CartWidget from "./CartWidget";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            Aspironebulizadores
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Oxímetros</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Tensiómetros</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Servicio Técnico</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Contacto</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <CartWidget />
        </Nav.Item>
      </Container>
    </Navbar>
  );
}

export default NavBar;
