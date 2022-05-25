import Header from "../Header/Header";
import "./writeNews.css";

function WriteNews() {

    /**
 *  JSON POST
 */

async function post(url, data) {
    const response = await fetch(
        url,
        {
            method: 'POST',
            body: data,
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
    const responseData = await response.json();
    return responseData;
}
   
    return (
        <>
            <Header/>
            <div className="writeNewsContainer">
                <label className="writeNewsLabel" htmlFor="title"> Titulo </label>
                <input className="writeNewsInput" type="text" />
                <label className="writeNewsLabel" htmlFor="date"> Fecha </label>
                <input className="writeNewsInput" type="text" />
                <label className="writeNewsLabel" htmlFor="author"> Autor </label>
                <input className="writeNewsInput" type="text" />
                <label className="writeNewsLabel" htmlFor="summary"> Sumario </label>
                <input className="writeNewsInput"type="text" />
                <label className="writeNewsLabel" htmlFor="content"> Contenido </label>
                <textarea className="writeNewsInput" rows="10" cols="20"></textarea>
                <label className="writeNewsLabel" htmlFor="src"> Imagenes </label>
                <input className="writeNewsInput" type="file" />
                <button className="writeNewsButton">Enviar Noticia</button>
            </div>
        </>
    )
}

export default WriteNews
