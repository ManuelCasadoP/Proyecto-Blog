import "./login.css";
import swal from 'sweetalert';
import {Link} from "react-router-dom";
import{ useState } from 'react';
import host from "../../js/host.mjs";
import { useNavigate } from "react-router-dom";

const blankLogin = {
	email:"",
	password:""
}


export default function Login() {

    //const host = "http://localhost:4000/api/v0.0/users/login";

	const navigate = useNavigate()

	const [ error, setError ] = useState(false);
	const [ login, setLogin ] = useState (blankLogin);

	const { email, password } = login; 

	const getInfo = (event)=>{

		setLogin({
			...login,
			[event.target.name]:event.target.value
		})
	}

	const getLogin=(event)=>{
		event.preventDefault();

		if (email.trim()==="" || password.trim()===""
		
		) {
			setError(true);
			return;
		} else {
			const data = JSON.stringify(login)
			post(host+"api/v0.0/users/login", data);
			setError(false);
		}
	}


	/**
	 *  JSON POST
	 */
	async function post(url, data) {
		try{
			const response = await fetch(
				url,
				{
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: data
				}
			);
			
			console.log(response.status);
	
			if(response.status===200){
				const responseData = await response.json();
				sessionStorage.setItem("token", responseData.token);
				console.log(responseData.message);
				console.log(responseData.token);
				console.log("Login de usuario correcto" )
				swal({
					title: "Login correcto!!!",
					text: "Pulse OK para continuar....",
					icon: "success",
				})
				.then(ok => {
					//if (ok) {document.location.href = '/'};
					if (ok) navigate('/');
					
				});
				
			} else if (response.status === 400 || 401){	
				console.log("Login de usuario incorrecto")
				swal({
					title: "Login incorrecto!!!",
					text: "Pulse Aceptar para reintentar o crear una cuenta....",
					icon: "warning",
					button: "Aceptar"
				})
				.then(ok => {
					//if (ok) {document.location.href = '/login'};
					setLogin(blankLogin)
					if (ok) navigate('/login');
					
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
   
    return (
        <>
            <div className="loginFormContainer">
				<div className="loginForm">
					<h1>Iniciar Sesión</h1>
					<form onSubmit={getLogin}>

                        {error ? <p>Todos los campos son obligatorios</p> : null}

						<div className="fieldForm">
							<label className="loginLabel" htmlFor="email"> Correo electrónico </label>
							<input className="loginInput" type="text" name="email" value={email} onChange={getInfo}/>
						</div>
						<div className="fieldForm">
							<label className="loginLabel" htmlFor="password"> Contraseña </label>
							<input className="loginInput" type="password" name="password" value={password} onChange={getInfo}/>
						</div>
						<div className="fieldForm">
							<input type="submit" className="loginButton" value="Entrar" />
						</div>				
										
                        <br /><br />

						<div className="linkToRegister">
							<Link to={`/register`}>
								<p className="linkToRegister">Si no tienes todavia, crea tu cuenta</p>
							</Link>
						</div>
					</form>	
				</div>
			</div>
        </>
    )
}

