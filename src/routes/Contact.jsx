import "../scss/schedule.css";
import Header from "../components/Header";
import schedule from "../components/schedule.json";
import { Helmet } from "react-helmet";

const TITLE = "Nous contacter";
const colors = ["bg-sky", "bg-green", "bg-yellow", "bg-purple", "bg-pink", "bg-lightred"];
const hours = ["10:05", "11:00", "11:55", "12:50", "13:45", "14:40", "15:35"];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Header
        title={TITLE}
        subtitle="Nos coordonnées et notre horaire"
      />
      <div className="container">
        <div className="timetable-img text-center"></div>
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
  let numrows = 5
  return (
    <tbody>
      {
        hours.map((hour) => (
          <tr>
            <td className="align-middle">{hour}</td>      
            {
              [1,2,3,4,5].map((jour) => (
                <td> {
                  (Disponibilite(jour, hour).length > 0) ? 
                  <div>
                    <span className={`${colors[Math.floor(Math.random() * colors.length)]} padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13`}>
                      {Disponibilite(jour, hour)[0].local}
                    </span>
                    <div className="margin-10px-top font-size14">{hour}</div>
                    <div className="font-size13 text-light-gray">{Disponibilite(jour, hour)[0].person}</div>
                  </div> : null }
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
  let dispo = null;
  return (
    schedule.filter((a) => a.day === day && a.start === start)
  );
}