import {Button, Container} from "react-bootstrap";
import { Link } from "react-router-dom";


export default function page404() {
  const title = "404";
  const subtitle = "Page non trouvée";

  return (
    <>
      <Container className="mt-auto text-center">
        <h1 className="display-1 fw-bolder">{title}</h1>
        <h3 className="mb-5">{subtitle}</h3>
        <h3>
          Il semblerait que la page que vous essayez d'atteindre ne soit pas disponible
        </h3>
        <Link to="/">
          <Button className="mt-5 btn btn-primary" size="lg" type="button">
            Retour à l'accueil
          </Button>
        </Link>
      </Container>
    </>
  );
}
