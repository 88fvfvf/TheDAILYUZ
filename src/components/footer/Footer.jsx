import React, { useEffect, useState } from "react";
import { LogoWhite, TeleFooter, InsFooter, Telephone } from "../../assets/icon";
import { Link } from 'react-router-dom';
import './Footer.scss';
import axios from "axios";
import { Base_Url } from "../header/Header";

const Footer = ({ setPage }) => {
    
    const handleClick = () => {
        setPage(1);
        window.scrollTo(0, 0);
    }

    const [fooLink, setFooLink] = useState([]);
    const [footerData, setFooterData] = useState({});
    const [social, setSocial] = useState([]);

    useEffect(() => {
        axios.get(`${Base_Url}category/`)
            .then(response => {
                setFooLink(response.data);
            })
            .catch(error => {
                console.error("Error fetching category data:", error);
            });
    }, []);

    useEffect(() => {
        axios.get(`${Base_Url}footer-data/`)
            .then(response => {
                setFooterData(response.data);
            })
            .catch(error => {
                console.error("Error fetching footer data:", error);
            });
    }, []);

    useEffect(() => {
        axios.get(`${Base_Url}social/`)
            .then(response => {
                setSocial(response.data);
            })
            .catch(error => {
                console.error("Error fetching social data:", error);
            });
    }, []);

    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="Footer__Test">
                        <div className="Icon__Footer">
                            <LogoWhite />
                            <div className="Icon__Social_Footer">
                                {social.map(res => (
                                    <a key={res.id} href={res.url}>
                                        {res.name === "telegram" ? <TeleFooter /> : (res.name === "instagram" ? <InsFooter /> : null)}
                                    </a>
                                ))}
                            </div>  
                        </div>
                        <ul className="ul__li">
                            {fooLink.map(link => (
                                <Link key={link.id} to={"/yangiliklar/" + link.slug} onClick={handleClick}>
                                    <li>{link.title}</li>
                                </Link>
                            ))}
                        </ul>
                        <div className="Contact__Footer">
                            <div className="Phone">
                                <Telephone />
                                <span>{footerData.phone_number}</span>
                            </div>
                            <span style={{ wordBreak: "break-word" }}>{footerData.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
