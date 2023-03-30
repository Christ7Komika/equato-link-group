import { Link } from "react-router-dom";
import NavDesktop from "../navigation/desktop/NavDesktop";
import { motion, Variants } from "framer-motion";
import "./header.css";
import { useEffect, useState } from "react";
import NavMobile from "../navigation/mobile/NavMobile";

const main: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      when: "beforeChildren",
    },
  },
};

const text: Variants = {
  hidden: {
    y: "100px",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Header = () => {
  const [width, setWidth] = useState(innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWidth((e.target as Window).innerWidth);
    });
  });

  return (
    <div className="home__header">
      <div className="home__nav__container">
        {width <= 750 ? <NavMobile /> : <NavDesktop />}
        <motion.div
          variants={main}
          initial="hidden"
          animate="visible"
          className="home__header__content"
        >
          <motion.h2 variants={text}>
            Bienvenue chez equato link group, votre partenaire de confiance pour
            le développement de votre business.
          </motion.h2>
          <motion.div className="line"></motion.div>
          <motion.p>
            Nous sommes une entreprise spécialisée dans le business
            développement, apporteur d’affaires et gestion des marchés publics.
          </motion.p>
          <Link to="/contact">
            <span>Nous contacter</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
