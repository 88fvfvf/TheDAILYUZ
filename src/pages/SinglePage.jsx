import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/banner/banner";
import Dayjest from "../components/dayjest/dayjest";
import Footer from "../components/footer/Footer";
import Header, { Base_Url } from "../components/header/Header";
import CompoBiznes from "../components/Russian/componentBiznes";

const SinglePage = () => {
  const { year, month, day, slug } = useParams();

  const concatenatedParams = `${year}/${month}/${day}/${slug}`;

  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    axios.get(`${Base_Url}${concatenatedParams}/`).then((Advenst) => {
      setSimilar(Advenst?.data?.similar_posts);
    });
  }, [concatenatedParams]);

  let data = {
    title: "O’xshash xabarlar",
  };

  return (
    <>
      <Header />
      <CompoBiznes />
      <Banner />
      <Dayjest lastWeek={similar} dayjest_title={data?.title} />
      <Footer />
    </>
  );
};

export default SinglePage;
