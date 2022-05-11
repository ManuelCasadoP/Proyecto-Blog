import "./secondaryNews.css";

function SecondaryNews ({ title, author, summary, img }) {
   
    return (
        <>
            <div className="secondaryNewsContainer">
                
                <img className="secondaryNewsImg" src={img} alt="" />

                <div className="secondaryNewsText">
                    <h2 className="secondaryNewsTitle">{title}</h2>
                    <p className="secondaryNewsAuthor">{author}</p>
                    <p>{summary}</p>  
                </div>    
            </div>
        </>
    )
}

export default SecondaryNews