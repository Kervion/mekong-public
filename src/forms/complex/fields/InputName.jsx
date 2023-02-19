import { Form } from "react-bootstrap";
import { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";
import React from "react";

function InputName() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  return <Form.Control className="inputDark_boots" name="input_name" size="sm" placeholder={TXT.unique_form_name} onClick={(ev) => ev.stopPropagation()} />;
}

export default InputName;
