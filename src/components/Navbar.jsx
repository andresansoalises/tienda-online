import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <Navbar className="justify-content-end" bg="light" expand="lg">
      <Container>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Dermocosmética</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Cuidado Capilar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Maquillaje</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <CartWidget />
        </Nav.Item>
    </Container>
    </Navbar>
  );
}

export default NavBar;
