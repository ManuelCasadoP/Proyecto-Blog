import Header from "../../components/Header/Header"


function FullPageNews({ id_news, title, date, author, summary, img, content }){
    return(

        <>        
            <div className="fullPageNewsContainer">
            
            <Header/>

            <p>Noticia Ampliada</p>

            <h2 className="fullPageNewsTitle">{title}</h2>
            <p className="fullPageNewsSummary">{summary}</p> 
            <img className="fullPageNewsImg" src={img} alt=""/>
            <p className="fullPageNewsAuthor">{author}</p>
            <p className="fullPageNewsDate">{date}</p>  
            <p className="fullPageNewsContent">{content}</p> 
    
        </div>
    </>
        
    )
}

export default FullPageNews