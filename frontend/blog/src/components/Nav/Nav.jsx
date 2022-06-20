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
                    <Link to={`/`}>
                        <li className="topListItem blogHeadTitle">EL PAíS</li>
                    </Link>
                </ul>
            </div>
            

            {/*Menú condicionado al LOGIN*/}
            <div className="topRight">
            { userLogin === true ? 
                    (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/write">
                                    <img className="topImg" src={image} alt="Redactar noticia" title="Redactar noticia" />
                                </Link>
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