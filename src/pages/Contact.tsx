import InfosContact from "../components/contact/InfosContact";
import Map from "../components/contact/Map";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Contact = () => {
  const title = "Contact";
  const content =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae dolores minus eligendi eius cupiditate nobis.";

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
