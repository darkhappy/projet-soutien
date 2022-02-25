export default function Header(props) {
  return (
    <div className="bg-primary">
      <div className="container-fluid">
        <h1 className="display-2 fw-bold p-2">{props.title}</h1>
        <p className="text-black-70 fs-2 p-2">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}
