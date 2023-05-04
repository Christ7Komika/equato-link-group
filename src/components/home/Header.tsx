import { Link } from "react-router-dom";
import NavDesktop from "../navigation/desktop/NavDesktop";
import { motion, Variants } from "framer-motion";
import "./header.css";
import { useEffect, useState } from "react";
import NavMobile from "../navigation/mobile/NavMobile";

const parent: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "backOut",
      when: "beforeChildren",
    },
  },
};
const text: Variants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "backOut",
      duration: 1.2,
      staggerChildren: 0.4,
    },
  },
};

const line: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "50%",
    opacity: 1,
    transition: {
      ease: "backOut",
      duration: 1.2,
      staggerChildren: 0.4,
    },
  },
};

const Header = () => {
  const [width, setWidth] = useState(innerWidth);
  const [text, setText] = useState();
  const lang = localStorage.getItem("lang");

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWidth((e.target as Window).innerWidth);
    });
  });

  useEffect(() => {}, []);

  return (
    <div className="home__header">
      <div className="home__nav__container">
        {width <= 750 ? <NavMobile /> : <NavDesktop />}
        <motion.div
          className="home__header__content"
          variants={parent}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={text}>
            Bienvenue chez equato link group, votre partenaire de confiance pour
            le développement de votre business.
          </motion.h2>
          <motion.div className="line" variants={line}></motion.div>
          <motion.p variants={text}>
            Nous sommes une entreprise spécialisée dans le business
            développement, apporteur d'affaires et de gestion des marchés
            publics.
          </motion.p>
          <motion.a variants={text}>
            <Link to="/contact">
              <motion.span variants={text}>Nous contacter</motion.span>
            </Link>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
