import NavDesktop from "../navigation/desktop/NavDesktop";
import "./header.css";

const Header = () => {
  return (
    <div className="custom__header">
      <div className="custom__header_container">
        <NavDesktop />
        <div className="custom__header__content">
          <h2>SERVICES</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ab
            inventore sapiente maxime unde assumenda! Quos quod ipsum rem ab,
            aspernatur voluptates sit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
