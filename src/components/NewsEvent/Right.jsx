import { Link } from "react-router-dom"
import { CalendarIcon, EyeIcon, Going } from "../../assets/icon"


const Right = ( { url, Right_img,  Right_title, Right_date, Clock } ) => {
    const UrlData = new URL(url);
    return (
        <div className="Right_Content">
            <div className="Right_img">
                <img src={Right_img} alt="No Images"/>
            </div>
            <div className="Right_text">
                <h3><Link to={`${UrlData.pathname}`}>{Right_title}</Link></h3>
                <div className="Right_Icon">
                    <CalendarIcon/>
                    <span>{Right_date}</span>
                    <EyeIcon/>
                    <span>{Clock}</span>
                </div>
            </div>
            <div className="Going">
                    <a href={`${UrlData.pathname}`}><Going/></a>
                </div>
        </div>
    )
}

export default Right