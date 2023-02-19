import { Container } from "react-bootstrap";
import { LangKontext } from "komponenty/Kontext";
import React, { useContext } from "react";
import { DOMENA, LINK_KER } from "scripts/globals";
import zsize from "scripts/zsize.js";

function Info() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const isSmall = zsize((state) => state.isSmall);
  const teksty = [
    { bold: "AI", normal: TXT.fromdec },
    { bold: TXT.code, normal: `${TXT.incof} ${TXT.mekriv} ${TXT.usedai}` },
    { bold: TXT.mainstr, normal: `create-react-app (${TXT.testnon})` },
    { bold: TXT.usedlibr, normal: "axios, zustand, hook form, router, bootstrap, dnd..." },
    { bold: TXT.impfeat, normal: TXT.multilang },
    { bold: TXT.notimpl, normal: TXT.connlara },
    { bold: TXT.ftl, normal: TXT.starepr },
  ];

  return (
    <Container fluid className={`${isSmall ? "cont_info_phone" : "container_main"}`}>
      <div className="infoBckgr_texts flex-grow">
        <ul>
          <li className="info_texts">
            <span className="bold_texts"> {TXT.gitrepo} :</span>{" "}
            <a href="https://github.com/Kervion/mekong-public" target="_blank" rel="noreferrer">
              Mekong - public branch
            </a>
          </li>
          {teksty.map((tekst, index) => (
            <li key={index} className="info_texts">
              <span className="bold_texts">{tekst.bold} :</span> {tekst.normal}
            </li>
          ))}
          <li className="info_texts">
            <span className="bold_texts">{TXT.mypers} :</span>{" "}
            <a href={LINK_KER} target="_blank" rel="noreferrer">
              {DOMENA}
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Info;
