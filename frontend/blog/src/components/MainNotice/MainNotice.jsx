import "./mainNotice.css";
import image from "../../imgs/AbuSimbel.jpg";

function MainNotice () {
   
    return (
        <>
            <div className="mainNotice">
                
                <img className="mainNoticeImg" src={image} alt="" height={500} width={800}/>

                <div className="mainNoticeText">
                    <h2 className="mainNoticeTitle">Título Noticia Principal</h2>
                    <p className="mainNoticeAuthor">autor</p>
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

export default MainNotice
