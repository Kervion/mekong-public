import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
// @ts-ignore
import logo from "assets/liberia-logo-szarawy.png";
import Pages from "layout/Pages";
import { LangKontext } from "komponenty/Kontext";
import { useContext } from "react";
import React from "react";
import Hamburger from "./Hamburger";
import Corners from "./Corners";

export default function Nawigacja() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const setShow = () => {
    return;
  };
  return (
    <Navbar className="navbar_bars d-flex justify-content-between">
      <div className="d-flex mx-5">
        <NavLink to={"/"}>
          <img src={logo} width="80" height="auto" alt="logo kervion" />
        </NavLink>
        <nav className="mx-5">
          <Pages setShow={setShow} />
        </nav>
      </div>
      <div className="d-flex align-items-center">
        <div className="titleNav_bars">{TXT.raim}</div>
        <Hamburger />
      </div>
      <Corners />
    </Navbar>
  );
}
