import {
  Badge,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

export default function CalendarCard({ start, end, persons }) {
  return (
    <Card className="my-2">
      <Row className="align-items-center py-2 container-fluid">
        <Col xs={"auto"} sm={2} className="fw-bold">
          {start}
          <br />
          {end}
        </Col>
        <Col className="border-start">
          <ListGroup variant="flush">
            {Object.keys(persons).map((key) => (
              <CardDetails name={persons[key]} location={key} key={key} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Card>
  );
}

function CardDetails({ name, location }) {
  const local = location === "c220" ? "Local C-220" : "Bibliothèque";
  return name ? (
    <ListGroupItem className="py-3" key={location}>
      <h4 className="fw-light">{name}</h4>
      <Badge bg={location === "c220" ? "primary" : "success"}>{local}</Badge>
    </ListGroupItem>
  ) : null;
}
