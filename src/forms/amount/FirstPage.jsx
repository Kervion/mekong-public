import { Row, Col, Form } from "react-bootstrap";
import React, { useContext } from "react";
import { LangKontext } from "../../komponenty/Kontext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Comments from "./fields/Comments";
import AmountInput from "./fields/AmountInput";
import { FormProvider, useForm } from "react-hook-form";
import Buttons from "./fields/Buttons";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import AddAcceptSwitch from "./fields/AddAcceptSwitch.jsx";
import AddEmail from "./fields/AddEmail.jsx";
import FirstColumn from "./fields/FirstColumn";
import CostDate from "./fields/CostDate";
import { convertDate } from "scripts/globals";
import Attachments from "./fields/Attachments";
import zsize from "scripts/zsize.js";

export default function FirstPage() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const isSmall = zsize((state) => state.isSmall);
  const today = new Date();

  // VALIDATION SCHEMA
  const schema = yup
    .object({
      smbd_email: yup
        .string()
        .email(TXT.must_be_valid)
        .when("somebody", {
          is: true,
          then: yup.string().required(TXT.required),
        }),
      somebody: yup.boolean().required(),
      amount: yup.string().required(TXT.required),
      comments: yup
        .string()
        .required(TXT.required)
        .test("len", TXT.max250chars, (val) => val.length <= 25),
      transfer_date: yup.date().required(TXT.required),
      attachment1: yup
        .mixed()
        .required(TXT.required)
        .test("name", TXT.required, (val) => val.length > 0),
    })
    .required();

  // DEAFULT VALUES
  const formMethods = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      amount: "",
      somebody: false,
      comments: "",
      smbd_email: "",
      transfer_date: today,
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, watch } = formMethods;

  const onSubmitHook = (data) => {
    const datax = {
      ...data,
      transfer_date: convertDate(data.transfer_date.toISOString().split("T")[0]),
      attachment1: data.attachment1[0]?.name,
      attachment2: data.attachment2[0]?.name,
      attachment3: data.attachment3[0]?.name,
    };
    confirmAlert({
      title: TXT.json_api,
      message: JSON.stringify(datax),
      buttons: [
        {
          label: TXT.not_db,
        },
      ],
    });
  };

  const watchAcceptor = watch("somebody");

  return (
    <FormProvider {...formMethods}>
      <Form onSubmit={handleSubmit(onSubmitHook)}>
        <Row>
          <Col xs={12} xl={4}>
            <FirstColumn></FirstColumn>
          </Col>
          <Col xs={12} xl={4}>
            <div className={isSmall ? "kolumna_forms kfull" : "kolumna_forms kcenter"}>
              <AmountInput />
              <br />
              <br />
              <AddAcceptSwitch />
              {watchAcceptor && <AddEmail />}
              <br />
              <br />
              <Comments />
            </div>
          </Col>
          <Col xs={12} xl={4}>
            <div className={isSmall ? "kolumna_forms kfull" : "kolumna_forms righttopcorner kright"}>
              <CostDate today={today} />
              <br />
              <br />
              <Attachments />
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          {!isSmall && <Col></Col>}
          <Col
            className={isSmall ? "d-flex justify-content-center" : "d-flex justify-content-between"}
            style={isSmall ? { padding: "10px", paddingBottom: "50px" } : { padding: "10px" }}
          >
            <Buttons />
          </Col>
          {!isSmall && <Col></Col>}
        </Row>
      </Form>
    </FormProvider>
  );
}
