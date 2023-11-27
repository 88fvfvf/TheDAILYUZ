import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const MobileValute = ({ usd, rub, eur, res }) => {
  return (
    <>
      <Swiper
        loop={true}
        freeMode={true}
        speed={1000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className="course">
            {res?.usd?.name} <strong>{res?.usd?.rate}</strong>
            <span className="span" id="usd">
              {" "}
              {"+" + usd}
            </span>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="course">
            {res?.rub?.name} <strong>{res?.rub?.rate}</strong>
            <span className="span" id="rub">
              {" "}
              {"+" + rub}
            </span>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="course">
            {res?.eur?.name} <strong>{res?.eur?.rate}</strong>
            <span className="span" id="eur">
              {" "}
              {"+" + eur}
            </span>
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MobileValute;
