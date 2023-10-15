import { CalendarIcon, ClockIcon, EyeIcon } from '../../assets/icon';
import { Link } from 'react-router-dom';

const HeroCard = ({title,image,Upload,Upload_Time,View, url}) => {

    function handleClick() {
        window.scrollTo(0,0);
    }

    var maxLength = 70
    if (title.length > maxLength){
        var title = title.slice(0,maxLength) + '...'
    }
    const UrlData = new URL(url);
    return (
        <div>
            <img src={image} width="194"/>
                <div className="text">
                        <h3><Link to={`/SinglePage${UrlData.pathname}`} onClick={handleClick}>{title}</Link></h3>
                    <div className="Icon">
                        <div>
                            <span>
                            <CalendarIcon/>
                            </span>
                            <span>{Upload}</span>
                        </div>
                        <div>
                            <span>
                            <ClockIcon/>
                            </span>
                            <span>{Upload_Time + " min o’qishga"}</span>
                        </div>
                        <div>
                            <span>
                            <EyeIcon/>
                            </span>
                            <span>{View}</span>
                        </div>
                    </div>
                </div>
                {/* <div className="line_card"></div>
                <div className="line_card_2"></div> */}
        </div>
    )
}

export default HeroCard