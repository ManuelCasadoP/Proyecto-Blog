import "./secondaryNews.css";
import { Link } from "react-router-dom";

function SecondaryNews ({ id_news, title, date, author, summary, src }) {
   
    return (
        <>
            <div className="secondaryNewsContainer">
                <Link to={`/news/${id_news}`}> 
                    <img className="secondaryNewsImg" src={src} alt="" />
                </Link>
                <div className="secondaryNewsText">
                    <Link to={`/news/${id_news}`}>
                        <h2 className="secondaryNewsTitle">{title}</h2>
                    </Link>
                    <div className="secondaryNewsAuthorAndDate">
                        <p className="secondaryNewsAuthor">{author}</p>
                        <p className="secondaryNewsDate">{date}</p>
                    </div>
                    <p className="secondaryNewsSummary">{summary}</p>  
                </div>    
            </div>
        </>
    )
}

export default SecondaryNews