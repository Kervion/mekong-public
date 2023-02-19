// @ts-nocheck
import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { LangKontext } from "komponenty/Kontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "react-confirm-alert/src/react-confirm-alert.css";
import { faMinus } from "@fortawesome/free-solid-svg-icons/index";

function ModalReject(props) {
  const handleClose = () => {
    props.setShow(false);
  };
  const text = useContext(LangKontext);
  const TXT = text[0];
  const [comments, setComments] = useState("");
  const maxchars = 30;
  const charsInfo = TXT.max + " " + maxchars + " " + TXT.chars;
  const [errorRequired, setErrorRequired] = useState(false);
  const [errorTooLong, setErrorTooLong] = useState(false);

  function rejectRequest() {
    props.setShow(false);
    setComments("");
    setErrorRequired(false);
    setErrorTooLong(false);
    props.setKolor(0);
  }

  const checkForm = () => {
    if (comments.length < 1) setErrorRequired(true);
    if (comments.length > maxchars) setErrorTooLong(true);
    if (comments.length > 0 && comments.length <= maxchars) {
      rejectRequest();
    }
  };

  useEffect(() => {
    if (comments.length > 0) setErrorRequired(false);
    if (comments.length <= maxchars) {
      setErrorTooLong(false);
    } else {
      setErrorTooLong(true);
    }
  }, [comments]);

  return (
    <Modal show={props.show} onHide={handleClose} centered>
      <Modal.Body className="d-flex flex-column modal_pops">
        <h4>{TXT.reason_rejection}</h4>
        <Form.Control name="rejection" as="textarea" value={comments} onChange={(e) => setComments(e.target.value)} />
        {errorRequired && <div className="form_error">{TXT.required}</div>}
        {errorTooLong && <div className="form_error">{charsInfo}</div>}
        <div className="d-flex justify-content-between">
          <Button variant="outline-primary" size="sm" className="btnReject_details short_buttons" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} className="awesome" />
            {TXT.cancel}
          </Button>
          <Button variant="outline-primary" size="sm" className="btnReject_details short_buttons" onClick={checkForm}>
            <FontAwesomeIcon icon={faMinus} className="awesome" />
            {TXT.reject}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalReject;
