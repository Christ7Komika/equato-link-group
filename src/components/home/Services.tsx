import "./services.css";
import { useLottie } from "lottie-react";
import BusinessDevelopment from "../../lottie/84726-business-meeting-animation.json";
import BusinessSuggesting from "../../lottie/34533-business-team.json";
import BusinessProvider from "../../lottie/72333-business-partners-handshaking-collaboration.json";
import BusinessMarket from "../../lottie/60257-business-analytics.json";
import { motion, Variants } from "framer-motion";

const Services = () => {
  const { View: Business } = useLottie({
    animationData: BusinessDevelopment,
    loop: true,
    width: 200,
    height: 200,
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  const { View: Suggest } = useLottie({
    animationData: BusinessSuggesting,
    loop: true,
    width: 200,
    height: 200,
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  const { View: Provider } = useLottie({
    animationData: BusinessProvider,
    loop: true,
    width: 200,
    height: 200,
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  const { View: Market } = useLottie({
    animationData: BusinessMarket,
    loop: true,
    width: 200,
    height: 200,
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });

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

  const data = [
    {
      title: "Business développement",
      content: `
      Nous vous aidons à identifier et à saisir les opportunités de
      croissance sur votre marché, en vous accompagnant dans la
      définition et la mise en œuvre de votre stratégie commerciale.
      `,
      img: Business,
    },
    {
      title: "Conseil et accompagnement",
      content: `
      Nous travaillons en étroite collaboration avec les entreprises pour comprendre 
      leurs besoins et leurs objectifs, afin de leur fournir des solutions sur mesure. 
      `,
      img: Suggest,
    },
    {
      title: "Apporteur d'affaires",
      content: `
      Nous vous mettons en relation avec des prospects qualifiés et
      intéressés par vos produits ou services, en utilisant notre base
      de données et nos outils de prospection.
      `,
      img: Provider,
    },
    {
      title: "Gestion des marchés publics",
      content: `
      Nous vous assistons dans la réponse aux appels d’offres publics,
      en vous conseillant sur les aspects juridiques, techniques et
      financiers de votre dossier.
      `,
      img: Market,
    },
  ];

  return (
    <div className="home__services">
      <div className="home__services__container">
        <h2>
          <motion.span
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
            Nos services
          </motion.span>
          <motion.div
            className="line"
            initial={{
              width: 0,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{
              width: "calc(50% - 1rem)",
              transition: {
                ease: "easeIn",
                duration: 1,
              },
            }}
          ></motion.div>
        </h2>
        <motion.div
          className="home__services_items"
          variants={parent}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
        >
          {data.map((service, id) => (
            <motion.div
              variants={card}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              className="home__services_item"
              key={`home__services__item__${id}`}
            >
              <div className="home__services_item_content">
                <motion.h2 variants={content}>{service.title}</motion.h2>
                <motion.p variants={content}>{service.content}</motion.p>
              </div>
              <motion.div
                className="home__services_item_icon"
                variants={content}
              >
                {service.img}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
