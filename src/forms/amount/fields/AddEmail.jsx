// @ts-nocheck
import { Form, InputGroup } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import React from "react";

function AddEmail() {
  const { register, formState } = useFormContext();
  return (
    <>
      <InputGroup size="sm">
        <InputGroup.Text id="basic-addon1" className="groupBg_boots">
          @
        </InputGroup.Text>
        <Form.Control name="smbd_email" size="sm" type="text" {...register("smbd_email")} className={formState.errors.smbd_email ? "input_error" : ""} />
      </InputGroup>
      <div className="form_error">{formState.errors.smbd_email?.message}</div>
    </>
  );
}

export default AddEmail;
