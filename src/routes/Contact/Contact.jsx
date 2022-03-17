import { Helmet } from "react-helmet";
import {
  Header,
  CalendarMobileView,
  CalendarDesktopView,
} from "../../components";
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
      <Container className="my-5">
        <div className="d-lg-none">
          <CalendarMobileView />
        </div>
        <div className="d-none d-lg-block">
          De retour dans pas long
          {/*<CalendarDesktopView />*/}
        </div>
      </Container>
    </>
  );
}
