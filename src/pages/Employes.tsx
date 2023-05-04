import EmployeeManage from "../components/employee/EmployeeManage";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Employes = () => {
  const title = "MANAGEMENT DU PERSONNEL";
  const content =
    "Chez Equato Link Group, nous sommes fiers de notre culture d'entreprise dynamique et collaborative. Nous croyons que la réussite de notre entreprise dépend de la réussite de nos employés";

  return (
    <>
      <Header title={title} content={content} />
      <EmployeeManage />
      <Footer />
    </>
  );
};

export default Employes;
