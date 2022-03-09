import "../scss/schedule.css";
import Header from "../components/Header";
import schedule from "../components/schedule.json";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import { Helmet } from "react-helmet";

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
      <Header
        title={TITLE}
        subtitle={SUBTITLE}
      />
      <div className="container">
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead>
              <tr className="bg-light-gray">
                <th className="text-uppercase">Heure</th>
                <th className="text-uppercase">Lundi</th>
                <th className="text-uppercase">Mardi</th>
                <th className="text-uppercase">Mercredi</th>
                <th className="text-uppercase">Jeudi</th>
                <th className="text-uppercase">Vendredi</th>
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
  let numrows = 5
  return (
    <tbody>
      {
        hours.map((hour) => (
          <tr>
            <td className="align-middle">
              <div>{hour}</div>
              <div>à</div>           
              <div>{ dayjs(hour, "hh:mm").add(50, "m").format("hh:mm") }</div>
            </td>         
            {
              [1,2,3,4,5].map((jour) => (
                <td> {
                  (Disponibilite(jour, hour).length > 0) ? 
                  <table className="d-flex justify-content-center">
                    {
                      Disponibilite(jour, hour).map((personne) => (
                          <td>
                            <div className={`${personne.color} padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13`}> {personne.person} </div>
                            <div className="margin-10px-top font-size14">{personne.local}</div>
                          </td>
                      ))
                    }
                    </table> : null }
                </td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  );
}
function Disponibilite(day, start) {
  return (
    schedule.filter((a) => a.day === day && a.start === start)
  );
}
