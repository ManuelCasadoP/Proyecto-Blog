import { db } from "../models/db.mjs";

export function postUsersLoginController (request, response) {
    

    const { email, name, password } = request.body;
    
    const src = 'http://localhost:4000/imgs/'+request.file.filename;

        db.run(
        `INSERT INTO users(email, name, password) VALUES ("${email}", "${name}", "${password}")`,
            (err)=>{
                if (err) {
                    console.log(`Algo ha funcionado mal...`, err);
                    response.status(500).send(`<b>Algo ha funcionado mal:<br>${err}</b>`);
                        } else {
                            console.log("usuario añadido a BBDD");
                            response.status(201).send(`<b>Solicitud Aceptada<br>
                                                       <br>El usuario se ha añadido correctamente a la Base de Datos.</b>`);
                        }
            }
        )
}
