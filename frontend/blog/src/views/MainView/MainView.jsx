import MainNews from "../../components/MainNews/MainNews"
import SecondaryNews from "../../components/SecondaryNews/SecondaryNews"
import "./mainView.css"

const BACKENDURL="http://localhost:4000/";

const NoticiaPrincipal = [
    {
        title: "Noticia principal",
        author: "autor 1",
        summary: "Claro",
        src: BACKENDURL+"imgs/AbuSimbel.jpg"
    }
]
const NoticiaSecundaria = [
    {
        title: "Noticia 1",
        author: "autor 1",
        summary: "No son unas ruinas más. Este yacimiento de Ourense, además de ser el asentamiento militar mejor estudiado de la época, queda sumergido varios meses al año por las aguas del embalse de Las Conchas.",
        src: BACKENDURL+"imgs/AquisQuerquennis.jpg"
    },
    {
        title: "Noticia 2",
        author: "autor 2",
        summary: "Claro, claro..",
        src: BACKENDURL+"imgs/Sukhothai.jpg"
    },
    {
        title: "Noticia 3",
        author: "autor 3",
        summary: "Claro, claro, claro...",
        src: BACKENDURL+"imgs/Tbilisi.jpg"
    },
    {
        title: "Noticia 4",
        author: "autor 4",
        summary: "Claro, claro, claro, claro.....",
        src: BACKENDURL+"imgs/Zimbawe.jpg"
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