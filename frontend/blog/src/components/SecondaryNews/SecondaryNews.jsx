import "./secondaryNews.css";

function SecondaryNews ({ title, date, author, summary, img }) {
   
    return (
        <>
            <div className="secondaryNewsContainer">
                
                <img className="secondaryNewsImg" src={img} alt="" />

                <div className="secondaryNewsText">
                    <h2 className="secondaryNewsTitle">{title}</h2>
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