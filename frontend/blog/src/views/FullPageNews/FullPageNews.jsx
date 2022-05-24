import React, { useState, useEffect } from 'react';

import { useParams } from "react-router-dom"

import Header from "../../components/Header/Header"
import "./fullPageNews.css"

const BACKENDURL="http://localhost:4000/";

function FullPageNews({ title, date, author, summary, src, content }){

    const[NoticiaCompleta, SetNoticiaCompleta]= useState([])

    /*const pathnameActual = window.location.pathname;
    const UrlEnPartes = pathnameActual.split("/");
    const id = UrlEnPartes[0];
    console.log(id)*/

    const params = useParams();

    /*console.log(params.id_news);*/

    

    useEffect(() => {   

        fetch(BACKENDURL+"api/v0.0/news/"+params.id_news)
            .then (
                data=>data.json()
                .then(
                    readData => {
                        SetNoticiaCompleta(readData)
                    
            }))
      }, []);

    return(

        <>        
            <div className="fullPageNewsContainer">
            
            <Header/>

            <h2 className="fullPageNewsTitle">{NoticiaCompleta.title}</h2>
            <p className="fullPageNewsSummary">{NoticiaCompleta.summary}</p> 
            <img className="fullPageNewsImg" src={NoticiaCompleta.src} alt=""/>
            <p className="fullPageNewsAuthor">{NoticiaCompleta.author}</p>
            <p className="fullPageNewsDate">{NoticiaCompleta.date}</p>  
            <p className="fullPageNewsContent">{NoticiaCompleta.content}</p> 
        
        </div>
    </>
        
    )
}

export default FullPageNews