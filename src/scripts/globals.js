import { useEffect, useState } from "react";

const maxSize = 3145728;

const KERVION = "Kervion";
const DOMENA = "kervion.com";
const MAIL = "";
const LINK_KER = "http://kervion.com";

function useWindowSize() {
  const [windWidth, setWindWidth] = useState(undefined);
  useEffect(() => {
    function handleResize() {
      setWindWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windWidth;
}

const pages = ["info", "amount", "complex", "decision", "breath"];

function convertDate(dateString) {
  const dateParts = dateString.split("-");
  const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export { useWindowSize, convertDate, maxSize, pages, KERVION, DOMENA, MAIL, LINK_KER };
