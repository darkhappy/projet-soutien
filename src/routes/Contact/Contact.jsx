import "./contact.css";
import schedule from "../../data/schedule.json";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import { Helmet } from "react-helmet";
import { Header } from "../../components";

const TITLE = "Nous contacter";
const SUBTITLE = "Nos coordonnées et notre horaire";
const hours = [];

schedule.map((item) => {
  var findItem = hours.find((x) => x === item.start);
  if (!findItem) hours.push(item.start);
});

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Header title={TITLE} subtitle={SUBTITLE} />
      <div className="container mt-3">
        <div className="table-responsive">
          <table className="table table-bordered text-center ">
            <thead>
              <tr className="bg-light-gray border-2">
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
      </div>
    </>
  );
}

function Horaire() {
  dayjs.extend(CustomParseFormat);
  return (
    <tbody>
      {hours.map((hour) => (
        <tr className="border-2">
          <td className="align-middle border-2">
            <div>{hour}</div>
            <div>à</div>
            <div>{dayjs(hour, "hh:mm").add(50, "m").format("hh:mm")}</div>
          </td>
          {[1, 2, 3, 4, 5].map((jour) => (
            <td className="border-2 col-sm-2">
              {" "}
              {Disponibilite(jour, hour).length > 0 ? (
                <table className="d-flex justify-content-center">
                  {Disponibilite(jour, hour).map((personne) => (
                    <td className="border-0">
                      <div
                        className={`${personne} padding-5px-tb padding-10px-lr margin-15px-bottom text-black font-size20 xs-font-size14`}
                      >
                        {" "}
                        {personne.person}{" "}
                      </div>
                      <div
                        className={
                          personne.local ===
                          "C-220"
                            ? "bg-warning border-radius-5"
                            : "bg-blue border-radius-5"
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
