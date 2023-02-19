import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Row, Col, Form, Button } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import React from "react";
import FirtsColContent from "./fields/FirtsColContent.jsx";
import SecondColContent from "./fields/SecondColContent.jsx";
import ThirdColContent from "./fields/ThirdColContent.jsx";
import FourthColContent from "./fields/FourthColContent.jsx";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { LangKontext } from "komponenty/Kontext";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function BasicInfo() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const schema = yup
    .object({
      meeting: yup.string().required(TXT.required),
      ghost: yup.string().required(TXT.required),
      bath: yup.string().required(TXT.required),
      illumination: yup.string().required(TXT.required),
    })
    .required();
  const formMethods = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      meeting: "",
      ghost: "",
      bath: "",
      illumination: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, reset } = formMethods;

  const onSubmitHook = (data) => {
    confirmAlert({
      title: TXT.json_api,
      message: JSON.stringify(data),
      buttons: [
        {
          label: TXT.not_db,
        },
      ],
    });
  };

  return (
    <FormProvider {...formMethods}>
      <Form onSubmit={handleSubmit(onSubmitHook)}>
        <Row className="mb-4">
          <Col xs={12} sm={6} xxl={3} className="order-1">
            <div className="kolumna_forms kcenter">
              <FirtsColContent></FirtsColContent>
            </div>
          </Col>
          <Col xs={12} sm={6} xxl={3} className={isMobile ? "order-2" : "order-sm-3 order-xxl-2"}>
            <div className="kolumna_forms kcenter">
              <SecondColContent></SecondColContent>
            </div>
          </Col>
          <Col xs={12} sm={6} xxl={3} className={isMobile ? "order-3" : "order-sm-2 order-xxl-3"}>
            <div className="kolumna_forms kcenter">
              <ThirdColContent></ThirdColContent>
            </div>
          </Col>
          <Col xs={12} sm={6} xxl={3} className="order-4">
            <div className="kolumna_forms kcenter">
              <FourthColContent></FourthColContent>
            </div>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className="d-flex justify-content-center">
            <Button size="sm" onClick={() => reset()} className="button_bottom_nav mx-2 short_buttons">
              <FontAwesomeIcon icon={faXmark} className="awesome" />
              {TXT.reset}
            </Button>
            <Button size="sm" type="submit" className="button_bottom_nav mx-2 short_buttons">
              <FontAwesomeIcon icon={faCheck} className="awesome" />
              {TXT.validate}
            </Button>
          </Col>
        </Row>
      </Form>
    </FormProvider>
  );
}

export default BasicInfo;
