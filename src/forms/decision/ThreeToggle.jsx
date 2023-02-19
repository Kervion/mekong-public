import { faCheck, faHandPointLeft, faHandPointRight, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";
import React from "react";
import zsize from "scripts/zsize.js";

const ThreeToggle = (props) => {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const isSmall = zsize((state) => state.isSmall);
  function handleClick(x, e) {
    e.stopPropagation();
    if (x === -1) props.setKolor(-1);
    if (x === 0) props.setShowModalReject(true);
    if (x === 1) props.setKolor(1);
  }

  return (
    <>
      <InputGroup className="d-flex justify-content-center">
        <Button variant="primary" size="sm" onClick={(e) => handleClick(0, e)} className="tripleReject_details">
          <FontAwesomeIcon icon={faMinus} className="mx-2" />
          <span className="me-2">{!isSmall && TXT.reject}</span>
        </Button>
        <Button size="sm" variant="outline-primary" onClick={(e) => handleClick(-1, e)} className="triple_details">
          <FontAwesomeIcon icon={faHandPointLeft} className="mx-2" />
          {!isSmall && TXT.decide}
          <FontAwesomeIcon icon={faHandPointRight} className="mx-2" />
        </Button>
        <Button size="sm" variant="primary" onClick={(e) => handleClick(1, e)} className="tripleAccept_details">
          <span className="ms-2">{!isSmall && TXT.accept}</span>
          <FontAwesomeIcon icon={faCheck} className={isSmall ? "" : "mx-2"} />
        </Button>
      </InputGroup>
    </>
  );
};

export default ThreeToggle;
