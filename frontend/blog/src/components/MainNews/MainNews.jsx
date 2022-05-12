import "./mainNews.css";

function MainNews ({ title, author, summary, img }) {
   
    return (
        <>
            <div className="mainNewsContainer">
                
                <img className="mainNewsImg" src={img} alt="" />

                <div className="mainNewsText">
                    <h2 className="mainNewsTitle">{title}</h2>
                    <p className="mainNewsAuthor">{author}</p>
                    <p className="mainNewsSummary">{summary}</p>  
                </div>    
            </div>
        </>
    )
}

export default MainNews
