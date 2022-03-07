import { Badge, Card } from "react-bootstrap";
import schedule from "./schedule.json";
import dayjs from "dayjs";
import IsBetween from "dayjs/plugin/isBetween";
import CustomParseFormat from "dayjs/plugin/customParseFormat";

export default function CurrentCard({ location }) {
  let current = null;
  dayjs.extend(IsBetween);
  dayjs.extend(CustomParseFormat);

  // Get current day of the week
  let date = new Date(Date.now()).getDay();

  // Get the array of people of that week
  let array = location === "C-220" ? schedule.c220 : schedule.biblio;
  array = array.filter((a) =>
    a.day === date
  );

  // Check for the first person
  for (let i = 0; i < array.length && !current; i++) {
    let time = dayjs(array[i].start, "hh:mm");
    if (dayjs().isBetween(time, time.add(50, "m")))
      current = array[i];
  }

  const loc = location === "C-220" ? "Local C-220" : "Bibliothèque";
  const dispoBadge =
    current ? <Badge bg="success">Disponible</Badge> : <Badge bg="secondary">Absent</Badge>;

  return (
    <Card className="border-3 my-3" border={current ? "success" : "secondary"}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title>{loc}</Card.Title>
          {dispoBadge}
        </div>
        <Card.Text className="mt-2">
          {current ?
            (<>Présentement, <span className="fw-bold">{current.person}</span> est prêt à aider!</>)
            : <>Il n'y a personne.</>}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

/*
 */
