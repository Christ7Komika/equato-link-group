import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ListService from "../components/services/ListService";

const Services = () => {
  const title = "Services";
  const content =
    "Nous vous proposons des solutions sur mesure pour vous aider à développer votre activité, à optimiser votre performance et à renforcer votre compétitivité. Que vous soyez une PME, une grande entreprise ou une administration publique, nous mettons à votre disposition notre expertise, notre réseau et notre savoir-faire pour répondre à vos besoins et à vos attentes";
  return (
    <>
      <Header title={title} content={content} />
      <ListService />
      <Footer />
    </>
  );
};

export default Services;
