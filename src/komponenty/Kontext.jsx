// @ts-nocheck
import { createContext, useState, useEffect } from "react";

import translationPL from "../json/language-PL.json";
import translationES from "../json/language-ES.json";
import translationEN from "../json/language-EN.json";

const objLangs = { PL: translationPL, EN: translationEN, ES: translationES };

let LANG = localStorage.getItem("lang");
let translation = [];
if (LANG === null) {
  translation = translationEN;
  LANG = "EN";
} else {
  translation = objLangs[LANG];
}

const LangKontext = createContext();

const KontextModule = ({ children }) => {
  const [zmienna, setZmienna] = useState({});

  useEffect(() => {
    setZmienna(translation[0]);
  }, []);

  return <LangKontext.Provider value={[zmienna, setZmienna]}>{children}</LangKontext.Provider>;
};

export { LangKontext, KontextModule, LANG };
