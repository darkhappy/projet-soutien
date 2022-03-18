import { Helmet } from "react-helmet";
import {
  Header,
  CalendarMobileView,
  CalendarDesktopView,
} from "../../components";
import { Container } from "react-bootstrap";

const TITLE = "Horaire du CAI";
const SUBTITLE = "Nos coordonnées et notre horaire";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Header title={TITLE} subtitle={SUBTITLE} />
      <Container className="my-5">
        <div className="d-lg-none">
          <CalendarMobileView />
        </div>
        <div className="d-none d-lg-block">
          <CalendarDesktopView />
        </div>
      </Container>
    </>
  );
}
