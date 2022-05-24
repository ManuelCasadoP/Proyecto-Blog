import "./header.css";
import {Link} from "react-router-dom";
function Header() {
   
    return (
        <>
            <div className="headerLogin">
            <Link to={`/write/`}>
                <button className="headerLoginButton" >Redactar noticia</button>
            </Link>
            </div>
            <div className="headerContainer"> 
                              
                <div className="headerText">
                    <Link to={`/`}>
                        <h1 className="headerTitle">El blog <span><b>de viajes</b></span></h1>
                    </Link>
                    <div className="headerAuthorBlock">
                        <p className="headerAuthorPrep"></p>
                        <p className="headerAuthorName"></p>                    
                    </div>
                </div>    
            </div>
        </>
    )
}

export default Header
