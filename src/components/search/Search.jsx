import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Banner from "../banner/banner";
import Dayjest from "../dayjest/dayjest";
import Footer from "../footer/Footer";
import Header, { Base_Url } from "../header/Header";
import NewsEvent from "../NewsEvent/NewsEvent";
import { message } from 'antd';

const Search = ({ value }) => {
  const location = useLocation().search;
  const withoutQuestionMark = location.replace('?', '');
  const [search, setSearch] = useState([]);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    axios.get(`${Base_Url}search/?q=${withoutQuestionMark}`)
      .then(SearchThen => {
        setSearch(SearchThen?.data);
      })
  }, [value]);


  if (search.length === 0) {
    navigate('/not-found');
  }

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Yangi habarlar topilmadi',
    });
  };
  

  return (
    <>
      <Header/>
      <NewsEvent content={search} error={error}/>
      <Banner />
      <Dayjest />
      <Footer />
    </>
  );
};

export default Search;
