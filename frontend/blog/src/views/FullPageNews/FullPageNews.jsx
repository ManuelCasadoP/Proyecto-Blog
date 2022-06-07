import React, { useState, useEffect } from 'react';

import { useParams } from "react-router-dom"

import Header from "../../components/Header/Header"
import Nav from "../../components/Nav/Nav"
import "./fullPageNews.css"

const BACKENDURL="http://localhost:4000/";

function FullPageNews(){

    const [ NoticiaCompleta, SetNoticiaCompleta ]= useState({})

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
      }, [params.id_news]);

    return(

        <>        
            <div className="fullPageNewsContainer">

            <Nav/>
            <Header/>

            <h1 className="fullPageNewsTitle">{NoticiaCompleta.title}</h1>
            <p className="fullPageNewsSummary">{NoticiaCompleta.summary}</p> 
            <img className="fullPageNewsImg" src={NoticiaCompleta.src} alt=""/>

            <div className='fullPageNewsAuthor_Date_Icon'>
                <div className='fullPageNewsAuthor_and_Date'>
                    <p className="fullPageNewsAuthor">{NoticiaCompleta.author}</p>
                    <p className="fullPageNewsDate">{NoticiaCompleta.date}</p> 
                </div>
                <div>
                    <i className=" fullPageNewsIcon fa-solid fa-trash-can"></i>
                </div>               
            </div>

            <p className="fullPageNewsContent">{NoticiaCompleta.content}</p> 
        
        </div>
    </>
        
    )
}

export default FullPageNews