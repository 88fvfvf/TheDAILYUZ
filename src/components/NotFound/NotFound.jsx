import React from "react";
import Header from "../header/Header";
import "./NotFound.css";


const NotFound = () => {
  return (
    <>
    <Header/>
      <div className="Not__Found">
        <div class="wrapper">
            <div class="rainbow"></div>
          </div>
          <div class="error">
            <h1>404</h1>
            <h2>Xato: Sahifa Topilmadi</h2>
            <p>-bizning saytimizda mavjud emas.<br />
              Bosh sahifaga qayting. <a href={"/"}>Bosh sahifa</a>.
            </p>
          </div>
      </div>
    </>
  );
};
export default NotFound;
