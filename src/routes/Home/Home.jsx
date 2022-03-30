import { Col, Container, Row } from "react-bootstrap";
import {
  louisEugene,
  jpRaphael,
  jpRaphael2,
  imprimanteGif,
  gregRaph1,
  gregRaph2,
  gregRaph3,
  louis1,
  louis2,
} from "../../images";
import { Helmet } from "react-helmet";
import { CurrentCard, Header } from "../../components";
import { Link } from "react-router-dom";

export default function Home() {
  const title = "Accueil";
  const subtitle = "Bienvenue au Centre d'Aide Informatique";

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header title={title} subtitle={subtitle} />
      <Container className="my-3">
        <div className="p-3 border border-2 border-radius-5">
          <p>
            <b>Bienvenue</b> sur le site du CAI. Ici vous pourrez connaître nos
            horaires pour pouvoir nous contacter. Vous pourrez aussi avoir accès
            à notre documentation pour aider dans certains problèmes
            informatiques que l’on peut rencontrer dans la vie de tous les
            jours, ne serait-ce du côté réseau, logiciel et gestion de bureau.
            Vous pourrez ainsi grâce à ce site vous familiariser avec
            l’informatique. Sachant que l’informatique est en expansion dans les
            domaines de travail, il est rendu primordial de s’y connaître.{" "}
          </p>
          <p>
            Il y a aussi une section « À propos » dans notre menu qui vous
            permettra d'en connaître un peu plus sur nous, nos objectifs, etc.
          </p>
        </div>

        <Row>
          <Col>
            <Link className="text-decoration-none text-black" to="/contact">
              <CurrentCard location="biblio" />
            </Link>
          </Col>
          <Col>
            <Link className="text-decoration-none text-black" to="/contact">
              <CurrentCard location="c220" />
            </Link>
          </Col>
        </Row>

        <div className="photos row-cols-3">
          <div className="colPhoto">
            <img
              className="photo1"
              alt="Etudiant sur son portable"
              src={gregRaph1}
            />
            <img
              className="photo2"
              alt="Etudiant sur son portable"
              src={gregRaph2}
            />
          </div>
          <div className="colPhoto">
            <img
              className="photo1"
              alt="Etudiant sur son portable"
              src={jpRaphael2}
            />
            <img
              className="photo2"
              alt="Etudiant sur son portable"
              src={jpRaphael}
            />
          </div>
          <div className="colPhoto">
            <img
              className="photo1"
              alt="Etudiant sur son ordinateur"
              src={louis1}
            />
            <img
              className="photo2"
              alt="Etudiant sur son ordinateur"
              src={louis2}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
