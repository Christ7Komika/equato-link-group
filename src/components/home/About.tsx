import "./about.css";
import { Variants, motion } from "framer-motion";

const About = () => {
  return (
    <div className="about__us">
      <motion.div
        className="about__us__line"
        initial={{
          width: "60%",
        }}
        viewport={{
          once: true,
        }}
        whileInView={{
          width: 10,
          transition: {
            ease: "easeIn",
            duration: 1,
          },
        }}
      ></motion.div>
      <div className="about__us__container">
        <div className="about__us__content">
          <motion.h2
            initial={{
              y: 100,
              opacity: 0,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                ease: "backInOut",
                delay: 0.8,
                duration: 0.8,
              },
            }}
          >
            QUI SOMMES NOUS ?
          </motion.h2>
          <motion.p
            initial={{
              y: 100,
              opacity: 0,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                ease: "backInOut",
                delay: 0.9,
                duration: 0.8,
              },
            }}
          >
            Equato Link Group est une entreprise spécialisée dans le business
            développement, l’apporteur d’affaires et la gestion des marchés
            publics. Nous accompagnons nos clients dans la réalisation de leurs
            projets, en leur offrant des solutions sur mesure et adaptées à
            leurs besoins. Nous disposons d’un réseau de partenaires qualifiés
            et expérimentés dans différents domaines d’activité. Que vous soyez
            une PME, une grande entreprise ou une administration publique, nous
            vous aidons à optimiser votre performance et à atteindre vos
            objectifs.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
