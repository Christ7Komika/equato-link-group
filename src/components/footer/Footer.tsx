import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./footer.css";
import { motion, Variants } from "framer-motion";

const Footer = () => {
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
    <div className="footer">
      <div className="footer__top">
        <motion.div
          className="footer__company"
          variants={card}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2 variants={content}>LOGO</motion.h2>
          <motion.p variants={content}>
            Equato Link Group vous accompagnons dans vos projets avec
            professionnalisme et efficacité
          </motion.p>
        </motion.div>
        <motion.div
          className="footer__link__group"
          variants={card}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2 variants={content}>LIEN</motion.h2>
          <motion.div
            className="footer_list"
            variants={card}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            <motion.a variants={content}>
              <Link to="/">
                <span>Acceuil</span>
              </Link>
            </motion.a>
            <motion.a variants={content}>
              <Link to="/services" className="selected">
                <span>Nos Services</span>
              </Link>
            </motion.a>
            <motion.a variants={content}>
              <Link to="/contact">
                <span>Nous Contacter</span>
              </Link>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="footer__contact"
          variants={card}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2 variants={content}>CONTACT</motion.h2>
          <motion.p variants={content}>
            Pour plus d’infos sur tout ce qui concerne l’actualité au sein
            d’Equato Link Group, vous pouvez nous suivre sur nos différents
            réseaux sociaux.
          </motion.p>
          <motion.div
            className="footer__contact__social__network"
            variants={card}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            <motion.a variants={content}>
              <Link to="#">
                <AiFillFacebook />
              </Link>
            </motion.a>
            <motion.a variants={content}>
              <Link to="#">
                <AiFillInstagram />
              </Link>
            </motion.a>
            <motion.a variants={content}>
              <Link to="#">
                <AiFillLinkedin />
              </Link>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <div className="footer__bottom">
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
              delay: 0.8,
              duration: 0.8,
            },
          }}
        >
          © Equato Link Group 2023
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
