import "./nav.css";
import image from "./Palmeras.jpg"
import { Link } from "react-router-dom";

export default function Nav ({userLogin, setUserLogin}){

    

    function logoutHandler() {
        sessionStorage.removeItem("token");
        setUserLogin(false);
    }




    return(
        <div className="top">
            <div className="topLeft">
                <ul className="topList">
                    <li className="topListItem blogHeadTitle">ELPAíS</li>
                </ul>
            </div>

            {/*Menú condicionado al LOGIN*/}
            <div className="topCenter">
                { userLogin === true ?
                        (
                            <ul className="topList">
                                <li className="topListItem headNews">NOTICIAS:</li>
                                <li className="topListItem"><Link className="link" to="/write">REDACTAR</Link></li>
                                <li className="topListItem"><Link className="link" to="/">ACTUALIZAR</Link></li>
                                <li className="topListItem"><Link className="link" to="/">ELIMINAR</Link></li>
                            </ul>
                        ):(null)}
            </div>

            {/*Menú condicionado al LOGIN*/}
            <div className="topRight">
            { userLogin === true ? 
                    (
                        <ul className="topList">
                            <li className="topListItem">
                                <img className="topImg" src={image} alt="" />
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/" onClick={logoutHandler}>SALIR</Link>
                            </li>
                        </ul> 
                    ) 
                    : 
                    (
                    <ul className="topList">
                        
                        <i className="topIcon fa-solid fa-circle-user"></i>
                        <li className="topListItem">
                            <Link className="link" to="/login">INICIAR SESIÓN</Link>
                        </li>
                    </ul> 
                    )
                }
            </div>
        </div>
    );
}