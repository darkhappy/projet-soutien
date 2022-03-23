import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logoShield } from "../images";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      sticky="top"
      expand="lg"
      className="shadow-lg"
      collapseOnSelect
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <div className="d-inline-flex align-items-center fs-2">
            <img height={65} src={logoShield} alt="Logo" className="me-2" />
            <span className="d-xl-none">C.A.I.</span>
            <span className="d-none d-xl-block">Centre Aide Informatique</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="fs-4 align-items-center">
            <Nav.Link eventKey="1" as={Link} to="/">
              Accueil
            </Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/about">
              À propos
            </Nav.Link>
            <Nav.Link href="https://documentation.etu.cegep-lanaudiere.qc.ca/index.php?title=Accueil">
              Documentation
            </Nav.Link>
            <Nav.Link href="https://billet.etu.cegep-lanaudiere.qc.ca/Billeterie/billeterie.php">
              Support
            </Nav.Link>
            <Nav.Link eventKey="3">
              <Button
                as={Link}
                to="/contact"
                variant="outline-primary"
                className="ms-2"
                size="lg"
              >
                Horaire CAI
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
