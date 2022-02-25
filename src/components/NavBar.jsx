import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import LogoImage from "../img/Shield_Logo.png";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="../routes/Home.jsx">
          <img height={30} width={30} src={LogoImage} className="d-inline-block align-top"  alt="Logo"/>
          {" "}Centre Aide Informatique
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Accueil</Nav.Link>
            <Nav.Link href="#">À propos</Nav.Link>
            <Nav.Link href="#">Wikis</Nav.Link>
            <Nav.Link href="#">FAQs</Nav.Link>
          </Nav>
          <Button variant="outline-primary">Contactez-nous !</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
}
