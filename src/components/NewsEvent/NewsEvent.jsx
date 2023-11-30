import { React } from "react";
import { Resets } from "../../assets/icon";
import Card from "./Card";
import Right from "./Right";
import './Scss_Event.scss'
import './right.scss'
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import { Base_Url, Moon } from "../header/Header";
import axios from "axios";
import { message } from 'antd';
import NoData from "../dayjest/NoData/NoData";




const NewsEvent = ({title,content,Click}) =>{
  
    const [Event, setEvent] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    
    
    const handleClick = async () => {
      setIsLoading(true);
      const response = await fetch(`${Base_Url}`);
      const jsonData = await response.json();
    
      if (!Array.isArray(jsonData)) {
        console.log("News not found"); // Log a message if jsonData is not an array
      } else {
        setEvent([...Event, ...jsonData]); // Append new data to the existing event array
      }
    
      setIsLoading(false);
    };
    
    
    useEffect(() => {
      handleClick();
    }, []);


      const [page, setPage] = useState(1)

      const ClickMost = () => {
        setPage(page + 1);
        console.log("Page + 1");
      };

      const [messageApi, contextHolder] = message.useMessage();

      const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Yangi habarlar topilmadi',
        });
      };

      const [most, setMost] = useState([])
    
      useEffect(() => {
        axios.get(`${Base_Url}most-viewed/?page=${page}`)
          .then(SearchThen => {
            setMost(SearchThen?.data)
          })
          .catch(note => {
            error()
          })
      }, [page])


    return (
        <div id="news" className="container">
          {contextHolder}
            <div className="NewsEvent">
                <div className="Title">
                    <h1 id="NewsTop">{title}</h1>
                </div>
                <div className="news">  
                <div className="Left">
                    <div className="Card_Event">
                        {
                           Array.isArray(content) && content.map(EventCard => <Card key={EventCard.id} content={EventCard}/>)
                        }
                        <a><button onClick={Click}><Resets/>Ko’proq</button></a>

                    </div>         
                </div>
                <div className="Right" id="right">
                    <h2>koʻp oʻqilgan</h2>
                        <div className="right_content_card">
                            {most < 0 ?       
                                most?.map(right => 
                                    <Right key={right.id} Right_img={right?.image} Right_title={right?.title} url={right?.url} Right_date={Moon + moment(right?.created).format(" DD", {locale: 'ru'})} Clock={right?.views_count}/>
                                )
                                : <NoData/>
                            }
                        </div>
                        <a><button onClick={ClickMost}><Resets/>Ko’proq</button></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NewsEvent