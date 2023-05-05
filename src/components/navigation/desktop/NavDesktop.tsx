import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import "./nav_desktop.css";
import { motion } from "framer-motion";
import Logo from "../../../assets/logo.png";
import Lang from "../../lang/Lang";
import { useTranslation } from "react-i18next";

const NavDesktop = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="nav__desktop__container">
      <div className="nav__desktop__logo">
        <img src={Logo} alt="Logo Equato Link Group" />
      </div>

      <div className="nav__desktop_link">
        <Link to="/" className={location.pathname === "/" ? "selected" : ""}>
          <span>{t("nav_firstlink")}</span>
        </Link>
        <Link
          to="/services"
          className={location.pathname === "/services" ? "selected" : ""}
        >
          <span>{t("nav_secondlink")}</span>
        </Link>
        <Link
          to="/employee"
          className={location.pathname === "/employee" ? "selected" : ""}
        >
          <span>{t("nav_thirdlink")}</span>
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "selected" : ""}
        >
          <span>{t("nav_fourthlink")}</span>
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
        <motion.a>
          <Lang />
        </motion.a>
      </div>
    </div>
  );
};

export default NavDesktop;
