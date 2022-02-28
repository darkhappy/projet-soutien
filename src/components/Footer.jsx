import Logo from "../img/Shield_Logo.png";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container fluid className="border-top border-2">
        <Row className="align-content-center my-2">
          <Col sm={5}>
            <p className="text-muted">
              ©2022 Cégep régional de Lanaudière à Joliette
            </p>
          </Col>
          <Col sm={2}>
            <Link to="/">
              <img
                height={52}
                width={43}
                src={Logo}
                className="d-block mx-auto"
                alt="Logo"
              />
            </Link>
          </Col>
          <Col sm={5} className="text-end">
            <a
              className="text-muted nav-link"
              href="https://cegep-lanaudiere-joliette.omnivox.ca"
            >
              Retour à Omnivox
            </a>
          </Col>
        </Row>
    </Container>
  );
}
