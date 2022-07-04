import { users } from "../models/db.mjs";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import  'dotenv/config';


// Controlador para Registrar un usuario
export async function userRegisterController (request, response) {
    
    const { email, name, password } = request.body;
    const pass =  bcrypt.hashSync(password, 10);

    const findUserEmail = await users.findOne({email});

        if (findUserEmail){
            console.log("No se puede realizar la operación, ya existe un usuario registrado con ese email.");
            console.log(findUserEmail)
            response.status(401).send(`<b>Solicitud denegada. <br>
                                    <br> No se puede realizar la operación porque ya existe un usuario registrado con ese email.<br>
                                    <br> Intente registrarse con un email distinto.</b>`);

        } else {
            const insertUser = await users.insertOne ({email, name, pass});
                console.log("Usuario añadido a BBDD");
                console.log(insertUser);
                response.status(201).send(`<b>Solicitud Aceptada<br>
                                        <br>El usuario se ha añadido correctamente a la Base de Datos.</b>`);
        }
}                  

// Controlador para Login de un usuario
export async function userLoginController (request, response) {
    
    const { email, password } = request.body;
    
    const findUser = await users.findOne({email});

    if (!findUser){
        console.log("No existe ningun usuario registrado con ese email.");
        console.log(findUser)
        response.status(401).send(`<b>Solicitud denegada. <br>
                                   <br> No se puede realizar la operación porque no existe ningun usuario con ese email.<br>
                                   <br> Intente hacer login con un email distinto.</b>`);

    } else {
        //const findUserPassword = await users.findOne({password});
        const pass = bcrypt.compareSync(password, findUser.pass);

        if(pass===true) {
            console.log("Login de usuario correcto");
            const token = jwt.sign(
                {name: findUser.name},
                    process.env.TOKEN_KEY,
                    {
                      expiresIn: "2h",
                    }
            );
            console.log (token);
            response.status(200).json({
                message: `<b>Login de usuario correcto.</b>`,
                token: token
            });
            
        } else {
                console.log("Password incorrecto");
                response.status(400).send(`<b>Solicitud denegada<br><br>Password incorrecto.</b>`);
            }    
                
    }
}                  


/*
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
*/

/*
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
*/