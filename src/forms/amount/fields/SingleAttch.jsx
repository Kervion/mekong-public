// @ts-nocheck
import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

function SingleAttch(props) {
  const { register, formState } = useFormContext();
  let key = "attachment" + props.n;
  return (
    <div style={{ display: props.counter >= props.n ? "block" : "none" }}>
      <InputGroup size="sm" className="my-3">
        <Form.Control
          type="file"
          size="sm"
          className={formState.errors[key] ? "input_error" : ""}
          {...register("attachment" + props.n, {
            onChange: () => {
              props.validate(props.n);
            },
          })}
        />
      </InputGroup>
    </div>
  );
}

export default SingleAttch;
