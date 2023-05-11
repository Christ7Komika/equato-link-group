import { useEffect, useState } from "react";
import France from "../../assets/Flag_of_France.png";
import England from "../../assets/Flag_of_the_United_Kingdom.png";
import Italy from "../../assets/ItaliaFlag.png";
import "./lang.css";
import { motion } from "framer-motion";
import i18n from "../../db/i18n";

const Lang = () => {
  const [open, setOpen] = useState(false);
  const [listLang, setLisLang] = useState([
    {
      id: 1,
      name: "fr",
      selected: true,
      flag: France,
    },
    {
      id: 2,
      name: "en",
      selected: false,
      flag: England,
    },
    {
      id: 3,
      name: "it",
      selected: false,
      flag: Italy,
    },
  ]);

  const [selectedLang, setSelectedLang] = useState({
    id: 1,
    name: "fr",
    flag: France,
  });

  useEffect(() => {
    localStorage.setItem("lang", selectedLang.name);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", selectedLang.name);
  }, [selectedLang]);

  return (
    <div className="lang--container">
      <div className="selected" onClick={() => setOpen(!open)}>
        <img src={selectedLang.flag} alt={selectedLang.name} />
      </div>
      {open && (
        <div className="list--lang">
          {listLang
            // .filter((lang) => lang.selected === false)
            .map((lang) => (
              <motion.div
                className="lang"
                key={lang.name}
                whileHover={{
                  scale: 1.1,
                }}
                onClick={() => {
                  setSelectedLang({ ...lang });
                  i18n.changeLanguage(lang.name);
                }}
              >
                <img src={lang.flag} alt={lang.name} />
              </motion.div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Lang;
