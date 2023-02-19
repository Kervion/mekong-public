import React from "react";
import { Button } from "react-bootstrap";

function ButtonCounter(props) {
  return (
    <span style={{ marginLeft: "20px", whiteSpace: "nowrap" }}>
      <Button size="sm" className="smButtCommon smallButtLeft" onClick={props.f1}>
        -
      </Button>
      <Button disabled size="sm" className="smButtCommon smallButt">
        <b>{props.counter}</b>
      </Button>
      <Button size="sm" className="smButtCommon smallButtRight" onClick={props.f2}>
        +
      </Button>
    </span>
  );
}

export default ButtonCounter;
