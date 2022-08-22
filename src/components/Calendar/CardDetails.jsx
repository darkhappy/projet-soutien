import { Badge, ListGroupItem } from "react-bootstrap";

export default function CardDetails({ name, location, desktop }) {
  const local = location === "c220" ? "Local C-220" : "Bibliothèque";
  return name ? (
    <ListGroupItem className="py-3 py-lg-2" key={location}>
      {desktop ? <h6>{name}</h6> : <h4 className="fw-light">{name}</h4>}
    </ListGroupItem>
  ) : null;
}
