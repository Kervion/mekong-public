import React from "react";
import Input_4 from "./Input_4";
import { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";

function FourthColContent() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <b>{TXT.always_fourth}</b>
      {/* eslint-disable-next-line */}
      <Input_4 />
    </div>
  );
}

export default FourthColContent;
