import { Container } from "react-bootstrap";

export default function Header(props) {
  return (
    <header className="mb-1 bg-primary">
      <Container className="py-2" >
        <h1 className="display-2 fw-bold">{props.title}</h1>
        <h2 className="fs-2">
          {props.subtitle}
        </h2>
      </Container>
    </header>
  );
}
