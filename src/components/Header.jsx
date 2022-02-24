export default function Header(props) {
  return (
    <header className="container-fluid bg-primary bg-gradient text-white mb-5">
      <div className="p-2 p-md-5">
        <div className="container py-3 py-md-5">
          <h1 className="display-2 fw-bold">{props.title}</h1>
          <p className="text-white-50 fs-2">{props.subtitle}</p>
        </div>
      </div>
    </header>
  );
}
