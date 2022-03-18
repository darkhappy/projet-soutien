import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { CardDetails } from "..";

export default function CalendarCard({ start, end, persons }) {
  return (
    <Card className="my-2">
      <Row className="align-items-center py-2 container-fluid">
        <Col xs={"auto"} sm={"auto"} className="fw-bold">
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
