import { Helmet } from "react-helmet";
import { Header } from "../../components";

const TITLE = "Nous contacter";
const SUBTITLE = "Nos coordonnées et notre horaire";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Header title={TITLE} subtitle={SUBTITLE} />
    </>
  );
}
