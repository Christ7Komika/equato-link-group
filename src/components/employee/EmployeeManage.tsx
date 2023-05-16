import "./employeeManage.css";
import { motion, Variants } from "framer-motion";
import FAQ from "../../assets/faq.svg";
import { useState } from "react";
import PLM from "../../assets/employee/placement.jpg";
import SV from "../../assets/employee/suivi.jpg";
import EVT from "../../assets/employee/evaluation.jpg";

const EmployeeManage = () => {
  const [currentId, setCurrentId] = useState(1);
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

  const line: Variants = {
    hidden: {
      width: 0,
    },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        ease: "backOut",
        duration: 1.2,
        staggerChildren: 0.4,
      },
    },
  };
  return (
    <div className="list__employee">
      <motion.div
        className="line"
        initial={{
          width: "50%",
        }}
        viewport={{
          once: true,
        }}
        whileInView={{
          width: "2rem",
          transition: {
            ease: "backInOut",
            duration: 1,
          },
        }}
      ></motion.div>
      <motion.h2
        initial={{
          opacity: 0,
          y: 200,
        }}
        viewport={{
          once: true,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            ease: "backInOut",
            delay: 0.2,
            duration: 1,
          },
        }}
      >
        <span>NOS SERVICES DE PLACEMENT DU PERSONNEL</span>
      </motion.h2>
      <div className="list__employee__container">
        <div className="list_employee_light">
          <motion.div
            className="list__employee_content reverse"
            variants={card}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              className="list__employee_img apporteur"
              id="unique"
              variants={card}
            >
              <motion.div
                className="first__img"
                variants={content}
              ></motion.div>
              <motion.div
                className="second__img"
                variants={content}
              ></motion.div>
            </motion.div>
            <motion.div
              className="list__employee__infos"
              variants={card}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
            >
              <motion.h2 variants={content}>Recrutement</motion.h2>
              <motion.p variants={content}>
                Nous cherchons, sélectionnons et présentons des candidats
                potentiels aux employeurs, en tenant compte de leurs
                compétences, de leur expérience et de leur adéquation au poste.
                <br />
                Nous comptons sur notre réseau de contacts professionnels et
                notre plateforme de recrutement en ligne pour trouver les
                candidats plus qualifiés en fonction des besoins de nos clients.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="list__employee_content reverse"
            variants={card}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              className="list__employee_img market"
              variants={content}
            ></motion.div>
            <motion.div
              className="list__employee__infos"
              variants={card}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
            >
              <motion.h2 variants={content}>SÉLECTION</motion.h2>
              <motion.p variants={content}>
                Nous employons un processus qui vise à choisir les candidats les
                plus aptes à occuper un poste au sein de l'entreprise du client
                ou d'une organisation. Nous procédons à des entrevues
                individuelles et à des évaluations approfondies pour faire en
                sorte que chaque candidat soit qualifié pour le poste en
                question. Nous nous efforçons de garantir que chaque candidat
                est parfaitement adapté à la culture de l'entreprise du client.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          variants={card}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          className="employee__faq__container"
        >
          <motion.div className="employee__faq__content" variants={card}>
            <motion.div className="faq__img" variants={content}>
              {currentId === 1 ? (
                <motion.img
                  src={data[0].img}
                  alt="Evaluation Image"
                  variants={content}
                />
              ) : currentId === 2 ? (
                <motion.img
                  src={data[1].img}
                  alt="Placement Image"
                  variants={content}
                />
              ) : (
                <motion.img
                  src={data[2].img}
                  alt="Suivi Image"
                  variants={content}
                />
              )}
            </motion.div>
            <motion.div className="faq__element" variants={card}>
              <motion.h3 variants={content}>
                NOTRE GESTION DE RESSOURCE HUMAINE
              </motion.h3>
              {data
                .filter((response) => response.id === currentId)
                .map((response) => (
                  <motion.div
                    layout
                    initial={{
                      opacity: 0,
                      x: 100,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    className="faq__box response"
                    variants={content}
                  >
                    <span>{response.content}</span>
                  </motion.div>
                ))}
              <motion.div
                className={currentId === 1 ? "faq__box active" : "faq__box"}
                variants={content}
                onClick={() => setCurrentId(1)}
              >
                <span>Évaluation</span>
              </motion.div>
              <motion.div
                className={currentId === 2 ? "faq__box active" : "faq__box"}
                variants={content}
                onClick={() => setCurrentId(2)}
              >
                <span>Placement</span>
              </motion.div>
              <motion.div
                className={currentId === 3 ? "faq__box active" : "faq__box"}
                variants={content}
                onClick={() => setCurrentId(3)}
              >
                <span>Suivi</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    content: `À l'aide d'outils d'évaluation de pointe, nous mesurons les compétences techniques et comportementales de chaque candidat.Une évaluation psychométrique peut être fournie pour déterminer la personnalité, les valeurs et les motivations des candidats.`,
    img: EVT,
  },
  {
    id: 2,
    content: `Nous travaillons en étroite collaboration avec nos clients afin de leur offrir des candidats qui répondent à leurs besoins en matière de compétences, d'expérience et de culture organisationnelle.
    Nous nous engageons à garantir que chaque candidat est placé dans un poste qui leur convient parfaitement`,
    img: PLM,
  },
  {
    id: 3,
    content: `
    Nous restons en contact avec nos clients et les candidats tout au long de la durée du contrat pour nous assurer que tout se passe bien.
    Nous sommes disponibles pour aider à résoudre tout problème qui pourrait survenir pendant le placement.
    `,

    img: SV,
  },
];

export default EmployeeManage;
