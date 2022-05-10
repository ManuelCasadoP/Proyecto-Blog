import "./secondaryNews.css";

function SecondaryNews ({ title, autor, sumario, img}) {
   
    return (
        <>
            <div className="secondaryNewsContainer">
                
                <img className="secondaryNewsImg" src={img} alt="" width={400}/>

                <div className="secondaryNewsText">
                    <h2 className="secondaryNewsTitle">{title}</h2>
                    <p className="secondaryNewsAuthor">autor</p>
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

export default SecondaryNews