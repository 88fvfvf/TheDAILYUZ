import { CalendarIcon, ClockIcon, EyeIcon } from "../../assets/icon";
import { Link } from 'react-router-dom';
import { Moon } from "../header/Header";
import moment from "moment";

function handleClick() {
    window.scrollTo(0,0);
}


const Card = ({ content }) => {      

    const he = require('he');

    const FilteredTExt = content?.body || ''; // Проверяем наличие content.body и предотвращаем ошибку, если его нет
    const decodedContent = he.decode(FilteredTExt);
    
    // Удаляем HTML-теги и лишние пробелы
    const finish = decodedContent.replace(/<[^>]+>/gi, '').trim();
    

    
    var text = content?.title
    var maxLength = 60      
    if (text.length > maxLength) {
        var title = text.slice(0, maxLength) + '...';
      }else{
        var title = content?.title
      }
      
      const UrlData = new URL(content?.url);
    return (
            <div className="All_Event">
            <Link to={`${UrlData.pathname}`} onClick={handleClick}>
                <div className="Event_Text">
                    <h1>{title}</h1>
                        <p>{finish}</p>
                        <div className="Event_Icon">
                            <CalendarIcon/>
                            <span>{Moon + moment(content?.created).format(" DD", {locale: 'ru'})}</span>
                            <ClockIcon/>
                            <span>{moment(content?.updated).format(" m", {locale: 'ru'}) + ' min o’qishga'}</span>
                            <EyeIcon/>
                             <span>{content?.views_count}</span>
                        </div>
                </div>
                </Link>
                    <div className="Event_img">
                        <img src={content?.image} alt="No Images"/>
                    </div>
           </div>
    )
}


export default Card
