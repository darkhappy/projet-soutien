import Card from 'react-bootstrap/Card';
import Logo from "../img/Shield_Logo.png"
export default function NavBar() {
  return (
    <Card>
      <Card.Footer>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-sm-3 mx-4">
          <p className="col-md-4 mb-0 text-muted">© 2022 Cégep Régionale de Lanaudière de Joliette</p>
          <a className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            href="/">
            <img height={45} width={38} src={Logo} className="d-inline-block align-top"  alt="Logo"/>
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a className="nav-link px-2 text-muted" href="https://cegep-lanaudiere-joliette.omnivox.ca">Retour à Omnivox</a></li>
          </ul>
        </footer>
      </Card.Footer>
    </Card>
    );
}
