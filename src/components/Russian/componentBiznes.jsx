import axios from "axios";
import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Biznes__Ins,
  Biznes__Tele,
  CalendarIcon,
  ClockIcon,
  Connetct__Biznes,
  EyeIcon,
  Facebook,
  Instagram,
  Link__Biznes,
  Telegram,
  Twitter,
} from "../../assets/icon";
import { Base_Url, Moon } from "../header/Header";
import { useParams } from "react-router-dom";
import "./Russian.scss";
import { Modal ,message} from "antd";

const CompoBiznes = () => {
  const { year, month, day, slug } = useParams();

  const concatenatedParams = `${year}/${month}/${day}/${slug}`;

  const [Single, setSingle] = useState([]);

  useEffect(() => {
    axios.get(`${Base_Url}${concatenatedParams}/`).then((sin) => {
      setSingle(sin?.data?.posts);
    });
  }, []);

  const [social, setSocial] = useState([]);

  useEffect(() => {
    axios.get(`${Base_Url}social/`).then((response) => {
      setSocial(response?.data);
    });
  }, []);

  const [modal2Open, setModal2Open] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Linkdan nusxa olindi',
    });
  };

  function SuccesClick(){
    navigator.clipboard.writeText(window.location.href)
    success()
  } 

  return (
    <section className="Russian">
      {contextHolder}
      <div className="container">
        <div className="Title__h1">
          <h1>{Single?.title}</h1>
        </div>
        <div className="Date__And">
          <div className="Icon__Biznes">
            <CalendarIcon />
            <span>
              {Moon + moment(Single?.updated).format(", DD", { locale: "uz" })}
            </span>
            <ClockIcon />
            <span>
              {moment(Single?.updated).format("HH", { locale: "uz" }) +
                " min o’qish"}
            </span>
            <EyeIcon />
            <span>{Single?.views_count}</span>
          </div>
          <div className="Link__Connect">
            {/* Modal */}
            <span onClick={() => setModal2Open(true)} id="SpanId">
              <div className="Connetct__Biznes">
                <Connetct__Biznes/>
                <span>Ulashish</span>
              </div>
            </span>
          </div>
          <Modal
            title= "Ulashish"
            centered
            open={modal2Open}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
          >
            <div className="iconModal">
              <a href="https://www.instagram.com/" target="_blank"><Instagram/></a>
              <a href="https://web.telegram.org/"target="_blank"><Telegram/></a>
              <a href="https://twitter.com/?lang=ru" target="_blank"><Twitter/></a>
              <a href="https://www.facebook.com/" target="_blank"><Facebook/></a>
            </div>
            <div className="LinkIput">  
              <input type="text" value={window.location.href} disabled/>
              <span onClick={SuccesClick}><Link__Biznes/> Nusxa Olish</span>
            </div>
          </Modal>
        </div>
        <div className="Img__Biznes">
          <img src={Single?.image} alt="" />
        </div>
        <div className="Biznes__Content_Text">
          <div className="Biznes__Text">
            <div dangerouslySetInnerHTML={{ __html: Single?.body}}/>
            <div className="Biznes__Icon_Bottom">
              <span>Ulashish</span>
              <div className="icon__Bottom">
                {social?.map((res) => (
                  <>
                    {res.name === "telegram" && (
                      <a href={res.url}>
                        <Biznes__Tele />
                      </a>
                    )}
                    {res.name === "instagram" && (
                      <a href={res.url}>
                        <Biznes__Ins />
                      </a>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompoBiznes;
