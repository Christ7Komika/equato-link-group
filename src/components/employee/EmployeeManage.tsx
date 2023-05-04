import "./employeeManage.css";
import { AnimatePresence, motion, Variants } from "framer-motion";
import FAQ from "../../assets/faq.svg";
import { useState } from "react";
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
        <span>GESTION DU PERSONNEL ET RECRUTEEMENT</span>
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
              <motion.h2 variants={content}>NOTRE PERSONNEL</motion.h2>
              <motion.p variants={content}>
                Equato Link Group considère son personnel comme sa plus grande
                ressource et s'efforce de créer un environnement de travail
                positif et inclusif, où les employés peuvent se développer
                professionnellement et se sentir en sécurité. Ils offrent des
                programmes de formation et des avantages sociaux compétitifs
                pour garantir le bien-être des employés. Equato Link Group est
                également engagé à offrir un environnement de travail sûr et
                sain et à encourager une communication ouverte et transparente
                avec ses employés.
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
              <motion.h2 variants={content}>RECRUTEMENT</motion.h2>
              <motion.p variants={content}>
                Equato Link Group recherche constamment des candidats talentueux
                pour rejoindre son équipe dynamique et diversifiée. L'entreprise
                offre des opportunités de carrière passionnantes dans différents
                domaines et valorise la diversité et l'inclusion. Elle recherche
                des candidats ayant une solide expérience professionnelle et des
                compétences techniques, mais également des compétences
                interpersonnelles et une personnalité alignée avec ses valeurs
                d'intégrité, de respect, de collaboration et d'excellence. Les
                candidatures de personnes de toutes les origines et de tous les
                horizons sont encouragées, et les candidats passionnés, prêts à
                relever des défis et à travailler en équipe sont invités à
                postuler en ligne sur la page de recrutement d'Equato Link
                Group.
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
              <motion.img src={FAQ} alt="FAQ svg" variants={content} />
            </motion.div>
            <motion.div className="faq__element" variants={card}>
              <motion.h3 variants={content}>FAQ</motion.h3>
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
                <span>
                  Quels sont les services offerts par Equato Link Group ?
                </span>
              </motion.div>
              <motion.div
                className={currentId === 2 ? "faq__box active" : "faq__box"}
                variants={content}
                onClick={() => setCurrentId(2)}
              >
                <span>Comment puis-je contacter Equato Link Group ?</span>
              </motion.div>
              <motion.div
                className={currentId === 3 ? "faq__box active" : "faq__box"}
                variants={content}
                onClick={() => setCurrentId(3)}
              >
                <span>
                  Quelles sont les qualifications requises pour travailler chez
                  Equato Link Group ?
                </span>
              </motion.div>
              <motion.div
                className={currentId === 4 ? "faq__box active" : "faq__box"}
                variants={content}
                onClick={() => setCurrentId(4)}
              >
                <span>
                  Combien de temps faut-il pour obtenir un contrat public avec
                  l'aide d'Equato Link Group ?
                </span>
              </motion.div>
              <motion.div
                className={currentId === 5 ? "faq__box active" : "faq__box"}
                variants={content}
                onClick={() => setCurrentId(5)}
              >
                <span>
                  Comment Equato Link Group garantit-il la qualité de ses
                  services ?
                </span>
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
    content:
      "Equato Link Group est une entreprise spécialisée dans le business développement, l'apporteur d'affaires et la gestion des marchés publics. Nous offrons une gamme complète de services pour aider les entreprises à identifier des opportunités de croissance, à obtenir des contrats publics et à gérer efficacement les projets.",
  },
  {
    id: 2,
    content:
      "Vous pouvez nous contacter en utilisant le formulaire de contact sur notre site Web, en envoyant un e-mail à notre équipe d'assistance à la clientèle ou en nous appelant directement. Toutes nos coordonnées sont disponibles sur notre page de contact.",
  },
  {
    id: 3,
    content:
      "Nous recherchons des candidats ayant une solide expérience professionnelle et des compétences techniques dans divers domaines, tels que le business développement, la gestion des marchés publics et la gestion de projet. Nous attachons également une grande importance aux compétences interpersonnelles et à la personnalité. Nous valorisons la diversité et l'inclusion et encourageons les candidatures de personnes de toutes les origines et de tous les horizons.",
  },
  {
    id: 4,
    content:
      "Le temps nécessaire pour obtenir un contrat public dépend de nombreux facteurs, tels que le type de contrat, le secteur d'activité et les réglementations en vigueur. Chez Equato Link Group, nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et les aider à obtenir des contrats publics dans les délais les plus courts possibles.",
  },
  {
    id: 5,
    content:
      "Nous sommes engagés à fournir des services de haute qualité à nos clients en étant honnêtes, transparents et professionnels. Nous employons des experts qualifiés dans divers domaines pour fournir des services de pointe à nos clients. De plus, nous suivons des normes élevées en matière de gestion de projet pour garantir la qualité et la satisfaction du client.",
  },
];

export default EmployeeManage;
