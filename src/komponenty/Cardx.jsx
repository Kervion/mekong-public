import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Cardx(props) {
  return (
    <NavLink to={`/${props.title?.toLowerCase()}`}>
      <Card className="card_phone">
        <Card.Body>
          <img src={props.img} alt={props.alt} className="img-fluid" />
        </Card.Body>
        <Card.Header>
          <Card.Title className={props.kolor}>
            {props.fax}
            {props.title}
          </Card.Title>
        </Card.Header>
      </Card>
    </NavLink>
  );
}

export default Cardx;
