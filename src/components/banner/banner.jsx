import React from "react";
import "./banner.scss"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Base_Url } from "../header/Header";



const Banner = () => {
    const [banner, setBanner] = useState([]);
  
    useEffect(() => {
      axios.get(`${Base_Url}ads/`)
        .then(response => {
          setBanner(response.data);
        })
        .catch(error => {
          console.error(error);
        })
    }, []);
  
    return (
      <div className="container">
        <div className="Social">
        {
          banner.map((item) => (
            <a href={item.url} key={item?.id} target="_blank"><img src={item.image} alt="no image (" /></a>
          ))
        }
        </div>
      </div>
    )
  }
  
  


export default Banner;