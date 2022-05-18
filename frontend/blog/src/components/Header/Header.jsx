import "./header.css";

function Header() {
   
    return (
        <>
            <div className="headerContainer">                
                <div className="headerText">
                    <h1 className="headerTitle">El blog <span><b>de viajes</b></span></h1>
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
