// @ts-nocheck
import { Form, FormGroup } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";

function AddAcceptSwitch() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const { register, formState } = useFormContext();
  return (
    <FormGroup>
      <div className="d-flex justify-content-start">
        <div className="mt-1">
          <FontAwesomeIcon icon={faUserPlus} className="px-2 awesome_light" />
          <Form.Label>{TXT.somelse}</Form.Label>
        </div>
        <Form.Check name="somebody" type="switch" {...register("somebody")} className={formState.errors.somebody ? "input_error ms-3" : "ms-3"} />
      </div>
      <div className="form_error">{formState.errors.somebody?.message}</div>
    </FormGroup>
  );
}

export default AddAcceptSwitch;
