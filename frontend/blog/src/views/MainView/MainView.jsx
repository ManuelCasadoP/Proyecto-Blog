import MainNews from "../../components/MainNews/MainNews"
import SecondaryNews from "../../components/SecondaryNews/SecondaryNews"
import "./mainView.css"

import image1 from "../../imgs/Zimbawe.jpg";
import image2 from "../../imgs/AbuSimbel.jpg";
import image3 from "../../imgs/AquisQuerquennis.jpg";
import image4 from "../../imgs/Sukhothai.jpg";

const NoticiaPrincipal = [
    {
        title: "Noticia principal",
        author: "autor 1",
        summary: "Claro",
        src: image2
    }
]
const NoticiaSecundaria = [
    {
        title: "Noticia 1",
        author: "autor 1",
        summary: "Claro.",
        src: image1
    },
    {
        title: "Noticia 2",
        author: "autor 2",
        summary: "Claro, claro..",
        src: image2
    },
    {
        title: "Noticia 3",
        author: "autor 3",
        summary: "Claro, claro, claro...",
        src: image3
    },
    {
        title: "Noticia 4",
        author: "autor 4",
        summary: "Claro, claro, claro, claro.....",
        src: image4
    }
]

const mainNews = NoticiaPrincipal.map(
    item => <MainNews title={item.title} author={item.author} summary={item.summary} img={item.src}/>  
)

const secondaryNews = NoticiaSecundaria.map(
    item => <SecondaryNews title={item.title} author={item.author} summary={item.summary} img={item.src}/>  
)

function MainView () {
   
    return (
        <>  
            <div className="mainViewContainer">
                <div className="mainNewsView">
                    {mainNews} 
                </div>
                <div className="secondaryNewsView">    
                    {secondaryNews}
                </div>
            </div>
        </>
    )
}

export default MainView