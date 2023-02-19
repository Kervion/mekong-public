import React from "react";

// @ts-ignore
import flagaEN from "assets/EN.svg";
// @ts-ignore
import flagaPL from "assets/PL.svg";
// @ts-ignore
import flagaES from "assets/ES.svg";
import { Dropdown } from "react-bootstrap";

function Langs(props) {
  return (
    <>
      <Dropdown.Item eventKey="EN" active={props.country === "EN" ? true : false}>
        <img src={flagaEN} alt="flaga en" className="imgFlag"></img> English
      </Dropdown.Item>
      <Dropdown.Item eventKey="PL" active={props.country === "PL" ? true : false}>
        <img src={flagaPL} alt="flaga pl" className="imgFlag"></img> Polski
      </Dropdown.Item>

      <Dropdown.Item eventKey="ES" active={props.country === "ES" ? true : false}>
        <img src={flagaES} alt="flaga es" className="imgFlag"></img> Español
      </Dropdown.Item>
    </>
  );
}

export default Langs;
