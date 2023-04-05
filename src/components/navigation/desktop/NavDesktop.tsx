import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import "./nav_desktop.css";
import { motion } from "framer-motion";
import Logo from "../../../assets/logo.png";

const NavDesktop = () => {
  const location = useLocation();

  return (
    <div className="nav__desktop__container">
      <div className="nav__desktop__logo">
        <img src={Logo} alt="Logo Equato Link Group" />
      </div>

      <div className="nav__desktop_link">
        <Link to="/" className={location.pathname === "/" ? "selected" : ""}>
          <span>Acceuil</span>
        </Link>
        <Link
          to="/services"
          className={location.pathname === "/services" ? "selected" : ""}
        >
          <span>Nos Services</span>
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "selected" : ""}
        >
          <span>Nous Contact</span>
        </Link>
      </div>
      <div className="nav__desktop__media__social">
        <motion.a
          whileHover={{
            scale: 1.2,
          }}
        >
          <Link to="#">
            <AiFillFacebook size={24} />
          </Link>
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.2,
          }}
        >
          <Link to="#">
            <AiFillInstagram size={24} />
          </Link>
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.2,
          }}
        >
          <Link to="#">
            <AiFillLinkedin size={24} />
          </Link>
        </motion.a>
      </div>
    </div>
  );
};

export default NavDesktop;
