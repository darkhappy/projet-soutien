import Header from "../components/Header";
import { Container } from "react-bootstrap";
import LogoImage from "../img/Shield_Logo.png";
import "../scss/loader.css";
import "../js/loader.js";

export default function Home() {
  return (
    <>
      <div id="overlay">
        <div id="overlay-logo">
          <img src={LogoImage} alt="Logo du site"/>
          <p>Centre d'Aide Informatique</p>
        </div>
      </div>
      <Header
        title="Accueil"
        subtitle="Bienvenue au Centre d'Aide Informatique"
      />
      <Container>
        <h1 className="mt-auto">JP va nous parler de ses animes préférés !</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
          auctor purus. Ut porttitor vel lectus quis vestibulum. Donec lobortis,
          nibh non mollis placerat, tellus libero mollis urna, ut elementum
          felis turpis non arcu. Vestibulum laoreet porta quam eget rhoncus.
          Quisque ultricies porttitor venenatis. Suspendisse sem ligula,
          molestie vitae sem id, tristique viverra mi. Duis eget tempus urna.
        </p>
        <p>
          Proin augue nulla, pretium feugiat convallis ac, interdum in dolor.
          Aenean gravida, nisi ac venenatis malesuada, sapien turpis ultricies
          mi, mattis tincidunt diam libero vitae risus. Cras eget velit ut purus
          sagittis pharetra at eu turpis. Vivamus et purus feugiat, pretium urna
          nec, consequat elit. Integer tincidunt felis suscipit, scelerisque
          justo et, venenatis ipsum. Mauris pretium, ipsum ut interdum dapibus,
          risus ipsum malesuada justo, sit amet congue nisi odio sed nulla. Nunc
          felis sapien, commodo congue mi eget, commodo pretium purus. Praesent
          vel accumsan erat, ut interdum metus. Aenean vulputate ex in turpis
          vestibulum tincidunt. Aenean sed metus est.
        </p>
        <p>
          Vivamus eros nisi, pretium eleifend blandit sed, gravida at eros.
          Integer ipsum lectus, molestie et cursus sit amet, imperdiet lobortis
          tortor. Ut et lectus nec nunc feugiat rutrum. Cras aliquet dapibus
          lectus. Suspendisse libero ligula, commodo sed blandit in, finibus sit
          amet est. Maecenas a est sit amet urna finibus sodales in volutpat ex.
          Morbi in lectus hendrerit, viverra ipsum dictum, maximus mi. Ut
          dapibus justo quis enim cursus, sit amet tincidunt ante dignissim. Nam
          erat nisl, aliquam non augue ac, vulputate molestie urna. In nec odio
          venenatis, porttitor lectus at, malesuada nulla. In vehicula pharetra
          odio, nec convallis sem lacinia eget. Quisque mattis tortor ligula, ut
          tempus est egestas id. Donec vehicula, augue congue sagittis
          condimentum, nisi metus sollicitudin libero, id tincidunt augue diam
          sit amet lacus. Sed aliquam, lectus et dapibus semper, enim ante
          volutpat urna, non molestie eros ligula quis ligula.
        </p>
        <p>
          Suspendisse a tristique turpis, at laoreet felis. Praesent iaculis
          scelerisque mauris vitae mattis. Donec sodales velit iaculis, tempus
          ex non, bibendum sapien. Nunc euismod mattis pharetra. Quisque lacinia
          nulla ac turpis egestas iaculis. Cras a vulputate urna. Proin enim
          ipsum, semper eu erat vitae, porta viverra dolor. Nunc sodales dui a
          lectus sodales, sit amet convallis mi iaculis.
        </p>
        <p>
          Phasellus vel tincidunt sapien. Nulla dictum pharetra sem, ac aliquet
          mauris aliquam in. Etiam sodales varius interdum. Ut porttitor purus
          eu libero euismod ultricies. Integer efficitur, ante sit amet
          condimentum placerat, velit massa lobortis nunc, sit amet commodo odio
          nisl sed orci. Donec quis sapien metus. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Aenean
          elementum nunc tincidunt magna gravida gravida. Phasellus ut ligula
          malesuada massa feugiat tristique. Aenean dapibus vulputate ligula
          pretium mollis. Morbi vestibulum ipsum et nisi scelerisque eleifend.
          Sed porttitor leo sit amet tellus sollicitudin faucibus. Morbi porta
          libero id ligula mollis scelerisque a id purus. Suspendisse ultricies,
          urna sed placerat pretium, mi risus viverra arcu, cursus luctus turpis
          urna non neque. Nullam blandit condimentum lorem, at gravida velit
          posuere quis.
        </p>
      </Container>
    </>
  );
}
