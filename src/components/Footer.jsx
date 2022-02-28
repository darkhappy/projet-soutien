import Card from 'react-bootstrap/Card';
import Logo from "../img/Shield_Logo.png"
export default function NavBar() {
  return (
    <Card>
      <Card.Footer>
          <div class="row">
            <div class="col-5 my-auto text-start"><p className="h5 text-muted">©2022 Cégep régional de Lanaudière à Joliette</p></div>
            <div class="col-2 my-auto"><a href="/"><img height={52} width={43} src={Logo} className="d-block mx-auto" alt="Logo" /></a></div>
            <div class="col-5 my-auto text-end"><a className="h5 text-muted nav-link" href="https://cegep-lanaudiere-joliette.omnivox.ca">Retour à Omnivox</a></div>
          </div>
      </Card.Footer>
    </Card>
  );
}
