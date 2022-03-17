import { Col, Container, Row } from "react-bootstrap";
import { blondinais, confus, Vieux } from "../../images";
import { Helmet } from "react-helmet";
import { CurrentCard, Header } from "../../components";

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
            permettra dans connaître un peu plus sur nous, nos objectifs, etc.
          </p>
        </div>

        <Row>
          <Col>
            <CurrentCard location="biblio" />
          </Col>
          <Col>
            <CurrentCard location="c220" />
          </Col>
        </Row>

        <div className="row mt-3">
          <div className="col-4">
            <img
              alt="Etudiant sur son portable"
              src={blondinais}
              className="w-100 h-100 img-fluid"
            />
          </div>
          <div className="col-4">
            <img
              alt="Etudiant sur son portable"
              src={confus}
              className="w-100 h-100 img-fluid"
            />
          </div>
          <div className="col-4">
            <img
              alt="Etudiant sur son ordinateur"
              src={Vieux}
              className="w-100 h-100 img-fluid"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
