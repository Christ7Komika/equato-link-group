import ObjectifImg from "../../assets/objectif.jpg";
import "./objectif.css";
import { FaCheckCircle } from "react-icons/fa";

const Objectif = () => {
  return (
    <div className="home__objectif">
      <div className="home__objectif__container">
        <div className="home__objectif__infos">
          <h2>NOS OBJECTIFS</h2>
          <p>
            <span>
              Chez equato link group, nous savons que chaque client a des
              objectifs différents et spécifiques. Que vous souhaitiez augmenter
              votre chiffre d’affaires, renforcer votre positionnement sur votre
              marché ou accéder à de nouveaux marchés publics, nous avons les
              solutions qu’il vous faut.
            </span>
            <span>
              Nous vous accompagnons dans la définition et la réalisation de vos
              objectifs, en vous offrant des services de qualité et sur mesure.
              Nous mettons à votre disposition notre expertise, notre réseau et
              nos outils pour vous aider à optimiser votre performance et à
              atteindre vos ambitions.
            </span>
          </p>
          <ul>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              Augmenter votre chiffre d’affaires et votre rentabilité en
              développant votre portefeuille clients et en fidélisant vos
              clients existants.
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              Renforcer votre positionnement et votre notoriété sur votre marché
              en vous différenciant de vos concurrents et en valorisant votre
              offre.
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              Accéder à de nouveaux marchés publics en répondant aux exigences
              des donneurs d’ordre et en remportant des contrats.
            </li>
          </ul>
        </div>
        <div className="home__objectif__img">
          <img src={ObjectifImg} alt="Objectif image" />
        </div>
      </div>
    </div>
  );
};
export default Objectif;
