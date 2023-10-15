import React from "react";
import Banner from "../banner/banner";
import Dayjest from "../dayjest/dayjest";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import CompoBiznes from "../Russian/componentBiznes";


const Texnologiya = () => {
    let data = {
        news_single: "Sport yangiliklar",
        dayjest_title: "O’xshash xabarlar",
    }
    return (
        <section className="Texnologiya">
            <Header/>   
            <div className="Tex_page">
                <CompoBiznes/>
                <Banner/>
                <Dayjest dayjest_title={data?.dayjest_title}/>
            </div>
            <Footer/>                               
        </section>
    )
}

export default Texnologiya