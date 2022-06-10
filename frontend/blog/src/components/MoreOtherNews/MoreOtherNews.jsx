import "./moreOtherNews.css";
import { Link } from "react-router-dom";

function MoreOtherNews ({ id_news, title}) {
   
    return (
        <>
            <div className="moreOtherNewsContainer">
                             
                    <div className="moreOtherNewsText">
                        <Link to={`/news/${id_news}`}>
                            <h2 className="moreOtherNewsTitle">{title}</h2>
                        </Link> 
                    </div> 
                
            </div>
        </>
    )
}

export default MoreOtherNews