import {Helmet} from "react-helmet";
import {Header} from "../../components";
import {Button, Container} from "react-bootstrap";
import { Link } from "react-router-dom";


export default function page404() {
  const title = "404";
  const subtitle = "Page non trouvée";

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header title={title} subtitle={subtitle} />
      <Container className="my-3 text-center">
        <h3 className="my-5">
          Il semblerait que la page que vous essayez d'atteindre ne soit pas disponible
        </h3>
        <Link to="/">
          <Button className="btn btn-primary" size="lg" type="button">
            Retour à l'accueil
          </Button>
        </Link>
      </Container>
    </>
  );
}
