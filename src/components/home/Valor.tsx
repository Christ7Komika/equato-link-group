import TrustSVG from "../../assets/trust.svg";
import ListenSVG from "../../assets/listen.svg";
import InnovationSVG from "../../assets/innovation.svg";
import ExcellenceSVG from "../../assets/excellence.svg";
import { Variants, motion } from "framer-motion";

import "./valor.css";

const Valor = () => {
  const parent: Variants = {
    hidden: {},
    visible: {
      opacity: 1,
      transition: {
        ease: "backOut",
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const card: Variants = {
    hidden: {
      opacity: 0,
      y: 150,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "backOut",
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };
  const content: Variants = {
    hidden: {
      opacity: 0,
      y: 150,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "backOut",
        duration: 0.8,
      },
    },
  };
  return (
    <div className="home__valor">
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
      <div className="home__valor__container">
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
          Nos valeurs
        </motion.h2>
        <motion.div
          className="home__valor__items"
          variants={parent}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
        >
          <div className="home__valor__list">
            <motion.div
              className="home__valor__item"
              variants={card}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
            >
              <motion.img src={ListenSVG} alt="" variants={content} />
              <motion.h2 variants={content}>L'ECOUTE</motion.h2>
            </motion.div>
            <motion.div
              className="home__valor__item"
              variants={card}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
            >
              <motion.img variants={content} src={TrustSVG} alt="" />
              <motion.h2 variants={content}>LA CONFIANCE</motion.h2>
            </motion.div>
            <motion.div
              className="home__valor__item"
              variants={card}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
            >
              <motion.img variants={content} src={ExcellenceSVG} alt="" />
              <motion.h2 variants={content}> L'EXECELLENCE</motion.h2>
            </motion.div>
            <motion.div
              className="home__valor__item"
              variants={card}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
            >
              <motion.img variants={content} src={InnovationSVG} alt="" />
              <motion.h2 variants={content}>L'INNOVATION</motion.h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Valor;
