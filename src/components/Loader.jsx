import { logoShield } from "../images";
import { useEffect, useState } from "react";
import "./_loading.scss";

export default function Loader() {
  const [overlay, setOverlay] = useState(true);

  useEffect(() => {
    setTimeout(() => setOverlay(false), 1250);
  });

  return (
    <div className={`${overlay ? "overlay" : "overlay hide-overlay"}`}>
      <div className="overlay-logo">
        <img src={logoShield} alt="Logo du site" />
        <p>Centre d'Aide Informatique</p>
      </div>
    </div>
  );
}
