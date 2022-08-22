import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import schedule from "../../data/schedule.json";
import { ListGroup, Table } from "react-bootstrap";
import { CardDetails } from "..";

const hours = ["10:05", "11:00", "11:55", "12:50", "13:45"];

export default function CalendarDesktopView() {
  return (
    <Table className="text-center">
      <thead className="bg-dark text-white">
        <tr>
          <th>Heure</th>
          <th>Lundi</th>
          <th>Mardi</th>
          <th>Mercredi</th>
          <th>Jeudi</th>
          <th>Vendredi</th>
        </tr>
      </thead>
      {Horaire()}
    </Table>
  );
}

function Horaire() {
  dayjs.extend(CustomParseFormat);
  return (
    <tbody>
      {hours.map((hour) => (
        <tr key={hour + "1"}>
          <th className="align-middle col-1 border-end" key={hour + "2"}>
            {hour}
            <br />
            {dayjs(hour, "HH:mm").add(50, "m").format("HH:mm")}
          </th>
          {["lundi", "mardi", "mercredi", "jeudi", "vendredi"].map((day) => (
            <td className="col-2" key={day}>
              {getDispo(day, hour) ? (
                <ListGroup variant="flush">
                  {Object.keys(getDispo(day, hour)).map((key) => (
                    <CardDetails
                      name={getDispo(day, hour)[key]}
                      location={key}
                      key={key}
                      desktop
                    />
                  ))}
                </ListGroup>
              ) : null}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

function getDispo(day, start) {
  let result = null;
  const array = {
    lundi: schedule.monday,
    mardi: schedule.tuesday,
    mercredi: schedule.wednesday,
    jeudi: schedule.thursday,
    vendredi: schedule.friday,
  };

  array[day].forEach((d) => {
    if (d.start === start) result = { c220: d.c220, biblio: d.biblio };
  });

  return result;
}
