import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { DropdownButton, Dropdown } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { LangKontext, LANG } from "komponenty/Kontext";

// @ts-ignore
import translationPL from "json/language-PL.json";
// @ts-ignore
import translationEN from "json/language-EN.json";
// @ts-ignore
import translationES from "json/language-ES.json";

import Langs from "./Langs";

function Hamburger() {
  const text = useContext(LangKontext);
  const TXT = text[0];

  const objLangs = { PL: translationPL, EN: translationEN, ES: translationES };
  const [country, setCountry] = useState(LANG);
  const langs = ["EN", "PL", "ES"];

  const fireHamburger = (e) => {
    if (langs.includes(e)) {
      setCountry(e);
      localStorage.setItem("lang", e);
      text[1](objLangs[e][0]);
    }
  };

  return (
    <div className="mx-4">
      <DropdownButton
        onSelect={fireHamburger}
        align="end"
        id="dropdown-menu-align-end"
        title={
          <span>
            <FontAwesomeIcon icon={faBars} className="awesome_szarawy" />
          </span>
        }
      >
        <Dropdown.Header>
          <FontAwesomeIcon icon={faUser} className="me-2" /> {TXT.visitor}
        </Dropdown.Header>
        <Dropdown.Divider />
        <Dropdown.Header>{TXT.lang}</Dropdown.Header>
        <Langs country={country} />
      </DropdownButton>
    </div>
  );
}

export default Hamburger;
