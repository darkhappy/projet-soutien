import Card from 'react-bootstrap/Card';
import Logo from "../img/Shield_Logo.png"
export default function NavBar() {
  return (
    <Card>
      <Card.Footer>
        <footer className="navbar navbar-inverse navbar-fixed-bottom">
          <p className="h5 text-muted">© 2022 Cégep régional de Lanaudière à Joliette</p>
          <a href="/"><img height={52} width={43} src={Logo} alt="Logo" /></a>
          <a className="h5 nav-link text-muted" href="https://cegep-lanaudiere-joliette.omnivox.ca">Retour à Omnivox</a>
        </footer>
      </Card.Footer>
    </Card>
  );
}
