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
      <Row className="align-items-center py-2 container">
        <Col xs={3} sm={2}>
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
      <h3>{name}</h3>
      <Badge bg={location === "c220" ? "primary" : "success"}>{local}</Badge>
    </ListGroupItem>
  ) : null;
}
