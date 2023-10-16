import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, NavLink, useLocation } from "react-router-dom";
import {
  Calendar,
  Instagram,
  Logo,
  Loop_Header,
  TeleIcon,
} from "../../assets/icon";
import "./header.scss";
import moment from "moment";

// SWIPPER
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

var now = moment();

export var Moon = now.format("MMM");

export let Base_Url = "https://thedailyuz.uchqunusmonov.uz/";

const Header = ({ setPage }) => {
  // =------------------ useState hook ------------------------=
  const [value, setValue] = useState();

  const [res, setRes] = useState([]);

  useEffect(() => {
    axios.get(`${Base_Url}currency/`).then((res) => {
      setRes(res?.data);
    });
  }, []);

  var usd = res?.usd?.diff;
  var rub = res?.rub?.diff;
  var eur = res?.eur?.diff;

  if (usd) {
    document.getElementById("usd").style.color = usd.includes("-")
      ? "red"
      : "green";
    usd = usd.includes("-") ? usd : "+" + usd;
    document.getElementById("usd").innerText = usd;
  }

  if (rub) {
    document.getElementById("rub").style.color = rub.includes("-")
      ? "red"
      : "green";
    rub = rub.includes("-") ? rub : "+" + rub;
    document.getElementById("rub").innerText = rub;
  }

  if (eur) {
    document.getElementById("eur").style.color = eur.includes("-")
      ? "red"
      : "green";
    eur = eur.includes("-") ? eur : "+" + eur;
    document.getElementById("eur").innerText = eur;
  }

  const [weather, setWeather] = useState([]);
  const [sity, setSity] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        var Local = `${latitude}${longitude}`;

        switch (Local) {
          case "41.2995%2C69.2401":
            Local = "41.2995%2C69.2401";
            setSity("Toshkent. sh.");
            break;
          case "40.815472.2837":
            Local = "40.8154%2C72.2837";
            setSity("Andijon. sh.");
            break;
          case "39.768164.4556":
            Local = "39.7681%2C64.4556";
            setSity("Buxoro. sh.");
            break;
          case "40.373471.7978":
            Local = "40.3734%2C71.7978";
            setSity("Fargona. sh.");
            break;
          case "40.125067.8808":
            Local = "40.1250%2C67.8808";
            setSity("Jizzax. sh.");
            break;
          case "41.005871.6436":
            Local = "41.0058%2C71.6436";
            setSity("Namangan. sh.");
            break;
          case "40.103965.3688":
            Local = "40.1039%2C65.3688";
            setSity("Navoiy. sh.");
            break;
          case "42.461959.6166":
            Local = "42.4619%2C59.6166";
            setSity("Nukus. sh.");
            break;
          case "38.861265.7847":
            Local = "38.8612%2C65.7847";
            setSity("Qarshi. sh.");
            break;
          case "39.650866.9654":
            Local = "39.6508%2C66.9654";
            setSity("Samarqand. sh.");
            break;
          case "40.837368.6618":
            Local = "40.8373%2C68.6618";
            setSity("Sirdaryo. sh.");
            break;
          case "37.261167.3086":
            Local = "37.2611%2C67.3086";
            setSity("Termiz. sh.");
            break;
          case "41.221369.8597":
            Local = "41.221352C69.8597";
            setSity("Toshkent. vil.");
            break;
          case "41.356560.8567":
            Local = "41.3565%2C60.8567";
            setSity("Xorazm. sh.");
            break;
          default:
            Local = "41.2995%2C69.2401";
            setSity("Toshkent. sh.");
        }

        axios
          .get(`${Base_Url}weather/?location=${Local}`)
          .then((response) => {
            setWeather(response.data);
          })
          .catch((error) => {
            console.error("Error fetching weather data:", error);
          });
      },
      (error) => {
        console.error("Error getting location:", error.message);
      }
    );
  }, []);
  var Weth = weather?.text;

  switch (Weth) {
    case "Rain":
      Weth = "Yomgir";
      break;
    case "Sunny":
      Weth = "Quyosh";
      break;
    case "Snow":
      Weth = "Qor";
      break;
    case "Partly cloudy":
      Weth = "Bulutli";
      break;
    case "Fog":
      Weth = "Tuman";
      break;
    case "Storm":
      Weth = "Momaqaldiroq";
      break;
    case "Windy":
      Weth = "Shamol";
      break;
    case "Hot":
      Weth = "Issiq";
      break;
    case "Cold":
      Weth = "Sovuq";
      break;
    case "Overcast":
      Weth = "Bulutli";
      break;
    case "Clear":
      Weth = "Ochiq Havo";
      break;
    case "Patchy rain possible":
      Weth = "Yomg'ir Kutilmoqda";
      break;
    default:
      Weth = "Unknown";
  }

  const search = useLocation().search;
  const withoutQuestionMark = search.replace("?", "");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search?${value}`;  
  };

  const [category, setCategory] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${Base_Url}category/`).then((Cate) => {
        setCategory(Cate?.data);
      });
    } catch (error) {
      console.log("Error");
    }
  }, []);

  var currentDate = now.format("dddd-DD-MMM-YYYY", { locale: "ru" });

  var Translate = now.format("dddd");

  switch (Translate) {
    case "Monday":
      Translate = "Dushanba";
      break;
    case "Tuesday":
      Translate = "Seshanba";
      break;
    case "Wednesday":
      Translate = "Chorshanba";
      break;
    case "Thursday":
      Translate = "Payshanba";
      break;
    case "Friday":
      Translate = "Juma";
      break;
    case "Saturday":
      Translate = "Shanba";
      break;
    case "Sunday":
      Translate = "Yakshanba";
      break;
    default:
      Translate = "Unknown";
  }

  switch (Moon) {
    case "Jan":
      Moon = "Yan";
      break;
    case "Feb":
      Moon = "Fev";
      break;
    case "Mar":
      Moon = "Mar";
      break;
    case "Apr":
      Moon = "Apr";
      break;
    case "May":
      Moon = "May";
      break;
    case "Jun":
      Moon = "Iyun";
      break;
    case "Jul":
      Moon = "Iyul";
      break;
    case "Aug":
      Moon = "Avg";
      break;
    case "Sep":
      Moon = "Sen";
      break;
    case "Oct":
      Moon = "Okt";
      break;
    case "Nov":
      Moon = "Noy";
      break;
    case "Dec":
      Moon = "Dek";
      break;
  }

  const [social, setSocial] = useState([]);

  useEffect(() => {
    axios.get(`${Base_Url}social/`).then((response) => {
      setSocial(response?.data);
    });
  }, []);

  return (
    <header id="header">
      <div className="header">
        <div className="header__top">
          <div className="container">
            <div className="header__top_left">
              <Swiper
                loop={true}
                freeMode={true}
                speed={1000}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  <p>
                    {res?.usd?.name} <strong>{res?.usd?.rate}</strong>
                    <span className="span" id="usd">
                      {" "}
                      {"+" + res?.usd?.diff}
                    </span>
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <p>
                    {res?.rub?.name} <strong>{res?.rub?.rate}</strong>
                    <span className="span" id="rub">
                      {" "}
                      {"+" + res?.rub?.diff}
                    </span>
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <p>
                    {res?.eur?.name} <strong>{res?.eur?.rate}</strong>
                    <span className="span" id="eur">
                      {" "}
                      {"+" + res?.eur?.diff}
                    </span>
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="header__top_right">
              {social?.map((res) => (
                <>
                  {res.name === "telegram" && (
                    <a href={res.url} id={res.is}>
                      <TeleIcon />
                    </a>
                  )}
                  {res.name === "instagram" && (
                    <a href={res.url} id={res.is}>
                      <Instagram />
                    </a>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="header__center">
          <div className="container">
            <div className="header__center_left">
              <Link to={"/"}>
                <Logo />
              </Link>

              <div className="icone">
                <div className="calendar-text">
                  <div className="icon_cal">
                    <Calendar />
                  </div>
                  <div className="ico-txt">
                    <p>{Translate}</p>
                    <p>{Moon + now.format(" DD,YYYY")}</p>
                  </div>
                </div>

                <div className="weather-text">
                  <div className="ico-weth">
                    <img src={weather?.icon} alt="NO images(" />
                  </div>
                  <div className="ico-weth-txt">
                    <p>
                      {weather?.temp}C,{Weth}
                    </p>
                    <p>{sity}</p>
                  </div>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="header__center_right"
              id="inputRelative"
            >
              <input
                value={value}
                onChange={(event) => setValue(event.target.value)}
                type="text"
                placeholder="Qidiruv..."
              />
              <div id="Loop" onClick={handleSubmit}>
                <Loop_Header />
              </div>
            </form>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container">
            <ul className="bottom_ul">
              {category.map((cat) => (
                <NavLink
                  key={cat.id} // Provide a unique key prop here
                  to={`/yangiliklar/${cat?.slug}/`}
                  onClick={() => setPage(1)}
                >
                  <li>{cat?.title}</li>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
