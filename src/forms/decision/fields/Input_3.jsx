// @ts-nocheck
import { Form, FormGroup } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";

function Input_3() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const { register, formState } = useFormContext();
  return (
    <FormGroup className="mt-2">
      <FontAwesomeIcon icon={faBath} className="px-2 mt-4" />
      <Form.Label className="label_request">{TXT.bath_details}</Form.Label>
      <Form.Control size="sm" {...register("bath")} className={formState.errors.bath ? "input_error" : ""} />
      <div className="form_error">{formState.errors.bath?.message}</div>
    </FormGroup>
  );
}

export default Input_3;
