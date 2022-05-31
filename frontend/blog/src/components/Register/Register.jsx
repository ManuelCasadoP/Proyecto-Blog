import "./register.css";
//import {Link} from "react-router-dom";
import{ useState } from 'react';

export default function Register() {

    const host = "http://localhost:4000/api/v0.0/users/register";

	const [ error, setError ] = useState(false);
	const [ register, setRegister ] = useState ({
		email:"",
        name:"",
		password:"",
	});

	const { email, name, password } = register; 

	const getInfo = (event)=>{

		setRegister({
			...register,
			[event.target.name]:event.target.value
		})
	}

	const getRegister=(event)=>{
		event.preventDefault();

		if (email.trim()==="" || name.trim()==="" || password.trim()===""
		
		) {
			setError(true);
			return;
		} else {
			const data = JSON.stringify(register)
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
		const responseData = await response.json();
		console.log(responseData);
		console.log("Se ha registrado un usuario" );
	}
   
    return (
        <>
            <div className="registerFormContainer">
						<div className="registerForm">
							<form onSubmit={getRegister}>

                            {error ? <p>Todos los campos son obligatorios</p> : null}

								<label className="registerLabel" htmlFor="email"> Correo electronico </label>
								<input className="registerInput" type="text" name="email" value={email} onChange={getInfo}/>
								
                                <label className="registerLabel" htmlFor="name"> Correo electronico </label>
								<input className="registerInput" type="text" name="name" value={name} onChange={getInfo}/>
										
								<label className="registerLabel" htmlFor="password"> Contraseña </label>
								<input className="registerInput" type="password" name="password" value={password} onChange={getInfo}/>
										
								<button className="registerButton" type="submit">Entrar</button>

							</form>	
						</div>
			</div>
        </>
    )
}

