import InfosContact from "../components/contact/InfosContact";
import Map from "../components/contact/Map";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Contact = () => {
  const title = "Contact";
  const content =
    "Vous cherchez à développer votre entreprise ? Nous pouvons vous aider. Contactez-nous pour discuter de vos besoins en matière de développement d'affaires et de stratégie de croissance.";

  return (
    <>
      <Header title={title} content={content} />
      <Map />
      <InfosContact />
      <Footer />
    </>
  );
};

export default Contact;
