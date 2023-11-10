import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Left_Icon, Right_Icon } from "../../assets/icon";
import "./dayjest.scss";
import Dayjest_Card from "./dayjest_Card";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import moment from "moment";
import { Moon } from "../header/Header";

const Dayjest = ({ dayjest_title, lastWeek }) => {
  return (
    <section className="dayjest">
      <div className="container">
        <div className="top_dayjest">
          <h1>{dayjest_title}</h1>
          <div className="carusel">
            <div className="prev">
              <Left_Icon />
            </div>
            <div className="swiper-pagination"></div>
            <div className="next">
              <Right_Icon />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="dayjest_content">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              680: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              980: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "fraction",
            }}
            className="mySwiper"
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 2000000, disableOnInteraction: false }}
            autoplayDisableOnInteraction={true}
            reachBeginning={() =>
              document.querySelectorAll(".next").forEach(function (bullet2) {
                bullet2.style.backgroundColor = "blue";
              })
            }
          >
            {Array.isArray(lastWeek) &&
              lastWeek.map((Content) => (
                <SwiperSlide key={Content?.id}>
                  <Dayjest_Card
                    url={Content?.url}
                    Content_img={Content?.image}
                    Content_title={Content?.Content_title}
                    Content_text={Content?.title}
                    Content_date={
                      Moon +
                      moment(Content?.created).format(" DD", { locale: "ru" })
                    }
                    Content_clock={moment(Content?.updated).format("HH")}
                    Content_eye={Content?.views_count}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Dayjest;
