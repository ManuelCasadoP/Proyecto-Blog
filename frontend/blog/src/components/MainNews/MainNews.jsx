import "./mainNews.css";
import image from "../../imgs/AbuSimbel.jpg";

function MainNews () {
   
    return (
        <>
            <div className="mainNewsContainer">
                
                <img className="mainNewsImg" src={image} alt="" width={1080}/>

                <div className="mainNewsText">
                    <h2 className="mainNewsTitle">Título Noticia Principal</h2>
                    <p className="mainNewsAuthor">autor</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quas harum quae modi incidunt nobis, voluptate iste qui laboriosam 
                    et reiciendis ratione obcaecati quasi quos molestiae dolore facilis 
                    voluptatum unde praesentium!
                    </p>  
                </div>    
            </div>
        </>
    )
}

export default MainNews
