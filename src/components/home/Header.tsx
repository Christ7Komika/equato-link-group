import { Link } from "react-router-dom";
import NavDesktop from "../navigation/desktop/NavDesktop";
import { motion, Variants } from "framer-motion";
import "./header.css";

const parent: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
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
      type: "spring",
      duration: 1.2,
      staggerChildren: 0.4,
    },
  },
};

const Header = () => {
  return (
    <div className="home__header">
      <div className="home__nav__container">
        <NavDesktop />
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
            développement, apporteur d’affaires et gestion des marchés publics.
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
