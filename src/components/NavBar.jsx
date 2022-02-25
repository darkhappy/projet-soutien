import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import LogoImage from "../img/Logo_site.png";
export default function NavBar() {
  return (
    <Navbar className={"navbar navbar-expand-lg navbar-light bg-primary bg-gradient shadow-lg sticky-top"}>
      <Container fluid>
        <Navbar.Brand href="../routes/Home.jsx"><img style={{height:'125px',width:'355px'}} src={ LogoImage }/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
