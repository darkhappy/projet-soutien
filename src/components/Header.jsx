import { Container } from "react-bootstrap";

export default function Header(props) {
  return (
    <header className="bg-primary mb-5 text-white">
      <Container className="py-5" >
        <h1 className="display-2 fw-bold">{props.title}</h1>
        <h2 className="fs-2">
          {props.subtitle}
        </h2>
      </Container>
    </header>
  );
}
