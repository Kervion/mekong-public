import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Offcanvas from "react-bootstrap/Offcanvas";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useContext, useState } from "react";
import { LangKontext, LANG } from "komponenty/Kontext";
// @ts-ignore
import translationPL from "json/language-PL.json";
// @ts-ignore
import translationEN from "json/language-EN.json";
// @ts-ignore
import translationES from "json/language-ES.json";
// @ts-ignore
import logo from "assets/liberia-logo-szarawy.png";
import { LINK_KER, KERVION } from "scripts/globals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";
import Langs from "./Langs";
import Pages from "./Pages";
import Corners from "./Corners";

export default function NavPhone() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const objLangs = { PL: translationPL, EN: translationEN, ES: translationES };
  const [country, setCountry] = useState(LANG);

  const selectLang = (e) => {
    setCountry(e);
    localStorage.setItem("lang", e);
    text[1](objLangs[e][0]);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className=" d-flex justify-content-between navbar_bars">
        <NavbarBrand className="ms-3">
          <NavLink to="/">
            <img src={logo} width="70" height="auto" alt="logo kervion" />
          </NavLink>
        </NavbarBrand>
        <Navbar.Text>
          <h3>{TXT.mekriv}</h3>
        </Navbar.Text>
        <DropdownButton
          className="me-3 drop_phone"
          onClick={handleShow}
          align="end"
          id="dropdown-menu-align-end"
          title={
            <span>
              <FontAwesomeIcon icon={faBars} className="awesome_szarawy" />
            </span>
          }
          children={""}
        ></DropdownButton>
        <Corners />
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} className="offcanvas_phone">
        <Offcanvas.Header closeButton>
          <DropdownButton id="dropdown-lang-button" title={country} onSelect={selectLang} size="sm" className="dropdown_boots" variant="secondary" drop="end">
            <Langs country={country} />
          </DropdownButton>
          <Offcanvas.Title className="offtitle">{TXT.mekriv}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="mt-5 p-0">
          <Nav className="flex-column p-4">
            <NavLink to={"/"} className="navlink_bars" onClick={() => setShow(false)}>
              <FontAwesomeIcon icon={faHome} className="awesome aw_width_phone" />
              {TXT.home}
            </NavLink>
            <Pages setShow={setShow} />
          </Nav>
          <footer className="d-flex justify-content-center linkFooter_bars">
            <a href={LINK_KER} target="_blank" rel="noreferrer">
              {KERVION} © 2023
            </a>
          </footer>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
