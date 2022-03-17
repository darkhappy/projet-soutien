import { Badge, Card } from "react-bootstrap";
import schedule from "../data/schedule.json";
import dayjs from "dayjs";
import IsBetween from "dayjs/plugin/isBetween";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import weekday from "dayjs/plugin/weekday";

export default function CurrentCard({ location }) {
  let current = null;
  dayjs.extend(IsBetween);
  dayjs.extend(CustomParseFormat);
  dayjs.extend(weekday);

  // Get the array of people of that day
  let array = schedule[Object.keys(schedule)[dayjs().weekday() - 1]];

  // Check if anyone is currently there
  for (let i = 0; i < array.length && !current; i++) {
    let start = dayjs(array[i].start, "hh:mm");
    let end = start.add(50, "m");
    if (dayjs().isBetween(start, end) && array[i][location]) current = array[i];
  }

  const local = location === "c220" ? "Local C-220" : "Bibliothèque";
  const badge = current ? (
    <Badge bg="success">Disponible</Badge>
  ) : (
    <Badge bg="secondary">Absent</Badge>
  );

  return (
    <Card className="border-3 my-3" border={current ? "success" : "secondary"}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title>{local}</Card.Title>
          {badge}
        </div>
        <Card.Text className="mt-2">
          {current ? (
            <>
              Présentement, <span className="fw-bold">{current[location]}</span>{" "}
              est prêt à aider!
            </>
          ) : (
            <>Il n'y a personne.</>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

/*
 */
