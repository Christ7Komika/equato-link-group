import {AiFillFacebook, AiFillInstagram, AiFillLinkedin} from "react-icons/ai"
import { Link } from "react-router-dom";
import "./nav_desktop.css"

const NavDesktop = () => {
    return <div className="nav__desktop__container">
        <div className="nav__desktop__logo">
            <h1>LOGO</h1>
        </div>

        <div className="nav__desktop_link">
            <Link to="/">
                <span>Acceuil</span>
            </Link>
            <Link to="/services" className="selected">
                <span>Services</span>
            </Link>
            <Link to="/contact">
                <span>Contact</span>
            </Link>
        </div>

        <div className="nav__desktop__media__social">
            <Link to="#">
                <AiFillFacebook/>
            </Link>
            <Link to="#">
                <AiFillInstagram/>
            </Link>
            <Link to="#">
                <AiFillLinkedin/>
            </Link>
        </div>
        
    </div>
}

export default NavDesktop;