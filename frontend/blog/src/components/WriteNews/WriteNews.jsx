import Header from "../Header/Header";
import "./writeNews.css";
import{ useState } from 'react';


export default function WriteNews () {	

	const host = "http://localhost:4000/api/v0.0/news";

	const [ error, setError ] = useState(false);
	const [ news, setNews ] = useState ({
		title:"",
		date:"",
		author:"",
		summary:"",
		content:"",
		src:""
	});

	const { title, date, author, summary, content, src } = news; 

	const getInfo = (event)=>{
		/*const borrame = {
			[event.target.name]:event.target.value
		}*/
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
			post(host, data);
			setError(false);
		}
		
	}


	/**
	 *  JSON POST
	 */
	async function post(url, data) {
		const response = await fetch(
			url,
			{
				method: 'POST',
				body: data
			}
		);
		const responseData = await response.text();
		console.log(responseData);
		console.log("Noticia enviada correctamente" );
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
								<input className="writeNewsInput" type="text" name="date" value={date} onChange={getInfo}/>
										
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


