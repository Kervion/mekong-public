import BasicInfo from "forms/decision/BasicInfo";
import SingleLine from "forms/decision/SingleLine";
import React from "react";
import { Container } from "react-bootstrap";
import zsize from "scripts/zsize.js";

function Third() {
  const keys = [1, 2, 3, 4, 5, 6, 7];
  const isSmall = zsize((state) => state.isSmall);

  return (
    <Container fluid className={`${isSmall ? "cont_form_phone" : "container_main contform"}`}>
      <BasicInfo />
      <div className="d-flex align-items-center flex-column">
        {keys.map((item) => (
          <SingleLine key={item} index={item} />
        ))}
      </div>
    </Container>
  );
}

export default Third;
