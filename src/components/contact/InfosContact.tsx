import { MdOutlineEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { BsTelephone } from "react-icons/bs";
import Circle from "../shape/Circle";
import "./infos_contact.css";
import { motion, Variants } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const InfosContact = () => {
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

  const element: Variants = {
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
  const child: Variants = {
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
    <div className="infos__contact">
      <Circle size={600} pos="left" />
      <Circle size={200} pos="middle" />
      <Circle size={500} pos="right" />
      <div className="infos__contact__container">
        <motion.div
          className="infos__contact__items"
          variants={parent}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div
            className="infos__contact__item"
            variants={element}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              className="infos__contact__head"
              variants={child}
            ></motion.div>
            <motion.div className="infos__contact__circle" variants={child}>
              <span>
                <MdOutlineEmail />
              </span>
            </motion.div>
            <motion.div className="infos__contact__body" variants={child}>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="infos__contact__item"
            variants={element}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              className="infos__contact__head"
              variants={child}
            ></motion.div>
            <motion.div className="infos__contact__circle" variants={child}>
              <span>
                <BsTelephone />
              </span>
            </motion.div>
            <motion.div className="infos__contact__body" variants={child}>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="infos__contact__item"
            variants={element}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              className="infos__contact__head"
              variants={child}
            ></motion.div>
            <motion.div className="infos__contact__circle" variants={child}>
              <span>
                <ImLocation />
              </span>
            </motion.div>
            <motion.div className="infos__contact__body" variants={child}>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="infos__contact__text">
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
                duration: 1,
              },
            }}
          >
            Nous contacter
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
                duration: 1,
              },
            }}
          >
            Vous avez des questions, des remarques ou des suggestions? Vous
            souhaitez en savoir plus sur nos services? N’hésitez pas à nous
            contacter via le formulaire ci-dessous. Nous vous répondrons dans
            les meilleurs délais.
          </motion.p>
        </div>

        <motion.form
          action=""
          className="form__contact"
          variants={element}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div
            className="form__group"
            variants={element}
            viewport={{ once: true }}
          >
            <motion.input
              type="text"
              placeholder="Nom *"
              required
              variants={child}
            />
            <motion.input
              type="text"
              placeholder="Prenom *"
              required
              variants={child}
            />
          </motion.div>
          <motion.input
            type="email"
            placeholder="Email *"
            required
            variants={child}
          />
          <motion.input
            type="text"
            placeholder="Numero de telephone *"
            required
            variants={child}
          />
          <motion.input
            type="text"
            placeholder="Objet du message *"
            required
            variants={child}
          />
          <motion.textarea
            placeholder="Message"
            variants={child}
          ></motion.textarea>
          <motion.button variants={child}>
            <motion.span variants={child} style={{cursor: "pointer"}}>
              Envoyer
              <FaPaperPlane />
            </motion.span>
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default InfosContact;
