import React, { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";
import "react-confirm-alert/src/react-confirm-alert.css";
import { MAIL, KERVION } from "scripts/globals";
import zsize from "scripts/zsize.js";

function FirstColumn() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const isSmall = zsize((state) => state.isSmall);

  return (
    <div className={isSmall ? "kolumna_forms kcenter" : "kolumna_forms lefttopcorner kleft"}>
      <div
        style={{
          textAlign: "right",
        }}
      >
        <span className="label_texts">{TXT.author} :</span>{" "}
        <span
          style={{
            fontSize: "24px",
            color: "antiquewhite",
          }}
        >
          Q {KERVION}
        </span>
        <br />
        <span className="label_texts">{TXT.email} :</span>{" "}
        <a href={"mailto:" + MAIL + "?subject=From%Mekong%River"} className="a_texts">
          {MAIL}
        </a>
      </div>
      <br />
      <div className="tekst_texts">
        {TXT.the_label_ai}

        <br />
        <br />
        <div className="deco_texts">{TXT.good_luck}</div>
      </div>
    </div>
  );
}
export default FirstColumn;
