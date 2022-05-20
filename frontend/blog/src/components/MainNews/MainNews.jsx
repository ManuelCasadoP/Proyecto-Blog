import "./mainNews.css";

function MainNews ({ title, date, author, summary, img }) {
   
    return (
        <>
            <div className="mainNewsContainer">
                
                <img className="mainNewsImg" src={img} alt=""/>

                <div className="mainNewsText">
                    <h2 className="mainNewsTitle">{title}</h2>
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
