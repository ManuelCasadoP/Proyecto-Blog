import "./login.css";
import swal from 'sweetalert';
import {Link} from "react-router-dom";
import{ useState } from 'react';

export default function Login() {

    const host = "http://localhost:4000/api/v0.0/users/login";

	const [ error, setError ] = useState(false);
	const [ login, setLogin ] = useState ({
		email:"",
		password:"",
	});

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
				headers: {
					"Content-Type": "application/json"
				},
				body: data
			}
		);
		
		console.log(response.status);
		//const responseData = await response.json();

		if(response.status===200){
			const responseData = await response.json();
			sessionStorage.setItem("token", responseData.token);
			console.log(responseData.message);
			console.log(responseData.token);
			swal({
				title: "Login correcto!!!",
				text: "Pulse OK para continuar....",
				icon: "success",
			})
			.then(ok => {
				if (ok) {document.location.href = '/';
				}
			});
			
		} else if (response.status===401){	
			swal({
				title: "Login incorrecto!!!",
				text: "Pulse OK para reintentar o registrese....",
				icon: "warning",
			})
			.then(ok => {
				if (ok) {document.location.href = '/login';
				}
			});
		} else {
			swal({
				title: "ERROR !!!",
				text: "Ha ocurrido un fallo general, intentelo mas tarde.",
				icon: "warning",
			})
		}	
		
		console.log("Usuario logueado" );
	}
   
    return (
        <>
            <div className="loginFormContainer">
						<div className="loginForm">
							<form onSubmit={getLogin}>

                            {error ? <p>Todos los campos son obligatorios</p> : null}

								<label className="loginLabel" htmlFor="email"> Correo electronico </label>
								<input className="loginInput" type="text" name="email" value={email} onChange={getInfo}/>
										
								<label className="loginLabel" htmlFor="password"> Contraseña </label>
								<input className="loginInput" type="password" name="password" value={password} onChange={getInfo}/>
										
								<button className="loginButton" type="submit">Entrar</button>
                                <br /><br />

                                <Link to={`/register`}>
                                     <p>Si no tienes todavia, crea tu cuenta</p>
                                </Link>

							</form>	
						</div>
			</div>
        </>
    )
}

