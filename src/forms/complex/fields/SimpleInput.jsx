import React from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

function SimpleInput(props) {
  const { register } = useFormContext();
  return (
    <>
      <Form.Label className="label_request">{props.label}</Form.Label>
      <Form.Control name={"input_" + props.nr} size="sm" {...register("input_" + props.nr)} />
    </>
  );
}

export default SimpleInput;
