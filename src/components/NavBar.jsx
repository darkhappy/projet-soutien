import { Button, Container, Nav, Navbar } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import LogoImage from "../img/Shield_Logo.png";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg" className="shadow-lg">
      <Container fluid>
        <LinkContainer to={"/"}>
          <Navbar.Brand>
            <img height={90} width={78} src={LogoImage} className="d-inline-block align-top"  alt="Logo"/>
            <div className="d-inline-block">
              <p className="fs-1 mb-0 mx-2 mt-0 fw-bolder ">C.A.I.</p>
              <p className="fs-5 mt-0 mb-0">- Centre d'Aide Informatique -</p>
            </div>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="fs-4">
            <LinkContainer to={"/"}>
              <Nav.Link>Accueil</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"about"}>
              <Nav.Link>À propos</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#">Wikis</Nav.Link>
            <Nav.Link href="#">FAQs</Nav.Link>
          </Nav>
          <Button variant="outline-primary" size="lg">Contactez-nous !</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
}
