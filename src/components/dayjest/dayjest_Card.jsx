import { Link, NavLink } from "react-router-dom"
import { Content_calendar_dayjest, Content_Clock_dayjest, Content_eye_dayjest } from "../../assets/icon"




const Dayjest_Card = ({ url, Content_img, Content_text, Content_date, Content_clock, Content_eye }) => {
    function handleClick() {
        window.scrollTo(0, 0);
        setTimeout(function() {
            window.location.reload();
            window.scrollTo(0, 0);
        }, 400); // Reload after a delay of 1000 milliseconds (1 second)
    }
    

    const maxLength = 50;
    let truncatedContentText = Content_text;
    if (Content_text.length > maxLength) {
        truncatedContentText = Content_text.slice(0, maxLength) + '...';
    }
    const UrlData = new URL(url);
    return (
        <Link to={`/SinglePage${UrlData.pathname}`} onClick={handleClick}>
            <div className="Card_Wrapper">
                <img src={`${Content_img}`} alt="Content"/>
                <div className="Content_text">
                    <h2>{truncatedContentText}</h2>
                </div>
                <div className="content_line"></div>
                <div className="Content_date">
                    <Content_calendar_dayjest/>
                    <span>{Content_date}</span>

                    <Content_Clock_dayjest/>
                    <span>{Content_clock + ' min o’qishga'}</span>

                    <Content_eye_dayjest/>
                    <span>{Content_eye}</span>
                </div>
            </div>
        </Link>
    );
}

export default Dayjest_Card;
