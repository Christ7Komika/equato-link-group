import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import french from "./french.json";
import english from "./english.json";
import italian from "./italian.json";

i18next.use(initReactI18next).init({
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fr: {
      translation: french,
    },
    en: {
      translation: english,
    },
    it: {
      translation: italian,
    },
  },
});

export default i18next;
