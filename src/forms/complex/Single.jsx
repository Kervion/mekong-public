import React, { useEffect, useState, useContext } from "react";
import { LangKontext } from "komponenty/Kontext";
import zcomplex from "./zcomplex.js";
import { Col, Row, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faGripVertical, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import InputName from "./fields/InputName.jsx";
import SimpleInput from "./fields/SimpleInput.jsx";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import zsize from "scripts/zsize.js";

function Single(props) {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const isSmall = zsize((state) => state.isSmall);
  const lastFormNr = zcomplex((state) => state.lastFormNr);
  const [showhide, setShowhide] = useState(false);
  const maxchars = 12;
  const charsInfo = TXT.max + " " + maxchars + " " + TXT.chars;

  // NOT USED IN CURRENT VERSION
  const schema = yup
    .object({
      input_1: yup.string().test("len", charsInfo, (val) => val.length <= 12),
      input_2: yup.string().test("len", charsInfo, (val) => val.length <= 12),
    })
    .required();

  // NOT USED IN CURRENT VERSION
  const formMethods = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      input_1: "",
      input_2: "",
    },
    resolver: yupResolver(schema),
  });

  const toggleVisible = (ev) => {
    ev.stopPropagation();
    setShowhide((prev) => !prev);
  };

  useEffect(() => {
    lastFormNr === props.numer ? setShowhide(true) : setShowhide(false);
    // eslint-disable-next-line
  }, [lastFormNr]);

  const remove = (ev, num) => {
    ev.stopPropagation();
    props.handleRemove(num);
  };

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.numer });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <FormProvider {...formMethods}>
        <Form className="d-flex align-items-center w-100 pt-3 flex-column">
          <div className="costNumber_forms d-flex justify-content-between align-items-center" onClick={(ev) => toggleVisible(ev)}>
            <span className="d-flex flex-start align-items-center">
              <div
                style={{
                  minWidth: "80px",
                }}
              >
                Form #{props.index + 1}
              </div>
              {!isSmall && <InputName />}
            </span>

            <span>
              <FontAwesomeIcon icon={showhide ? faEye : faEyeSlash} className="awesome aw_yellow" onClick={(ev) => toggleVisible(ev)} />
              <FontAwesomeIcon icon={faTrashCan} className="awesome aw_yellow mx-3" onClick={(ev) => remove(ev, props.numer)} />
              {!isSmall && <FontAwesomeIcon icon={faGripVertical} className="awesome aw_yellow ms-2" {...listeners} {...attributes} />}
            </span>
          </div>
          {showhide && (
            <Row className="row_forms">
              <Col className="column_forms">
                <div className="bigger_texts">
                  {TXT.mockup_of}
                  <FontAwesomeIcon icon={faGripVertical} className="mx-2" />

                  {TXT.desk_only}
                </div>
              </Col>
              <Col className="column_forms">
                <SimpleInput label={TXT.your_credit} nr="1" />
              </Col>
              <Col className="column_forms">
                <SimpleInput label={TXT.mobile_pass} nr="2" />
              </Col>
            </Row>
          )}
        </Form>
      </FormProvider>
    </div>
  );
}

export default Single;
