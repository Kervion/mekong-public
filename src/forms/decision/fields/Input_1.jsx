// @ts-nocheck
import { Form, FormGroup } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsToCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";

function Input_1() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const { register, formState } = useFormContext();
  return (
    <FormGroup className="mt-2">
      <FontAwesomeIcon icon={faArrowsToCircle} className="px-2 mt-4" />
      <Form.Label className="label_request">{TXT.meeting_point}</Form.Label>
      <Form.Control size="sm" {...register("meeting")} className={formState.errors.meeting ? "input_error" : ""} />
      <div className="form_error">{formState.errors.meeting?.message}</div>
    </FormGroup>
  );
}

export default Input_1;
