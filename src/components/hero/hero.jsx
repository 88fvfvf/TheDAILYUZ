import axios from "axios";
import React, { useEffect, useState } from "react";
import HeroCard from "./HeroCard";
import './hero.scss'
import { Calendar_Glavniy_post, Clock_Glavniy_post, Eye_Glavniy_post } from "../../assets/icon";
import moment from 'moment';
import { Link } from "react-router-dom";
import { Base_Url, Moon } from "../header/Header";

const Hero = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${Base_Url}?page=1&page_size=4`)
            .then(response => {
                setData(response?.data?.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <section id="section__hero">
            <div className="container">
                <div className="hero">
                    <div className="hero__left">
                        {Array.isArray(data) &&
                            data.slice(3).map(single => {
                                try {
                                    const UrlData = new URL(single?.url);
                                    var maxLength = 70
                                    var text = single?.title;
                                    if (text.length > maxLength){
                                        text = text.slice(0, maxLength) + '...';
                                    }                                    
                                    return (
                                        <Link to={`/SinglePage${UrlData.pathname}`}>
                                            <div className="hero__left_img">
                                                <img src={single?.image} alt="hero photo" />
                                                <div className="Linear__Photo"></div>
                                                <div className="Position_text">
                                                    <h2>{text}</h2>
                                                    <div className="Line"></div>
                                                    <div className="Icon_post">
                                                        <Calendar_Glavniy_post />
                                                        <span>{Moon + moment(single?.created).format(" DD", { locale: 'uz' })}</span>
                                                        <Clock_Glavniy_post />
                                                        <span>{moment(single?.updated).format("HH", { locale: 'uz' }) + " min o’qishga"}</span>
                                                        <Eye_Glavniy_post/>
                                                        <span>{single?.views_count}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                } catch (error) {
                                    console.log(`Invalid URL: ${single?.url}`);
                                    return null; // Skip rendering this item with an invalid URL
                                }
                            })}
                    </div>
                    <div className="hero__right">
                        {Array.isArray(data) &&
                            data.slice(0, 3).map(data => (
                                <HeroCard
                                    key={data?.id}
                                    id={data?.id}
                                    url={data?.url}
                                    slug={data?.category?.slug}
                                    Frame={data?.category?.title}
                                    title={data?.title}
                                    image={data?.image}
                                    Upload={Moon + moment(data?.created).format(" DD", { locale: 'uz' })}
                                    Upload_Time={moment(data?.updated).format('HH')}
                                    View={data?.views_count}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
