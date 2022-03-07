import Header from "../components/Header";
import { Col, Container, Row } from "react-bootstrap";
import LogoImage from "../img/Shield_Logo.png";
import Blondinais from "../img/Blondinais.jpg";
import Confus from "../img/black.jpg";
import gang from "../img/coding_gang.jpg";
import "../scss/loader.css";
import "../js/loader.js";
import CurrentCard from "../components/CurrentCard";

export default function Home() {
  return (
    <>
      <div id="overlay">
        <div id="overlay-logo">
          <img src={LogoImage} alt="Logo du site"/>
          <p>Centre d'Aide Informatique</p>
        </div>
      </div>
      <Header
        title="Accueil"
        subtitle="Bienvenue au Centre d'Aide Informatique"
      />

      <Row>
        <Col>
          <CurrentCard location="biblio" />
        </Col>
        <Col>
          <CurrentCard location="C-220" />
        </Col>
      </Row>

      <Container className="mb-3">
        <div className="p-3 m-3 border border-2 border-radius-5">
          <p><b>Bienvenue</b> sur le site du CAI. Ici vous pourrez connaître nos horaires pour pouvoir nous contacter. Vous pourrez aussi avoir accès à notre documentation pour aider dans certains problèmes informatiques que l’on peut rencontrer dans la vie de tous les jours, ne serait-ce du côté réseau, logiciel et gestion de bureau. Vous pourrez ainsi grâce à ce site vous familiariser avec l’informatique. Sachant que l’informatique est en expansion dans les domaines de travail, il est rendu primordial de s’y connaître. </p>
          <p>Il y a aussi une section « À propos » dans notre menu qui vous permettra dans connaître un peu plus sur nous, nos objectifs, etc.</p>
        </div>
        <div className="row mt-3">
        <div className="col-4">
          <img alt="Etudiant sur son portable" src={Blondinais} className="w-100 h-100 img-fluid"/>
        </div>
        <div className="col-4">
          <img alt="Etudiant sur son portable" src={Confus} className="w-100 h-100 img-fluid"/>
        </div>
        <div className="col-4">
          <img alt="Etudiant sur son ordinateur" src={gang} className="w-100 h-100 img-fluid"/>
        </div>
      </div>
      </Container>
    </>
  );
}
