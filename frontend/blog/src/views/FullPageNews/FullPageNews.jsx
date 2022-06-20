import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import "./fullPageNews.css";
import host from '../../js/host.mjs';

//const BACKENDURL="http://localhost:4000/";

function FullPageNews(){

    const currentSession = sessionStorage.getItem('token') ? true : false

    const [ NoticiaCompleta, SetNoticiaCompleta ]= useState()
    const [userLogin, setUserLogin] = useState(currentSession);

  /*const pathnameActual = window.location.pathname;
    const UrlEnPartes = pathnameActual.split("/");
    const id = UrlEnPartes[0];
    console.log(id)*/

    const params = useParams();
  /*console.log(params.id_news);*/

    function BorrarNoticia(){
        swal({
            title: "Eliminar!!!",
            text: "Estas seguro que deseas eliminar esta noticia?",
            icon: "warning",
            buttons: ["No", "Si"]
        })
        .then(respuesta => {
            if (respuesta) {deleteNews(host+"api/v0.0/news/"+params.id_news);		
            }
        });
    }

    async function deleteNews(url){
        try{
            const response = await fetch(
                url,
                {
                    method: 'DELETE',
                    
                }
            );
            console.log(response.status);
        ///////////////////////////////////////////////////////////////////////////        
            if(response.status===201){
                console.log("Noticia eliminada correctamente" )
                swal({
                    title: "Noticia elimanda correctamente!!!",
                    text: "Pulse OK para continuar....",
                    icon: "success",
                })
                .then(ok => {
                    if (ok) {document.location.href = '/';		
                    }
                });
                
            } else if (response.status === 401){	
                console.log("Token incorrecto")
                swal({
                    title: "Token incorrecto!!! No puede realizar esta acción.",
                    text: "Pulse Aceptar para reintentar o inicia sesion....",
                    icon: "warning",
                    button: "Aceptar"
                })
                .then(ok => {
                    if (ok) {document.location.href = '/write';
                    }
                });
            } else {
                console.log("Error gravísiiimo de sabe D10S que...!!!")
                swal({
                    title: "ERROR !!!",
                    text: "Ha ocurrido un fallo general, intentelo mas tarde.",
                    icon: "error",
                })
            }	    
        }catch (err){
			console.log("Error gravísiiimo de sabe D10S que...!!!")
				swal({
					title: "ERROR !!!",
					text: "Ha ocurrido un fallo general, intentelo mas tarde.",
					icon: "error",
				})
		}
    }


    useEffect(() => {   

        fetch(host+"api/v0.0/news/"+params.id_news)
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

            <Nav userLogin={userLogin} setUserLogin={setUserLogin}/>
            <Header/>

            {
                NoticiaCompleta ? 
                    <>
                        <h1 className="fullPageNewsTitle">{ NoticiaCompleta.title}</h1>
                        <p className="fullPageNewsSummary">{NoticiaCompleta.summary}</p> 
                        <img className="fullPageNewsImg" src={host+"imgs/"+NoticiaCompleta.src} alt=""/>

                        <div className='fullPageNewsAuthor_Date_Icon'>
                            <div className='fullPageNewsAuthor_and_Date'>
                                <p className="fullPageNewsAuthor">{NoticiaCompleta.author}</p>
                                <p className="fullPageNewsDate">{NoticiaCompleta.date}</p> 
                            </div>
                            <div>
                                {/*Borrado condicional de la Noticia*/}
                                {userLogin === true ?
                                    <i className=" fullPageNewsIcon fa-solid fa-trash-can" onClick={BorrarNoticia}></i>
                                : null}        
                            </div>               
                        </div>

                        {/*<p className="fullPageNewsContent">{NoticiaCompleta.content}</p>*/}

                        <div className="fullPageNewsContent">{
                            NoticiaCompleta.content.split('\n').map( (paragraph, idx) =><p key={idx}>{paragraph}</p>)
                        }</div>
                    </>
                 :
                    <h1>...</h1>
            }
        
        </div>
    </>
        
    )
}

export default FullPageNews