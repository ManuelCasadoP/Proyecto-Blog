import { db } from "../models/db.mjs";
//import bcrypt from 'bcrypt';


/**
 *  Controlador para registrar un usuario.
 */
export function userRegisterController (request, response) {
    
    const { email, name, password } = request.body;

    //const salt = bcrypt.genSalt(10);
    //const pass =  bcrypt.hash(password, 10);

    db.get(
        `SELECT email FROM users WHERE email="${email}"`,
        (err, data)=>{
            if (err) {
                console.log(`Algo ha funcionado mal...`, err);
                response.status(500).send(`<b>Algo ha funcionado mal:<br>${err}</b>`);
            } else if (data){
                console.log("No se puede realizar la operación, ya existe un usuario registrado con ese email.");
                response.status(401).send(`<b>Solicitud denegada. <br>
                                           <br> No se puede realizar la operación porque ya existe un usuario registrado con ese email.<br>
                                           <br> Intente registrarse con un email distinto.</b>`);
            } else {

                db.run(
                    `INSERT INTO users(email, name, password) VALUES ("${email}", "${name}", "${pass}")`,
                        (err)=>{
                            if (err) {
                                console.log(`Algo ha funcionado mal...`, err);
                                response.status(500).send(`<b>Algo ha funcionado mal:<br>${err}</b>`);
                                    } else {
                                        console.log("Usuario añadido a BBDD");
                                        response.status(201).send(`<b>Solicitud Aceptada<br>
                                                                   <br>El usuario se ha añadido correctamente a la Base de Datos.</b>`);
                                    }
                    }
                )
            }
        }
    )
}


/**
 * Controlador para listar todos los usuarios.
 */
 export function getAllUsersController (request, response){

    db.all(
        `SELECT id_user, email, name, password FROM users`,
        (err, data)=>{
            if (err){
                console.log(`Algo ha funcionado mal...`, err);
                response.status(500).send(`<b>Algo ha funcionado mal...<br>${err}</b>`);
            } else {
                response.json(data);
                console.log(data);
            }
        });
}

/**
 * Controlador para eliminar un usuario. 
 */
export function deleteUserController (request,response) {

    const { id_user } = request.body;

    db.get(
        `SELECT id_user FROM users WHERE id_user=${id_user}`, 
        (err, data)=>{
            if (err) {
                console.log(err, `Algo ha funcionado mal...`);
                response.status(500).send(`<b>Algo ha funcionado mal. ${err}</b>`);

            } else if (data){

                db.run(
                    `DELETE FROM users WHERE id_user=${id_user}`,
                    (err)=>{
                        if (err) {
                            console.log(err, `Algo ha funcionado mal...`);
                            response.status(500).send(`<b>Algo ha funcionado mal. ${err}</b>`);
                        } else {
                            console.log("El usuario se ha eliminado de la BBDD");
                            response.status(201).send(`<b>Solicitud Aceptada<br>
                                                       <br>El usuario se ha eliminado correctamente de la Base de Datos.</b>`);
                        }
                    }
                )
                
            } else {
                console.log(`El usuario no existe...`);
                response.status(500).send(`<b>Solicitud denegada.<br>
                                           <br> No existe el usuario que quiere eliminar...</b>`);
            }
        }
    )
}