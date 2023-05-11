import "./loader.css";
import { useLottie } from "lottie-react";
import Load from "../../lottie/108165-white-loader.json";

const Loader = () => {
  const { View } = useLottie({
    animationData: Load,
    loop: true,
    width: "100%",
    height: "100%",
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <div className="loader">
      <div className="loader__container">{View}</div>
    </div>
  );
};

export default Loader;
