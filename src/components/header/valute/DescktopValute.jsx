import React from "react";

const DescktopValute = ({usd,rub,eur,res}) => {
  return (
    <div className="Desktop">
      <p className="course">
        {res?.usd?.name} <strong>{res?.usd?.rate}</strong>
        <span className="span" id="usd">
          {" "}
          {"+" + usd}
        </span>
      </p>

      <p className="course">
        {res?.rub?.name} <strong>{res?.rub?.rate}</strong>
        <span className="span" id="rub">
          {" "}
          {"+" + rub}
        </span>
      </p>

      <p className="course">
        {res?.eur?.name} <strong>{res?.eur?.rate}</strong>
        <span className="span" id="eur">
          {" "}
          {"+" + eur}
        </span>
      </p>
    </div>
  );
};

export default DescktopValute;
