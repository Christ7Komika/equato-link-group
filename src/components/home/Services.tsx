import "./services.css";
import { useLottie } from "lottie-react";
import BusinessDevelopment from "../../lottie/84726-business-meeting-animation.json";
import BusinessSuggesting from "../../lottie/34533-business-team.json";
import BusinessProvider from "../../lottie/72333-business-partners-handshaking-collaboration.json";
import BusinessMarket from "../../lottie/60257-business-analytics.json";

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
  return (
    <div className="home__services">
      <div className="home__services__container">
        <h2>Nos services</h2>
        <div className="home__services_items">
          <div className="home__services_item">
            <div className="home__services_item_content">
              <h2>Business développement</h2>
              <p>
                Nous vous aidons à identifier et à saisir les opportunités de
                croissance sur votre marché, en vous accompagnant dans la
                définition et la mise en œuvre de votre stratégie commerciale.
              </p>
            </div>
            <div className="home__services_item_icon">{Business}</div>
          </div>
          <div className="home__services_item">
            <div className="home__services_item_content">
              <h2>Conseil et accompagnement</h2>
              <p>
                Nous vous aidons à identifier et à saisir les opportunités de
                croissance sur votre marché, en vous accompagnant dans la
                définition et la mise en œuvre de votre stratégie commerciale.
              </p>
            </div>
            <div className="home__services_item_icon">{Suggest}</div>
          </div>
          <div className="home__services_item">
            <div className="home__services_item_content">
              <h2>Apporteur d’affaires</h2>
              <p>
                Nous vous mettons en relation avec des prospects qualifiés et
                intéressés par vos produits ou services, en utilisant notre base
                de données et nos outils de prospection.
              </p>
            </div>
            <div className="home__services_item_icon">{Provider}</div>
          </div>
          <div className="home__services_item">
            <div className="home__services_item_content">
              <h2>Gestion des marchés publics</h2>
              <p>
                Nous vous assistons dans la réponse aux appels d’offres publics,
                en vous conseillant sur les aspects juridiques, techniques et
                financiers de votre dossier.
              </p>
            </div>
            <div className="home__services_item_icon">{Market}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
