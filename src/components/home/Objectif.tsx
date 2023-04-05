import ObjectifImg from "../../assets/objectif.jpeg";
import "./objectif.css";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Objectif = () => {
  return (
    <div className="home__objectif">
      <motion.div
        className="line"
        initial={{
          width: "60%",
          opacity: 0,
        }}
        viewport={{ once: true }}
        whileInView={{
          width: 10,
          opacity: 1,
          transition: {
            ease: "backOut",
            duration: 2,
          },
        }}
      ></motion.div>
      <div className="home__objectif__container">
        <div className="home__objectif__infos">
          <motion.h2
            initial={{
              opacity: 0,
              y: 100,
            }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "backOut",
                delay: 0.5,
                duration: 1.5,
              },
            }}
          >
            NOS OBJECTIFS
          </motion.h2>
          <p>
            <motion.span
              initial={{
                opacity: 0,
                y: 100,
              }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  ease: "backOut",
                  delay: 0.5,
                  duration: 1.5,
                },
              }}
            >
              Chez equato link group, nous savons que chaque client a des
              objectifs différents et spécifiques. Que vous souhaitiez augmenter
              votre chiffre d’affaires, renforcer votre positionnement sur votre
              marché ou accéder à de nouveaux marchés publics, nous avons les
              solutions qu’il vous faut.
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
                y: 100,
              }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  ease: "backOut",
                  delay: 0.5,
                  duration: 1.5,
                },
              }}
            >
              Nous vous accompagnons dans la définition et la réalisation de vos
              objectifs, en vous offrant des services de qualité et sur mesure.
              Nous mettons à votre disposition notre expertise, notre réseau et
              nos outils pour vous aider à optimiser votre performance et à
              atteindre vos ambitions.
            </motion.span>
          </p>
          <ul>
            <motion.li
              initial={{
                opacity: 0,
                y: 100,
              }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  ease: "backOut",
                  delay: 0.5,
                  duration: 1.5,
                },
              }}
            >
              <span>
                <FaCheckCircle />
              </span>
              Augmenter votre chiffre d’affaires et votre rentabilité en
              développant votre portefeuille clients et en fidélisant vos
              clients existants.
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                y: 100,
              }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  ease: "backOut",
                  delay: 0.5,
                  duration: 1.5,
                },
              }}
            >
              <span>
                <FaCheckCircle />
              </span>
              Renforcer votre positionnement et votre notoriété sur votre marché
              en vous différenciant de vos concurrents et en valorisant votre
              offre.
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                y: 100,
              }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  ease: "backOut",
                  delay: 0.5,
                  duration: 1.5,
                },
              }}
            >
              <span>
                <FaCheckCircle />
              </span>
              Accéder à de nouveaux marchés publics en répondant aux exigences
              des donneurs d’ordre et en remportant des contrats.
            </motion.li>
          </ul>
        </div>
        <motion.div
          className="home__objectif__img"
          initial={{
            opacity: 0,
            y: 100,
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: "backOut",
              delay: 0.5,
              duration: 1.5,
            },
          }}
        >
          <img src={ObjectifImg} alt="Objectif image" />
        </motion.div>
      </div>
    </div>
  );
};
export default Objectif;
