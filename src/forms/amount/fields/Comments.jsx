// @ts-nocheck
import { useFormContext } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";
import { Form } from "react-bootstrap";

function Comments() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const { register, formState } = useFormContext();
  return (
    <>
      <FontAwesomeIcon icon={faPenToSquare} className="px-2 awesome_light" />
      <Form.Label>{TXT.Comments} *</Form.Label>
      <Form.Control name="comments" size="sm" as="textarea" {...register("comments")} className={formState.errors.comments ? "input_error" : ""} />
      <div className="form_error">{formState.errors.comments?.message}</div>
    </>
  );
}
export default Comments;
