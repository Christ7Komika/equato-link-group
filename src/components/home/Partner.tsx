import "./partner.css";
import { Variants, motion } from "framer-motion";

const Parter = () => {
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
    <div className="home__partner">
      <div className="home__partner__block"></div>
      <div className="home__partner__container">
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
          Nos partenaires
        </motion.h2>
        <motion.div
          className="home__partner__items"
          variants={card}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div className="home__partner__item" variants={content}>
            1
          </motion.div>
          <motion.div className="home__partner__item" variants={content}>
            1
          </motion.div>
          <motion.div className="home__partner__item" variants={content}>
            1
          </motion.div>
          <motion.div className="home__partner__item" variants={content}>
            1
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Parter;
