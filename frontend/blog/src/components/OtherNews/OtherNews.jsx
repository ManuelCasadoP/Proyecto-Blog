import "./otherNews.css";
import { Link } from "react-router-dom";

function OtherNews ({ id_news, title, date, author, summary, src }) {
   
    return (
        <>
            <div className="otherNewsContainer">
                
                    <Link to={`/news/${id_news}`}> 
                        <img className="otherNewsImg" src={src} alt="" />
                    </Link>
               
                
                <div className="otherNewsText">
                <Link to={`/news/${id_news}`}>
                    <h2 className="otherNewsTitle">{title}</h2>
                </Link>
                    <div className="otherNewsAuthorAndDate">
                        <p className="otherNewsAuthor">{author}</p>
                        <p className="otherNewsDate">{date}</p>
                    </div>
                    <p className="otherNewsSummary">{summary}</p>  
                </div>    
            </div>
        </>
    )
}

export default OtherNews