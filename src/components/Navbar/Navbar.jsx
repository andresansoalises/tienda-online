import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CartWidget from "../CartWidget";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../ItemListContainer/ItemListContainer";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container>
        <Nav.Item>
          <Link to={"/home"}>Home</Link>
        </Nav.Item>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <div className="prodDesplegable">
            <Link to={"/categoria/Aspirador"}>Aspironebulizadores</Link>
            <Link to={"/categoria/Oxímetro"}>Oxímetros</Link>
            <Link to={"/categoria/Tensiómetro"}>Tensiómetros</Link>
          </div>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Servicio Técnico</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Contacto</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={"/carrito"}>Carrito</Link>
        </Nav.Item>
        <Nav.Item>
          <CartWidget/>
        </Nav.Item>
      </Container>
    </Navbar>
  );
}

export default NavBar;
