import "./list_service.css";
import { motion, Variants } from "framer-motion";

const ListService = () => {
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
    <div className="list__service">
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
        <span>DECOUVREZ NOS DIFFERENTS SERVICES</span>
      </motion.h2>

      <div className="list__service__container">
        <div className="list_service_dark">
          <motion.div
            className="list__service_content"
            variants={card}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              className="list__service_img business"
              variants={content}
            ></motion.div>
            <motion.div
              className="list__service__infos"
              variants={card}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
            >
              <motion.h2 variants={content}>Business développement</motion.h2>
              <motion.div className="small__line" variants={line}></motion.div>
              <motion.p variants={content}>
                Vous avez un projet de développement de votre activité, mais
                vous ne savez pas comment le concrétiser? Vous cherchez à
                conquérir de nouveaux marchés, à diversifier votre offre ou à
                fidéliser vos clients? Equato Link Group vous accompagne dans la
                définition et la mise en œuvre de votre stratégie de business
                développement. Nous vous aidons à identifier les opportunités
                d'affaires, à analyser votre environnement concurrentiel, à
                définir vos objectifs et vos plans d'action. Nous vous apportons
                également notre soutien dans la recherche de financements, la
                négociation de contrats ou la création de partenariats.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            className="list__service_content"
            variants={card}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              className="list__service_img conseil"
              variants={content}
            ></motion.div>
            <motion.div
              className="list__service__infos "
              variants={card}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
            >
              <motion.h2 variants={content}>
                conseil et accompagnement
              </motion.h2>
              <motion.div className="small__line" variants={line}></motion.div>
              <motion.p variants={content}>
                Vous êtes une entreprise administrative et vous souhaitez
                améliorer votre performance et votre compétitivité? Vous voulez
                renforcer vos capacités managériales, organisationnelles ou
                financières? Equato Link Group vous apporte son conseil et son
                accompagnement personnalisés. Nous vous aidons à analyser vos
                forces et vos faiblesses, à définir vos axes d'amélioration et
                vos indicateurs de suivi. Nous vous proposons des solutions
                adaptées à vos besoins et à votre contexte. Nous vous formons et
                nous vous coachons pour renforcer vos compétences et celles de
                vos collaborateurs.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
        <div className="list_service_light">
          <motion.div
            className="list__service_content reverse"
            variants={card}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              className="list__service_img apporteur"
              variants={content}
            ></motion.div>
            <motion.div
              className="list__service__infos"
              variants={card}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
            >
              <motion.h2 variants={content}>Apporteur d'affaires</motion.h2>
              <motion.div className="small__line" variants={line}></motion.div>
              <motion.p variants={content}>
                Vous souhaitez augmenter votre chiffre d'affaires, mais vous
                n'avez pas le temps ou les ressources pour prospecter de
                nouveaux clients? Vous voulez bénéficier d'un réseau de contacts
                qualifiés et fiables? Equato Link Group vous propose son service
                d'apporteur d'affaires. Nous mettons en relation votre
                entreprise avec des prospects intéressés par vos produits ou
                services. Nous vous fournissons des leads qualifiés et vérifiés,
                que vous pouvez contacter directement pour leur proposer votre
                offre. Nous vous accompagnons également dans le suivi des
                relations commerciales et la fidélisation des clients.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            className="list__service_content reverse"
            variants={card}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              className="list__service_img market"
              variants={content}
            ></motion.div>
            <motion.div
              className="list__service__infos"
              variants={card}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
            >
              <motion.h2 variants={content}>
                Gestion des marchés publics
              </motion.h2>
              <motion.div className="small__line" variants={line}></motion.div>
              <motion.p variants={content}>
                Vous souhaitez répondre à des appels d'offres publics, mais vous
                ne savez pas comment vous y prendre? Vous voulez optimiser vos
                chances de remporter des marchés publics? Equato Link Group vous
                offre son expertise en matière de gestion des marchés publics.
                Nous vous aidons à identifier les opportunités de marchés
                publics adaptées à votre profil et à votre secteur d'activité.
                Nous vous assistons dans la rédaction et le montage des dossiers
                de candidature, en respectant les règles et les délais imposés.
                Nous vous conseillons également sur les aspects juridiques,
                techniques et financiers des marchés publics.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ListService;
