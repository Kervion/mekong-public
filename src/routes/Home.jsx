// @ts-nocheck
import { Col, Container, Row } from "react-bootstrap";
import Cardx from "komponenty/Cardx";
import { LangKontext } from "komponenty/Kontext";
import React, { useContext } from "react";
import mek1 from "assets/mekong-1-180.jpg";
import mek2 from "assets/mekong-2-180.jpg";
import mek3 from "assets/mekong-3-180.jpg";
import mek4 from "assets/mekong-4-180.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faInfoCircle, faSackDollar, faHandshake } from "@fortawesome/free-solid-svg-icons";
import zsize from "scripts/zsize.js";

function Home() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const isSmall = zsize((state) => state.isSmall);
  const cards = [
    { title: TXT.info, img: mek1, alt: "mekong 1 kervion", ico: faInfoCircle, kolor: "siano resp" },
    { title: TXT.amount, img: mek2, alt: "mekong 2 kervion", ico: faSackDollar, kolor: "niebieskawy resp" },
    { title: TXT.complex, img: mek3, alt: "mekong 3 kervion", ico: faList, kolor: "brazawy resp" },
    { title: TXT.decision, img: mek4, alt: "mekong 4 kervion", ico: faHandshake, kolor: "szarawy resp" },
  ];

  return (
    <Container fluid className="container_main">
      {!isSmall && <h1>{TXT.mekriv}</h1>}
      <h4 className="title_h4_texts">
        <span className="siano">{TXT.rrfs}</span> <span className="niebieskawy">{TXT.creby}</span> <span className="brazawy">{TXT.useof}</span>{" "}
        <span className="szarawy">{TXT.endof}</span>
      </h4>
      <br />
      <Row className="cards_responsive">
        {cards.map((card, index) => (
          <Col xs={6} md={3} key={index} className="d-flex justify-content-center">
            <Cardx title={card.title} img={card.img} alt={card.alt} fax={<FontAwesomeIcon icon={card.ico} className="awesome_small" />} kolor={card.kolor} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
