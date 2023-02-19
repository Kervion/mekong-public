// @ts-nocheck
import { Form, FormGroup } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";

function Input_2() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const { register, formState } = useFormContext();
  return (
    <FormGroup className="mt-2">
      <FontAwesomeIcon icon={faGhost} className="px-2 mt-4" />
      <Form.Label className="label_request">{TXT.ghost_name}</Form.Label>
      <Form.Control size="sm" {...register("ghost")} className={formState.errors.ghost ? "input_error" : ""} />
      <div className="form_error">{formState.errors.ghost?.message}</div>
    </FormGroup>
  );
}

export default Input_2;
