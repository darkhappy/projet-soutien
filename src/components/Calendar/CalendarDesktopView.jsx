import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import schedule from "../../data/schedule.json";

export default function CalendarDesktopView() {
  // TODO: fix this shit
  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center ">
        <thead>
          <tr className="bg-light-gray">
            <th className="text-uppercase border-2">Heure</th>
            <th className="text-uppercase border-2">Lundi</th>
            <th className="text-uppercase border-2">Mardi</th>
            <th className="text-uppercase border-2">Mercredi</th>
            <th className="text-uppercase border-2">Jeudi</th>
            <th className="text-uppercase border-2">Vendredi</th>
          </tr>
        </thead>
        {Horaire()}
      </table>
    </div>
  );
}

function Horaire() {
  const hours = [];

  schedule.forEach((item) => {
    let findItem = hours.find((x) => x === item.start);
    if (!findItem) hours.push(item.start);
  });

  dayjs.extend(CustomParseFormat);
  return (
    <tbody>
      {hours.map((hour) => (
        <tr className="border-2">
          <th className="align-middle border-2 col-1" scope="row">
            {hour}
            <br />
            à
            <br />
            {dayjs(hour, "HH:mm").add(50, "m").format("HH:mm")}
          </th>
          {[1, 2, 3, 4, 5].map((jour) => (
            <td className="border-2 col-2">
              {" "}
              {Disponibilite(jour, hour).length > 0 ? (
                <table className="d-flex justify-content-center">
                  {Disponibilite(jour, hour).map((personne) => (
                    <td className="border-0">
                      <div className={`${personne} text-black`}>
                        {" "}
                        {personne.person}{" "}
                      </div>
                      <div
                        className={
                          personne.local === "C-220"
                            ? "bg-primary rounded text-white"
                            : "bg-success rounded text-white"
                        }
                      >
                        {personne.local}
                      </div>
                    </td>
                  ))}
                </table>
              ) : null}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

function Disponibilite(day, start) {
  return schedule.filter((a) => a.day === day && a.start === start);
}
