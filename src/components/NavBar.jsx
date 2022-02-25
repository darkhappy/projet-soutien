import { Button, Navbar } from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import LogoImage from "../img/Logo_site.png";
export default function NavBar() {
  return (
    <Navbar className={"navbar navbar-expand-lg navbar-light bg-primary bg-gradient shadow-lg sticky-top"}>
      <Container fluid>
        <Navbar.Brand href="../routes/Home.jsx"><img style={{height:'40px',width:'120px'}} src={ LogoImage }/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-4">
            <Nav.Link href="#">Accueil</Nav.Link>
            <Nav.Link href="#">À propos</Nav.Link>
            <Nav.Link href="#">Wikis</Nav.Link>
            <Nav.Link href="#">FAQs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className="btn btn-primary btn-lg btn-outline-dark">Contactez-nous !</Button>
      </Container>
    </Navbar>
  );
}
