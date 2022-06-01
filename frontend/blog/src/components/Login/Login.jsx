import "./login.css";
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
		const responseData = await response.json();
		console.log(responseData);
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

