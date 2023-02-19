import React from "react";
import Input_3 from "./Input_3";
import { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";

function ThirdColContent() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <b>{TXT.third_on_large}</b>
      {/* eslint-disable-next-line */}
      <Input_3 />
    </div>
  );
}

export default ThirdColContent;
