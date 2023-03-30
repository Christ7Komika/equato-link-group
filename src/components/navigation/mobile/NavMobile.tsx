import "./nav_mobile.css";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useState } from "react";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav__mobile__container">
      <div className="nav__mobile__logo">
        <h1>LOGO</h1>
      </div>
      <span onClick={() => setIsOpen(true)}>
        <FaBars />
      </span>
      {isOpen && (
        <div className="nav__mobile__menu">
          <div className="nav__mobile__icon">
            <span onClick={() => setIsOpen(false)}>
              <RxCross1 />
            </span>
          </div>
          <div className="nav__mobile__list">
            <div className="nav__mobile__item">
              <Link to="/">Acceuil</Link>
            </div>
            <div className="nav__mobile__item">
              <Link to="/services">Services</Link>
            </div>
            <div className="nav__mobile__item">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="nav__mobile__social__network">
              <Link to="#">
                <AiFillFacebook />
              </Link>
              <Link to="#">
                <AiFillInstagram />
              </Link>
              <Link to="#">
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
