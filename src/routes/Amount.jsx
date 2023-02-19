import FirstPage from "forms/amount/FirstPage";
import React from "react";
import { Container } from "react-bootstrap";
import zsize from "scripts/zsize.js";

function Amount() {
  const isSmall = zsize((state) => state.isSmall);
  return (
    <Container fluid className={isSmall ? "cont_form_phone" : "container_main contform"}>
      <FirstPage />
    </Container>
  );
}
export default Amount;
