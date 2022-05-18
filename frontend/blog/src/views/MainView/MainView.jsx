import MainNews from "../../components/MainNews/MainNews"
import SecondaryNews from "../../components/SecondaryNews/SecondaryNews"
import "./mainView.css"

const BACKENDURL="http://localhost:4000/";



const NoticiaPrincipal = [
    {
        id_news: 1,
        title: "Un viaje sonoro por Egipto",
        date: "18/05/20222",
        author: "Redactor_1",
        summary: "El país de los faraones es el destino soñado por cualquier viajero. Un lugar que suena a misterio y exotismo y que atrajo a todos los grandes estrategas de la Antigüedad. Te cuento en este nuevo podcast cómo preparar un primer viaje",
        src: BACKENDURL+"imgs/AbuSimbel.jpg"
    }
]
const NoticiaSecundaria = [
    {
        id_news: 2,
        title: "Aquis Querquennis, el campamento romano que aparece y desaparece",
        date: "18/05/20222",
        author: "Redactor_2",
        summary: "No son unas ruinas más. Este yacimiento de Ourense, además de ser el asentamiento militar mejor estudiado de la época, queda sumergido varios meses al año por las aguas del embalse de Las Conchas.",
        src: BACKENDURL+"imgs/AquisQuerquennis.jpg"
    },
    {
        id_news: 3,
        title: "Tailandia facilita la vuelta del turismo",
        date: "18/05/20222",
        author: "Redactor_3",
        summary: "El país llevaba abierto a los extranjeros desde julio de 2021, pero con unas condiciones tan estrictas que desmotivaban a cualquiera. Desde el pasado 1 de mayo para entrar ya no hace falta ni PCR",
        src: BACKENDURL+"imgs/Sukhothai.jpg"
    },
    {
        id_news: 4,
        title: "Un paseo por Tbilisi",
        date: "18/05/20222",
        author: "Redactor_2",
        summary: "Georgia, el país que mejor entiende a Ucrania porque sufrió lo mismo, es uno de los destinos turísticos emergentes del Caúcaso. Una visita a su capital lo confirma",
        src: BACKENDURL+"imgs/Tbilisi.jpg"
    },
    {
        id_news: 5,
        title: "10 cosas que ver y hacer en Zimbabue",
        date: "18/05/20222",
        author: "Redactor_3",
        summary: "Es uno de los países más desconocidos y menos turísticos del sur de África. Sin embargo, está repleto de lugares de interés. Incluida la mejor vista de las cataratas Victoria",
        src: BACKENDURL+"imgs/Zimbawe.jpg"
    }
]

const mainNews = NoticiaPrincipal.map(
    item => <MainNews key={item.id_news} title={item.title} date={item.date} author={item.author} summary={item.summary} img={item.src}/>  
)

const secondaryNews = NoticiaSecundaria.map(
    item => <SecondaryNews key={item.id_news} title={item.title} date={item.date} author={item.author} summary={item.summary} img={item.src}/>  
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