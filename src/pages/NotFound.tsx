import { Link } from "react-router-dom";
import SearchNotFound from "../lottie/133454-page-not-found.json";
import "../not_found.css";
import { useLottie } from "lottie-react";

const NotFound = () => {
  const { View } = useLottie({
    animationData: SearchNotFound,
    loop: true,
    width: 300,
    height: 300,
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <div className="not__found">
      <div className="lottie__container">{View}</div>
      <div className="not__found__text">
        <h2>Oups page non trouvé</h2>
        <Link to="/">
          <span>Retourné à la page d'acceuil</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
