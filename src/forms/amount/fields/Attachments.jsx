// @ts-nocheck
import { Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { LangKontext } from "komponenty/Kontext";
import { useFormContext } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Modal } from "react-bootstrap";
import ButtonCounter from "./ButtonCounter";
import SingleAttch from "./SingleAttch";

function Attachments() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const attachTypes = ["jpg", "png", "pdf"];
  const maxSize = 3145728;

  const [showModalSize, setShowModalSize] = useState(false);
  const handleClose = () => setShowModalSize(false);
  const modal = (
    <Modal show={showModalSize} onHide={handleClose} centered>
      <Modal.Body className="d-flex justify-content-center modal_pops">
        {TXT.one_too_large}
        <br />
        {TXT.max_file}
      </Modal.Body>
    </Modal>
  );
  const [showModalType, setShowModalType] = useState(false);
  const handleCloseType = () => setShowModalType(false);
  const modalType = (
    <Modal show={showModalType} onHide={handleCloseType} centered>
      <Modal.Body className="d-flex justify-content-center modal_pops">
        {TXT.incorr_ftype}
        <br />
        {TXT.acc_types}: {attachTypes.join(", ")}
      </Modal.Body>
    </Modal>
  );

  const [counter, setCounter] = useState(1);
  const increase = () => {
    if (counter < 3) {
      setCounter((count) => count + 1);
    }
  };
  const decrease = () => {
    setValue("attachment" + counter, 0);
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
  };
  const { setValue, getValues, formState } = useFormContext();

  const validate = (x) => {
    if (getValues("attachment" + x + "[0].size") > maxSize) {
      setShowModalSize(true);
      setValue("attachment" + x, 0);
    } else {
      let extens = getValues("attachment" + x + "[0].name")
        .split(".")
        .pop();
      if (attachTypes.includes(extens)) {
      } else {
        setShowModalType(true);
        setValue("attachment" + x, 0);
      }
    }
  };

  const popover_pops = (
    <Popover id="popover_pops-basic">
      <Popover.Body className="popover_pops">
        {TXT.max_file}
        <br />
        {TXT.min_1_att}
        <br />
        <hr />
        {TXT.acc_types}: {attachTypes.join(", ")}
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      {modal}
      {modalType}
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <FontAwesomeIcon icon={faPaperclip} className="px-2 awesome_light" />
          <Form.Label>{TXT.attachments} *</Form.Label>

          <ButtonCounter f1={decrease} f2={increase} counter={counter} />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="form_error">{formState.errors.attachment1?.message}</div>
          <OverlayTrigger trigger={["hover", "focus", "click"]} placement="top" overlay={popover_pops}>
            <FontAwesomeIcon icon={faInfoCircle} className="icon_pops" />
          </OverlayTrigger>
        </div>
      </div>

      <SingleAttch n={1} counter={counter} validate={validate} />
      <SingleAttch n={2} counter={counter} validate={validate} />
      <SingleAttch n={3} counter={counter} validate={validate} />
    </>
  );
}
export default Attachments;
