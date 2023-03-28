import { Link } from "react-router-dom";
import NavDesktop from "../navigation/desktop/NavDesktop";
import { motion } from "framer-motion";
import "./header.css";

const Header = () => {
  return (
    <div className="home__header">
      <div className="home__nav__container">
        <NavDesktop />
        <div className="home__header__content">
          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "easeOut",

                duration: 0.8,
                delay: 0.4,
              },
            }}
          >
            Bienvenue chez equato link group, votre partenaire de confiance pour
            le développement de votre business.
          </motion.h2>
          <motion.div
            className="line"
            initial={{
              width: 0,
            }}
            viewport={{ once: true }}
            whileInView={{
              width: "50%",
              transition: {
                ease: "easeOut",
                delay: 0.5,
                duration: 1,
              },
            }}
          ></motion.div>
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "easeOut",

                duration: 0.8,
                delay: 0.4,
              },
            }}
          >
            Nous sommes une entreprise spécialisée dans le business
            développement, apporteur d’affaires et gestion des marchés publics.
          </motion.p>
          <Link to="/contact">
            <span>Nous contacter</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
