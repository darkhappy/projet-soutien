import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logoShield } from "../images";

export default function NavBar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      sticky="top"
      expand="lg"
      className="shadow-lg"
    >
      <Container fluid>
        <LinkContainer to={"/"}>
          <Navbar.Brand>
            <div className="d-inline-block align-middle">
              <img height={65} width={55} src={logoShield} alt="Logo" />
              <p
                style={{ fontSize: "2.5em" }}
                className="mb-0 mx-2 mt-0 fw-bolder d-inline-block align-middle"
              >
                C.A.I.
              </p>
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
            <Nav.Link href="http://documentation.etu.cegep-lanaudiere.qc.ca/index.php?title=Accueil">
              Wikis
            </Nav.Link>
            <Nav.Link href="#">FAQs</Nav.Link>
            <LinkContainer to={"contact"}>
              <Nav.Link>
                <Button variant="outline-primary" size="lg">
                  Contactez-nous !
                </Button>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
