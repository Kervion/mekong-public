import React from "react";
import Input_1 from "./Input_1";
import { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";

function FirtsColContent() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <b>{TXT.always_first}</b>
      {/* eslint-disable-next-line */}
      <Input_1 />
    </div>
  );
}

export default FirtsColContent;
