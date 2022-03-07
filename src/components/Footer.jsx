import Logo from "../img/Shield_Logo.png";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mt-auto pt-3">
      <Container fluid className="border-top border-2 align-middle">
        <Row className="align-content-center my-2">
          <Col className="my-auto">
            ©2022 Cégep régional de Lanaudière à Joliette
          </Col>
          <Col>
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
          <Col className="text-end">
            <a
              className="text-muted nav-link"
              href="https://cegep-lanaudiere-joliette.omnivox.ca"
            >
              Retour à Omnivox
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
