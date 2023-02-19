import React from "react";
import { LINK_KER, KERVION } from "scripts/globals";

export default function Footer() {
  return (
    <footer className="d-flex justify-content-center linkFooter_bars">
      <a href={LINK_KER} target="_blank" rel="noreferrer">
        {KERVION} © 2023
      </a>

      <div className="square_corners leftBottomSq_corners">
        <div className="circle_corners leftBottomCi_corners"></div>
      </div>

      <div className="square_corners rightBottomSq_corners">
        <div className="circle_corners rightBottomCi_corners"></div>
      </div>
    </footer>
  );
}
