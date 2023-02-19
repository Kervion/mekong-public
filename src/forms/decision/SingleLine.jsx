// @ts-nocheck
import { Row, Col } from "react-bootstrap";
import React, { useState, useContext } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThreeToggle from "./ThreeToggle";
import ModalReject from "./ModalReject";
import { LangKontext } from "komponenty/Kontext";

function SingleLine(props) {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const [kolor, setKolor] = useState(-1);
  const [showhide, setShowhide] = useState(false);
  const toggleVisible = (ev) => {
    ev.stopPropagation();
    setShowhide((prev) => !prev);
  };
  const [showModalReject, setShowModalReject] = useState(false);
  const modalReject = <ModalReject show={showModalReject} setShow={setShowModalReject} setKolor={setKolor} />;
  const attachments = ["assets/mekong-1-180.jpg", "assets/mekong-2-180.jpg", "assets/mekong-3-180.jpg", "assets/mekong-4-180.jpg"];

  return (
    <div className="singleLineDetails mb-1">
      {modalReject}
      <div
        onClick={(ev) => toggleVisible(ev)}
        className="costNo_details"
        style={{
          backgroundColor: (kolor === -1 && "var(--ciemnyziel)") || (kolor === 0 && "var(--brazawy)") || (kolor === 1 && "var(--siano)"),
        }}
      >
        <div className="costbelka_left_details" style={{ color: kolor !== -1 ? "var(--ciemnyziel)" : "" }}>
          #{props.index}
        </div>
        <div>
          <ThreeToggle setKolor={setKolor} setShowModalReject={setShowModalReject} />
        </div>
        <div className="costbelka_right_details" style={{ color: kolor !== -1 ? "var(--ciemnyziel)" : "" }}>
          <FontAwesomeIcon icon={showhide ? faEye : faEyeSlash} className="awesome aw_pointer" onClick={(ev) => toggleVisible(ev)} />
        </div>
      </div>
      <div
        style={{
          visibility: showhide ? "visible" : "hidden",
          height: showhide ? "auto" : "0px",
        }}
      >
        <Row className="singleVisible_details">
          <Col xs={12} sm={6} className="text-start">
            <b>{TXT.lorem_ipsum}</b>
          </Col>
          <Col xs={12} sm={6} className="text-start">
            {attachments.map((att, index) => (
              <div key={index}>
                <a href={process.env.PUBLIC_URL + "/" + att} download className="a_download">
                  {att}
                </a>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SingleLine;
