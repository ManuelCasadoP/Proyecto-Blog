import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import Header from "../../components/Header/Header";
import MainNews from "../../components/MainNews/MainNews"
import SecondaryNews from "../../components/SecondaryNews/SecondaryNews"
import "./mainView.css"

const BACKENDURL="http://localhost:4000/";


function MainView () {

    const currentSession = sessionStorage.getItem('token') ? true : false

    const [NoticiaPrincipal, SetNoticiaPrincipal] = useState([])
    const [NoticiaSecundaria, SetNoticiaSecundaria] = useState([])
    const [userLogin, setUserLogin] = useState(currentSession);

    useEffect(() => {   

        fetch(BACKENDURL+"api/v0.0/news")
            .then (
                data=>data.json()
                .then(
                    readData => {
                        //const getNoticias = readData;
                        //const mainNews = getNoticias.splice(1,1)
                        //const secondNews = getNoticias.splice(1,4)
                        //const mainNews = readData.splice(1,1)
                        //const secondNews = readData.splice(1,4)
                        //SetNoticiaPrincipal(mainNews)
                        //SetNoticiaSecundaria(secondNews)
                        //SetNoticiaPrincipal(getNoticias.splice(1,1))
                        //SetNoticiaSecundaria(getNoticias.splice(1,4))
                        SetNoticiaPrincipal(readData.splice(0,1))
                        SetNoticiaSecundaria(readData.splice(0,4))
            }))
      }, []);

    const mainNews = NoticiaPrincipal.map(
        (item,idx) => <MainNews key={idx} id_news={item.id_news} title={item.title} date={item.date} author={item.author} summary={item.summary} src={item.src}/>  
    )
    
    const secondaryNews = NoticiaSecundaria.map(
        (item,idx) => <SecondaryNews key={idx} id_news={item.id_news} title={item.title} date={item.date} author={item.author} summary={item.summary} src={item.src}/>  
    )

   
    return (
        <>  
            <div className="mainViewContainer">
                <div className='navView'>
                    <Nav userLogin={userLogin} setUserLogin={setUserLogin}/>
                </div>
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