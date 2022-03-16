import { Badge, Card, Col, Row } from "react-bootstrap";
import schedule from "../data/schedule.json";

export default function CalendarDesktopView() {
  let array = schedule;
  let calendar = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  };
  array.forEach((person) => {
    let payload = {};
  });

  return <></>;
}

export function CalendarCard({ start, end, persons }) {
  return (
    <Card className="m-1">
      <Row className="align-items-center py-2 container">
        <Col xs={3}>
          {start}
          <br />
          {end}
        </Col>
        <Col className="border-start">
          {persons.map(({ person, location }) => (
            <div>
              <h3>{person}</h3>
              <Badge bg={(location = "C-220" ? "primary" : "secondary")}>
                {location}
              </Badge>
            </div>
          ))}
        </Col>
      </Row>
    </Card>
  );
}
