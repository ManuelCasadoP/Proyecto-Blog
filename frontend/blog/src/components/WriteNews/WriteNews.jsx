import Header from "../Header/Header";
import "./writeNews.css";

function WriteNews() {
   
    return (
        <>
            <Header/>
            <div className="writeNewsContainer">
                <label htmlFor="title"> Titulo </label>
                <input type="text" />
                <label htmlFor="date"> Fecha </label>
                <input type="text" />
                <label htmlFor="author"> Autor </label>
                <input type="text" />
                <label htmlFor="summary"> Sumario </label>
                <input type="text" />
                <label htmlFor="content"> Contenido </label>
                <input type="text" />
                <label htmlFor="src"> Imagenes </label>
                <input type="text" />
            </div>
        </>
    )
}

export default WriteNews
