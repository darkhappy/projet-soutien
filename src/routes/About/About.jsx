import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Header } from "../../components";

export default function About() {
  const title = "À propos";
  const subtitle = "À propos du Centre Aide en Informatique";

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header title={title} subtitle={subtitle} />
      <Container>
        <div
          className="p-3 m-3 border border-2 border-radius-5"
          id="qui-somme-nous"
        >
          <h3 className="mb-3">Qui sommes-nous?</h3>
          <p>
            Le CAI est un service offert aux étudiants et étudiantes du Cégep de
            Lanaudière à Joliette pour soutenir leurs apprentissages.
          </p>
          <p>
            Nous sommes des étudiants passionnés de l'informatique prêt à vous
            aider peu importe le problème que vous rencontrez. Vous trouverez
            réponses et conseils à vos questions.
          </p>
        </div>

        <div className="p-3 m-3 border border-2 border-radius-5" id="objectifs">
          <h3 className="mb-3">Les objectifs du CAI</h3>
          <ul>
            <li>
              Offrir aux étudiants et aux étudiantes un support informatique
              personnalisé.
            </li>
            <li>
              Offrir aux étudiants et étudiantes de la technique en informatique
              une vraie opportunité d'offrir un bon support informatique.
            </li>
            <li>
              Permettre l'entraide dans la communauté du cégep au niveau
              informatique, à travers le CAI.
            </li>
          </ul>
        </div>

        <div className="p-3 m-3 border border-2 border-radius-5" id="clientele">
          <h3 className="mb-3">La clientèle cible</h3>
          <p>
            Le CAI aidera dans un premier temps l'ensemble des étudiants du
            Cégep régional de Lanaudière à Joliette. Par la suite, nous
            répondrons à toute personne ayant des questions ou des problèmes
            liés à l'informatique et nous fournirons de l'aide personnalisée
            appropriée.
          </p>
        </div>

        <div className="p-3 m-3 border border-2 border-radius-5" id="forum">
          <h3 className="mb-3">Le forum</h3>
          <p>
            Le forum est une plateforme de discussions entre toute clientèle et
            les membres du CAI. Ce forum permet de répondre aux questions et aux
            problèmes rencontrés par la clientèle. Les messages sont publiés par
            les utilisateurs du site ainsi que par les membres modérateurs du
            CAI.
          </p>
        </div>

        <div className="p-3 m-3 border border-2 border-radius-5" id="terms">
          <h3 className="mb-3">Termes et conditions d'utilisations</h3>
          <p>
            Afin de bénéficier des services offerts par le centre d’aide en
            informatique, vous devez impérativement lire et accepter les
            conditions d’utilisation suivantes. Ces conditions d’utilisation
            sont liées à tout service reçu en personne ou par l’entremise du
            site Internet et/ou de son système de chat en direct.
          </p>
          <ul>
            <li>
              J'accepte qu'aucune responsabilité ne peut être attribué à
              l’étudiante ou l’étudiant, au professeur chargé du CAI et au Cégep
              régional de Lanaudière concernant les services rendus.
            </li>
            <li>
              J'accepte qu'aucune compensation de quelque nature que ce soit ne
              peut être exigée ou acceptée par la personne qui donne ou qui
              reçoit le service.
            </li>
            <li>
              Je reconnais qu'aucune garantie d’exactitude n’est donnée
              concernant les articles inscrits dans la documentaton du CAI.
            </li>
            <li>
              Je reconnais que le Cégep régional de Lanaudière n’exerce aucun
              rôle comme vendeur ou locateur de mon matériel informatique et
              qu’en raison de cette absence de titre, il n’a pas à assumer une
              responsabilité quelconque liée à l’entretien ou à la garantie de
              mon équipement informatique;
            </li>
            <li>
              Je suis à l'aise à soumettre librement aux personnes aidantes de
              ce service mon équipement informatique à l’attention du Soutien
              informatique;
            </li>
            <li>
              Je reconnais que le Service informatique n’a pas d’obligation
              quant à l’identification des correctifs à apporter ni de réparer
              mon équipement informatique;
            </li>
            <li>
              Je reconnais avoir bel et bien 18 ans et plus ou, à défaut de
              quoi, la signature d’un de mes parents est nécessaire;
            </li>
            <li>
              Par la présente, j’autorise les employés du Service informatique à
              vérifier l’état de mon équipement informatique et, s’ils le jugent
              nécessaires, d’apporter les correctifs qu’ils jugent appropriés.
            </li>
            <li>
              Je suis conscient que s’il y a un bris, une perte de données ou
              tout autre dommage physique, matériel ou logiciel, je ne pourrai
              tenir le Service informatique, ses employés ou le collège
              responsable des dommages.
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}
