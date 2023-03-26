import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__company">
          <h2>LOGO</h2>
          <p>
            Equato Link Group vous accompagnons dans vos projets avec
            professionnalisme et efficacité
          </p>
        </div>
        <div className="footer__link__group">
          <h2>LIEN</h2>
          <div className="footer_list">
            <Link to="/">
              <span>Acceuil</span>
            </Link>
            <Link to="/services" className="selected">
              <span>Nos Services</span>
            </Link>
            <Link to="/contact">
              <span>Nous Contacter</span>
            </Link>
          </div>
        </div>
        <div className="footer__contact">
          <h2>CONTACT</h2>
          <p>
            Pour plus d’infos sur tout ce qui concerne l’actualité au sein
            d’Equato Link Group, vous pouvez nous suivre sur nos différents
            réseaux sociaux.
          </p>
          <div className="footer__contact__social__network">
            <Link to="#">
              <AiFillFacebook />
            </Link>
            <Link to="#">
              <AiFillInstagram />
            </Link>
            <Link to="#">
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© Equato Link Group 2023</p>
      </div>
    </div>
  );
};

export default Footer;
