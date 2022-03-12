import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "./components";
import { useEffect, useState } from "react";
import { logoShield } from "./images";
import "./scss/_loading.scss";

function App() {
  const [overlay, setOverlay] = useState(true);

  useEffect(() => {
    setTimeout(() => setOverlay(false), 1250);
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className={`overlay ${overlay ? "" : "hide-overlay"}`}>
        <div className="overlay-logo">
          <img src={logoShield} alt="Logo du site" />
          <p>Centre d'Aide Informatique</p>
        </div>
      </div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
