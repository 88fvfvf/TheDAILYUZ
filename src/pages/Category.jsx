import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/banner/banner";
import Dayjest from "../components/dayjest/dayjest";
import Footer from "../components/footer/Footer";
import Header, { Base_Url } from "../components/header/Header";
import NewsEvent from "../components/NewsEvent/NewsEvent";
import { message } from 'antd';

const Category = () => {
  const params = useParams();
  const [category, setCategory] = useState([]);

  const [page, setPage] = useState(1)

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
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Base_Url}category/${params.slug}/?page=${page}`);
        console.log(response?.data?.results);
        setCategory(response?.data);
      } catch (not) {
        error() 
      }
    };

    fetchData();
  }, [params.slug,page]);

  let data = {
    news_single: params?.id,
    dayjest_title: "Hafta Dayjesti",
  };

  return (
    <>
    {contextHolder}
      <Header setPage={setPage}/>
      <NewsEvent title={params.slug} content={category?.results} Click={Click}/>
      <Banner/>
      <Dayjest dayjest_title={data?.dayjest_title} />
      <Footer setPage={setPage}/>
    </>
  );
};

export default Category;