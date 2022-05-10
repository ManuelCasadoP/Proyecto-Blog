import MainNews from "../../components/MainNews/MainNews"
import SecondaryNews from "../../components/SecondaryNews/SecondaryNews"

import image1 from "../../imgs/Zimbawe.jpg";
import image2 from "../../imgs/AbuSimbel.jpg";

const news = [
    {
        title: "Un título",
        autor: "Xan sen Medo",
        sumario: "Claro",
        src: image1
    },
    {
        title: "Un título diferente",
        autor: "Xan",
        sumario: "Claro, claro",
        src: image2
    },
]

const newsComponents = news.map(
    item => <SecondaryNews title={item.title} autor={item.autor} sumario={item.sumario} img={item.src}/>  
)

function MainView () {
   
    return (
        <>
            <div className="mainView">
                <MainNews/>
                {newsComponents}
            </div>
                
        </>
        
    )
}

export default MainView