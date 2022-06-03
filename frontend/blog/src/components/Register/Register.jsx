import "./register.css";
import {Link} from "react-router-dom";
import{ useState } from 'react';
import swal from 'sweetalert';

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
			
			if(response.status===201){		
				console.log("Usuario registrado correctamente" )
				swal({
					title: "Usuario registrado correctamente !!!",
					text: "Pulse OK para continuar e inicie sesion en la siguiente pagina",
					icon: "success",
				})
				.then(ok => {
					if (ok) {document.location.href = '/login';
					}
				});
				
			} else if (response.status === 401){	
				console.log("Error al registrar usuario")
				swal({
					title: "Error al registrar usuario !!!",
					text: "Este usuario ya existe pulsa aceptar para reintentar...",
					icon: "error",
					button: "Aceptar"
				})
				.then(ok => {
					if (ok) {document.location.href = '/register';
					}
				});
			} else {
				console.log("Error gravísiiimo de sabe D10S que...!!!")
				swal({
					title: "ERROR !!!",
					text: "Ha ocurrido un fallo general, intentelo mas tarde.",
					icon: "error"
				})
			}
		} catch (err){
			console.log("Error gravísiiimo de sabe D10S que...!!!")
				swal({
					title: "ERROR !!!",
					text: "Ha ocurrido un fallo general, intentelo mas tarde.",
					icon: "error"
				})
		}	
	}
   
    return (
        <>
            <div className="registerFormContainer">
						<div className="registerForm">
							<form onSubmit={getRegister}>

                            {error ? <p>Todos los campos son obligatorios</p> : null}

								<label className="registerLabel" htmlFor="email"> Correo electronico </label>
								<input className="registerInput" type="text" name="email" value={email} onChange={getInfo}/>
								
                                <label className="registerLabel" htmlFor="name"> Nombre </label>
								<input className="registerInput" type="text" name="name" value={name} onChange={getInfo}/>
										
								<label className="registerLabel" htmlFor="password"> Contraseña </label>
								<input className="registerInput" type="password" name="password" value={password} onChange={getInfo}/>
										
								<button className="registerButton" type="submit">Entrar</button>
								<br /><br />

								<Link to={`/login`}>
                                     <p>Si ya tienes cuenta, inicia sesion!</p>
                                </Link>

							</form>	
						</div>
			</div>
        </>
    )
}

