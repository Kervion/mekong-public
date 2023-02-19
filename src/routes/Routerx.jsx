import Footer from "layout/Footer";
import Nawigacja from "layout/Nawigacja";
import NavPhone from "layout/NavPhone";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { KontextModule } from "komponenty/Kontext";
import Home from "./Home";
import Info from "./Info";
import Amount from "./Amount";
import Breath from "./Breath";
import Complex from "./Complex";
import Decision from "./Decision";
import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { pages, useWindowSize } from "scripts/globals";
import zsize from "scripts/zsize.js";

function Routerx() {
  const PAGES = [<Info />, <Amount />, <Complex />, <Decision />, <Breath />];
  const isSmall = zsize((state) => state.isSmall);
  const setSmall = zsize((state) => state.setSmall);
  const width = useWindowSize();

  useEffect(() => {
    if (isMobile || width <= 800) {
      setSmall(true);
    } else {
      setSmall(false);
    }
    // eslint-disable-next-line
  }, [width]);

  return (
    <KontextModule>
      <BrowserRouter>
        {isSmall ? <NavPhone /> : <Nawigacja />}
        <Routes>
          <Route path="/" element={<Home />} />
          {pages.map((str, index) => (
            <Route key={str} path={"/" + str} element={PAGES[index]} />
          ))}
        </Routes>
        {!isSmall && <Footer />}
      </BrowserRouter>
      <div id="shadow_root"></div>
    </KontextModule>
  );
}

export default Routerx;
