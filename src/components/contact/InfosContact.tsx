import { FaPaperPlane } from "react-icons/fa";
import Circle from "../shape/Circle";
import "./infos_contact.css";

const InfosContact = () => {
  return (
    <div className="infos__contact">
      <Circle size={600} pos="left" />
      <Circle size={200} pos="middle" />
      <Circle size={500} pos="right" />
      <div className="infos__contact__container">
        <div className="infos__contact__items">
          <div className="infos__contact__item">
            <div className="infos__contact__head"></div>
            <div className="infos__contact__circle">
              <span>
                <FaPaperPlane />
              </span>
            </div>
            <div className="infos__contact__body">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="infos__contact__item">
            <div className="infos__contact__head"></div>
            <div className="infos__contact__circle">
              <span>
                <FaPaperPlane />
              </span>
            </div>
            <div className="infos__contact__body">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="infos__contact__item">
            <div className="infos__contact__head"></div>
            <div className="infos__contact__circle">
              <span>
                <FaPaperPlane />
              </span>
            </div>
            <div className="infos__contact__body">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>

        <div className="infos__contact__text">
          <h2>Nous contacter</h2>
          <p>
            Vous avez des questions, des remarques ou des suggestions? Vous
            souhaitez en savoir plus sur nos services? N’hésitez pas à nous
            contacter via le formulaire ci-dessous. Nous vous répondrons dans
            les meilleurs délais.
          </p>
        </div>

        <form action="" className="form__contact">
          <div className="form__group">
            <input type="text" placeholder="Nom *" required />
            <input type="text" placeholder="Prenom *" required />
          </div>
          <input type="email" placeholder="Email *" required />
          <input type="text" placeholder="Numero de telephone *" required />
          <input type="text" placeholder="Objet du message *" required />
          <textarea placeholder="Message"></textarea>
          <button>
            <span>
              Envoyer
              <FaPaperPlane />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfosContact;
