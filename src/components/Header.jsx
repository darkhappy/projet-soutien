import { Container } from "react-bootstrap";

export default function Header({ title, subtitle }) {
  return (
    <header className="bg-primary">
      <Container className="py-lg-3">
        <div>
          <h1 className="display-2 fw-bold">{title}</h1>
          <h2 className="fs-2">{subtitle}</h2>
        </div>
      </Container>
    </header>
  );
}
