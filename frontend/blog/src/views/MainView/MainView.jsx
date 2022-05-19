import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import MainNews from "../../components/MainNews/MainNews"
import SecondaryNews from "../../components/SecondaryNews/SecondaryNews"
import "./mainView.css"

const BACKENDURL="http://localhost:4000/";



function MainView () {

    const [NoticiaPrincipal, SetNoticiaPrincipal] = useState([])
    const [NoticiaSecundaria, SetNoticiaSecundaria] = useState([])

    useEffect(() => {   
        fetch(BACKENDURL+"/api/v0.0/news")
	.then ((data)=>data.json()
	.then((readData)=>SetNoticiaPrincipal(readData.splice(1,1)),
                    SetNoticiaSecundaria(readData.splice(2,4))
    ))
      }, []);

    const mainNews = NoticiaPrincipal.map(
        item => <MainNews key={item.id_news} title={item.title} date={item.date} author={item.author} summary={item.summary} img={item.src}/>  
    )
    
    const secondaryNews = NoticiaSecundaria.map(
        item => <SecondaryNews key={item.id_news} title={item.title} date={item.date} author={item.author} summary={item.summary} img={item.src}/>  
    )

   
    return (
        <>  
            <div className="mainViewContainer">
                <div className="headerView">
                    <Header/>
                </div>                
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