import "./contact.css";
import schedule from "../../data/schedule.json";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import { Helmet } from "react-helmet";
import { Header } from "../../components";
import { CalendarCard } from "../../components/CalendarDesktopView";
import { Container } from "react-bootstrap";

const TITLE = "Nous contacter";
const SUBTITLE = "Nos coordonnées et notre horaire";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Header title={TITLE} subtitle={SUBTITLE} />
      <Container className="my-5">lol</Container>
      {/*
       <div className="container mt-auto">
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
      </div>
*/}
    </>
  );
}
