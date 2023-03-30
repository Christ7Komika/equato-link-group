import Footer from "../components/footer/Footer";
import About from "../components/home/About";
import Header from "../components/home/Header";
import Objectif from "../components/home/Objectif";
import Parter from "../components/home/Partner";
import Services from "../components/home/Services";
import Valor from "../components/home/Valor";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Objectif />
      <Valor />
      <Parter />
      {/* 
      <Footer /> */}
    </>
  );
};

export default Home;
