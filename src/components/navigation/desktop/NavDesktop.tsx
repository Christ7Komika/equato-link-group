import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import "./nav_desktop.css";
import { motion } from "framer-motion";

const NavDesktop = () => {
  const location = useLocation();

  return (
    <div className="nav__desktop__container">
      <div className="nav__desktop__logo">
        <h1>LOGO</h1>
      </div>

      <div className="nav__desktop_link">
        <Link to="/" className={location.pathname === "/" ? "selected" : ""}>
          <span>Acceuil</span>
        </Link>
        <Link
          to="/services"
          className={location.pathname === "/services" ? "selected" : ""}
        >
          <span>Services</span>
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "selected" : ""}
        >
          <span>Contact</span>
        </Link>
      </div>

      <div className="nav__desktop__media__social">
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
  );
};

export default NavDesktop;
