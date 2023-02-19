import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";
import { useFormContext } from "react-hook-form";
import { useWindowSize } from "scripts/globals.js";

function Buttons() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const width = useWindowSize();
  const { reset } = useFormContext();

  return (
    <>
      {" "}
      <Button size="sm" onClick={() => reset()} className="button_bottom_nav mx-2">
        <FontAwesomeIcon icon={faXmark} className="awesome" /> {width <= 1200 ? TXT.with_req_short : TXT.with_req}
      </Button>
      <Button size="sm" className="button_bottom_nav mx-2" type="submit">
        <FontAwesomeIcon icon={faPaperPlane} className="awesome" /> {width <= 1200 ? TXT.next_step_short : TXT.next_step}
      </Button>
    </>
  );
}
export default Buttons;
