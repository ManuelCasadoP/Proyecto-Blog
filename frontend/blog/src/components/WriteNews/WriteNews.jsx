import Header from "../Header/Header";
import "./writeNews.css";
import{ useState } from 'react';
import swal from 'sweetalert';
import host from "../../js/host.mjs";
import { useNavigate } from "react-router-dom";

const blankNews = {
	title:"",
	date:"",
	author:"",
	summary:"",
	content:"",
	src:""
}

export default function WriteNews () {	

	//const host = "http://localhost:4000/api/v0.0/news";

	const navigate = useNavigate()

	const [ error, setError ] = useState(false);
	const [ news, setNews ] = useState (blankNews);

	const { title, date, author, summary, content, src } = news; 
/*
	const tiempoTranscurrido = Date.now();
	const hoy = new Date(tiempoTranscurrido);
	const fechaActual = hoy.toLocaleDateString();
	const corrigiendoFecha = fechaActual.split('/');
	if corrigiendoFecha[1]=
*/
	const getInfo = (event)=>{
		setNews({
			...news,
			[event.target.name]:event.target.value
		})
	}

	const getNews=(event)=>{
		event.preventDefault();

		if (title.trim()==="" ||
			date.trim()==="" ||
			author.trim()==="" ||
			summary.trim()==="" ||
			content.trim()==="" ||
			src.trim()===""
		) {
			setError(true);
			return;
		} else {
			const data = new FormData(event.target)
			//post(host+"api/v0.0/users/login", data);
			post(host+"api/v0.0/news", data);
			setError(false);
		}
	}


	/**
	 *  JSON POST
	 */
	async function post(url, data) {
		try{
			const token = sessionStorage.getItem("token");
			console.log(token);

			if(token){
				const response = await fetch(
				url,
					{
						method: 'POST',
						headers: {
							Authorization: "Bearer "+ token
						},
						body: data
					}
				);

				//const responseData = await response.text();
				//console.log(responseData);
				//document.location.href = '/write';
				//console.log("Noticia enviada correctamente" );

				console.log(response.status);
		
				if(response.status===201){
					//const responseData = await response.json();
					//sessionStorage.setItem("token", responseData.token);
					//console.log(responseData.message);
					//console.log(responseData.token);
					console.log("Noticia enviada correctamente" )
					swal({
						title: "Noticia enviada correctamente!!!",
						text: "Pulse OK para continuar....",
						icon: "success",
					})
					.then(ok => {
						//if (ok) {document.location.href = '/write'};
						setNews(blankNews)
						if (ok) navigate('/write');
					});
					
				} else if (response.status === 401){	
					console.log("Token incorrecto")
					swal({
						title: "Token incorrecto!!!",
						text: "Pulse Aceptar para reintentar o inicia sesion....",
						icon: "warning",
						button: "Aceptar"
					});
					
				} else {
					console.log("Error gravísiiimo de sabe D10S que...!!!")
					swal({
						title: "ERROR !!!",
						text: "Ha ocurrido un fallo general, intentelo mas tarde.",
						icon: "error",
					})
				}

			} else {
			
					console.log("Token incorrecto")
					swal({
						title: "Token incorrecto!!!",
						text: "Pulse Aceptar para reintentar o inicia sesion....",
						icon: "warning",
						button: "Aceptar"
						})
			}
				
		} catch (err){
			console.log("Error gravísiiimo de sabe D10S que...!!!")
				swal({
					title: "ERROR !!!",
					text: "Ha ocurrido un fallo general, intentelo mas tarde.",
					icon: "error",
				})
		}
	}

	return (

		<>
			<div className="writeNewsTotalContainer">
				<div className="writeNewsContainer">
					<Header/>
					<div className="writeNewsFormContainer">
						<div className="writeNewsForm">
							<form onSubmit={getNews}>

								{error ? <p>Todos los campos son obligatorios</p> : null}

								<label className="writeNewsLabel" htmlFor="title"> Titulo </label>
								<input className="writeNewsInput" type="text" name="title" value={title} onChange={getInfo}/>
										
								<label className="writeNewsLabel" htmlFor="date"> Fecha </label>
								<input className="writeNewsInput" type="date" name="date" value={date} onChange={getInfo}/>
										
								<label className="writeNewsLabel" htmlFor="author"> Autor </label>
								<input className="writeNewsInput" type="text" name="author" value={author} onChange={getInfo}/>
										
								<label className="writeNewsLabel" htmlFor="summary"> Sumario </label>
								<input className="writeNewsInput"type="text" name="summary" value={summary} onChange={getInfo}/>
										
								<label className="writeNewsLabel" htmlFor="content"> Contenido </label>
								<textarea className="writeNewsInput" rows="10" cols="20" name="content" value={content} onChange={getInfo}></textarea>
										
								<label className="writeNewsLabel" htmlFor="src"> Imagenes </label>
								<input className="writeNewsInput" type="file" name="src" value={src} onChange={getInfo}/>
										
								<button className="writeNewsButton" type="submit">Enviar Noticia</button>

							</form>	
						</div>
					</div>
				</div>
			</div>
		</>
 	)
}


