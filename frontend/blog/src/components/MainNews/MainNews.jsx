import "./mainNews.css";
import { Link } from "react-router-dom";

function MainNews ({ id_news, title, date, author, summary, img }) {
   
    return (
        <>
            <div className="mainNewsContainer">
                <Link to={`/news/${id_news}`}>
                    <img className="mainNewsImg" src={img} alt=""/>
                </Link> 
                <div className="mainNewsText">
                    <Link to={`/news/${id_news}`}>
                        <h2 className="mainNewsTitle">{title}</h2>
                    </Link> 
                    <div className="mainNewsAuthorAndDate">
                        <p className="mainNewsAuthor">{author}</p>
                        <p className="mainNewsDate">{date}</p>                    
                    </div>
                    <p className="mainNewsSummary">{summary}</p>  
                </div>    
            </div>
        </>
    )
}

export default MainNews
