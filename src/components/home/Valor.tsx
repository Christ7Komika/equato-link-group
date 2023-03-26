import TrustSVG from "../../assets/trust.svg";
import ListenSVG from "../../assets/listen.svg";
import InnovationSVG from "../../assets/innovation.svg";
import ExcellenceSVG from "../../assets/excellence.svg";

import "./valor.css";

const Valor = () => {
  return (
    <div className="home__valor">
      <div className="home__valor__container">
        <h2>Nos valeurs</h2>
        <div className="home__valor__items">
          <div className="home__valor__list">
            <div className="home__valor__item">
              <img src={ListenSVG} alt="" />
              <h2>L'ECOUTE</h2>
            </div>
            <div className="home__valor__item">
              <img src={TrustSVG} alt="" />
              <h2>LA CONFIANCE</h2>
            </div>
            <div className="home__valor__item">
              <img src={ExcellenceSVG} alt="" />
              <h2>L'EXECELLENCE</h2>
            </div>
            <div className="home__valor__item">
              <img src={InnovationSVG} alt="" />
              <h2>L'INNOVATION</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valor;
