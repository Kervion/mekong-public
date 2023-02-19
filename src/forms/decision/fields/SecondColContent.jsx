import React from "react";
import Input_2 from "./Input_2";
import { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";

function SecondColContent() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <b>{TXT.second_on_large}</b>
      {/* eslint-disable-next-line */}
      <Input_2 />
    </div>
  );
}

export default SecondColContent;
