import Header from "../components/Header";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <>
      <Header
        title="À propos"
        subtitle="Tous à propos du Centre Aide en Informatique"
      />
      <Container>
        <div className="mb-4" id="qui-somme-nous">
          <h3 className="mb-3">Qui somme-nous?</h3>
          <p>
            Afin d'offrir aux étudiants de la technique une expérience réaliste
            en soutien technique, le CAI fut fondé.
          </p>
          <p>
            Nous sommes un ensemble d'étudiants, ayant une certaine connaissance
            dans le domaine informatique, prêt à vous aidez dans tous vos
            problèmes qui sont de près ou de loins liés à l'informatique. Allant
            des problèmes simples aux plus compliqués, il nous fera toujours
            plaisir de vous servir en vous offrant des informations, des
            explications et des solutions à vos dilemmes informatiques.
          </p>
        </div>

        <div className="mb-4" id="objectifs">
          <h3 className="mb-3">Les objectifs du CAI</h3>
          <ul>
            <li>
              Offrir aux étudiants et aux étudiantes un support informatique
              personnalisé.
            </li>
            <li>
              Offrir aux étudiants de la technique une expérience réaliste de
              support informatique.
            </li>
            <li>
              Permettre l'entre-aide dans la communauté du cégep au niveau
              informatique, à travers le CAI
            </li>
          </ul>
        </div>

        <div className="mb-4" id="clientele">
          <h3 className="mb-3">La clientèle cible</h3>
          <p>
            Nous sommes prèt à venir en aide à tout professeur, étudiant,
            membres du personnel ayant des difficultés avec son/ses appareils
            électroniques. Peu importe le problème, peu importe la personne,
            nous sommes là pour vous venir en aide. Il nous fera tout autant
            plaisir de distribuer notre aide à quiconque qui fera usage de nos
            services en lignes, peu importe si il/elle fait parti(e) de la
            communauté du cégep.
          </p>
        </div>

        <div className="mb-4" id="forum">
          <h3 className="mb-3">Le forum</h3>
          <p>
            Le forum, est une plateforme de discussion entre les membres du
            soutien technique du CAI et toute clientèle. Ce forum permet de
            répondre à toutes les questions qui sont publiées et ce par
            quiconque, autant modérateurs qu'autres étudiants. Toutes réponses
            données par un utilisateur non-modérateur seront comfirmées par un
            modérateur pour permettre une réponse précise et complète.
          </p>
        </div>

        <div className="mb-4" id="terms">
          <h3 className="mb-3">Termes et conditions d'utilisations</h3>
          <p>
            Afin de bénéficier des services offerts par le centre d’aide en
            informatique, vous devez impérativement lire et accepter les
            conditions d’utilisation suivantes. Ces conditions d’utilisation
            sont liées à tous services reçus en personne ou par l’entremise du
            site Internet et/ou de son système de chat en direct.
          </p>
          <ul>
            <li>
              Aucune responsabilité ne peut être imputée à l’étudiante, à
              l’étudiant, au professeur chargé du CAI ou au Cégep régional de
              Lanaudière concernant les services rendus.
            </li>
            <li>
              Aucune compensation de quelque nature que ce soit ne peut être
              exigée ou acceptée par la personne qui donne ou qui reçoit le
              service.
            </li>
            <li>
              Aucune garantie d’exactitude n’est donnée concernant les articles
              inscrits dans la documentaton du CAI.
            </li>
            <li>
              Attendu que je reconnais que le Cégep régional de Lanaudière
              n’exerce aucun rôle comme vendeur ou locateur de mon matériel
              informatique et qu’en raison de cette absence de titre, il n’a pas
              à assumer une responsabilité quelconque liée à l’entretien ou à la
              garantie de mon équipement informatique;
            </li>
            <li>
              Attendu que je soumets librement et sans attente quelconque mon
              équipement informatique à l’attention du Service informatique;
            </li>
            <li>
              Attendu que je reconnais que le Service informatique n’a pas
              d’obligation quant à l’identification des correctifs à apporter ni
              de réparer mon équipement informatique;
            </li>
            <li>
              Attendu que je reconnais avoir 18 ans et plus ou, qu’à défaut de
              quoi, la signature d’un de mes parents est nécessaire;
            </li>
            <li>
              Par la présente, j’autorise les employés du Service informatique à
              vérifier l’état de mon équipement informatique et, s’ils le jugent
              à propos, d’apporter les correctifs qu’ils jugent appropriés.
            </li>
            <li>
              Je suis conscient que s’il y a un bris, une perte de données ou
              tout autre dommage physique, matériel ou logiciel, je ne pourrai
              tenir le Service informatique, ses employés ou le collège
              constituant responsable des dommages.
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}
