// @ts-nocheck
import { useFormContext } from "react-hook-form";
import { useContext, useState } from "react";
import { LangKontext } from "komponenty/Kontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Modal, OverlayTrigger, Popover, Form, FormGroup } from "react-bootstrap";

function Amount() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  //MODALS
  const [showFirstChar, setFirstCharModal] = useState(false);
  const handleFirstChar = () => setFirstCharModal(false);
  const modalFirstChar = (
    <Modal show={showFirstChar} onHide={handleFirstChar} centered>
      <Modal.Body className="d-flex justify-content-center modal_pops">{TXT.firts_char_must}</Modal.Body>
    </Modal>
  );
  const [showOnlyDigits, setOnlyDigitsModal] = useState(false);
  const handleOnlyDigits = () => setOnlyDigitsModal(false);
  const modalOnlyDigits = (
    <Modal show={showOnlyDigits} onHide={handleOnlyDigits} centered>
      <Modal.Body className="d-flex justify-content-center modal_pops">{TXT.only_dig_spa}</Modal.Body>
    </Modal>
  );
  const [showOnlyPoint, setOnlyPointModal] = useState(false);
  const handleOnlyPoint = () => setOnlyPointModal(false);
  const modalOnlyPoint = (
    <Modal show={showOnlyPoint} onHide={handleOnlyPoint} centered>
      <Modal.Body className="d-flex justify-content-center modal_pops">{TXT.only_point_comma}</Modal.Body>
    </Modal>
  );
  const [showOnlyOnesep, setOnlyOnesepModal] = useState(false);
  const handleOnlyOnesep = () => setOnlyOnesepModal(false);
  const modalOnlyOnesep = (
    <Modal show={showOnlyOnesep} onHide={handleOnlyOnesep} centered>
      <Modal.Body className="d-flex justify-content-center modal_pops">{TXT.only_1_sep}</Modal.Body>
    </Modal>
  );
  const [showOnlytwo, setOnlytwoModal] = useState(false);
  const handleOnlytwo = () => setOnlytwoModal(false);
  const modalOnlytwo = (
    <Modal show={showOnlytwo} onHide={handleOnlytwo} centered>
      <Modal.Body className="d-flex justify-content-center modal_pops">{TXT.only_2_digs}</Modal.Body>
    </Modal>
  );
  const [showMaxnumb, setMaxnumbModal] = useState(false);
  const handleMaxnumb = () => setMaxnumbModal(false);
  const modalMaxnumb = (
    <Modal show={showMaxnumb} onHide={handleMaxnumb} centered>
      <Modal.Body className="d-flex justify-content-center modal_pops">{TXT.max_numb}</Modal.Body>
    </Modal>
  );
  const [showAmvalue, setAmvalueModal] = useState(false);
  const handleAmvalue = () => setAmvalueModal(false);
  const modalAmvalue = (
    <Modal show={showAmvalue} onHide={handleAmvalue} centered>
      <Modal.Body className="d-flex justify-content-center modal_pops">{TXT.amount_value}</Modal.Body>
    </Modal>
  );

  const { register, formState, setValue, getValues } = useFormContext();

  // STATE VALIDATED BEFORE FORMATTING
  const [amountValidated, setAmountValidated] = useState(false);

  // THOUSAND SEPARATORS
  let withSeps;
  const insertThousandSeparators = (stringWithoutSeparators) => {
    let lenfp = stringWithoutSeparators.length;
    switch (lenfp) {
      case 4:
      case 5:
      case 6:
        withSeps = [stringWithoutSeparators.slice(0, lenfp - 3), " ", stringWithoutSeparators.slice(lenfp - 3)].join("");
        break;
      case 7:
      case 8:
      case 9:
        withSeps = [stringWithoutSeparators.slice(0, lenfp - 3), " ", stringWithoutSeparators.slice(lenfp - 3)].join("");
        withSeps = [withSeps.slice(0, lenfp - 6), " ", withSeps.slice(lenfp - 6)].join("");
        break;
      default:
        withSeps = stringWithoutSeparators;
        break;
    }
    return withSeps;
  };

  /////////////////////////////////////////////////////////
  ////// VALIDATION STARTS HERE
  /////////////////////////////////////////////////////////

  // PART 1 : VALIDATION ON CHANGE
  const fireAmountValidationOnChange = () => {
    let currentAmountValue = getValues("amount");
    let firstChar = currentAmountValue.charAt(0);
    let secondPart;
    let firstPart;
    let indexPoint;
    let indexComma;
    let indexSeparator;

    // #1 CHECKING FIRST CHARACTER
    if (!(firstChar >= "0" && firstChar <= "9")) {
      if (firstChar === "," || firstChar === ".") {
        setValue("amount", "0" + currentAmountValue);
      } else {
        if (currentAmountValue !== "") {
          setFirstCharModal(true);
          setValue("amount", "");
        }
      }
    }
    // END FIRST CHARACTER

    // #2 CHECKING CHARACTER AFTER FIRST ZERO
    currentAmountValue = getValues("amount");
    firstChar = currentAmountValue.charAt(0);
    if (firstChar === "0") {
      let secondChar = currentAmountValue.charAt(1);
      if (!(secondChar === "," || secondChar === ".") && secondChar !== "") {
        setOnlyPointModal(true);
        setValue("amount", "0,");
      }
    }
    // END CHECKING 0x

    // #3 CHECK IF ONLY DIGITS SPACES, POINT OR COMMA
    let isCorrectForm = /^[0-9.,\s]+$/.test(currentAmountValue);
    if (!isCorrectForm && currentAmountValue !== "") {
      setOnlyDigitsModal(true);
      let numeric = currentAmountValue.replace(/[^0-9.,\s]/g, "");
      setValue("amount", numeric);
    }
    // END DIGITS ONLY

    // #4 REMOVE TOO MANY SEPARATORS...
    currentAmountValue = getValues("amount");
    let countSeparators = (currentAmountValue.match(/[.,]/g) || []).length;
    if (countSeparators > 1) {
      setOnlyOnesepModal(true);
      indexPoint = currentAmountValue.indexOf(".");
      indexComma = currentAmountValue.indexOf(",");
      if (indexPoint === -1 || indexComma === -1) {
        indexSeparator = Math.max(indexPoint, indexComma);
      } else {
        indexSeparator = Math.min(indexPoint, indexComma);
      }
      firstPart = currentAmountValue.substring(0, indexSeparator + 1);
      secondPart = currentAmountValue.substring(indexSeparator + 1);
      secondPart = secondPart.replace(/[.,]/g, "");
      setValue("amount", firstPart + secondPart);
    }
    // END TOO MANY SEPARATORS

    // #5 MAX 2 DIGITS AFTER SEPARATOR
    currentAmountValue = getValues("amount");
    indexPoint = currentAmountValue.indexOf(".");
    indexComma = currentAmountValue.indexOf(",");
    if (indexPoint !== -1 || indexComma !== -1) {
      indexSeparator = Math.max(indexPoint, indexComma);
      firstPart = currentAmountValue.substring(0, indexSeparator);
      secondPart = currentAmountValue.substring(indexSeparator);
      if (secondPart.length > 1) {
        secondPart = secondPart.replace(/\s/g, "");
      }
      if (secondPart.length > 3) {
        setOnlytwoModal(true);
        secondPart = secondPart.substring(0, 3);
      }
      setValue("amount", firstPart + secondPart);
    }
    // END #5

    // #6 MAX 9 DIGITS BEFORE SEPARATOR
    currentAmountValue = getValues("amount");
    indexPoint = currentAmountValue.indexOf(".");
    indexComma = currentAmountValue.indexOf(",");
    if (indexPoint !== -1 || indexComma !== -1) {
      indexSeparator = Math.max(indexPoint, indexComma);
      firstPart = currentAmountValue.substring(0, indexSeparator);
      secondPart = currentAmountValue.substring(indexSeparator);
    } else {
      firstPart = currentAmountValue;
      secondPart = "";
    }
    firstPart = firstPart.replace(/\s/g, "");
    if (firstPart.length > 7) {
      setMaxnumbModal(true);
      firstPart = firstPart.substring(0, 7);
      let firstPartFormatted = insertThousandSeparators(firstPart);
      setValue("amount", firstPartFormatted + secondPart);
    }
    // END $6
    setAmountValidated(true);
  };

  // PART 2 : VALIDATION AND/OR FORMATTING ON BLUR
  const fireAmountFormattingOnBlur = () => {
    let currentAmountValue = getValues("amount");

    // FINALLY CHANGES POINT TO COMMA
    currentAmountValue = currentAmountValue.replace(".", ",");
    setValue("amount", currentAmountValue);

    // CHECK IF BIGGER THAN ZERO
    const zeroes = ["0", "0,", "0,0", "0,00", ""];
    if (zeroes.includes(currentAmountValue)) {
      setAmountValidated(false);
      setAmvalueModal(true);
      setValue("amount", "");
    }

    if (amountValidated) {
      // REMOVES , ,0 ,00
      if (currentAmountValue.charAt(currentAmountValue.length - 1) === ",") {
        currentAmountValue = currentAmountValue.substring(0, currentAmountValue.length - 1);
      }
      if (currentAmountValue.endsWith(",0")) {
        currentAmountValue = currentAmountValue.substring(0, currentAmountValue.length - 2);
      }
      if (currentAmountValue.endsWith(",00")) {
        currentAmountValue = currentAmountValue.substring(0, currentAmountValue.length - 3);
      }

      // REMOVES ,x0
      let indexComma = currentAmountValue.indexOf(",");
      if (indexComma !== -1 && currentAmountValue.charAt(currentAmountValue.length - 1) === "0") {
        currentAmountValue = currentAmountValue.substring(0, currentAmountValue.length - 1);
        setValue("amount", currentAmountValue);
      }

      // FORMAT THOUSANDS SEPARATORS
      if (indexComma !== -1) {
        let firstPart = currentAmountValue.substring(0, indexComma);
        let secondPart = currentAmountValue.substring(indexComma);
        firstPart = firstPart.replace(/\s/g, "");
        firstPart = insertThousandSeparators(firstPart);
        setValue("amount", firstPart + secondPart);
      } else {
        if (currentAmountValue === 0) {
          setValue("amount", "");
        } else {
          currentAmountValue = currentAmountValue.replace(/\s/g, "");
          currentAmountValue = insertThousandSeparators(currentAmountValue);
          setValue("amount", currentAmountValue);
        }
      }
    }
  };

  const popover_pops = (
    <Popover id="popover_pops-basic">
      <Popover.Body className="popover_pops">
        {TXT.enter_format}
        <br />
        min 0,01 max 9 999 999,99
        <br />
        <hr />
        {TXT.onlysp}
        <b>{TXT.dec_1}</b> {TXT.sep_all}
        <b>{TXT.com_point}</b>
        <br />
        <hr />
        {TXT.onlysp}
        <b>{TXT.spaces}</b> {TXT.allowed}
        <b>{TXT.as_1000}</b> {TXT.seps}
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      {modalFirstChar}
      {modalOnlyPoint}
      {modalOnlyDigits}
      {modalOnlyOnesep}
      {modalOnlytwo}
      {modalMaxnumb}
      {modalAmvalue}
      <FormGroup>
        <div className="d-flex justify-content-between">
          <span>
            <FontAwesomeIcon icon={faSackDollar} className="px-2 awesome_light" />
            <Form.Label>{TXT.Amount} *</Form.Label>
          </span>
          <span style={{ padding: "8px 0px 0px 0px" }}>
            <OverlayTrigger trigger={["hover", "focus", "click"]} placement="bottom" overlay={popover_pops}>
              <FontAwesomeIcon icon={faInfoCircle} className="icon_pops" />
            </OverlayTrigger>
          </span>
        </div>

        <Form.Control
          name="amount"
          size="sm"
          placeholder="1 234,56"
          className={formState.errors.amount ? "input_error" : ""}
          {...register("amount", {
            onChange: () => {
              fireAmountValidationOnChange();
            },
            onBlur: () => {
              amountValidated && fireAmountFormattingOnBlur();
            },
          })}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
        <div className="form_error">{formState.errors.amount?.message}</div>
      </FormGroup>
    </>
  );
}
export default Amount;
