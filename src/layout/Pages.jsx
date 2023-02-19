import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faInfoCircle, faSackDollar, faImage, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { LangKontext } from "komponenty/Kontext";
import React, { useContext } from "react";
import { pages } from "scripts/globals";

function Pages(props) {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const icons = [faInfoCircle, faSackDollar, faList, faHandshake, faImage];

  return (
    <>
      {pages.map((str, index) => (
        <NavLink key={str} to={"/" + str} className="navlink_bars" onClick={() => props.setShow(false)}>
          <FontAwesomeIcon icon={icons[index]} className="awesome aw_width_phone" />
          {TXT[str]}
        </NavLink>
      ))}
    </>
  );
}

export default Pages;
