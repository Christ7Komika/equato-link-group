import "./nav_mobile.css";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Logo from "../../../assets/logo.png";

const parent: Variants = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "backInOut",
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};
const element: Variants = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "backInOut",
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="nav__mobile__container">
      <div className="nav__mobile__logo">
        <img src={Logo} alt="Logo Equato link group" />
      </div>
      <span onClick={() => setIsOpen(true)}>
        <FaBars />
      </span>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav__mobile__menu"
            variants={parent}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="nav__mobile__icon" variants={element}>
              <span onClick={() => setIsOpen(false)}>
                <RxCross1 />
              </span>
            </motion.div>
            <motion.div className="nav__mobile__list" variants={element}>
              <motion.div className="nav__mobile__item" variants={element}>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "selected" : ""}
                >
                  Acceuil
                </Link>
              </motion.div>
              <motion.div className="nav__mobile__item" variants={element}>
                <Link
                  to="/services"
                  className={
                    location.pathname === "/services" ? "selected" : ""
                  }
                >
                  Nos Services
                </Link>
              </motion.div>
              <motion.div className="nav__mobile__item" variants={element}>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "selected" : ""}
                >
                  Nous Contact
                </Link>
              </motion.div>
              <motion.div
                className="nav__mobile__social__network"
                variants={element}
              >
                <Link to="#">
                  <AiFillFacebook size={24} />
                </Link>
                <Link to="#">
                  <AiFillInstagram size={24} />
                </Link>
                <Link to="#">
                  <AiFillLinkedin size={24} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
