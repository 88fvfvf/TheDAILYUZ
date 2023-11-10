import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../components/banner/banner";
import Dayjest from "../components/dayjest/dayjest";
import Footer from "../components/footer/Footer";
import Header, { Base_Url } from "../components/header/Header";
import Hero from "../components/hero/hero";
import NewsEvent from "../components/NewsEvent/NewsEvent";
import { message } from 'antd';

const Home = () => {
  const [page, setPage] = useState(1);

  const Click = () => {
    setPage(page + 1);
  };

  const [messageApi, contextHolder] = message.useMessage();

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Yangi habarlar topilmadi',
    });
  };

  const [event, setEvent] = useState([]);
  const uniqueEventSet = new Set();

  useEffect(() => {
    axios.get(`${Base_Url}?page=${page}&page_size=4`)
      .then(SearchThen => {
        SearchThen?.data?.results.forEach(item => {
          if (!uniqueEventSet.has(item.id)) {
            uniqueEventSet.add(item.id);
            setEvent(prevData => [...prevData, item]);
          }
        });
      })
      .catch(not => {
        error();
      });
  }, [page]);

  let data = {
    news_single: 'Yangiliklar',
    dayjest_title: 'Hafta Dayjesti',
  };

  const [lastWeek, setlastweek] = useState([]);

  useEffect(() => {
    axios.get(`${Base_Url}last-week/`).then(lastWeek => {
      setlastweek(lastWeek?.data);
    });
  }, []);

  return (
    <>
      {contextHolder}
      <Header />
      <Hero />
      <Dayjest dayjest_title={data?.dayjest_title} lastWeek={lastWeek} />
      <Banner />
      <NewsEvent title={data?.news_single} content={event} Click={Click} />
      <Footer />
    </>
  );
};

export default Home;
