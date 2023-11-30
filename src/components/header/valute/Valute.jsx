import axios from "axios";
import React, { useEffect, useState } from "react";
import { Base_Url } from "../Header";
import DescktopValute from "./DescktopValute";
import MobileValute from "./MobileValute";

const Valute = () => {
  const [res, setRes] = useState([]);
  const [width,setWidth] = useState(window.innerWidth);

  useEffect(() => {
    axios.get(`${Base_Url}currency/`).then((res) => {
      setRes(res?.data);
    });
  }, []);
  const usd = res?.usd?.diff;
  const rub = res?.rub?.diff;
  const eur = res?.eur?.diff;

  if (usd) {
    const color = usd.includes("-") ? "red" : "green";
    const sign = usd.includes("-") ? "" : "+";
    document.getElementById("usd").style.color = color;
    document.getElementById("usd").innerText = `${sign}${usd}`;
  }

  if (rub) {
    const color = rub.includes("-") ? "red" : "green";
    const sign = rub.includes("-") ? "" : "+";
    document.getElementById("rub").style.color = color;
    document.getElementById("rub").innerText = `${sign}${rub}`;
  }

  if (eur) {
    const color = eur.includes("-") ? "red" : "green";
    const sign = eur.includes("-") ? "" : "+";
    document.getElementById("eur").style.color = color;
    document.getElementById("eur").innerText = `${sign}${eur}`;
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {width <= 1920 && width > 700 && (
        <DescktopValute res={res} usd={usd} rub={rub} eur={eur} />
      )}
      {width <= 700 && <MobileValute res={res} usd={usd} rub={rub} eur={eur} />}
    </>
  );
};

export default Valute;
