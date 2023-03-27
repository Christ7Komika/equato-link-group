import { Link } from "react-router-dom";
import NavDesktop from "../navigation/desktop/NavDesktop";
import "./header.css";

const Header = () => {
  return (
    <div className="home__header">
      <div className="home__nav__container">
        <NavDesktop />
        <div className="home__header__content">
          <h2>
            Bienvenue chez equato link group, votre partenaire de confiance pour
            le développement de votre business.
          </h2>
          <p>
            Nous sommes une entreprise spécialisée dans le business
            développement, apporteur d’affaires et gestion des marchés publics.
          </p>
          <Link to="/contact">
            <span>Nous contacter</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
